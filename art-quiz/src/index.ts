import Header from "./modules/header/Header";
import Footer from "./modules/footer/Footer";
import Settings from "./modules/settings/Settings";
import Categories from "./modules/categories/Categories";
import ResultBar from "./modules/resultBar/ResultBar";
import Quiz from "./modules/quiz/Quiz";
import DetailedResults from "./modules/detailedResults/DetailedResults";
import Timer from "./modules/Timer";
import SoundEffects from "./modules/SoundEffects";
import Music from "./modules/Music";
import { locationHandler } from "./routes";
import { QuizResultType } from "./interfaces";
import { getStartedIndexForImageSlice, sliceImagePack, updateMainContent } from "./utils";
import images from "./images";
import "boxicons";
import "normalize.css";
import "./style.scss";
import AppStorage from "./modules/Storage";

class App {
  static isItResultPage(location: string) {
    return /^paintings\/[0-9]+\/last-result$/.test(location) || /^artists\/[0-9]+\/last-result$/.test(location);
  }

  static isItQuizPage(location: string) {
    return /^paintings\/[0-9]+$/.test(location) || /^artists\/[0-9]+$/.test(location);
  }

  static addListener() {
    Header.addListener();
    Settings.addListener();
    Quiz.addListener();
    SoundEffects.addListener();
    Music.addListener();

    window.addEventListener("hashchange", (event) => {
      const location = window.location.hash.replace("#", "");
      locationHandler(location);

      if (/#paintings\/[0-9]+$/.test(event.oldURL) || /#artists\/[0-9]+$/.test(event.oldURL)) {
        Quiz.resetQuiz();
      }

      Header.toggleNavDisability(location);
      if (location === "paintings" || location === "artists") {
        Quiz.type = location;
        updateMainContent(Categories.setCategory(location));
      } else if (location === "") {
        updateMainContent(App.createQuizTypes());
      } else if (App.isItQuizPage(location)) {
        const basicIndex = Number(location.split("/").slice(-1).join(" "));
        const { type } = Quiz;
        const startedIndexForImageSlice = getStartedIndexForImageSlice(type, basicIndex);
        if (startedIndexForImageSlice > 240) {
          window.location.href = "/#";
          return;
        }
        updateMainContent(Quiz.setQuiz(type, startedIndexForImageSlice));
      } else if (App.isItResultPage(location)) {
        const { type } = Quiz;
        const basicIndex = Number(location.split("/").splice(-2, 1).join(" "));
        const startedIndexForImageSlice = getStartedIndexForImageSlice(type, basicIndex);
        if (startedIndexForImageSlice > 240) {
          window.location.href = "/#";
          return;
        }
        const imagePack = sliceImagePack(startedIndexForImageSlice, 10, images);
        const results: QuizResultType = AppStorage.read("quiz-result");
        if (results && results[type] && results[type][startedIndexForImageSlice]) {
          updateMainContent(DetailedResults.setDetailedResults(imagePack, results[type][startedIndexForImageSlice]));
        }
      } else {
        updateMainContent(`<h2>404</h2>`);
      }
    });

    window.addEventListener("load", () => {
      if (window.location.hash !== "") {
        window.location.href = "/#";
      }
    });
  }

  static createQuizTypes() {
    return `<ul class="quiz-type">
          <li>
            <a href="#artists" title="Choose Artist category" data-i18n="[title]categories.artists.tip" >
            <h2 id="Artists" data-i18n="categories.artists.title">Artists</h2>
            <p data-i18n="categories.artists.addition">Guess the author of the painting</p>
            </a>
          </li>
          <li>
            <a href="#paintings" title="Choose Paintings category" data-i18n="[title]categories.paintings.title">
            <h2 id="Paintings" data-i18n="categories.paintings.title">Paintings</h2>
            <p data-i18n="categories.paintings.addition">Guess the picture of the author</p>
            </a>
          </li>
        </ul>
    `;
  }

  static content() {
    return `
    ${Header.content()}
      <main>
        ${App.createQuizTypes()}
      </main>
      ${Settings.content()}
      ${ResultBar.content()}
      ${Timer.content()}
      ${Footer.content()}
    `;
  }

  render() {
    const body = document.querySelector("body");
    if (body) {
      body.insertAdjacentHTML("afterbegin", App.content());
      body.insertAdjacentElement("beforeend", SoundEffects.audioElement);
      body.insertAdjacentElement("beforeend", Music.audioElement);
    }
    App.addListener();
    return this;
  }
}

new App().render();
