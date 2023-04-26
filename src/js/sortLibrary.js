import { renderCardsList } from "./cards";

export function sortLibrary(articlesInLibrary) {
  document.querySelectorAll(".btn").forEach((button) => {
    button.addEventListener("click", (e) => {
      handleSort(e, e.target.id, articlesInLibrary);
    });
  });
}

let ascendingDate = true;
let ascendingTitle = true;

function handleSort(e, id, articlesInLibrary) {
  switch (id) {
    case "sortDate":
      if (ascendingDate) {
        articlesInLibrary.sort(
          (a, b) => Date.parse(a.published_at) - Date.parse(b.published_at)
        );
        ascendingDate = !ascendingDate;
      } else {
        articlesInLibrary.sort(
          (a, b) => Date.parse(b.published_at) - Date.parse(a.published_at)
        );
        ascendingDate = !ascendingDate;
      }
      break;
    case "sortTitle":
      if (ascendingTitle) {
        articlesInLibrary.sort((a, b) => {
          const titleA = a.title.toUpperCase();
          const titleB = b.title.toUpperCase();
          if (titleA < titleB) return -1;
          if (titleA > titleB) return 1;
          return 0;
        });
        ascendingTitle = !ascendingTitle;
      } else {
        articlesInLibrary.sort((a, b) => {
          const titleA = a.title.toUpperCase();
          const titleB = b.title.toUpperCase();
          if (titleA < titleB) return 1;
          if (titleA > titleB) return -1;
          return 0;
        });
        ascendingTitle = !ascendingTitle;
      }
      break;
    default:
      break;
  }
  document.querySelector("#articlesList").innerHTML = "";
  renderCardsList(articlesInLibrary);
}
