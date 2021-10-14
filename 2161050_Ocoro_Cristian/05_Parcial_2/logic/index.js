const request_btn = document.getElementById("request-btn");
request_btn.addEventListener("click", this.GenerarAQuotes.bind(this));

async function GenerarAQuotes() {
    const dataPromise = await this.getAQuotes();
    const cardList = document.getElementById("card-list");
    cardList.innerHTML = null;

    const AQuotesArray = dataPromise;

    debugger

    for (let i = 0; i < 6; i++) {
        const userData = AQuotesArray[i];
        const userElement = `
    <div class="anime-card-container">
    <div class="anime-card-body">
    
    <p><strong>Anime: </strong> ${userData.anime}</h3></p>
    <p><strong>Character: </strong> ${userData.character}</p>
    <p><strong>Quote: </strong>${userData.quote}</p>
    </div>
    </div>
    `;
        cardList.innerHTML += userElement;
    }
}

async function getAQuotes() {
    const requestAPI = await fetch('https://animechan.vercel.app/api/quotes');
    return requestAPI.json();
}