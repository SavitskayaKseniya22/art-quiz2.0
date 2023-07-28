import Quiz from "../quiz/Quiz";
import "./header.scss";

class Header {
  static addListener() {
    document.addEventListener("click", (event) => {
      const { target } = event;
      if (target && target instanceof HTMLElement) {
        if (target.closest(".nav__cat")) {
          const { type } = Quiz;
          window.location.href = `/#${type}`;
        }
      }
    });
  }

  static toggleNavDisability(location: string) {
    if (location === "") {
      document.querySelector(".nav__home")?.setAttribute("data-disabled", "disabled");
      document.querySelector(".nav__cat")?.setAttribute("data-disabled", "disabled");
    } else if (location === "paintings" || location === "artists") {
      document.querySelector(".nav__home")?.removeAttribute("data-disabled");
      document.querySelector(".nav__cat")?.setAttribute("data-disabled", "disabled");
    } else {
      document.querySelector(".nav__home")?.removeAttribute("data-disabled");
      document.querySelector(".nav__cat")?.removeAttribute("data-disabled");
    }
  }

  static content() {
    return `<header class="header-main">
        <h1>Art Quiz</h1>
        <nav class="nav">
          <a class="nav__home" href="/#" title="Back to home page" data-disabled="true">
            <i class='bx bx-home-alt'></i>
          </a>
          <button class="nav__cat"  title="Back to category page" data-disabled="true">
            <i class='bx bxs-widget'></i>
          </button>
          <label class="nav__settings" for="settings__toggle" title="Settings">
          <i class='bx bx-cog' ></i>
          </label>
        </nav>
      </header>`;
  }
}

export default Header;
