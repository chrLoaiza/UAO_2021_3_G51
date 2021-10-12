const request_btn = document.getElementById("request-btn");
request_btn.addEventListener("click", this.generateDogs.bind(this));

function generateDogs(){
  const dogs = this.requestAPIDogs();
  dogs.then((data)=>{
    const cardList = document.getElementById("card-list");
    const dogs = data.message;
    for (let i = 0; i < dogs.length; i++) {
      const dogData = dogs[i];

      const dogEle = `
        <div class="card">
        <img src="${dogData}" class="card_image" alt="" />
          <div>
            <div class="card__header">
            <img class="card__thumb" src="${dogData}" alt="" />
              <div>
                <h3 class="card__title">Random Dog ${i+1}</h3>
              </div>
            </div>
          </div>
        </div>`;
      cardList.innerHTML += dogEle
    }
  })
}

async function requestAPIDogs(){
  const response = await fetch('https://dog.ceo/api/breeds/image/random/10');
  return response.json();
} 