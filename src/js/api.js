async function getData(nbrOfArticles = 5) {
  const URL = `https://api.spaceflightnewsapi.net/v4/articles/?limit=${nbrOfArticles}`;

  const data = await fetch(URL).then((request) => {
    if (request.ok) {
      return request.json();
    } else {
      throw Error(request.status);
    }
  });

  return data.results;
}

export default getData;
