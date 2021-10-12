/**
 * This is the API URL to fetch data
 * https://randomuser.me/api/?results=5
 */

document
  .getElementById("apiButton") // llamando el boton 
  .addEventListener("click", this.generateUsers.bind(this)); //le agregamos escucha del evento click

  function generateUsers(){
      const usersSection = this.document.getElementById("users"); // obtener el elemento users
      usersSection.innerHTML = ""; // se limpia todo el contenedor del section o si se deja solo se acumulan los demas contenedores
      
      this.fetchUsersData().then((data) =>{ //llamado a la funcion fetch data, then es la promesa, se obtiene la data traida de la API
        const users =data.results;    

            // con el for recorremos el arreglo y se crean las cartas      
        for(let index = 0; index < users.length; index++){ // se captura toda la informacion de la API nombrem email, celular, locacion 
          const element = users[index];                    // y se asigna de acuerdo al html 
          const userElement = `
          
            <div class="user-container">
                <div class="user-header">
                  <img src="${element.picture.large}" alt="medium_profile">  
                </div>
               <div class="user-body">
                  <h3>${element.name.title}. ${element.name.first} ${element.name.last}</h3>
                  <p>${element.email}</p>
                  <p>${element.phone}</p>
                  <p>${element.location.city}, ${element.location.state}  (${element.location.country}</p>
                </div>
            </div>`;
            usersSection.innerHTML += userElement; // agregamos todo el html concatenando += 
        }
      });
      }

      async function fetchUsersData(){ // funcion asincronica del fetch
        const response = await fetch("https://randomuser.me/api/?results=5"); // captura de la API
        return response.json(); // retorna la promesa que seria el Json
      }
