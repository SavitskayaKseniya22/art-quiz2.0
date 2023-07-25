import "./correctAnswerBar.scss";

class CorrectAnswerBar {
  correct: number;

  constructor() {
    this.correct = 0;
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

  updateCorrectValue(isItCorrect: boolean) {
    this.correct += +isItCorrect;
  }

  resetCorrectValue() {
    this.correct = 0;
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

export default CorrectAnswerBar;
