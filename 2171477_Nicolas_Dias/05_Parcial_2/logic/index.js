document
  .getElementById("request-btn") // llamando el boton 
  .addEventListener("click", this.generatedogs.bind(this));
  
  function generatedogs(){
    const dogsSection = this.document.getElementById("card-list"); // obtener el elemento users
   
    this.fetchDogsData().then((data) =>{ //llamado a la funcion fetch data, then es la promesa, se obtiene la data traida de la API
      const dogs =data.message;    
  
   // con el for recorremos el arreglo y se crean las cartas      
   for(let index = 0; index < dogs.length; index++){ // se captura toda la informacion de la API nombrem email, celular, locacion 
    const element = dogs[index];                    // y se asigna de acuerdo al html 
    const dogsElement = `
    
    <div class="dogs-container">
      <div class="dogs-header">
      <img src="${element}" id="foton">
      <h3> Dogsito Random </h3>
      </div>
      <div class="dogs-body>
      
      </div>
    </div>`;
      dogsSection.innerHTML += dogsElement; // agregamos todo el html concatenando += 
  }
});
}

async function fetchDogsData(){ // funcion asincronica del fetch
  const response = await fetch("https://dog.ceo/api/breeds/image/random/10"); // captura de la API
  return response.json(); // retorna la promesa que seria el Json
}
