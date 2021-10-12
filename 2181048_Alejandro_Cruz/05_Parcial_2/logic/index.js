
let anime
document
  .getElementById("request-btn")
  .addEventListener("click", this.generateAnime.bind(this));

  function generateAnime(){
    const animeQuoteSection = this.document.getElementById("anime");
    animeQuoteSection.innerHTML = "";

    this.fetchAnimeQuoteData().then((data) => {
      anime = data;
      console.log(anime)
      for (let index = 0; index < anime.length; index++){
        const AData = anime[index];
        const animeElement = `
        <div class="anime-container">
          <div class="anime-body">
            <h3><b>Anime:</b> ${AData.anime}</h3>
            <p><b>Character:</b> ${AData.character}</p>
            <p><b>Quote:</b> ${AData.quote}</p>
          </div>
        </div>`;
        animeQuoteSection.innerHTML += animeElement;

      }

    });
  }

 
  async function fetchAnimeQuoteData(){
    const response = await fetch('https://animechan.vercel.app/api/quotes');
    anime = response.json()
    return anime
    

    
    
  }