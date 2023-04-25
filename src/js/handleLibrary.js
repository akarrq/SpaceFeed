export function btnListener() {
  if (localStorage.getItem("artInLibrary") === null)
    localStorage.setItem("artInLibrary", "[]");
  document.querySelectorAll(".btn").forEach((button) => {
    button.addEventListener("click", (e) => {
      handleLibrary(e, e.target.classList[2]);
    });
  });
}

function handleLibrary(e, action) {
  let artInLibrary = JSON.parse(localStorage.getItem("artInLibrary"));
  const artId = parseInt(e.target.classList[3], 10);

  switch (action) {
    case "addToLibrary":
      addToLibrary(e, artId, artInLibrary);
      break;
    case "removeFromLibrary":
      removeFromLibrary(e, artId, artInLibrary);
      if (document.title == "Library - SpaceFeed") {
        e.target.textContent = "Removed";
        e.target.classList.remove("addToLibrary");
      }
      break;
    default:
      break;
  }
}

function addToLibrary(e, artId, artInLibrary) {
  const article = historyOfLoadedArticles.find(
    (element) => element.id === artId
  );
  artInLibrary.push(article);
  localStorage.setItem("artInLibrary", JSON.stringify(artInLibrary));
  e.target.textContent = "Remove from library";
  e.target.classList.replace("addToLibrary", "removeFromLibrary");
}

function removeFromLibrary(e, artId, artInLibrary) {
  artInLibrary = artInLibrary.filter((element) => element.id !== artId);
  localStorage.setItem("artInLibrary", JSON.stringify(artInLibrary));
  e.target.textContent = "Add to library";
  e.target.classList.replace("removeFromLibrary", "addToLibrary");
}

let historyOfLoadedArticles = [];

export function articleCollector(articles) {
  historyOfLoadedArticles.push(...articles);
  function removeDuplicateObjects(arr, property) {
    return [...new Map(arr.map((obj) => [obj[property], obj])).values()];
  }
  historyOfLoadedArticles = removeDuplicateObjects(
    historyOfLoadedArticles,
    "id"
  );
}
