import { QuizResultItemType } from "../../interfaces";
import { checkTypeOfQuiz } from "../../utils";
import "./resultBar.scss";

class ResultBar {
  correct: number;

  result: QuizResultItemType;

  constructor() {
    this.correct = 0;
    this.result = {};
  }

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

  reset() {
    this.result = {};
    this.correct = 0;
    ResultBar.resetBarItem();
  }

  updateResult(isItCorrect: boolean, indexOfPack: number) {
    if (!this.result[indexOfPack]) {
      this.result[indexOfPack] = [];
    }
    this.result[indexOfPack].push(isItCorrect);

    ResultBar.fillBarItem(this.result[indexOfPack].length, isItCorrect);
    this.correct = this.result[indexOfPack].filter((elem) => {
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

  static saveResult(result: QuizResultItemType) {
    const type = checkTypeOfQuiz();
    const quizResult = window.localStorage.getItem("quiz-result");

    if (type) {
      if (quizResult) {
        const parsedResult = JSON.parse(quizResult);
        if (parsedResult[type]) {
          parsedResult[type] = Object.assign(parsedResult[type], result);
        } else {
          parsedResult[type] = result;
        }

        window.localStorage.setItem("quiz-result", JSON.stringify(parsedResult));
        return;
      }
      window.localStorage.setItem("quiz-result", JSON.stringify({ [type]: result }));
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
