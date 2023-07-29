import { QuizResultItemType, QuizResultType } from "../../interfaces";
import AppStorage from "../Storage";
import "./resultBar.scss";

class ResultBar {
  static correct: number = 0;

  static result: QuizResultItemType = {} as QuizResultItemType;

  static fillBarItem(index: number, isItCorrect: boolean) {
    const indicator = document.querySelector(`[data-indicator="${index}"]`);
    if (indicator && indicator instanceof HTMLElement) {
      indicator.innerHTML = isItCorrect
        ? '<i class="bx bx-check-circle indicator-correct"></i>'
        : '<i class="bx bx-x-circle indicator-wrong"></i>';
      indicator.dataset.isItCorrect = String(isItCorrect);
    }
  }

  static resetBarItem() {
    document.querySelectorAll(`.indicator__item`).forEach((elem) => {
      while (elem.firstChild) {
        elem.removeChild(elem.firstChild);
      }
    });
  }

  static reset() {
    ResultBar.result = {};
    ResultBar.correct = 0;
    ResultBar.resetBarItem();
  }

  static updateResult(isItCorrect: boolean, indexOfPack: number) {
    if (!ResultBar.result[indexOfPack]) {
      ResultBar.result[indexOfPack] = [];
    }
    ResultBar.result[indexOfPack].push(isItCorrect);
    ResultBar.fillBarItem(ResultBar.result[indexOfPack].length, isItCorrect);
    ResultBar.correct = ResultBar.result[indexOfPack].filter((elem) => {
      return elem === true;
    }).length;
  }

  static saveResult(type: "artists" | "paintings") {
    const results: QuizResultType = AppStorage.read("quiz-result");
    if (results) {
      if (results[type]) {
        results[type] = Object.assign(results[type], ResultBar.result);
      } else {
        results[type] = ResultBar.result;
      }
      AppStorage.write("quiz-result", results);
      return;
    }
    AppStorage.write("quiz-result", { [type]: ResultBar.result });
  }

  static content() {
    return `
  <ul class="indicators">
    ${new Array(10)
      .fill(undefined)
      .map((elem, index) => {
        return `<li class="indicator__item" data-indicator="${index}"></li>`;
      })
      .join(" ")}
  </ul>`;
  }
}

export default ResultBar;
