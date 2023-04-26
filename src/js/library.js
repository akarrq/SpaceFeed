import "../scss/style.scss";
import { Collapse } from "bootstrap";

import { renderCardsList } from "./cards";
import { btnListener } from "./handleLibrary";

const artInLibrary = JSON.parse(localStorage.getItem("artInLibrary"));

export function renderLibrary() {
  if (localStorage.getItem("artInLibrary") === null)
    localStorage.setItem("artInLibrary", "[]");
  if (artInLibrary.length) {
    document.querySelector("#articlesList").innerHTML = "";
    renderCardsList(artInLibrary);
  }
}

renderLibrary();
btnListener();
