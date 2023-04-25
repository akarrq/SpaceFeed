import getData from "./api";
import { renderCard } from "./cards";

import "../scss/style.scss";

import { renderCardsList } from "./cards";

const artInLibrary = JSON.parse(localStorage.getItem("artInLibrary"));

function renderLibrary() {
  document.querySelector("#articlesList").innerHTML = "";
  renderCardsList(artInLibrary);
}

renderLibrary();
