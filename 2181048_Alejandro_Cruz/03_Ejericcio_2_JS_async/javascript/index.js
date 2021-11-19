/**
 * This is the API URL to fetch data
 * https://randomuser.me/api/?results=5
 */

 document
 .getElementById("apiButton")
 .addEventListener("click", this.generateUsers.bind(this));

function generateUsers() {
 const users = this.requestAPIUser();
 users.then((data) => {
   const usersSection = document.getElementById("users");
   const users = data.results;
   for (let i=0; i < users.length; i++){
     const userData = users[i];
     const userElement = `
     <div class="user-container">
       <div class="user-header">
         <img src="${userData.picture.large}" alt="medium_profile">
       </div>
       <div class="user-body">
         <h3>${userData.name.title}. ${userData.name.first} ${userData.name.last}</h3>
         <p>${userData.email}</p>
         <p>${userData.phone}</p>
         <p>${userData.location.city}, ${userData.location.state} ${userData.location.country}</p>
       </div>
     </div>
     `;
     usersSection.innerHTML += userElement;
   }
 })
 
 
}

async function requestAPIUser() {
 const request = await fetch("https://randomuser.me/api/?results=5");
 return request.json();
}