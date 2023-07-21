import "./settings.scss";

class Settings {
  constructor() {
    console.log(this);
  }

  static content() {
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
        <button class="settings__timer_down">
          <i class="bx bx-minus"></i>
        </button>
        <span class="settings__answer-time" data-answer-time>15</span>
        <button class="settings__timer_up">
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
