import "./styles.scss";
import { makeCat, getImgs, mainBlock } from "./category";
import images from "./images";
import { Settings } from "./settings";
import { fillCat, getAllImages, QuestionArtist, QuestionPaintings } from "./questions";

getImgs().then((value) => {
  makeCat(value, "Artists");
  makeCat(value, "Paintings");
  getAllImages(value, images).then((res) => {
    fillCat(mainBlock, res, QuestionArtist, "textContent", 0);
    fillCat(mainBlock, res, QuestionPaintings, "src", 120);
  });
});

new Settings();
