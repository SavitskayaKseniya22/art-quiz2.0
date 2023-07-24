import "./correctAnswerBar.scss";

class CorrectAnswerBar {
  correct: number;

  constructor() {
    this.correct = 0;
  }

  static fillBarItem(index: number, isItCorrect: boolean) {
    const indicator = document.querySelector(`[data-indicator="${index}"]`);
    if (indicator && indicator instanceof HTMLElement) {
      indicator.innerHTML = isItCorrect ? '<i class="bx bx-check-circle"></i>' : '<i class="bx bx-x-circle"></i>';
      indicator.dataset.isItCorrect = String(isItCorrect);
    }
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
    ${new Array(10).forEach((elem, index) => {
      return `<li data-indicator="${index}"><i class='bx bx-circle'></i></li>`;
    })}
  </ul>`;
  }
}

export default CorrectAnswerBar;
