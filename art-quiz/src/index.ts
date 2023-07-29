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
import { getStartedIndexForImageSlice, sliceImagePack } from "./utils";
import images from "./images";
import "boxicons";
import "normalize.css";
import "./style.scss";
import "./i18n";
import AppStorage from "./modules/Storage";

class App {
  static addListener() {
    Header.addListener();
    Settings.addListener();
    Quiz.addListener();
    SoundEffects.addListener();
    Music.addListener();

    window.addEventListener("hashchange", (event) => {
      const main = document.querySelector("main");
      const location = window.location.hash.replace("#", "");
      locationHandler(location);

      if (/#paintings\/[0-9]+$/.test(event.oldURL) || /#artists\/[0-9]+$/.test(event.oldURL)) {
        Quiz.resetQuiz();
      }

      if (main) {
        Header.toggleNavDisability(location);
        if (location === "paintings" || location === "artists") {
          Quiz.type = location;
          main.innerHTML = Categories.setCategory(location);
        } else if (location === "") {
          main.innerHTML = App.createQuizTypes();
        } else if (/^paintings\/[0-9]+$/.test(location) || /^artists\/[0-9]+$/.test(location)) {
          const basicIndex = Number(location.split("/").slice(-1).join(" "));
          const { type } = Quiz;
          const startedIndexForImageSlice = getStartedIndexForImageSlice(type, basicIndex);
          if (startedIndexForImageSlice > 240) {
            window.location.href = "/#";
            return;
          }
          main.innerHTML = Quiz.setQuiz(type, startedIndexForImageSlice);
        } else if (
          /^paintings\/[0-9]+\/last-result$/.test(location) ||
          /^artists\/[0-9]+\/last-result$/.test(location)
        ) {
          const { type } = Quiz;
          const basicIndex = Number(location.split("/").splice(-2, 1).join(" "));
          const startedIndexForImageSlice = getStartedIndexForImageSlice(type, basicIndex);
          if (startedIndexForImageSlice > 240) {
            window.location.href = "/#";
            return;
          }
          const imagePack = sliceImagePack(startedIndexForImageSlice, 10, images);
          const results: QuizResultType = AppStorage.read("quiz-result");
          if (results && type && results[type] && results[type][startedIndexForImageSlice]) {
            main.innerHTML = DetailedResults.setDetailedResults(imagePack, results[type][startedIndexForImageSlice]);
          }
        } else {
          main.innerHTML = `<h2>404</h2>`;
        }
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
            <a href="#artists" title="Choose Artist category">
            <h2 id="Artists">Artists</h2>
            <p>Guess the author of the painting</p>
            </a>
          </li>
          <li>
            <a href="#paintings" title="Choose Paintings category">
            <h2 id="Paintings">Paintings</h2>
            <p>Guess the picture of the author</p>
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
