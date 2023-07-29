import { AudioProperties } from "../interfaces";

class Audio {
  static createAudioElement(properties: AudioProperties) {
    const element = Object.assign(document.createElement("audio"), properties);
    const context = new AudioContext();
    const track = context.createMediaElementSource(element);
    track.connect(context.destination);
    return element;
  }

  static toggleVolume(audio: HTMLAudioElement, control: HTMLElement, range: HTMLInputElement) {
    const isMuted = audio.muted;
    if (audio.volume) {
      if (isMuted) {
        Object.assign(audio, {
          muted: false,
        });
        Object.assign(range, {
          value: audio.volume,
        });
        control.removeAttribute("data-muted");
      } else {
        Object.assign(audio, {
          muted: true,
        });
        Object.assign(range, {
          value: 0,
        });
        control.setAttribute("data-muted", "true");
      }
    } else {
      Object.assign(audio, {
        volume: 0.5,
      });
      Object.assign(range, {
        value: 0.5,
      });
      control.removeAttribute("data-muted");
    }
  }
}

export default Audio;
