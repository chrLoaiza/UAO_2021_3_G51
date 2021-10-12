
document
  .getElementById("request-btn")
  .addEventListener("click", this.generateDogs.bind(this));

  var Dognumber = 0;

function generateDogs(){
  const cardList = this.document.getElementById("dogs");
  
  // userSection.innerHTML = "";
  this.fetchDogsData()
  .then((data) => {
    const dogs = data.message;
    for (let index = 0; index < dogs.length; index++) {
      const element = dogs[index];
      const dogsElement= `
      <div class="dog-container">
        <div class="dog-header">
          <img src="${element}">
        </div>
        <div class="dog-body">
          <h3>Perrito No. ${Dognumber+1}</h3>
        </div>
      </div>`;
      cardList.innerHTML += dogsElement;
      Dognumber += 1;
    }
  });
}

async function fetchDogsData(){
  const response = await fetch("https://dog.ceo/api/breeds/image/random/5");
  return response.json();
}