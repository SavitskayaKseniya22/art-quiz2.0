import { QuizResultItemType } from "../../interfaces";
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

  static readResults() {
    const quizResult = window.localStorage.getItem("quiz-result");
    if (quizResult) {
      return JSON.parse(quizResult);
    }
    return null;
  }

  static saveResult(type: "artists" | "paintings") {
    const quizResult = window.localStorage.getItem("quiz-result");

    if (type) {
      if (quizResult) {
        const parsedResult = JSON.parse(quizResult);
        if (parsedResult[type]) {
          parsedResult[type] = Object.assign(parsedResult[type], ResultBar.result);
        } else {
          parsedResult[type] = ResultBar.result;
        }

        window.localStorage.setItem("quiz-result", JSON.stringify(parsedResult));
        return;
      }
      window.localStorage.setItem("quiz-result", JSON.stringify({ [type]: ResultBar.result }));
    }
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
