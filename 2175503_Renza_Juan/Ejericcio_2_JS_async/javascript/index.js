/**
 * This is the API URL to fetch data
 * https://randomuser.me/api/?results=5
 */

document
  .getElementById("apiButton")
  .addEventListener("click", this.generateUsers.bind(this));

function generateUsers(){
  const userSection = this.document.getElementById("users");
  // userSection.innerHTML = "";
  this.fetchUsersData()
  .then((data) => {
    const users = data.results;
    debugger
    for (let index = 0; index < users.length; index++) {
      const element = users[index];
      const userElement= `
      <div class="user-container">
        <div class="user-header">
          <img src="${element.picture.large}" alt="medium_profile">
        </div>
        <div class="user-body">
          <h3>${element.name.title}. ${element.name.first} ${element.name.last}n</h3>
          <p>${element.email}</p>
          <p>${element.phone}</p>
          <p>${element.location.city}, ${element.location.state} (${element.location.country})</p>
        </div>
      </div>`;
      userSection.innerHTML += userElement;
    }
  });
}

async function fetchUsersData(){
  const response = await fetch("https://randomuser.me/api/?results=5");
  return response.json();
}