let animeQuotes
document
  .getElementById("request-btn")
  .addEventListener("click", this.generateAnimeQuotes.bind(this));

  function generateAnimeQuotes(){
    const animeQuoteSection = this.document.getElementById("animeQuotes");
    animeQuoteSection.innerHTML = "";

    this.fetchAnimeQuoteData().then((data) => {
      animeQuotes = data;
      console.log(animeQuotes)
      for (let index = 0; index < animeQuotes.length; index++){
        const animeQuoteData = animeQuotes[index];
        const animeQuoteElement = 
        `<div class="animeQuote-container">
          <div class="animeQuote-body">
            <h3><b>Anime:</b> ${animeQuoteData.anime}</h3>
            <p><b>Character:</b> ${animeQuoteData.character}</p>
            <p><b>Quote:</b> ${animeQuoteData.quote}</p>
          </div>
        </div>`;
        animeQuoteSection.innerHTML += animeQuoteElement;

      }

    });
  }
  async function fetchAnimeQuoteData(){
    const response = await fetch('https://animechan.vercel.app/api/quotes');
    animeQuotes = response.json()
    return animeQuotes




  }

