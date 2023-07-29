import soundEffects from "../assets/json/playlist.json";
import Audio from "./Audio";
import AppStorage from "./Storage";

class SoundEffects {
  static isEnabled: boolean = AppStorage.read("isSoundEffectsEnabled") || false;

  static audioElement: HTMLAudioElement = Audio.createAudioElement({
    volume: AppStorage.read("effectVolume") ?? 0.5,
    onended: () => {
      SoundEffects.audioElement.removeAttribute("src");
    },
  });

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
    window.addEventListener("beforeunload", () => {
      AppStorage.write("effectVolume", SoundEffects.audioElement.volume);
    });

    document.addEventListener("click", (event) => {
      if (event.target && event.target instanceof HTMLElement) {
        if (event.target.closest(".effects__off")) {
          const range = document.querySelector(".effects__range") as HTMLInputElement;
          const control = document.querySelector(".effects__off") as HTMLElement;
          Audio.toggleVolume(SoundEffects.audioElement, control, range);
        }
      }
    });

    document.querySelector(".effects__range")?.addEventListener("input", (event) => {
      SoundEffects.audioElement.volume = Number((event.target as HTMLInputElement).value);
      const volumeControl = document.querySelector(".effects__off") as HTMLElement;
      volumeControl.setAttribute("data-muted", String(!SoundEffects.audioElement.volume));
    });

    document.querySelector("#settings__effects-toggle")?.addEventListener("change", (event) => {
      const { checked } = event.target as HTMLInputElement;
      const soundContainer = document.querySelector(".settings__effects");
      SoundEffects.isEnabled = checked;
      soundContainer?.setAttribute("data-disabled", String(!SoundEffects.isEnabled));
      AppStorage.write("isSoundEffectsEnabled", SoundEffects.isEnabled);
    });
  }

  static content() {
    return `
    <li class="settings__effects" data-disabled=${!SoundEffects.isEnabled}>
      <h4>Volume of sound effects</h4>
      <div class="settings__block-content">
        <button class="effects__off" ${`data-muted="${!SoundEffects.audioElement.volume}"`}>
          <i class='bx bx-volume-full'></i>
        </button>
        <input type="range" class="effects__range" min="0" max="1" step="0.1" value=${
          SoundEffects.audioElement.volume
        } />
      </div>
    </li>

    <li class="settings__effects-toggle">
      <h4>Sound effects</h4>
      <div class="settings__block-content">
        <input type="checkbox" id="settings__effects-toggle" ${SoundEffects.isEnabled ? "checked" : ""} />
        <label for="settings__effects-toggle" name="off">Off</label>
        <label for="settings__effects-toggle" name="on">On</label>
      </div>
    </li>
    `;
  }
}

export default SoundEffects;
