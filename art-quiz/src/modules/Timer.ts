import Settings from "./settings/Settings";

class Timer {
  static timerId: NodeJS.Timer | undefined;

  static toggleTimerContainer(isTimerEnabled: boolean, timerValue?: string) {
    const timerContainer = document.querySelector(".timer");
    const timerContent = document.querySelector(".timer__content");
    if (timerContainer && timerContent) {
      if (isTimerEnabled && timerValue) {
        timerContainer.removeAttribute("data-disabled");
        timerContent.textContent = timerValue;
      } else {
        timerContainer.setAttribute("data-disabled", "disabled");
        timerContent.textContent = "";
      }
    }
  }

  static setTimer() {
    const { timerValue, timerEnabled } = Settings;
    if (timerEnabled) {
      Timer.toggleTimerContainer(timerEnabled, String(timerValue));
      let count = timerValue;
      const timerContainer = document.querySelector(".timer__content");
      Timer.timerId = setInterval(() => {
        count -= 1;
        if (timerContainer) {
          timerContainer.textContent = String(count);
        }
      }, 1000);
    }
    return { timerValue, timerEnabled };
  }

  static reset() {
    clearInterval(Timer.timerId);
    Timer.toggleTimerContainer(false);
  }

  static content() {
    return `
    <div class="timer" data-disabled="disabled">
      <i class='bx bx-stopwatch'></i>
      <span class="timer__content"></span>
    </div>
    `;
  }
}

export default Timer;
