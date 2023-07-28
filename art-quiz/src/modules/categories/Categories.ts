import ResultBar from "../resultBar/ResultBar";
import Quiz from "../quiz/Quiz";
import { ImageType, QuizResultType } from "../../interfaces";
import { getStartedIndexForImageSlice, sliceImagePack } from "../../utils";
import images from "../../images";
import "./categories.scss";

class Categories {
  static images: { artists: ImageType[]; paintings: ImageType[] } = {
    artists: sliceImagePack(0, 12, images),
    paintings: sliceImagePack(12, 12, images),
  };

  static setCategory(type: "artists" | "paintings") {
    return Categories.createCategoryList(Categories.images[type]);
  }

  static checkNumberOfCorrectAnswer(index: number, type: "artists" | "paintings") {
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
    const { type } = Quiz;
    const { author, preview, name } = image;
    const startIndex = getStartedIndexForImageSlice(type, index);
    const numberOfCorrectAnswer = Categories.checkNumberOfCorrectAnswer(startIndex, type);
    return `<li data-index="${`${startIndex}`}" data-type="${type}" class="categories__item">
    <a class="categories__item_to-start" href="#${type}/${index}" title="Start Round ${index + 1}"><h3>Round ${
      index + 1
    }</h3></a>
    ${
      typeof numberOfCorrectAnswer === "number"
        ? `<a class="categories__item_result" href="#${type}/${index}/last-result" title="See result">${numberOfCorrectAnswer}/10</a>`
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
