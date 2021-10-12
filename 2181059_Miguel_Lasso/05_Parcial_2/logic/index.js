var dogCnt=0;

const request_btn = document.getElementById("request-btn");
request_btn.addEventListener("click", this.addingDogs.bind(this));

function addingDogs() {
  const dgs = this.dogsAPI();

  


  dgs.then((data) => {
    const cardList = document.getElementById("card-list");
    const dgsData = data.message;

    for (let i = dogCnt; i < dgsData.length; i++) {
      const datadgs = dgsData[i];


      const dogsCard = `
  
        <div class="dogCard">
       
            <div class="dogHeader">
            
            <h2 class="dogNumber">Perrito random # ${i+1}</h2>

            <div "class=imageContainer">
            <img src="${datadgs}" alt="">
            </div>
            </div>
        </div>`;
      cardList.innerHTML += dogsCard
      dogCnt++;
    }

  })

}

async function dogsAPI() {
  const reply = await fetch('https://dog.ceo/api/breeds/image/random/15');
  return reply.json();
}