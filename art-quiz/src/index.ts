import Header from "./modules/header/Header";
import Footer from "./modules/footer/Footer";
import Settings from "./modules/settings/Settings";
import "boxicons";
import "normalize.css";
import "./style.scss";
import "./i18n";
import Categories from "./modules/categories/Categories";
import { locationHandler } from "./routes";
import Quiz from "./modules/quiz/Quiz";
import ResultBar from "./modules/resultBar/ResultBar";

class App {
  settings: Settings;

  category: Categories;

  quiz: Quiz;

  constructor() {
    this.settings = new Settings();
    this.addListener();
    this.category = new Categories();
    this.quiz = new Quiz();
  }

  addListener() {
    Header.addListener();
    this.settings.addListener();

    window.addEventListener("hashchange", () => {
      const main = document.querySelector("main");
      const location = window.location.hash.replace("#", "");
      locationHandler(location);
      if (main) {
        Header.toggleNavDisability(location);
        if (location === "paintings" || location === "artists") {
          main.innerHTML = this.category.setCategory(location);
          this.quiz.resetQuiz();
        } else if (location === "") {
          const content = App.createQuizTypes();
          main.innerHTML = content;
          this.quiz.resetQuiz();
        } else if (/^paintings\/[0-9]+$/.test(location)) {
          const indexOfQuiz = Number(location.split("/").slice(-1).join(" "));
          if (indexOfQuiz > 12) {
            window.location.href = "/#";
            return;
          }
          main.innerHTML = this.quiz.setQuiz("paintings", (indexOfQuiz + 12) * 10);
        } else if (/^artists\/[0-9]+$/.test(location)) {
          const indexOfQuiz = Number(location.split("/").slice(-1).join(" "));
          if (indexOfQuiz > 24) {
            window.location.href = "/#";
            return;
          }
          main.innerHTML = this.quiz.setQuiz("artists", indexOfQuiz * 10);
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

    return this;
  }

  static createQuizTypes() {
    return `<ul class="quiz-type">
          <li>
            <a href="#artists">
            <h2 id="Artists">Artists</h2>
            <p>Guess the author of the painting</p>
            </a>
          </li>
          <li>
            <a href="#paintings">
            <h2 id="Paintings">Paintings</h2>
            <p>Guess the picture of the author</p>
            </a>
          </li>
        </ul>
    `;
  }

  content() {
    return `
    ${Header.content()}
      <main>
        ${App.createQuizTypes()}
      </main>
      ${this.settings.content()}
      ${ResultBar.content()}
      ${Footer.content()}
    `;
  }

  render() {
    const body = document.querySelector("body");
    if (body) {
      body.insertAdjacentHTML("afterbegin", this.content());
    }

    return this;
  }
}

new App().render();
