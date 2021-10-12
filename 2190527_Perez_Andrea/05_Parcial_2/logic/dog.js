
document
  .getElementById("apiButton3")
  .addEventListener("click", this.generateDog.bind(this));

function generateDog() {
  const dogAll = this.document.getElementById("dog");
  dogAll.innerHTML = "";
  this.fetchDogData().then((data) => {
    const dog = data.message;
    for (let index = 0; index < dog.length; index++) {
      const element = dog[index];
      const dogElement = `
<div class="card-container2">
<div class="card-body">
<img src="${element}">
</div>
</div>`;
dogAll.innerHTML += dogElement;
    }
  });
}

async function fetchDogData() {
  const response = await fetch("https://dog.ceo/api/breeds/image/random/10");
  return response.json();
}