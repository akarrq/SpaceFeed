import { renderCardsList } from "./cards";
import getData from "./api";
import saveName from "./name";
import spinner from "./spinner";

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

function addToLibrary() {
  if (localStorage.getItem("artInLibrary") === null)
    localStorage.setItem("artInLibrary", "[]");
  const artInLibrary = JSON.parse(localStorage.getItem("artInLibrary"));

  document.querySelectorAll(".addToLibrary").forEach((button) => {
    button.addEventListener("click", (e) => {
      const artId = parseInt(e.target.classList[3], 10);
      const article = historyOfLoadedArticles.find(
        (element) => element.id === artId
      );
      artInLibrary.push(article);
      localStorage.setItem("artInLibrary", JSON.stringify(artInLibrary));
      console.log(artInLibrary);
    });
  });
}

let historyOfLoadedArticles = [];

function articleCollector(articles) {
  historyOfLoadedArticles.push(...articles);
  function removeDuplicateObjects(arr, property) {
    return [...new Map(arr.map((obj) => [obj[property], obj])).values()];
  }
  historyOfLoadedArticles = removeDuplicateObjects(
    historyOfLoadedArticles,
    "id"
  );
  console.log(historyOfLoadedArticles);
}

function renderArticles(nbr = defaultNbrOfArt) {
  getData(nbr).then((data) => {
    renderCardsList(data.results);
    showNumberOfArticles(data.count);
    loadMoreArticles(data.next);
    addToLibrary();
    articleCollector(data.results);
    spinner("REMOVE");
  });
}

changeNbrOfArticles();
saveName();
spinner("ADD");
renderArticles();
