import "./header.scss";

class Header {
  constructor() {
    console.log(this);
  }

  static content() {
    return `<header>
        <h1>Art Quiz</h1>
        <nav class="nav-button">
          <a class="back-home-button" href="/">
            <i class='bx bx-home-alt'></i>
          </a>
          <a class="back-cat" href="/">
            <i class='bx bxs-widget'></i>
          </a>
          <label class="but-settings-toggle" for="settings__toggle">
          <i class='bx bx-cog' ></i>
          </label>
        </nav>
      </header>`;
  }
}

export default Header;
