document.getElementById("request-btn").addEventListener("click", this.generateQuotes.bind(this));

function generateQuotes(){
    const dataP = this.getRandomQuotes();
    dataP.then((data) => {
        const sectionQ = document.getElementById("card-list");
        const quotesA = data;
        for (let index = 0; index < quotesA.length; index++){
            const quoteData = quotesA[index];
            const quoteE = `
            <div class="contenedor">
          <div class="encabezado">
          <h3>${quoteData.anime}</h3>
          </div>
          <div class="cuerpo">
            <p>Personaje: </br>${quoteData.character}</p>
            <p>Frase: </br>${quoteData.quote}</p>
          </div>
        </div>
      `;
      sectionQ.innerHTML += quoteE;
        }
    });
}

async function getRandomQuotes(){
    const rApi = await fetch("https://animechan.vercel.app/api/quotes");
    const data = await rApi.json();
    return data;
}