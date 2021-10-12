/**
 * This is the API URL to fetch data
 * https://randomuser.me/api/?results=5
 */
 document
 .getElementById("apiButton")
 .addEventListener("click", this.generateAnime.bind(this));

function generateAnime() {
 const animeALL = this.document.getElementById("anime");
 animeALL.innerHTML = "";
 this.fetchAnimeData().then((data) => {
   const anime = data.results;
   for (let index = 0; index < anime.length; index++) {
     const element = anime[index];
     const animeElement =` 
<div class="user-container">
<div class="user-header">
          <img src="${element.picture.medium}" alt="medium_profile">
        </div>
<div class="user-body">
<h3>${element.name.title}.${element.name.last}</h3>
<p><b>character: </b> ${element.gender}</p>
<p><b>nombre calle: </b> ${element.location.street.name}</p>
<p><b>quote: </b> ${element.location.street.number}</p>
</div>
</div>`;
     animeALL.innerHTML += animeElement;
   }
 });
}

async function fetchAnimeData() {
 const response = await fetch("https://randomuser.me/api/?results=5");
 return response.json();
}