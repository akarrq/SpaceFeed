import { renderCardsList } from "./cards";
import { btnListener, articleCollector } from "./handleLibrary";
import getData from "./api";
import saveName from "./name";
import spinner from "./spinner";

import "../scss/style.scss";
import { Collapse } from "bootstrap";

const defaultNbrOfArt = 15;

function showNumberOfArticles(allArticles) {
  const counter = document.querySelector("#artCounter");
  const articlesDisplayed = document.querySelectorAll("article").length;
  counter.textContent = `On site: ${articlesDisplayed} of ${allArticles} articles.`;
}

function debounce(func, timeout = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}

function changeNbrOfArticles() {
  const input = document.querySelector("#nbrOfArticles");
  input.value = defaultNbrOfArt;

  input.addEventListener(
    "input",
    debounce((e) => {
      let nbrOfArticles = e.target.value;
      document.querySelector("#articlesList").innerHTML = "";
      spinner("ADD");
      renderArticles(nbrOfArticles);
    })
  );
}

function loadMoreArticles(nextPage) {
  spinner("ADD");
  let isLoading = false;
  document.addEventListener("scroll", (e) => {
    if (
      window.innerHeight + Math.ceil(window.pageYOffset) >=
        document.body.offsetHeight - 50 &&
      !isLoading
    ) {
      isLoading = true;
      renderArticles(nextPage.split("limit=")[1]);
    }
  });
  isLoading = false;
}

function renderArticles(nbr = defaultNbrOfArt) {
  getData(nbr).then((data) => {
    renderCardsList(data.results);
    showNumberOfArticles(data.count);
    loadMoreArticles(data.next);
    btnListener();
    articleCollector(data.results);
    spinner("REMOVE");
  });
}

changeNbrOfArticles();
saveName();
spinner("ADD");
renderArticles();
