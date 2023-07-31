/* eslint-disable no-sequences */
import ResultBar from "../resultBar/ResultBar";
import Timer from "../Timer";
import SoundEffects from "../SoundEffects";
import {
  sliceImagePack,
  random,
  shuffle,
  updateMainContent,
  fetchImage,
  fetchImagesPack,
  createEncouragingLine,
} from "../../utils";
import { ImageType } from "../../interfaces";
import "./quiz.scss";

class Quiz {
  static numberOfImagesInQuiz: number = 10;

  static imagePack: ImageType[] = [];

  static currentIndexOfQuiz: number = 0;

  static activeImage: ImageType = {} as ImageType;

  static index: number = 0;

  static intervalId: NodeJS.Timeout | undefined;

  static type: "artists" | "paintings" = "artists";

  static images: ImageType[] = [];

  static async setQuiz(type: "artists" | "paintings", index: number, images: ImageType[]) {
    Quiz.images = images;
    Quiz.type = type;
    Quiz.index = index;
    Quiz.imagePack = sliceImagePack(index, Quiz.numberOfImagesInQuiz, images);
    Quiz.resetQuiz();
    const { timerValue, timerEnabled } = Timer.setTimer();
    Quiz.intervalId = timerEnabled
      ? setTimeout(() => {
          updateMainContent(Quiz.setFinalResultScreen());
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
    document.addEventListener("click", async (event) => {
      const { target } = event;
      if (target && target instanceof HTMLElement) {
        if (target.closest(".result-middle__nav-next")) {
          Quiz.currentIndexOfQuiz += 1;
          if (Quiz.currentIndexOfQuiz < Quiz.numberOfImagesInQuiz) {
            Quiz.activeImage = Quiz.imagePack[Quiz.currentIndexOfQuiz];
            const mainContent = await Quiz.createQuizItem(Quiz.type, Quiz.activeImage, Quiz.images);
            updateMainContent(mainContent);
          } else {
            updateMainContent(Quiz.setFinalResultScreen());
          }
        } else if (target.closest(".answers__item")) {
          const isItCorrect = Quiz.checkIsItCorrect(Quiz.type, target, Quiz.activeImage);
          ResultBar.updateResult(isItCorrect, Quiz.index);
          SoundEffects.setSoundEffectSource(isItCorrect);
          const mainContent = await Quiz.createQuizMiddleResult(Quiz.activeImage, isItCorrect);
          updateMainContent(mainContent);
        } else if (target.closest(".result-final__repeate")) {
          const mainContent = await Quiz.setQuiz(Quiz.type, Quiz.index, Quiz.images);
          updateMainContent(mainContent);
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

  static async createQuizItem(type: "artists" | "paintings", image: ImageType, imageList: ImageType[]) {
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

  static async createArtistsQuiz(image: ImageType, imageList: ImageType[]) {
    const { name } = image;
    const loadedPreview = await fetchImage(image.preview);
    return `<div class="quiz quiz-artists">
  <img
    src="${loadedPreview}" alt="${name}" title="${`${name}`}"
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

  static async createPaintingQuiz(image: ImageType, imageList: ImageType[]) {
    const loadedPreviews = await fetchImagesPack(imageList);
    const { author } = image;
    return `<div class="quiz quiz-paintings">
  <h2>${author}</h2>
  <ul class="quiz__answers">
  ${imageList
    .map((elem, index) => {
      return `<li class='answers__item'>
      <img src="${
        loadedPreviews[index]
      }" alt="${`${elem.name}`}" class='answers__item_content' title="${`${elem.name}`}"/>
    </li>`;
    })
    .join(" ")}
  </ul>
</div>`;
  }

  static async createQuizMiddleResult(image: ImageType, isItCorrect: boolean) {
    const loadedPreview = await fetchImage(image.preview);
    const { author, full, name, year } = image;
    return `
    <div class="quiz__result-middle">
    <img src="${loadedPreview}" alt="${`${author} - ${name}`}" />
  <div class="result-middle__content">
    <h2>"${name}"</h2>
    <h3>${author}</h3>
    <span>${year}</span>
    <a href="${full}" target="_blank" title="Open full image in a new tab" data-i18n="[title]results.tips.full">
    <i class='bx bx-link-external'></i>
    </a>
  </div>
  <div class="result-middle__nav">
    <span class="result-middle__nav-result"> 
    ${
      isItCorrect
        ? '<i class="bx bx-check-circle indicator-correct"></i><span data-i18n="quiz.answers.correct">Correct answer!</span>'
        : '<i class="bx bx-x-circle indicator-wrong"></i><span data-i18n="quiz.answers.wrong">Wrong answer!</span>'
    } </span>
    <button class="result-middle__nav-next" title="Next quiz" data-i18n="[title]quiz.tips.next">
      <i class="bx bx-right-arrow-circle"></i>
    </button>
  </div>
</div>`;
  }

  static createFinalResult(result: number, max: number) {
    const encouragingLine = createEncouragingLine(result, max);
    return `
<div class="quiz__result-final">
  <h3 data-i18n="quiz.final.complete">Round completed!</h3>
  <p data-i18n="quiz.final.line.${encouragingLine.type}">${encouragingLine.line}</p>
  <p>${result}/${max}</p>
<button class="result-final__repeate" title="One more attempt" data-i18n="[title]quiz.final.repeate">
    <i class='bx bx-sync'></i>
</button>
</div>
  `;
  }
}
export default Quiz;
