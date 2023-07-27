import "./categories.scss";
import { ImageType, QuizResultType } from "../../interfaces";
import { checkTypeOfQuiz, sliceImagePack } from "../../utils";
import images from "../../images";
import ResultBar from "../resultBar/ResultBar";

class Categories {
  images: { artists: ImageType[]; paintings: ImageType[] };

  constructor() {
    this.images = { artists: sliceImagePack(0, 12, images), paintings: sliceImagePack(12, 12, images) };
  }

  setCategory(type: "artists" | "paintings") {
    return Categories.createCategoryList(this.images[type]);
  }

  static checkNumberOfCorrectAnswer(index: number) {
    const type = checkTypeOfQuiz();
    const results: QuizResultType = ResultBar.readResults();
    if (results && type && results[type] && results[type][index]) {
      const values = Object.values(results[type][index]);
      return values.filter((elem) => {
        return elem === true;
      }).length;
    }
    return null;
  }

  static createCategory(image: ImageType, index: number) {
    const type = checkTypeOfQuiz();
    const { author, preview, name } = image;
    const startIndex = type === "artists" ? index * 10 : (index + 12) * 10;
    const numberOfCorrectAnswer = Categories.checkNumberOfCorrectAnswer(startIndex);

    return `<li data-index="${`${startIndex}`}" data-type="${type}" class="categories__item">
    <a class="categories__item_to-start" href="#${type}/${index}"><h3>Round ${index + 1}</h3></a>
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

  static createCategoryList(imageList: ImageType[]) {
    return `<ul class="categories">
    ${imageList
      .map((image, index) => {
        return Categories.createCategory(image, index);
      })
      .join(" ")}
    </ul>`;
  }
}

export default Categories;
