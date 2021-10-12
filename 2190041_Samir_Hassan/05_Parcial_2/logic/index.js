document
  .getElementById("apiButton2")
  .addEventListener("click", this.generateAnime.bind(this));

function generateAnime() {
  const animeALL = this.document.getElementById("anime");
  animeALL.innerHTML = "";
  this.fetchAnimeData().then((data) => {
    const anime = data;
    for (let index = 0; index < anime.length; index++) {
      const element = anime[index];
      const animeElement =` 
<div class="card-container">
<div class="card-body">
<h3>${element.anime}</h3>
<p><b>character: </b> ${element.character}</p>
<p><b>quote: </b> ${element.quote}</p>
</div>
</div>`;
      animeALL.innerHTML += animeElement;
    }
  });
}

async function fetchAnimeData() {
  const response = await fetch("https://animechan.vercel.app/api/quotes?results=6");
  return response.json();
}