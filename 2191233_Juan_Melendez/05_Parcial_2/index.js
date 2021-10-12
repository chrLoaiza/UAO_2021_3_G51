const request_btn = document.getElementById("request-btn");
request_btn.addEventListener("click", this.generateAnime.bind(this));

function generateAnime(){
  const Anime = this.requestAPIAnime();
  Anime.then((data)=>{
    const cardList = document.getElementById("card-list");
    const Anime = data.message;
    for (let i = 0; i < Anime.length; i++) {
      const animeData = Anime[i];

      const animE = `
        <div class="card">
        <img src="${animeData}" class="card_image" alt="" />
          <div>
            <div class="card__header">
            <img class="card__thumb" src="${animeData}" alt="" />
              <div>
                <h3 class="card__title">Random Anime ${i+1}</h3>
              </div>
            </div>
          </div>
        </div>`;
      cardList.innerHTML += animE
    }
  })
}

async function requestAPIAnime(){
  const response = await fetch('https://api.jikan.moe/v3');
  return response.json();
}  