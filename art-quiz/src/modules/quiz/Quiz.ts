import { ImageType } from "../../interfaces";
import images from "../../images";
import { getImages, random, shuffle } from "../../utils";
import CorrectAnswerBar from "../correctAnswerBar/CorrectAnswerBar";

class Quiz {
  type: "#artists" | "#paintings";

  images: ImageType[];

  currentIndexOfQuiz: number;

  correctAnswerBar: CorrectAnswerBar;

  constructor(type: "#artists" | "#paintings", index: number) {
    this.type = type;
    this.images = getImages(index, index + 9, images);
    this.currentIndexOfQuiz = 0;
    this.correctAnswerBar = new CorrectAnswerBar();
  }

  start() {
    return Quiz.createQuizItem(this.type, this.images[this.currentIndexOfQuiz], images);
  }

  addListener() {
    document.addEventListener("click", (event) => {
      const main = document.querySelector("main");
      const { target } = event;
      if (target && target instanceof HTMLElement && main) {
        if (target.closest(".nextQButton")) {
          this.currentIndexOfQuiz += 1;
          if (this.currentIndexOfQuiz < this.images.length) {
            main.innerHTML = Quiz.createQuizItem(this.type, this.images[this.currentIndexOfQuiz], images);
          } else {
            main.innerHTML = Quiz.createFinalResult(this.correctAnswerBar.correct);
          }
        } else if (target.closest(".possibleAnswerElem")) {
          if (this.type === "#artists") {
            const answerElement = target.closest(".possibleAnswerElem");
            if (this.images[this.currentIndexOfQuiz].author === answerElement?.textContent) {
              this.correctAnswerBar.increaseCorrectValue();
            }
          } else {
            const answer = (target as HTMLImageElement).src;
            if (this.images[this.currentIndexOfQuiz].preview === answer) {
              this.correctAnswerBar.increaseCorrectValue();
            }
          }
          main.innerHTML = Quiz.createQuizMiddleResult(this.images[this.currentIndexOfQuiz]);
        }
      }
    });
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
        return imageList[num];
      }),
    ]);
  }

  static createArtistsQuiz(image: ImageType, imageList: ImageType[]) {
    const { preview, name } = image;
    return `<div class="questionCard">
  <h2>Who is the author of the painting?</h2>
  <img
    src="${preview}" alt="${name}"
  />
  <ul class="possibleAnswers">
  ${imageList
    .map((elem) => {
      return `<li class='possibleAnswerElem'>${elem.author}</li>`;
    })
    .join(" ")}
    
  </ul>
</div>`;
  }

  static createPaintingQuiz(image: ImageType, imageList: ImageType[]) {
    const { author } = image;
    return `<div class="questionCard questionCardPaintings">
  <h2>Which of these paintings did ${author} paint?</h2>
  <ul class="possibleAnswers">
  ${imageList
    .map((elem) => {
      return `<li class='possibleAnswerElem'>
      <img
    src="${elem.preview}" alt="${`${elem.name}`}"
  /></li>`;
    })
    .join(" ")}
  </ul>
</div>`;
  }

  static createQuizMiddleResult(image: ImageType) {
    const { author, preview, full, name, year } = image;
    return `<div class="tempDiv">
  <a target="_blank" href="${full}">
    <img
      src="${preview}" alt="${`${author} - ${name}`}"
    />
  </a>
  <div class="tempDivCont">
    <button class="nextQButton">
      <i class="bx bx-right-arrow-circle"></i>
    </button>
    <h2>"${name}"</h2>
    <h3>${author}</h3>
    <span>${year}</span>
    <span>
      <i class="bx bx-x-circle"></i>
      <i class="bx bx-check-circle"></i>
    </span>
  </div>
</div>`;
  }

  static createEncouragingLine(rightAnswersNumber: number) {
    if (rightAnswersNumber <= 3) {
      return "Please try again. You can do better!";
    }
    if (rightAnswersNumber > 3 && rightAnswersNumber <= 7) {
      return "Nice try. Can we repeat it?";
    }
    if (rightAnswersNumber > 7 && rightAnswersNumber < 10) {
      return "Almost done! One more time?";
    }
    return "Well done! You are now an art professor!";
  }

  static createFinalResult(rightAnswersNumber: number) {
    const encouragingLine = Quiz.createEncouragingLine(rightAnswersNumber);
    return `
<div class="totalCard">
  <h3>Round completed!</h3>
  <p>${encouragingLine}</p>
  <p>${rightAnswersNumber} correct answers out of 10</p>
  <button class="back-home-button">
    <i class='bx bx-home-alt'></i>
  </button>
  <button class="but-repeate">
    <i class='bx bx-repeat'></i>
  </button>
  <button class="back-cat">
    <i class='bx bxs-widget'></i>
  </button>
</div>
  `;
  }
}
export default Quiz;
