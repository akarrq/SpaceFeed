import { renderCardsList } from "./cards";
import getData from "./api";
import saveName from "./name";
import spinner from "./spinner";
import { setLibraryListener } from "./library";

import "../scss/style.scss";

const defaultNbrOfArt = 15;

function showNumberOfArticles(allArticles) {
  const counter = document.querySelector("#artCounter");
  const articlesDisplayed = document.querySelectorAll("article").length;
  counter.textContent = `On site: ${articlesDisplayed} of ${allArticles} articles.`;
}

function changeNbrOfArticles() {
  const input = document.querySelector("#nbrOfArticles");
  input.value = defaultNbrOfArt;

  input.addEventListener("input", (e) => {
    let nbrOfArticles = e.target.value;
    document.querySelector("#articlesList").innerHTML = "";
    renderArticles(nbrOfArticles);
  });
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
    setLibraryListener(data.results);
    spinner("REMOVE");
  });
}

changeNbrOfArticles();
saveName();
spinner("ADD");
renderArticles();
