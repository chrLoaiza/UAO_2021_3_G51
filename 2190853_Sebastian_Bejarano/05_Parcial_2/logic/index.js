document.getElementById("request-btn").addEventListener("click", this.cards.bind(this));

async function CardsAPI(){
  const apiResponse = await fetch("https://dog.ceo/api/breeds/image/random/10");
  return apiResponse.json();
}



function cards(){
  const iCards =  this.document.getElementById("card-list");
  iCards.innerHTML = "";

  this.CardsAPI().then((data) => {
  const card = data.message;
  console.log(card);

    for (let index =0; index < card.length; index++){
      const element = card[index];
      const cardElement =
      `
      <div class="flex-item card">
        <img src="${element}">
        <div class="container">
          <h4><b>Ejemplar #${index+1}</b></h4>
        </div>
        <div><p>Good boy</p></div>
      </div>
      `
      ;
      iCards.innerHTML += cardElement;
    }
  });
}

