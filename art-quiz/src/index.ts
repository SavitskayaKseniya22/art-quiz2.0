// import { makeCat, getImgs, mainBlock } from "./category";
// import { fillCat, getAllImages, QuestionArtist, QuestionPaintings } from "./questions";
import Header from "./modules/header/Header";
import Footer from "./modules/footer/Footer";
import Settings from "./modules/settings/Settings";
import "boxicons";
import "normalize.css";
import "./style.scss";
import "./i18n";
import Categories from "./modules/categories/Categories";
import images from "./images";

class App {
  settings: Settings;

  constructor() {
    this.settings = new Settings();
  }

  addListener() {
    this.settings.addListener();

    window.addEventListener("hashchange", () => {
      const { hash } = document.location;
      if (hash === "#paintings" || hash === "#artists") {
        const page = new Categories(hash, images);
        page.addListener();
        const main = document.querySelector("main");
        if (main) {
          main.innerHTML = page.content();
        }
      }
    });

    return this;
  }

  content() {
    return `
    ${Header.content()}
      <main>
        <ul class="quiz-type">
          <li>
            <h2 id="Artists"><a href="#artists">Artists</a></h2>
          </li>
          <li>
            <h2 id="Paintings"><a href="#paintings">Paintings</a></h2>
          </li>
        </ul>
      </main>
      ${this.settings.content()}
      ${Footer.content()}
    `;
  }

  render(container: HTMLBodyElement) {
    container.insertAdjacentHTML("afterbegin", this.content());
    return this;
  }
}
/*
getImgs().then((value) => {
  makeCat(value, "Artists");
  makeCat(value, "Paintings");
  getAllImages(value, images).then((res) => {
    fillCat(mainBlock, res, QuestionArtist, "textContent", 0);
    fillCat(mainBlock, res, QuestionPaintings, "src", 120);
  });
});

new Settings(); */

const body = document.querySelector("body");
if (body) {
  new App().render(body).addListener();
}
