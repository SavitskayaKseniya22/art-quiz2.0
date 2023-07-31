import Audio from "./Audio";
import AppStorage from "./Storage";

class Music {
  static isEnabled: boolean = AppStorage.read("IsMusicEnabled") || false;

  static audioElement: HTMLAudioElement = Audio.createAudioElement({
    volume: AppStorage.read("musicVolume") ?? 0.5,
    loop: "loop",
    src: "../assets/sounds/music-theme.mp3",
  });

  static addListener() {
    window.addEventListener("beforeunload", () => {
      AppStorage.write("musicVolume", Music.audioElement.volume);
    });

    document.addEventListener("click", (event) => {
      if (event.target && event.target instanceof HTMLElement) {
        if (event.target.closest(".music__off")) {
          const range = document.querySelector(".music__range") as HTMLInputElement;
          const control = document.querySelector(".music__off") as HTMLElement;
          Audio.toggleVolume(Music.audioElement, control, range);
        }
      }
    });

    document.querySelector(".music__range")?.addEventListener("input", (event) => {
      Music.audioElement.volume = Number((event.target as HTMLInputElement).value);
      const volumeControl = document.querySelector(".music__off") as HTMLElement;
      volumeControl.setAttribute("data-muted", String(!Music.audioElement.volume));
    });

    document.querySelector("#settings__music-toggle")?.addEventListener("change", (event) => {
      const { checked } = event.target as HTMLInputElement;
      const musicContainer = document.querySelector(".settings__music");
      Music.isEnabled = checked;
      musicContainer?.setAttribute("data-disabled", String(!Music.isEnabled));
      AppStorage.write("IsMusicEnabled", Music.isEnabled);
      if (Music.isEnabled) {
        Music.audioElement.play();
      } else {
        Music.audioElement.pause();
      }
    });
  }

  static content() {
    return `<li class="settings__music" data-disabled=${!Music.isEnabled}>
      <h4 data-i18n="settings.titles.musicVol">Volume of music</h4>
      <div class="settings__block-content">
        <button class="music__off" ${`data-muted="${!Music.audioElement.volume}"`}>
          <i class='bx bx-volume-full'></i>
        </button>
        <input type="range" class="music__range" min="0" max="1" step="0.1" value=${Music.audioElement.volume}
        } />
      </div>
      ${Music.audioElement.outerHTML}
    </li>
    <li class="settings__music-toggle">
      <h4 data-i18n="settings.titles.music">Music</h4>
      <div class="settings__block-content">
        <input type="checkbox" id="settings__music-toggle" ${Music.isEnabled ? "checked" : ""} />
        <label for="settings__music-toggle" name="off" data-i18n="settings.off">Off</label>
        <label for="settings__music-toggle" name="on" data-i18n="settings.on">On</label>
      </div>
    </li>`;
  }
}

export default Music;
