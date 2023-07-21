import "./header.scss";

class Header {
  constructor() {
    console.log(this);
  }

  static content() {
    return `<header>
        <h1>Art Quiz</h1>
        <nav class="nav-button">
          <button class="back-home-button" disabled>
            <i class='bx bx-home-alt'></i>
          </button>
          <button class="back-cat" disabled>
            <i class='bx bxs-widget'></i>
          </button>
          <label class="but-settings-toggle" for="settings__toggle">
          <i class='bx bx-cog' ></i>
          </label>
        </nav>
      </header>`;
  }
}

export default Header;
