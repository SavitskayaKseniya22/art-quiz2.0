/*
import { Tag, nullCounts, aA, myStorage, slidePic } from "./questions.js";

const quizType = document.querySelector(".quiz-type");
export const mainBlock = document.querySelector("main");
const backHomeButton = document.querySelector(".back-home-button");

const backCat = document.querySelector(".back-cat");

window.onunload = function () {
  backHomeButton.setAttribute("disabled", "true");
  backCat.setAttribute("disabled", "true");
};
window.onload = function () {
  for (let i = 0; i < myStorage.length; i++) {
    const key = `li${myStorage.key(i)}`;
    const item = document.querySelector(key);
    if (item) {
      for (const elem of item.childNodes) {
        if (elem.classList.contains("numTotal")) {
          elem.remove();
        }
      }
      const numTotal = new Tag("span", `${myStorage.getItem(key)} / 10`, "", "numTotal");
      item.append(numTotal);
      numTotal.addEventListener("click", function () {
        backCat.removeAttribute("disabled");
        const ul = new Tag("ul", "", "", "detailedResult");
        ul.innerHTML = myStorage.getItem(`${myStorage.key(i)}`);
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
  }
};

export function shiftRes() {
  for (const item of document.querySelectorAll(".imgInRes")) {
    item.addEventListener("click", function () {
      item.nextSibling.style.opacity = "0";
      item.nextSibling.style.transition = "0.3s";
      item.nextSibling.classList.toggle("displayNone");
      if (!item.nextSibling.classList.contains("displayNone")) {
        setTimeout(() => {
          item.nextSibling.style.opacity = "1";
          item.nextSibling.style.transform = "translate(-20px, -30px)";
        }, 200);
        setTimeout(() => {
          item.nextSibling.style.transform = "translate(0px, 0px)";
        }, 600);
      }
    });
  }
}
document.addEventListener("click", function (event) {
  if (event.target.closest(".quiz-type h2")) {
    quizType.classList.add("displayNone");
    mainBlock.classList.add("main-not-centered");
    const list = document.querySelector(`.${event.target.id}`);

    list.classList.remove("displayNone");
    list.classList.add("activeCat");
    backHomeButton.removeAttribute("disabled");
  } else if (event.target.closest(".back-home-button")) {
    quizType.classList.remove("displayNone");
    mainBlock.classList.remove("main-not-centered");
    backHomeButton.setAttribute("disabled", "true");
    backCat.setAttribute("disabled", "true");
    makeAllCatInvis();
    makeAllQInvis();
    makeAllCatInactive();
    nullCounts(aA);
    if (document.querySelector(".detailedResult")) {
      document.querySelector(".detailedResult").remove();
    }
  } else if (event.target.closest(".back-cat")) {
    backCat.setAttribute("disabled", "true");
    makeAllQInvis();
    document.querySelector(".activeCat").classList.remove("displayNone");
    nullCounts(aA);
    if (document.querySelector(".detailedResult")) {
      document.querySelector(".detailedResult").remove();
    }
  }
});

export function makeCat(arr, catName) {
  const ul = new Tag("ul", "", "", "cat-title", catName, "displayNone");
  for (let i = 0; i < 12; i++) {
    let li;
    if (catName == "Artists") {
      li = new Tag("li", "", "", "cat1", "cat", `subCat${i}`);
    } else {
      li = new Tag("li", "", "", "cat2", "cat", `subCat${i}`);
    }

    const h3 = new Tag("h3", `Round ${i + 1}`, "");
    li.append(h3);

    const img = new Tag("img", "", "");
    img.style.filter = "blur(1px)";

    if (catName == "Artists") {
      img.src = arr[i];
    } else {
      img.src = arr[i + 12];
    }

    li.append(img);

    li.addEventListener("click", function (event) {
      if (!event.target.closest(".numTotal")) {
        makeAllQInvis();
        makeAllCatInvis();
        backCat.removeAttribute("disabled");
        let elem;
        if (catName == "Artists") {
          elem = document.querySelector(`ul.cat1.subCat${i}`);
        } else {
          elem = document.querySelector(`ul.cat2.subCat${i}`);
        }
        elem.classList.remove("displayNone");

        // анимация для вариантов ответа
        slidePic(elem.childNodes[0]);

        // таймер для первого

        if (myStorage.getItem("timer") == "true") {
          let timerBox;
          if (myStorage.getItem("settings__answer-time")) {
            timerBox = new Tag("span", JSON.parse(myStorage.getItem("settings__answer-time")), "", "timerBox");
            elem.childNodes[0].append(timerBox);
          } else {
            timerBox = new Tag("span", 15, "", "timerBox");
            elem.childNodes[0].append(timerBox);
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
    });

    ul.append(li);
  }
  mainBlock.append(ul);
}

export async function getImgs() {
  const arrImgs = [];
  for (let i = 0; i <= 240; i++) {
    arrImgs.push(
      `https://raw.githubusercontent.com/irinainina/image-data/dadea6e2555841b3f136d8ab07ce6474391f1a3f/img/${i}.jpg`,
    );
  }
  return arrImgs;
}

function makeAllQInvis() {
  const colection = document.querySelectorAll("ul.cat");
  for (const item of colection) {
    item.classList.add("displayNone");
  }
}

function makeAllCatInvis() {
  const colection = document.querySelectorAll("ul.cat-title");
  for (const item of colection) {
    item.classList.add("displayNone");
  }
}

function makeAllCatInactive() {
  const colection = document.querySelectorAll("ul.cat-title");
  for (const item of colection) {
    item.classList.remove("activeCat");
  }
}
*/
