/* eslint-disable no-plusplus */
/*

function getAll() {
  return images.map((elem, i) => {
    const data = Object.assign(elem);
    data.preview = `https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/${i}.jpg`;
    data.full = `https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/${i}full.jpg`;
    delete data.imageNum;
    return data;
  });
}
*/

import { ImageType } from "./interfaces";

export function sliceImagePack(rangeStart: number, rangeEnd: number, images: ImageType[]) {
  return images.slice(rangeStart, rangeEnd + 1);
}

export function shuffle(arr: number[] | ImageType[]) {
  const copy = Object.assign(arr);
  for (let i = arr.length - 1; i > 0; i--) {
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
    i++;
  }

  shuffle(arr);

  return arr.slice(0, quantity);
}
