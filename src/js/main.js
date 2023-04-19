import { renderCardsList } from "./card";
import getData from "./api";
import saveName from "./name";

import "../scss/style.scss";

const defaultNbrOfArt = 15;

function showNumberOfArticles(articlesDisplayed, allArticles) {
  const counter = document.querySelector("#artCounter");
  counter.textContent = `On site: ${articlesDisplayed} of ${allArticles} articles.`;
}

function changeNbrOfArticles() {
  const input = document.querySelector("#nbrOfArticles");
  input.value = defaultNbrOfArt;

  input.addEventListener("input", (e) => {
    let nbrOfArticles = e.target.value;
    renderArticles(nbrOfArticles);
  });
}

function renderArticles(nbr = defaultNbrOfArt) {
  getData(nbr).then((data) => {
    renderCardsList(data.results);
    showNumberOfArticles(nbr, data.count);
  });
}

changeNbrOfArticles();
saveName();
renderArticles();
