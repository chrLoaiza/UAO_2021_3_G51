//const request_btn = document.getElementById("request-btn");
//request_btn.addEventListener("click", async () => {
//  const cardList = document.getElementById("card-list");
//  const response = await fetch();
//  request_btn.innerHTML = "";
//realizar petición web

let puppy
document

.getElementById("request-btn")
.addEventListener("click", this.generatePuppy.bind(this));

function generatePuppy(){
  const puppySelection =  this.document.getElementById("puppy");

  puppySelection.innerHTML = "";

  this.fetchPuppyData().then((data) => {
  const puppy = data.message;
  console.log(puppy)
    for (let index =0; index < puppy.length; index++){
      const element = puppy[index];
      const puppyElement =
      `
      <div class="puppy-container">
        <div class="puppy-header">
        <img src="${element}">
        </div>
        <div class="puppy-body>
        <h3> Perrito </h3>
        </div>
      </div>
      `
      ;
      puppySelection.innerHTML += puppyElement;
    }
  });
}

async function fetchPuppyData(){
  const response = await fetch("https://dog.ceo/api/breeds/image/random/9");
  return response.json();
}
