document
  .getElementById("request-btn")
  .addEventListener("click", this.generateAnime.bind(this));

function generateAnime() {
  const dataPromise = this.getRandomAnime();
  dataPromise.then((dataAPI) => {
    const sectionAnime = document.getElementById("card-list");
    const animeArr = dataAPI;
    for (let index = 0; index < animeArr.length; index++) {
      const animeData = animeArr[index];
      const animeEl = `
        <div class="anime-container">
        
          <div class="anime-body">

            
            <p><b>Anime:</b>:${animeData.anime}</p>
            <p><b>Character</b>:${animeData.character}</p>
            <p><b>Quote</b>${animeData.quote}</p>
            
          </div>
        </div>
      `;
      sectionAnime.innerHTML += animeEl;
    }
  });
}

async function getRandomAnime() {
  const requestApi = await fetch("https://animechan.vercel.app/api/quotes");
  const data = await requestApi.json();
  return data;
}
