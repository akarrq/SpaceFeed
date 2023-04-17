export function card(article) {
  const { id, title, image_url, summary, url } = article;
  return `
    <div class="card art${id} my-2" style="width: 100%;">
      <img src="${image_url}" class="card-img-top" alt="">
      <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <p class="card-text">${summary}</p>
        <a href="${url}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Go to article</a>
      </div>
    </div>
  `;
}

export function renderCard(article) {
  const element = document.createElement("article");
  element.innerHTML = card(article);
  document.querySelector("#articlesList").appendChild(element);
}

export function renderCardsList(articles) {
  articles.forEach((article) => {
    renderCard(article);
  });
}
