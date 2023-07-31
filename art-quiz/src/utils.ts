import { localize } from "./i18n";
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
    localize("main");
  }
}

export async function fetchImage(url: string) {
  const image = await fetch(url);
  const blob = await image.blob();
  return URL.createObjectURL(blob);
}

export async function fetchImagesPack(images: ImageType[]) {
  const detailsData = images.map(async (i) => {
    return fetchImage(i.preview);
  });

  return Promise.all(detailsData);
}

export function createEncouragingLine(result: number, max: number) {
  const lines = {
    worst: { type: "worst", line: "Please try again. You can do better!" },
    bad: { type: "bad", line: "Nice try. Can we repeat it?" },
    neutral: { type: "neutral", line: "Almost done! One more time?" },
    great: { type: "great", line: "Well done! You are now an art professor!" },
  };

  if (result === 0) {
    return lines.worst;
  }

  const percentage = (result / max) * 100;

  if (percentage <= 30) {
    return lines.worst;
  }
  if (percentage > 30 && percentage <= 70) {
    return lines.bad;
  }
  if (percentage > 70 && percentage < 100) {
    return lines.neutral;
  }
  return lines.great;
}

export async function getImagesJson() {
  try {
    const response = await fetch("./assets/json/images.json");
    if (!response.ok) {
      throw new Error(`Error loading images: ${response.status}`);
    }
    const data = (await response.json()) as ImageType[];
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
}
