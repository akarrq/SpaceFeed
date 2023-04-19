import { renderCardsList } from "./card";
import getData from "./api";
import saveName from "./name";

import "../scss/style.scss";

const defaultNbrOfArt = 15;

function changeNbrOfArticles() {
  const input = document.querySelector("#nbrOfArticles");
  input.value = defaultNbrOfArt;

  input.addEventListener("input", (e) => {
    let nbrOfArticles = e.target.value;
    renderArticles(nbrOfArticles);
    console.log(`wczytałem ${nbrOfArticles} artykułów`);
  });
}

function renderArticles(nbr = defaultNbrOfArt) {
  getData(nbr).then((articles) => renderCardsList(articles));
}

changeNbrOfArticles();
saveName();
renderArticles();
