/* eslint-disable no-plusplus */

import "./categories.scss";
import { ImageType } from "../../interfaces";
import { sliceImagePack } from "../../utils";
import Quiz from "../quiz/Quiz";

class Categories {
  images: ImageType[];

  type: "#artists" | "#paintings";

  results: { [x: number]: { [x: number]: boolean } } | null;

  constructor(type: "#artists" | "#paintings", images: ImageType[]) {
    this.images = type === "#artists" ? sliceImagePack(0, 11, images) : sliceImagePack(12, 23, images);
    this.type = type;
    this.results = Categories.readResults()[this.type];
  }

  static readResults() {
    const quizResult = window.localStorage.getItem("quiz-result");
    if (quizResult) {
      return JSON.parse(quizResult);
    }
    return null;
  }

  addListener() {
    document.addEventListener("click", (event) => {
      const { target } = event;
      if (target && target instanceof HTMLElement) {
        if (target.closest(".categories__item_to-start")) {
          const { index } = (target.closest(".categories__item") as HTMLElement).dataset;
          if (index !== undefined) {
            const quiz = new Quiz(this.type, Number(index));
            const main = document.querySelector("main");
            if (main) {
              main.innerHTML = quiz.start();
              quiz.addListener();
            }
          }
        }
      }
    });
  }

  checkNumberOfCorrectAnswer(index: number) {
    if (this.results && this.results[index]) {
      const values = Object.values(this.results[index]);
      return values.filter((elem) => {
        return elem === true;
      }).length;
    }
    return null;
  }

  createCategory(image: ImageType, index: number, type: "#artists" | "#paintings") {
    const { author, preview, name } = image;
    const startIndex = type === "#artists" ? index * 10 : (index + 12) * 10;
    const numberOfCorrectAnswer = this.checkNumberOfCorrectAnswer(startIndex);

    return `<li data-index="${`${startIndex}`}" data-type="${type}" class="categories__item">
    <a class="categories__item_to-start" href="${type}/${index}"><h3>Round ${index + 1}</h3></a>
    ${
      typeof numberOfCorrectAnswer === "number"
        ? `<a class="detailed-result__preview" href="${type}/${index}/result">${numberOfCorrectAnswer}/10</a>`
        : ""
    }
      <img
        src="${preview}"
        alt="${author} - ${name}"
      />
    
    </li>`;
  }

  createCategoryList(imageList: ImageType[], type: "#artists" | "#paintings") {
    return `<ul class="categories">
    ${imageList
      .map((image, index) => {
        return this.createCategory(image, index, type);
      })
      .join(" ")}
    </ul>`;
  }

  content() {
    return this.createCategoryList(this.images, this.type);
  }
}

export default Categories;
