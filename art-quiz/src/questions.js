/*
import { mainBlock, shiftRes } from "./category.js";
import { soundEffects } from "./settings";

export let aA = 0;

export const myStorage = window.localStorage;

class Picture {
  constructor(pic, desc) {
    this.pic = pic;
    this.desc = desc;
  }

  get author() {
    return this.desc.author;
  }

  get name() {
    return this.desc.name;
  }

  get year() {
    return this.desc.year;
  }
}

export async function getAllImages(arrPic, arrDesc) {
  const allImages = [];
  for (let i = 0; i < arrPic.length; i++) {
    allImages.push(new Picture(arrPic[i], arrDesc[i]));
  }
  return allImages;
}

export class Tag {
  constructor(tagName, content, src, ...args) {
    this._tag = document.createElement(tagName);
    if (content) {
      this._tag.textContent = content;
    }
    if (src) {
      this._tag.src = src;
    }
    if (args) {
      for (const elem of args) {
        this._tag.classList.add(elem);
      }
    }
    return this._tag;
  }
}

export class QuestionPaintings {
  constructor(obj, block, k) {
    this.obj = obj[k];
    this.pic = this.obj.pic;
    this.desc = this.obj.desc;
    this.author = this.obj.desc.author;
    this.liArr = [];
    this.correct = this.pic;
    const questionContainer = new Tag("li", "", "", "questionCard", "questionCardPaintings");
    if (block.childNodes.length != 0) {
      questionContainer.classList.add("displayNone");
    }
    const h2 = new Tag("h2", `Which of these paintings did ${this.author} paint?`, "");
    questionContainer.append(h2);

    let filteredObj = obj.slice().filter((elem) => this.author != elem.desc.author);
    for (let i = 0; i < 4; i++) {
      if (i == 0) {
        this.liArr.push(new Tag("img", "", this.pic));
      } else {
        const randomNum = random(filteredObj.length);
        this.liArr.push(new Tag("img", "", filteredObj[randomNum].pic));
        filteredObj = filteredObj.slice().filter((elem) => filteredObj[randomNum].desc.author != elem.desc.author);
      }
    }
    shuffle(this.liArr);
    for (const elem of this.liArr) {
      questionContainer.append(elem);
    }
    block.append(questionContainer);
  }
}

export class QuestionArtist {
  constructor(obj, block, k) {
    this.obj = obj[k];
    this.pic = this.obj.pic;
    this.desc = this.obj.desc;
    this.author = this.obj.desc.author;
    this.liArr = [];
    this.correct = this.author;
    const questionContainer = new Tag("li", "", "", "questionCard");
    if (block.childNodes.length != 0) {
      questionContainer.classList.add("displayNone");
    }
    const h2 = new Tag("h2", "Who is the author of the painting?", "");
    const img = new Tag("img", "", this.pic);

    const ul = new Tag("ul", "", "", "possibleAnswers");
    questionContainer.append(h2, img, ul);
    let filteredObj = obj.slice().filter((elem) => this.author != elem.desc.author);

    for (let i = 0; i < 4; i++) {
      if (i == 0) {
        this.liArr.push(new Tag("li", this.author, ""));
      } else {
        const randomNum = random(filteredObj.length);
        this.liArr.push(new Tag("li", filteredObj[randomNum].desc.author, ""));
        filteredObj = filteredObj.slice().filter((item) => filteredObj[randomNum].desc.author != item.desc.author);
      }
    }
    shuffle(this.liArr);
    for (const elem of this.liArr) {
      elem.classList.add("possibleAnswerElem");
      ul.append(elem);
    }

    block.append(questionContainer);
  }
}

export function fillCat(block, arrImgs, Class, arg, num) {
  let k = num;
  let l;
  if (num == 0) {
    l = 1;
  } else {
    l = 2;
  }
  for (let j = 0; j < 12; j++) {
    const ul = new Tag("ul", "", "", `cat${l}`, "cat", `subCat${j}`, "displayNone");
    fillAllCat(arrImgs, k, ul, Class, arg);
    k += 10;
    block.append(ul);
  }
}

function fillAllCat(arrImgs, k, block, Class, atr) {
  aA = 0;
  const indicators = new Tag("ul", "", "", "indicators");
  for (let i = 0; i < 10; i++) {
    indicators.append(new Tag("li"));
  }
  const objCat = [];
  for (let i = 0; i < 10; i++) {
    const obj = new Class(arrImgs, block, k);
    obj.number = i;
    k++;
    for (const elem of obj.liArr) {
      elem.addEventListener("click", function (event) {
        printCard(elem, obj, event.target[atr] == obj.correct, getNext, aA).then((res) => {
          aA++;
          obj.result = event.target[atr] == obj.correct;
          objCat.push(obj);
          const indicatorsArr = document.querySelector(
            `.${block.classList[0]}.${block.classList[1]}.${block.classList[2]} .indicators`,
          );
          if (obj.result) {
            indicatorsArr.childNodes[obj.number].style.backgroundColor = "GREEN";
          } else {
            indicatorsArr.childNodes[obj.number].style.backgroundColor = "RED";
          }
          if (res.querySelector(".but-total")) {
            res.querySelector(".but-total").addEventListener("click", function () {
              getNext();
              indicatorsArr.classList.add("displayNone");
              const trueAnswers = document.querySelectorAll(".trueAnswer");
              printTotalCard(trueAnswers.length, block).then(() => {
                document.addEventListener("click", function (event) {
                  if (
                    event.target.closest(".back-home-button") ||
                    event.target.closest(".back-cat") ||
                    event.target.closest(".but-repeate")
                  ) {
                    clearCat(block);
                    fillAllCat(arrImgs, k - 10, block, Class, atr);
                    document.querySelector(
                      `li.${block.classList[0]}.${block.classList[1]}.${block.classList[2]} img`,
                    ).style.filter = "blur(0px)";
                  }
                  if (event.target.closest(".but-repeate")) {
                    block.childNodes[0].classList.remove("displayNone");
                    slidePic(block.childNodes[0]);
                  }
                });
                saveDetailedResult(objCat, block);
                makePropStorage(block, trueAnswers.length);
              });
            });
          }
        });
        document.addEventListener("click", function (event) {
          if (
            event.target.closest(".back-home-button") ||
            event.target.closest(".back-cat") ||
            event.target.closest(".but-repeate")
          ) {
            clearCat(block);
            fillAllCat(arrImgs, k - 10, block);
          }
        });
      });
    }
  }
  block.append(indicators);
}

function saveDetailedResult(arr, block) {
  const ul = new Tag("div", "", "", "detailedResult", "displayNone");
  for (const item of arr) {
    const itemResult = new Tag("li", "", "", "itemResult");
    const imgInRes = new Tag("img", "", item.pic, "imgInRes");
    const itemTitle = new Tag("h3", `"${item.desc.name}"`, "", "itemTitle");
    const itemAuthor = new Tag("p", item.author, "", "itemAuthor");
    const itemYear = new Tag("span", item.desc.year, "", "itemYear");
    const containerResult = new Tag("div", "", "", "containerResult", "displayNone");
    containerResult.append(itemTitle, itemAuthor, itemYear);

    const a = new Tag("a", "", "", "linkFullSize");
    a.target = "_blank";
    const imgA = new Tag("img", "", "./images/arrow_corner.svg");
    a.append(imgA);

    itemResult.append(imgInRes, containerResult, a);

    ul.append(itemResult);
    if (item.result == false) {
      itemResult.style.opacity = "0.8";
      imgInRes.style.filter = "grayscale(1)";
    }
  }
  const itemCloseButtom = new Tag("button", "", "", "itemCloseButtom");
  const itemCloseButtomImg = new Tag("img", "", "./images/crossWhite.png", "itemCloseButtomImg");
  itemCloseButtom.append(itemCloseButtomImg);
  ul.append(itemCloseButtom);
  myStorage.setItem(`.${block.classList[0]}.${block.classList[1]}.${block.classList[2]}`, ul.innerHTML);
}

function clearCat(elem) {
  elem.innerHTML = "";
}

export function nullCounts() {
  for (let item of arguments) {
    item = 0;
  }
}

async function printTotalCard(rightAnsw, block) {
  const div = new Tag("div", "", "", "totalCard");
  const h3 = new Tag("h3", "Round completed!", "");
  const buttonHome = new Tag("button", "", "", "back-home-button");
  const imgHome = new Tag("img", "", "./images/home-house-building-estate-property-real-furniture-svgrepo-com.svg");
  imgHome.alt = "home";
  buttonHome.append(imgHome);
  const imgCat = new Tag("img", "", "./images/menu-navigation-direction-arrow-location-map-svgrepo-com.svg");
  imgCat.alt = "category";
  const buttonCat = new Tag("button", "", "", "back-cat");
  buttonCat.append(imgCat);
  const buttonRepeate = new Tag("button", "", "", "but-repeate");
  const imgRepeate = new Tag("img", "", "./images/arrow_repeat.svg");
  buttonRepeate.append(imgRepeate);
  const audio = new Tag("audio", "", soundEffects.endOfRound, "soundsEffect");

  let p;
  if (rightAnsw <= 3) {
    p = new Tag("p", "Please try again. You can do better!", "");
  } else if (rightAnsw > 3 && rightAnsw <= 7) {
    p = new Tag("p", "Nice try. Can we repeat it?", "");
  } else if (rightAnsw > 7 && rightAnsw < 10) {
    p = new Tag("p", "Almost done! One more time?", "");
  } else if (rightAnsw == 10) {
    p = new Tag("p", "Well done! You are now an art professor!", "");
  }
  const span = new Tag("span", `${rightAnsw} correct answers out of 10`, "");
  div.append(h3, p, span, buttonHome, buttonRepeate, buttonCat);

  if (myStorage.getItem("soundEffects")) {
    if (JSON.parse(myStorage.getItem("soundEffects")) == true) {
      div.append(audio);
      audio.setAttribute("autoplay", "autoplay");
    }
  }

  if (myStorage.getItem("volumeSoundEffects")) {
    audio.volume = JSON.parse(myStorage.getItem("volumeSoundEffects"));
  } else {
    audio.volume = "0.5";
  }

  block.append(div);
  return div;
}

function makePropStorage(block, rightAnsw) {
  const node = document.querySelector(`li.${block.classList[0]}.${block.classList[1]}.${block.classList[2]}`);
  myStorage.setItem(`li.${block.classList[0]}.${block.classList[1]}.${block.classList[2]}`, rightAnsw);

  for (const item of node.childNodes) {
    if (item.classList.contains("numTotal")) {
      item.remove();
    }
  }
  const numTotal = new Tag("span", `${rightAnsw} / 10`, "", "numTotal");
  node.append(numTotal);
  numTotal.addEventListener("click", function () {
    document.querySelector(".back-cat").removeAttribute("disabled");
    const ul = new Tag("ul", "", "", "detailedResult");
    const str = `.${block.classList[0]}.${block.classList[1]}.${block.classList[2]}`;
    ul.innerHTML = myStorage.getItem(str);
    for (const item of mainBlock.childNodes) {
      if (item.tagName) {
        item.classList.add("displayNone");
      }
    }
    mainBlock.append(ul);

    shiftRes();
    for (const item of document.querySelectorAll(".detailedResult .linkFullSize")) {
      item.addEventListener("click", function () {
        const endI = item.parentNode.childNodes[0].src.lastIndexOf(".");
        const startI = item.parentNode.childNodes[0].src.lastIndexOf("/");
        const num = item.parentNode.childNodes[0].src.slice(startI + 1, endI);
        item.href = `https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/${num}full.jpg`;
      });
    }

    document.addEventListener("click", function (event) {
      if (
        event.target.closest(".back-home-button") ||
        event.target.closest(".back-cat") ||
        event.target.closest(".itemCloseButtomImg")
      ) {
        document.querySelector(".detailedResult").remove();
        document.querySelector(".activeCat").classList.remove("displayNone");
      }
    });
  });
}

async function printCard(elem, obj, result, func, aA) {
  for (const item of elem.closest(".questionCard").childNodes) {
    item.classList.add("displayNone");
  }
  return new Card(obj, elem.closest(".questionCard"), result, func, aA);
}

function getNext() {
  const tempDiv = document.querySelector(".tempDiv");
  tempDiv.parentNode.classList.add("displayNone");
  tempDiv.parentNode.classList.add("complete");
  if (tempDiv.parentNode.nextSibling) {
    tempDiv.parentNode.nextSibling.classList.remove("displayNone");
    // анимация для вариантов ответа
    slidePic(tempDiv.parentNode.nextSibling);

    // таймер для всех кроме первого
    if (myStorage.getItem("timer") == "true") {
      let timerBox;
      if (myStorage.getItem("settings__answer-time")) {
        timerBox = new Tag("span", JSON.parse(myStorage.getItem("settings__answer-time")), "", "timerBox");
        tempDiv.parentNode.nextSibling.append(timerBox);
      } else {
        timerBox = new Tag("span", 15, "", "timerBox");
        tempDiv.parentNode.nextSibling.append(timerBox);
      }
      const timeDown = setInterval(() => {
        let num = Number(timerBox.textContent);
        num--;
        timerBox.textContent = num;
        if (num == 0) {
          clearInterval(timeDown);
          timerBox.remove();
        }
        document.addEventListener("click", function (event) {
          if (event.target.closest(".back-home-button") || event.target.closest(".back-cat")) {
            clearInterval(timeDown);
            timerBox.remove();
          }
        });
      }, 1000);
    }
  }
  tempDiv.remove();
}

export function slidePic(cont) {
  const img = cont.childNodes[1];
  setTimeout(() => {
    img.style.opacity = "1";
    img.style.transform = "translateX(500px)";
  }, 300);

  const activeCat = document.querySelector(".activeCat");
  if (activeCat.classList.contains("Paintings")) {
    const imgSecond = cont.childNodes[2];
    const imgThird = cont.childNodes[3];
    const imgFourth = cont.childNodes[4];
    setTimeout(() => {
      imgSecond.style.opacity = "1";
      imgSecond.style.transform = "translateX(500px)";
    }, 500);
    setTimeout(() => {
      imgThird.style.opacity = "1";
      imgThird.style.transform = "translateX(500px)";
    }, 800);
    setTimeout(() => {
      imgFourth.style.opacity = "1";
      imgFourth.style.transform = "translateX(500px)";
    }, 1100);
  }
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function random(max) {
  const arr = [];
  let i = 0;
  while (i < max) {
    arr.push(i);
    i++;
  }
  shuffle(arr);
  return arr[0];
}

class Card {
  constructor(obj, block, result, func, aA) {
    this.pic = obj.pic;
    this.author = obj.desc.author;
    this.name = obj.desc.name;
    this.year = obj.desc.year;
    this.func = func;
    this.imageNum = obj.desc.imageNum;
    const div = new Tag("div", "", "", "tempDiv");
    div.style.opacity = "0";
    setTimeout(() => {
      div.style.opacity = "1";
      div.style.transform = "scale(0.7)";
    }, 200);
    setTimeout(() => {
      div.style.transform = "scale(1)";
    }, 700);
    const a = document.createElement("a");
    const img = new Tag("img", "", this.pic);
    a.append(img);
    a.target = "_blank";
    img.addEventListener("click", function () {
      a.href = `https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/full/${obj.desc.imageNum}full.jpg`;
    });

    const divCont = new Tag("div", "", "", "tempDivCont");
    const h2 = new Tag("h2", `"${this.name}"`, "");
    const h3 = new Tag("h3", this.author, "");
    const span = new Tag("span", this.year, "");
    const imgResult = new Tag("img", "", "", "imgResult");
    let audio;
    if (result == true) {
      block.classList.add("trueAnswer");
      audio = new Tag("audio", "", soundEffects.correctAnswer, "soundsEffect");

      setTimeout(() => {
        imgResult.style.backgroundColor = "GREEN";
        imgResult.style.transform = "scale(2)";
      }, 700);
      imgResult.src = "./images/correct-right-arrow-direction-left-down-up-svgrepo-com.svg";
    } else {
      block.classList.add("falseAnswer");
      audio = new Tag("audio", "", soundEffects.wrongAnswer, "soundsEffect");

      setTimeout(() => {
        imgResult.style.backgroundColor = "RED";
        imgResult.style.transform = "scale(2)";
      }, 700);
      imgResult.src = "./images/wrong-delete-remove-trash-minus-cancel-close-svgrepo-com.svg";
    }

    if (aA != 9) {
      const nextQButton = new Tag("button", "", "", "nextQButton");
      nextQButton.addEventListener("click", this.func);
      const nextQImage = new Tag("img", "", "./images/next-arrow-direction-down-left-up-right-svgrepo-com.svg");
      nextQButton.style.transition = ".3s";
      nextQButton.append(nextQImage);
      divCont.append(nextQButton);
      slowSlide(nextQButton);
    } else {
      const buttonTotal = new Tag("button", "", "", "but-total");
      const imgTotal = new Tag("img", "", "./images/clipboard-check-line-svgrepo-com.svg");
      buttonTotal.style.transition = ".3s";
      buttonTotal.append(imgTotal);
      divCont.append(buttonTotal);
      slowSlide(buttonTotal);
    }
    divCont.append(h2, h3, span, imgResult);

    if (myStorage.getItem("soundEffects")) {
      if (JSON.parse(myStorage.getItem("soundEffects")) == true) {
        divCont.append(audio);
        audio.setAttribute("autoplay", "autoplay");
      }
    }
    if (myStorage.getItem("volumeSoundEffects")) {
      audio.volume = JSON.parse(myStorage.getItem("volumeSoundEffects"));
    } else {
      audio.volume = 0.5;
    }

    div.append(a, divCont);
    block.append(div);
    return div;
  }
}

function slowSlide(item) {
  setTimeout(() => {
    item.style.transform = "scale(2) translateX(20px) ";
  }, 1000);
  setTimeout(() => {
    item.style.transform = "scale(2)";
  }, 1200);
}
*/
