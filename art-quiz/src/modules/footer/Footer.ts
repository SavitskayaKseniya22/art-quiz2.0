import "./footer.scss";

class Footer {
  constructor() {
    console.log(this);
  }

  static content() {
    return `<footer>
          <div class="nameCourse">
            <a href="https://rs.school/js/" target="_blank"
              ><img src="./images/rs_school_js.svg" alt="link" width="100"
            /></a>
          </div>
          <div>
            <a href="https://github.com/SavitskayaKseniya22" target="_blank">KSENIYA SAVITSKAYA</a>
          </div>
          <div>© 2023</div>
      </footer>`;
  }
}

export default Footer;
