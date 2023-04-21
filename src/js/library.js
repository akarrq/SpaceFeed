import "../scss/style.scss";

export function setLibraryListener(loadedArticles) {
  document.querySelectorAll(".addToLibrary").forEach((button) => {
    button.addEventListener("click", saveToLibrary);
  });

  let articlesList = [...loadedArticles];
  console.log(articlesList);
}

export function saveToLibrary(e) {
  const artId = e.target.classList[3];
}
