import { makeCat, getImgs, mainBlock } from "./category";
import images from "./images";
import { fillCat, getAllImages, QuestionArtist, QuestionPaintings } from "./questions";
import "boxicons";
import "normalize.css";
import "./style.scss";
import Header from "./modules/header/Header";
import Footer from "./modules/footer/Footer";

class App {
  constructor() {
    console.log(this);
  }

  addListener() {
    return this;
  }

  static content() {
    return `
    ${Header.content()}
      <main>
        <ul class="quiz-type">
          <li>
            <h2 id="Artists">Artists</h2>
          </li>
          <li>
            <h2 id="Paintings">Paintings</h2>
          </li>
        </ul>
      </main>
      ${Footer.content()}
    `;
  }

  render(container: HTMLBodyElement) {
    container.insertAdjacentHTML("afterbegin", App.content());
    return this;
  }
}

getImgs().then((value) => {
  makeCat(value, "Artists");
  makeCat(value, "Paintings");
  getAllImages(value, images).then((res) => {
    fillCat(mainBlock, res, QuestionArtist, "textContent", 0);
    fillCat(mainBlock, res, QuestionPaintings, "src", 120);
  });
});

// new Settings();

const body = document.querySelector("body");
if (body) {
  new App().render(body).addListener();
}
