export function card(article) {
  const { title, image_url, summary, url, news_site, published_at } = article;
  return `
    <img src="${image_url}" class="card-img-top" alt="">
    <div class="card-body">
      <h5 class="card-title">${title}</h5>
      <p class="card-text">${summary}</p>
      <a href="${url}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Go to article</a>
      <button type="button" class="btn btn-secondary">Add to library</button>
    </div>
    <div class="d-flex justify-content-between card-footer">
      <small class="text-body-secondary">Site: ${news_site}</small>
      <small class="text-body-secondary">${new Date(
        published_at
      ).toLocaleString()}</small>
    </div>
  `;
}

export function renderCard(article) {
  const element = document.createElement("article");
  element.classList.add(`art${article.id}`, "card", "flex-grow-1", "m-2");
  element.style = "width: 20rem;";
  element.innerHTML = card(article);
  document.querySelector("#articlesList").appendChild(element);
  console.log("jest");
}

export function renderCardsList(articles) {
  document.querySelector("#articlesList").innerHTML = "";
  articles.forEach((article) => {
    renderCard(article);
  });
}
