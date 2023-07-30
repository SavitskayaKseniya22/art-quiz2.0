import i18next from "i18next";
import AppStorage from "../Storage";
import Music from "../Music";
import "./settings.scss";
import SoundEffects from "../SoundEffects";

const MAX_TIMER_VALUE = 60;
const MIN_TIMER_VALUE = 10;

class Settings {
  static timerValue: number = Number(AppStorage.read("timerValue")) || 30;

  static timerEnabled: boolean = AppStorage.read("timerEnabled") || false;

  static addListener() {
    document.addEventListener("click", (event) => {
      const { target } = event;
      if (target && target instanceof HTMLElement) {
        if (target.closest(".settings__timer_update")) {
          const timerUpdateButton = target.closest(".settings__timer_update") as HTMLElement;
          const { modifier } = timerUpdateButton.dataset;

          if (modifier === "increase" || modifier === "decrease") {
            Settings.timerValue = Settings.calculateTimerValue(
              modifier,
              Settings.timerValue,
              MAX_TIMER_VALUE,
              MIN_TIMER_VALUE,
            );
            const answerTimeContainer = document.querySelector(".settings__answer-time");
            if (answerTimeContainer) {
              answerTimeContainer.textContent = String(Settings.timerValue);
              AppStorage.write("timerValue", Settings.timerValue);
            }
          }
        }
      }
    });

    document.querySelector("#settings__toggle-timer")?.addEventListener("change", (event) => {
      const { checked } = event.target as HTMLInputElement;
      const timerContainer = document.querySelector(".settings__timer");
      Settings.timerEnabled = checked;
      timerContainer?.setAttribute("data-disabled", String(!Settings.timerEnabled));
      AppStorage.write("timerEnabled", Settings.timerEnabled);
    });

    document.querySelectorAll("input[name='settings__language']")?.forEach((elem) => {
      elem.addEventListener("change", (event) => {
        const lang = (event.target as HTMLInputElement).value;
        i18next.changeLanguage(lang);
      });
    });

    window.addEventListener("hashchange", (event) => {
      if (event.oldURL.endsWith("/#")) {
        document.querySelector(".settings__timer")?.setAttribute("data-disabled", "true");
        document.querySelector(".settings__timer-toggle")?.setAttribute("data-disabled", "true");
      }
      if (event.newURL.endsWith("/#")) {
        if (Settings.timerEnabled) {
          document.querySelector(".settings__timer")?.removeAttribute("data-disabled");
        } else {
          document.querySelector(".settings__timer")?.setAttribute("data-disabled", "disabled");
        }
        document.querySelector(".settings__timer-toggle")?.removeAttribute("data-disabled");
      }
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

  static content() {
    return `
     <input type="checkbox" id="settings__toggle" />
        <div class="settings">
 
  <label for="settings__toggle" class="settings__close-button">
  <i class='bx bx-x'></i>
  </label>
  <h2 data-i18n="settings.titles.settings">Settings</h2>
  <ul class="settings__list">
    ${Music.content()}
    ${SoundEffects.content()}
    <li class="settings__timer" data-disabled=${!Settings.timerEnabled}>
      <h4 data-i18n="settings.titles.time">Time to answer</h4>
      <div class="settings__block-content">
        <button class="settings__timer_update" data-modifier="decrease">
          <i class="bx bx-minus"></i>
        </button>
        <span class="settings__answer-time">${Settings.timerValue}</span>
        <button class="settings__timer_update" data-modifier="increase">
          <i class="bx bx-plus"></i>
        </button>
      </div>
    </li>

    <li class="settings__timer-toggle">
      <h4 data-i18n="settings.titles.timer">Timer</h4>
      <div class="settings__block-content">
        <input type="checkbox" id="settings__toggle-timer" ${Settings.timerEnabled ? "checked" : ""} />
        <label for="settings__toggle-timer" name="off" data-i18n="settings.off">Off</label>
        <label for="settings__toggle-timer" name="on" data-i18n="settings.on">On</label>
      </div>
    </li>
    <li class="settings__language">
      <h4 data-i18n="settings.titles.language">Language</h4>
      <div class="settings__block-content">
        <input type="radio" id="settings__language_ru" name="settings__language" value="ru" />
        <label for="settings__language_ru" data-i18n="settings.lang.ru">Russian</label>
        <input type="radio" id="settings__language_en" name="settings__language" value="en" />
        <label for="settings__language_en" data-i18n="settings.lang.en">English</label>
      </div>
    </li>
  </ul>
</div>`;
  }
}

export default Settings;
