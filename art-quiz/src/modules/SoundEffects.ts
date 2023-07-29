import soundEffects from "../assets/json/playlist.json";

class SoundEffects {
  static audioElement: HTMLAudioElement = SoundEffects.createAudioElement();

  static createAudioElement() {
    const element = Object.assign(document.createElement("audio"), {
      volume: 0.5,
      onended: () => {
        SoundEffects.audioElement.removeAttribute("src");
      },
    });
    const context = new AudioContext();
    const track = context.createMediaElementSource(element);
    track.connect(context.destination);
    return element;
  }

  static setSoundEffectSource(isItCorrect?: boolean) {
    const src = SoundEffects.getSoundEffectSource(isItCorrect);
    SoundEffects.audioElement.setAttribute("src", src);
    SoundEffects.audioElement.play();
  }

  static getSoundEffectSource(isItCorrect?: boolean) {
    let type: string;
    switch (isItCorrect) {
      case true:
        type = "Sound effect for correct answer";
        break;
      case false:
        type = "Sound effect for wrong answer";
        break;
      default:
        type = "Sound effect for the end of quiz";
        break;
    }
    const effect = soundEffects.filter((elem) => {
      return elem.title === type;
    })[0];
    return effect.src;
  }

  static addListener() {
    document.addEventListener("click", (event) => {
      if (event.target && event.target instanceof HTMLElement) {
        if (event.target.closest(".effects__off")) {
          SoundEffects.toggleVolume(SoundEffects.audioElement);
        }
      }
    });

    document.querySelector(".effects__range")?.addEventListener("input", (event) => {
      SoundEffects.audioElement.volume = Number((event.target as HTMLInputElement).value);
      const volumeControl = document.querySelector(".effects__off") as HTMLElement;
      if (SoundEffects.audioElement.volume) {
        delete volumeControl.dataset.muted;
      } else {
        volumeControl.dataset.muted = "true";
      }
    });
  }

  static toggleVolume(audio: HTMLAudioElement) {
    const volumeRange = document.querySelector(".effects__range") as HTMLInputElement;
    const volumeControl = document.querySelector(".effects__off") as HTMLElement;
    const isMuted = audio.muted;
    if (audio.volume) {
      if (isMuted) {
        Object.assign(audio, {
          muted: false,
        });
        volumeRange.value = String(audio.volume);
        delete volumeControl.dataset.muted;
      } else {
        Object.assign(audio, {
          muted: true,
        });

        volumeRange.value = "0";
        volumeControl.dataset.muted = "true";
      }
    } else {
      Object.assign(audio, {
        volume: 0.5,
      });
      volumeRange.value = "0.5";
      delete volumeControl.dataset.muted;
    }
  }
}

export default SoundEffects;
