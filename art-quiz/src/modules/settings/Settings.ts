import "./settings.scss";

const MAX_TIMER_VALUE = 30;
const MIN_TIMER_VALUE = 5;

class Settings {
  timerValue: number;

  constructor() {
    this.timerValue = Number(Settings.readStorage("timerValue")) || 15;
  }

  static writeStorage(key: string, value: string) {
    window.localStorage.setItem(key, value);
  }

  static readStorage(value: string) {
    return window.localStorage.getItem(value);
  }

  addListener() {
    document.addEventListener("click", (event) => {
      const { target } = event;
      if (target && target instanceof HTMLElement) {
        if (target.closest(".settings__timer_update")) {
          const timerUpdateButton = target.closest(".settings__timer_update") as HTMLElement;
          const { modifier } = timerUpdateButton.dataset;

          if (modifier === "increase" || modifier === "decrease") {
            this.timerValue = Settings.calculateTimerValue(modifier, this.timerValue, MAX_TIMER_VALUE, MIN_TIMER_VALUE);
            const answerTimeContainer = document.querySelector(".settings__answer-time");
            if (answerTimeContainer) {
              answerTimeContainer.textContent = String(this.timerValue);
            }
          }
        }
      }
    });

    window.addEventListener("beforeunload", () => {
      Settings.writeStorage("timerValue", String(this.timerValue));
    });
  }

  static calculateTimerValue(type: "increase" | "decrease", currentValue: number, maxValue: number, minValue: number) {
    if (type === "increase" && currentValue < maxValue) {
      return currentValue + 5;
    }
    if (type === "decrease" && currentValue > minValue) {
      return currentValue - 5;
    }
    return currentValue;
  }

  content() {
    return `
        <div class="settings">
  <input type="checkbox" id="settings__toggle" />
  <label for="settings__toggle" class="settings__close-button">
  <i class='bx bx-x'></i>
  </label>
  <h2>Settings</h2>
  <ul class="settings__list">
    <li class="music-volume__range">
      <h3>Volume of music</h3>
      <div class="settings__block-content">
        <button class="music-volume__off">
          <i class="bx bx-volume-mute"></i>
        </button>
        <input type="range" class="music-volume__range-input" min="0" max="1" step="0.1" />
      </div>
    </li>
    
    <li class="settings__effects-volume-range">
      <h3>Volume of sound effects</h3>
      <div class="settings__block-content">
        <button class="effects-volume__off">
          <i class="bx bx-volume-mute"></i>
        </button>
        <input type="range" class="volumeSoundEffects" min="0" max="1" step="0.1" />
      </div>
    </li>
    

    <li class="settings__timer">
      <h3>Time to answer</h3>
      <div class="settings__block-content">
        <button class="settings__timer_update" data-modifier="decrease">
          <i class="bx bx-minus"></i>
        </button>
        <span class="settings__answer-time">${this.timerValue}</span>
        <button class="settings__timer_update" data-modifier="increase">
          <i class="bx bx-plus"></i>
        </button>
      </div>
    </li>

    <li class="settings__timer-toggle">
      <h3>Timer</h3>
      <div class="settings__block-content">
        <input type="checkbox" id="settings__toggle-timer" class="settings__toggle" />
        <label for="settings__toggle-timer" name="off">Off</label>
        <label for="settings__toggle-timer" name="on">On</label>
      </div>
    </li>
    <li class="settings__language">
      <h3>Language</h3>
      <div class="settings__block-content">
        <input type="radio" id="settings__language_ru" name="settings__language" value="ru" />
        <label for="settings__language_ru">ru</label>
        <input type="radio" id="settings__language_en" name="settings__language" value="en" checked />
        <label for="settings__language_en">en</label>
      </div>
    </li>
  </ul>
</div>`;
  }
}

export default Settings;
