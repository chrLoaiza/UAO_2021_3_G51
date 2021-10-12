document
  .getElementById("request-btn")
  .addEventListener("click", this.generateCards.bind(this));
  
function generateCards() {
  const cards = this.responseAPICards();
  cards.then((data) => {
    const cardList = document.getElementById("card-list");
    const cards = data;
      for (let i=0; i < cards.length; i++){
        const cardData = cards[i];
        const cardElement = `
        <div class="card-container">
          <div class="card-header">
          <h3>${cardData.name}</h3>
            <img src="${cardData.logo}" alt="medium_profile">
          </div>
          <div class="card-body">
            <p>Food type: ${cardData.name}</p>
            <p>Phone: ${cardData.phone_number}</p>
            <p>Address: ${cardData.address}</p><br><br>
            <p>Monday: ${cardData.hours.monday.is_closed ? "Closed" : "Open"}</p>
            <p>Tuesday: ${cardData.hours.tuesday.is_closed ? "Closed" : "Open"}</p>
            <p>Wednesday: ${cardData.hours.wednesday.is_closed ? "Closed" : "Open"}</p>
            <p>Thursday: ${cardData.hours.thursday.is_closed ? "Closed" : "Open"}</p>
            <p>Friday: ${cardData.hours.friday.is_closed ? "Closed" : "Open"}</p>
            <p>Saturday: ${cardData.hours.saturday.is_closed ? "Closed" : "Open"}</p>
            <p>Sunday: ${cardData.hours.sunday.is_closed ? "Closed" : "Open"}</p>
          </div>
        </div>
        `;
        cardList.innerHTML += cardElement;
    }

  })  
  
}  
  
async function responseAPICards() {
  const response = await fetch("https://random-data-api.com/api/restaurant/random_restaurant?size=10");
  return response.json();
}
