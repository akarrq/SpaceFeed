import { renderCardsList } from "./card";
import getData from "./api";
import saveName from "./name";

import "../scss/style.scss";

const nbrOfArticles = 15;

getData(nbrOfArticles).then((articles) => renderCardsList(articles));

saveName();
