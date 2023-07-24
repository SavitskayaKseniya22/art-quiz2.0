/* eslint-disable no-plusplus */

import "./categories.scss";
import { ImageType } from "../../interfaces";
import { sliceImagePack } from "../../utils";
import Quiz from "../quiz/Quiz";

class Categories {
  images: ImageType[];

  type: "#artists" | "#paintings";

  constructor(type: "#artists" | "#paintings", images: ImageType[]) {
    this.images = type === "#artists" ? sliceImagePack(0, 11, images) : sliceImagePack(12, 23, images);
    this.type = type;
  }

  addListener() {
    document.addEventListener("click", (event) => {
      const { target } = event;
      if (target && target instanceof HTMLElement) {
        if (target.closest(".categories__item")) {
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

  static createCategory(image: ImageType, index: number, type: "#artists" | "#paintings") {
    const { author, preview, name } = image;
    const startIndex = type === "#artists" ? index : index + 12;
    return `<li data-index="${`${startIndex * 10}`}" data-type="${type}" class="categories__item">
    <a href="${type}/#${index}">
    <h3>Round ${index + 1}</h3>
      <img
        src="${preview}"
        alt="${author} - ${name}"
      />
    </a>
    </li>`;
  }

  static createCategoryList(imageList: ImageType[], type: "#artists" | "#paintings") {
    return `<ul class="categories">
    ${imageList
      .map((image, index) => {
        return Categories.createCategory(image, index, type);
      })
      .join(" ")}
    </ul>`;
  }

  content() {
    return Categories.createCategoryList(this.images, this.type);
  }
}

export default Categories;
