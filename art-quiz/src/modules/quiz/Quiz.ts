import { ImageType } from "../../interfaces";
import images from "../../images";
import { sliceImagePack, random, shuffle } from "../../utils";
import CorrectAnswerBar from "../correctAnswerBar/CorrectAnswerBar";
import "./quiz.scss";

class Quiz {
  type: "#artists" | "#paintings";

  imagePack: ImageType[];

  currentIndexOfQuiz: number;

  correctAnswerBar: CorrectAnswerBar;

  activeImage: ImageType;

  numberOfImagesInQuiz: number;

  constructor(type: "#artists" | "#paintings", index: number) {
    this.type = type;
    this.numberOfImagesInQuiz = 1;
    this.currentIndexOfQuiz = 0;
    this.imagePack = sliceImagePack(index, index + 9, images);
    this.activeImage = this.imagePack[this.currentIndexOfQuiz];
    this.correctAnswerBar = new CorrectAnswerBar();
  }

  start() {
    return Quiz.createQuizItem(this.type, this.activeImage, images);
  }

  addListener() {
    document.addEventListener("click", (event) => {
      const main = document.querySelector("main");
      const { target } = event;
      if (target && target instanceof HTMLElement && main) {
        if (target.closest(".result-middle__nav-next")) {
          this.currentIndexOfQuiz += 1;
          this.activeImage = this.imagePack[this.currentIndexOfQuiz];

          if (this.currentIndexOfQuiz < this.numberOfImagesInQuiz) {
            main.innerHTML = Quiz.createQuizItem(this.type, this.activeImage, images);
          } else {
            main.innerHTML = Quiz.createFinalResult(
              this.correctAnswerBar.correct,
              this.type,
              this.numberOfImagesInQuiz,
            );
          }
        } else if (target.closest(".answers__item")) {
          const isItCorrect = Quiz.checkIsItCorrect(this.type, target, this.activeImage);
          this.correctAnswerBar.updateCorrectValue(isItCorrect);
          main.innerHTML = Quiz.createQuizMiddleResult(this.activeImage, isItCorrect);
        } else if (target.closest(".result-final__repeate")) {
          this.currentIndexOfQuiz = 0;
          this.correctAnswerBar.resetCorrectValue();
          this.activeImage = this.imagePack[this.currentIndexOfQuiz];
          main.innerHTML = Quiz.createQuizItem(this.type, this.activeImage, images);
        }
      }
    });
  }

  static checkIsItCorrect(type: "#artists" | "#paintings", target: HTMLElement, activeImage: ImageType) {
    const answer = target.closest(".answers__item")?.querySelector(".answers__item_content");

    if (
      (answer && type === "#artists" && activeImage.author === answer.textContent) ||
      (answer && type === "#paintings" && activeImage.preview === answer.getAttribute("src"))
    ) {
      return true;
    }
    return false;
  }

  static createQuizItem(type: "#artists" | "#paintings", image: ImageType, imageList: ImageType[]) {
    const filteredImages = Quiz.createSetOfData(image, imageList);

    if (type === "#artists") {
      return Quiz.createArtistsQuiz(image, filteredImages);
    }

    return Quiz.createPaintingQuiz(image, filteredImages);
  }

  static createSetOfData(image: ImageType, imageList: ImageType[]) {
    const filteredImages = imageList.filter((elem) => {
      return elem.author !== image.author;
    });
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
  <h2>Who is the author of the painting?</h2>
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
  <h2>Which of these paintings did ${author} paint?</h2>
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
    
  <a target="_blank" href="${full}">
    <img src="${preview}" alt="${`${author} - ${name}`}" />
  </a>
  <div class="result-middle__content">
    <h2>"${name}"</h2>
    <h3>${author}</h3>
    <span>${year}</span>
  </div>
  <div class="result-middle__nav">
    <span class="result-middle__nav-result"> ${
      isItCorrect
        ? '<i class="bx bx-check-circle nav__result-correct"></i> Correct answer!'
        : '<i class="bx bx-x-circle nav__result-wrong"></i> Wrong answer!'
    } </span>
    <button class="result-middle__nav-next">
      <i class="bx bx-right-arrow-circle"></i>
    </button>
  </div>
</div>`;
  }

  static createEncouragingLine(resultNumber: number, maxNumber: number) {
    const percentage = (maxNumber / resultNumber) * 100;
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

  static createFinalResult(resultNumber: number, type: "#artists" | "#paintings", maxNumber: number) {
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
