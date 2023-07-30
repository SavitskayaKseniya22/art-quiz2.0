import { translateContent } from "./i18n";
import { ImageType } from "./interfaces";

export function sliceImagePack(rangeStart: number, count: number, images: ImageType[]) {
  const imagesCopy = JSON.parse(JSON.stringify(images));
  return imagesCopy.splice(rangeStart, count);
}

export function shuffle(arr: number[] | ImageType[]) {
  const copy = Object.assign(arr) as ImageType[];
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export function random(max: number, quantity: number) {
  const arr = [];
  let i = 0;
  while (i < max) {
    arr.push(i);
    i += 1;
  }

  shuffle(arr);

  return arr.slice(0, quantity);
}

export function checkTypeOfQuiz() {
  const location = window.location.hash.replace("#", "");
  return (location.includes("paintings") && "paintings") || (location.includes("artists") && "artists") || undefined;
}

export function getStartedIndexForImageSlice(type: "paintings" | "artists", basicIndex: number) {
  return type === "paintings" ? (basicIndex + 12) * 10 : basicIndex * 10;
}

export function updateMainContent(content: string) {
  const main = document.querySelector("main");
  if (main) {
    main.innerHTML = content;
    translateContent();
  }
}
