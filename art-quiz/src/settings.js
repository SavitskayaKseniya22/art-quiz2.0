// import { myStorage } from "./questions.js";

export const soundEffects = {
  correctAnswer: "./sounds/correctA.mp3",
  wrongAnswer: "./sounds/wrongA.mp3",
  endOfRound: "./sounds/endOfRound.mp3",
};
/*
export class Settings {
  constructor() {
    this.name = "settings";
    this._soundEffects;
    this._volumeSoundEffects;
    this._music;

    this._timer;

    this._timerValue;
    this._timerStep;

    this._settings__language = "en";

    // кнопка отключить\включить звук
    const music = document.querySelector("input[id='settings__toggle-music']");
    const audioMusic = document.querySelector("audio.music");
    const music-volume__range-input = document.querySelector(".music-volume__range-input");

    let tempVol;

    if (myStorage.getItem("music-volume__range-input")) {
      audioMusic.volume = JSON.parse(myStorage.getItem("music-volume__range-input"));
      music-volume__range-input.value = audioMusic.volume;
    } else {
      audioMusic.volume = "0.5";
      music-volume__range-input.value = audioMusic.volume;
    }
    // кнопка сделать активным инпут рендж

    music-volume__range-input.addEventListener("input", function () {
      audioMusic.volume = music-volume__range-input.value;
      myStorage.setItem("music-volume__range-input", JSON.stringify(audioMusic.volume));
      tempVol = audioMusic.volume;
      if (audioMusic.volume == 0) {
        audioMusic.muted = true;
        musicMuteBut.style.backgroundImage = 'url("./images/volumeOfActive.svg")';
        musicLoudBut.style.backgroundImage = "url('./images/volumeOn.svg')";
      } else if (audioMusic.volume == 1) {
        musicLoudBut.style.backgroundImage = 'url("./images/volumeOnActive.svg")';
        musicMuteBut.style.backgroundImage = "url('./images/volumeOf.svg')";
      } else {
        audioMusic.muted = false;
        musicMuteBut.style.backgroundImage = "url('./images/volumeOf.svg')";
        musicLoudBut.style.backgroundImage = "url('./images/volumeOn.svg')";
      }
    });
    // кнопка сделать громкость минимальной
    let musicMuteBut = document.querySelector(".music-volume__range .music-volume__off ");
    musicMuteBut.addEventListener("click", function () {
      if (audioMusic.muted && audioMusic.volume > 0) {
        musicMuteBut.style.backgroundImage = 'url("./images/volumeOf.svg")';
        audioMusic.muted = false;
        music-volume__range-input.value = audioMusic.volume;
      } else {
        musicMuteBut.style.backgroundImage = 'url("./images/volumeOfActive.svg")';
        musicLoudBut.style.backgroundImage = 'url("./images/volumeOn.svg")';
        audioMusic.muted = true;
        music-volume__range-input.value = 0;
      }
    });

    // кнопка сделать громкость максимальной
    let musicLoudBut = document.querySelector(".music-volume__range .music-volume__on");
    musicLoudBut.addEventListener("click", function () {
      music-volume__range-input.classList.toggle("loud");
      if (music-volume__range-input.classList.contains("loud")) {
        musicLoudBut.style.backgroundImage = 'url("./images/volumeOnActive.svg")';
        if (audioMusic.muted) {
          audioMusic.muted = false;
          musicMuteBut.style.backgroundImage = 'url("./images/volumeOf.svg")';
        }
        tempVol = audioMusic.volume;
        audioMusic.volume = 1;
        music-volume__range-input.value = audioMusic.volume;
      } else {
        audioMusic.volume = tempVol;
        musicLoudBut.style.backgroundImage = 'url("./images/volumeOn.svg")';
      }
      music-volume__range-input.value = audioMusic.volume;
    });

    // отключить музыку\включить музыку
    const music-volume__range = document.querySelector(".music-volume__range");

    if (myStorage.getItem("music")) {
      this.music = JSON.parse(myStorage.getItem("music"));
      music.checked = this.music;
      if (this.music === false) {
        audioMusic.pause();
        music-volume__range-input.setAttribute("disabled", "true");
        music-volume__range.style.opacity = "0.5";
      } else {
        const event = new Event("click");
        music-volume__range.dispatchEvent(event);
        audioMusic.play();
        music-volume__range-input.removeAttribute("disabled");
        music-volume__range.style.opacity = "1";
      }
    } else {
      this.music = false;
      myStorage.setItem("music", JSON.stringify(this.music));
      music.checked = this.music;
      audioMusic.pause();
      music-volume__range-input.setAttribute("disabled", "true");
      music-volume__range.style.opacity = "0.5";
    }

    music.onchange = function () {
      this.music = music.checked;
      myStorage.setItem("music", JSON.stringify(this.music));
      if (this.music === false) {
        audioMusic.pause();
        music-volume__range-input.setAttribute("disabled", "true");
        music-volume__range.style.opacity = "0.5";
      } else {
        audioMusic.play();
        music-volume__range-input.removeAttribute("disabled");
        music-volume__range.style.opacity = "1";
      }
    };

    const soundEffects = document.querySelector("input[id='settings__toggle-soundEffects']");
    const settings__effects-volume-range = document.querySelector(".settings__effects-volume-range");
    const volumeSoundEffects = document.querySelector(".volumeSoundEffects");

    if (myStorage.getItem("soundEffects")) {
      this.soundEffects = JSON.parse(myStorage.getItem("soundEffects"));
      soundEffects.checked = this.soundEffects;
      if (this.soundEffects === false) {
        volumeSoundEffects.setAttribute("disabled", "true");
        settings__effects-volume-range.style.opacity = "0.5";
      } else {
        volumeSoundEffects.removeAttribute("disabled");
        settings__effects-volume-range.style.opacity = "1";
      }
    } else {
      this.soundEffects = false;
      myStorage.setItem("soundEffects", JSON.stringify(this.soundEffects));
      soundEffects.checked = this.soundEffects;
      volumeSoundEffects.setAttribute("disabled", "true");
      settings__effects-volume-range.style.opacity = "0.5";
    }

    soundEffects.onchange = function () {
      this.soundEffects = soundEffects.checked;
      myStorage.setItem("soundEffects", JSON.stringify(this.soundEffects));
      if (this.soundEffects === false) {
        volumeSoundEffects.setAttribute("disabled", "true");
        settings__effects-volume-range.style.opacity = "0.5";
      } else {
        volumeSoundEffects.removeAttribute("disabled");
        settings__effects-volume-range.style.opacity = "1";
      }
    };

    if (myStorage.getItem("volumeSoundEffects")) {
      this.volumeSoundEffects = JSON.parse(myStorage.getItem("volumeSoundEffects"));
      this.volumeSoundEffects = volumeSoundEffects.value;
    } else {
      this.volumeSoundEffects = "0.5";
      volumeSoundEffects.value = this.volumeSoundEffects;
    }

    volumeSoundEffects.addEventListener("input", function () {
      this.volumeSoundEffects = volumeSoundEffects.value;
      myStorage.setItem("volumeSoundEffects", JSON.stringify(this.volumeSoundEffects));
    });

    const settings__timer = document.querySelector(".settings__timer");
    const timer = document.querySelector("input[id='settings__toggle-timer']");
    const settings__answer-time = document.querySelector(".settings__answer-time");

    if (myStorage.getItem("timer")) {
      this.timer = JSON.parse(myStorage.getItem("timer"));
      timer.checked = this.timer;
      if (this.timer === false) {
        settings__answer-time.setAttribute("disabled", "true");
        settings__timer.style.opacity = "0.5";
      } else {
        settings__answer-time.removeAttribute("disabled");
        settings__timer.style.opacity = "1";
      }
    } else {
      this.timer = false;
      myStorage.setItem("timer", JSON.stringify(this.timer));
      timer.checked = this.timer;
      settings__answer-time.setAttribute("disabled", "true");
      settings__timer.style.opacity = "0.5";
    }

    timer.onchange = function () {
      this.timer = timer.checked;
      myStorage.setItem("timer", JSON.stringify(this.timer));
      if (this.timer === false) {
        settings__answer-time.setAttribute("disabled", "true");
        settings__timer.style.opacity = "0.5";
      } else {
        settings__answer-time.removeAttribute("disabled");
        settings__timer.style.opacity = "1";
      }
    };

    const settings__timerDown = document.querySelector(".settings__timer .settings__timer_down");
    const settings__timerUp = document.querySelector(".settings__timer .settings__timer_up");

    if (myStorage.getItem("settings__answer-time")) {
      this.timerValue = JSON.parse(myStorage.getItem("settings__answer-time"));
      settings__answer-time.value = this.timerValue;
    } else {
      this.timerValue = settings__answer-time.value;
      myStorage.setItem("settings__answer-time", JSON.stringify(this.timerValue));
    }

    settings__timerDown.onclick = function () {
      if (!settings__answer-time.hasAttribute("disabled")) {
        this.timerStep = 5;
        this.timerValue = Number(settings__answer-time.value);
        if (this.timerValue >= 10 && this.timerValue <= 35) this.timerValue -= this.timerStep;
        settings__answer-time.value = this.timerValue;
        myStorage.setItem("settings__answer-time", JSON.stringify(this.timerValue));
      }
    };
    settings__timerUp.onclick = function () {
      if (!settings__answer-time.hasAttribute("disabled")) {
        this.timerStep = 5;
        this.timerValue = Number(settings__answer-time.value);
        if (this.timerValue >= 0 && this.timerValue <= 25) this.timerValue += this.timerStep;
        settings__answer-time.value = this.timerValue;
        myStorage.setItem("settings__answer-time", JSON.stringify(this.timerValue));
      }
    };

    const settings__languages = document.querySelectorAll("input[name='settings__language']");

    if (myStorage.getItem("settings__language")) {
      this.settings__language = JSON.parse(myStorage.getItem("settings__language"));
      for (const item of settings__languages) {
        item.removeAttribute("checked");
        if (item.value == this.settings__language) {
          item.setAttribute("checked", "checked");
        }
      }
    }

    for (const item of settings__languages) {
      item.onchange = function () {
        this.settings__language = item.value;
        myStorage.setItem("settings__language", JSON.stringify(this.settings__language));
      };
    }
  }

  set music(value) {
    this._music = value;
  }

  get music() {
    return this._music;
  }

  set volumeSoundEffects(value) {
    this._volumeSoundEffects = value;
  }

  get volumeSoundEffects() {
    return this._volumeSoundEffects;
  }

  set soundEffects(value) {
    this._soundEffects = value;
  }

  get soundEffects() {
    return this._soundEffects;
  }

  set timer(value) {
    this._timer = value;
  }

  get timer() {
    return this._timer;
  }

  set settings__language(value) {
    this._settings__language = value;
  }

  get settings__language() {
    return this._settings__language;
  }

  set timerValue(value) {
    this._timerValue = value;
  }

  get timerValue() {
    return this._timerValue;
  }

  set timerStep(value) {
    this._timerStep = value;
  }

  get timerStep() {
    return this._timerStep;
  }

  saveInStorage() {
    myStorage.setItem(this.name, JSON.stringify(this));
    return 1;
  }

  readFromStorage() {
    return JSON.parse(myStorage.getItem(this.name));
  }
} */

export default soundEffects;
