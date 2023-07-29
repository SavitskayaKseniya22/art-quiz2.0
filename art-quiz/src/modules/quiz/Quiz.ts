/* eslint-disable no-sequences */
import ResultBar from "../resultBar/ResultBar";
import Timer from "../Timer";
import SoundEffects from "../SoundEffects";
import { ImageType } from "../../interfaces";
import { sliceImagePack, random, shuffle } from "../../utils";
import images from "../../images";
import "./quiz.scss";

class Quiz {
  static numberOfImagesInQuiz: number = 3;

  static imagePack: ImageType[] = [];

  static currentIndexOfQuiz: number = 0;

  static activeImage: ImageType = {} as ImageType;

  static index: number = 0;

  static intervalId: NodeJS.Timeout | undefined;

  static type: "artists" | "paintings" = "artists";

  static setQuiz(type: "artists" | "paintings", index: number) {
    Quiz.type = type;
    Quiz.index = index;
    Quiz.imagePack = sliceImagePack(index, Quiz.numberOfImagesInQuiz, images);
    Quiz.resetQuiz();
    const { timerValue, timerEnabled } = Timer.setTimer();
    Quiz.intervalId = timerEnabled
      ? setTimeout(() => {
          const main = document.querySelector("main");
          if (main) {
            main.innerHTML = Quiz.setFinalResultScreen();
          }
        }, timerValue * 1000)
      : undefined;

    return Quiz.createQuizItem(type, Quiz.activeImage, images);
  }

  static resetAllTimers() {
    Timer.reset();
    clearInterval(Quiz.intervalId);
  }

  static resetQuiz() {
    Quiz.currentIndexOfQuiz = 0;
    Quiz.activeImage = Quiz.imagePack[Quiz.currentIndexOfQuiz];
    ResultBar.reset();
    Quiz.resetAllTimers();
  }

  static setFinalResultScreen() {
    ResultBar.saveResult(Quiz.type);
    Quiz.resetAllTimers();
    SoundEffects.setSoundEffectSource();
    return Quiz.createFinalResult(ResultBar.correct, Quiz.numberOfImagesInQuiz);
  }

  static addListener() {
    document.addEventListener("click", (event) => {
      const main = document.querySelector("main");
      const { target } = event;
      if (target && target instanceof HTMLElement && main) {
        if (target.closest(".result-middle__nav-next")) {
          Quiz.currentIndexOfQuiz += 1;
          if (Quiz.currentIndexOfQuiz < Quiz.numberOfImagesInQuiz) {
            Quiz.activeImage = Quiz.imagePack[Quiz.currentIndexOfQuiz];
            main.innerHTML = Quiz.createQuizItem(Quiz.type, Quiz.activeImage, images);
          } else {
            main.innerHTML = Quiz.setFinalResultScreen();
          }
        } else if (target.closest(".answers__item")) {
          const isItCorrect = Quiz.checkIsItCorrect(Quiz.type, target, Quiz.activeImage);
          ResultBar.updateResult(isItCorrect, Quiz.index);
          SoundEffects.setSoundEffectSource(isItCorrect);
          main.innerHTML = Quiz.createQuizMiddleResult(Quiz.activeImage, isItCorrect);
        } else if (target.closest(".result-final__repeate")) {
          main.innerHTML = Quiz.setQuiz(Quiz.type, Quiz.index);
        }
      }
    });
  }

  static checkIsItCorrect(type: "artists" | "paintings", target: HTMLElement, activeImage: ImageType) {
    const answer = target.closest(".answers__item")?.querySelector(".answers__item_content");

    if (
      (answer && type === "artists" && activeImage.author === answer.textContent) ||
      (answer && type === "paintings" && activeImage.preview === answer.getAttribute("src"))
    ) {
      return true;
    }
    return false;
  }

  static createQuizItem(type: "artists" | "paintings", image: ImageType, imageList: ImageType[]) {
    const filteredImages = Quiz.createSetOfData(type, image, imageList);
    if (type === "artists") {
      return Quiz.createArtistsQuiz(image, filteredImages);
    }
    return Quiz.createPaintingQuiz(image, filteredImages);
  }

  static createSetOfData(type: "artists" | "paintings", image: ImageType, imageList: ImageType[]) {
    let filteredImages = imageList.filter((elem) => {
      return elem.author !== image.author;
    });
    if (type === "artists") {
      filteredImages = filteredImages.reduce(
        (arr: ImageType[], el) => (shuffle(arr).find(({ author }) => el.author === author) || arr.push(el), arr),
        [],
      );
    }

    const randomNumbers = random(filteredImages.length, 3);
    return shuffle([
      image,
      ...randomNumbers.map((num) => {
        return filteredImages[num];
      }),
    ]);
  }

  static createArtistsQuiz(image: ImageType, imageList: ImageType[]) {
    const { preview, name } = image;
    return `<div class="quiz quiz-artists">
  <img
    src="${preview}" alt="${name}"
  />
  <ul class="quiz__answers">
  ${imageList
    .map((elem) => {
      return `<li class='answers__item'><span class='answers__item_content'>${elem.author}</span></li>`;
    })
    .join(" ")}
    
  </ul>
</div>`;
  }

  static createPaintingQuiz(image: ImageType, imageList: ImageType[]) {
    const { author } = image;
    return `<div class="quiz quiz-paintings">
  <h2>${author}</h2>
  <ul class="quiz__answers">
  ${imageList
    .map((elem) => {
      return `<li class='answers__item'>
      <img src="${elem.preview}" alt="${`${elem.name}`}" class='answers__item_content'/>
    </li>`;
    })
    .join(" ")}
  </ul>
</div>`;
  }

  static createQuizMiddleResult(image: ImageType, isItCorrect: boolean) {
    const { author, preview, full, name, year } = image;
    return `
    <div class="quiz__result-middle">
    <img src="${preview}" alt="${`${author} - ${name}`}" />
  <div class="result-middle__content">
    <h2>"${name}"</h2>
    <h3>${author}</h3>
    <span>${year}</span>
    <a href="${full}" title="Go to see full image"><i class='bx bx-link-external'></i></a>
  </div>
  <div class="result-middle__nav">
    <span class="result-middle__nav-result"> ${
      isItCorrect
        ? '<i class="bx bx-check-circle indicator-correct"></i> Correct answer!'
        : '<i class="bx bx-x-circle indicator-wrong"></i> Wrong answer!'
    } </span>
    <button class="result-middle__nav-next" title="Next quiz">
      <i class="bx bx-right-arrow-circle"></i>
    </button>
  </div>
</div>`;
  }

  static createEncouragingLine(resultNumber: number, maxNumber: number) {
    if (resultNumber === 0) {
      return "Please try again. You can do better!";
    }
    const percentage = (resultNumber / maxNumber) * 100;

    if (percentage <= 30) {
      return "Please try again. You can do better!";
    }
    if (percentage > 30 && percentage <= 70) {
      return "Nice try. Can we repeat it?";
    }
    if (percentage > 70 && percentage < 100) {
      return "Almost done! One more time?";
    }
    return "Well done! You are now an art professor!";
  }

  static createFinalResult(resultNumber: number, maxNumber: number) {
    const encouragingLine = Quiz.createEncouragingLine(resultNumber, maxNumber);
    return `
<div class="quiz__result-final">
  <h3>Round completed!</h3>
  <p>${encouragingLine}</p>
  <p>${resultNumber} correct answers out of ${maxNumber}</p>
<button class="result-final__repeate">
    <i class='bx bx-sync'></i>
</button>
</div>
  `;
  }
}
export default Quiz;
