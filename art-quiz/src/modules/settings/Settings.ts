import i18next from "i18next";

import "./settings.scss";

const MAX_TIMER_VALUE = 30;
const MIN_TIMER_VALUE = 5;

class Settings {
  timerValue: number;

  timerDisabled: boolean;

  constructor() {
    this.timerValue = Number(Settings.readStorage("timerValue")) || 15;
    this.timerDisabled = Settings.readStorage("timerDisabled") || false;
  }

  static writeStorage(key: string, value: string | number | boolean) {
    window.localStorage.setItem(key, JSON.stringify(value));
  }

  static readStorage(value: string) {
    const item = window.localStorage.getItem(value);
    if (item) {
      return JSON.parse(item);
    }
    return null;
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

    document.querySelector("#settings__toggle-timer")?.addEventListener("change", (event) => {
      const { checked } = event.target as HTMLInputElement;
      const timerContainer = document.querySelector(".settings__timer");
      this.timerDisabled = checked;
      timerContainer?.setAttribute("disabled", String(!checked));
    });

    document.querySelectorAll("input[name='settings__language']")?.forEach((elem) => {
      elem.addEventListener("change", (event) => {
        const lang = (event.target as HTMLInputElement).value;
        i18next.changeLanguage(lang);
      });
    });

    window.addEventListener("beforeunload", () => {
      Settings.writeStorage("timerValue", this.timerValue);
      Settings.writeStorage("timerDisabled", this.timerDisabled);
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
     <input type="checkbox" id="settings__toggle" />
        <div class="settings">
 
  <label for="settings__toggle" class="settings__close-button">
  <i class='bx bx-x'></i>
  </label>
  <h2>Settings</h2>
  <ul class="settings__list">
    <li class="music-volume__range">
      <h4>Volume of music</h4>
      <div class="settings__block-content">
        <button class="music-volume__off">
          <i class="bx bx-volume-mute"></i>
        </button>
        <input type="range" class="music-volume__range-input" min="0" max="1" step="0.1" />
      </div>
    </li>
    
    <li class="settings__effects-volume-range">
      <h4>Volume of sound effects</h4>
      <div class="settings__block-content">
        <button class="effects-volume__off">
          <i class="bx bx-volume-mute"></i>
        </button>
        <input type="range" class="volumeSoundEffects" min="0" max="1" step="0.1" />
      </div>
    </li>
    

    <li class="settings__timer" disabled=${!this.timerDisabled}>
      <h4>Time to answer</h4>
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
      <h4>Timer</h4>
      <div class="settings__block-content">
        <input type="checkbox" id="settings__toggle-timer" ${this.timerDisabled ? "checked" : ""} />
        <label for="settings__toggle-timer" name="off">Off</label>
        <label for="settings__toggle-timer" name="on">On</label>
      </div>
    </li>
    <li class="settings__language">
      <h4>Language</h4>
      <div class="settings__block-content">
        <input type="radio" id="settings__language_ru" name="settings__language" value="ru" />
        <label for="settings__language_ru">ru</label>
        <input type="radio" id="settings__language_en" name="settings__language" value="en" />
        <label for="settings__language_en">en</label>
      </div>
    </li>
  </ul>
</div>`;
  }
}

export default Settings;
