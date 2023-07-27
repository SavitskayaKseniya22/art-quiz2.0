/* eslint-disable no-sequences */
import { ImageType } from "../../interfaces";
import images from "../../images";
import { sliceImagePack, random, shuffle, checkTypeOfQuiz } from "../../utils";
import ResultBar from "../resultBar/ResultBar";
import "./quiz.scss";

class Quiz {
  imagePack: ImageType[];

  currentIndexOfQuiz: number;

  resultBar: ResultBar;

  activeImage: ImageType;

  numberOfImagesInQuiz: number;

  index: number;

  constructor() {
    this.index = 0;
    this.numberOfImagesInQuiz = 3;
    this.currentIndexOfQuiz = 0;
    this.resultBar = new ResultBar();
    this.imagePack = sliceImagePack(1, this.numberOfImagesInQuiz, images);
    this.activeImage = this.imagePack[this.currentIndexOfQuiz];
    this.addListener();
  }

  setQuiz(type: "artists" | "paintings", index: number) {
    this.index = index;
    this.imagePack = sliceImagePack(index, this.numberOfImagesInQuiz, images);
    this.activeImage = this.imagePack[this.currentIndexOfQuiz];

    return Quiz.createQuizItem(type, this.activeImage, images);
  }

  resetQuiz() {
    this.currentIndexOfQuiz = 0;
    this.activeImage = this.imagePack[this.currentIndexOfQuiz];
    this.resultBar.reset();
  }

  addListener() {
    document.addEventListener("click", (event) => {
      const main = document.querySelector("main");
      const { target } = event;
      const type = checkTypeOfQuiz();
      if (target && target instanceof HTMLElement && main && type) {
        if (target.closest(".result-middle__nav-next")) {
          this.currentIndexOfQuiz += 1;
          if (this.currentIndexOfQuiz < this.numberOfImagesInQuiz) {
            this.activeImage = this.imagePack[this.currentIndexOfQuiz];
            main.innerHTML = Quiz.createQuizItem(type, this.activeImage, images);
          } else {
            ResultBar.saveResult(this.resultBar.result);
            main.innerHTML = Quiz.createFinalResult(this.resultBar.correct, this.numberOfImagesInQuiz);
          }
        } else if (target.closest(".answers__item")) {
          const isItCorrect = Quiz.checkIsItCorrect(type, target, this.activeImage);
          this.resultBar.updateResult(isItCorrect, this.index);
          main.innerHTML = Quiz.createQuizMiddleResult(this.activeImage, isItCorrect);
        } else if (target.closest(".result-final__repeate")) {
          this.resetQuiz();
          main.innerHTML = Quiz.createQuizItem(type, this.activeImage, images);
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
