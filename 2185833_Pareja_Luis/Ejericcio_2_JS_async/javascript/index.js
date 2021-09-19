/**
 * This is the API URL to fetch data
 * https://randomuser.me/api/?results=5
 */

document
  .getElementById("apiButton")
  .addEventListener("click", this.generateUsers.bind(this));

  function generateUsers(){
    const userSection = this.document.getElementById("users");
    userSection.innerHTML = "";

    this.fetchUserData().then((data) => {
      const users = data.results;
      for (let index = 0; index < users.length; index++){
        const userData = users[index];
        const userElement = `
        <div class="user-container">
          <div class="user-header">
            <img src="${userData.picture.large}" alt="medium_profile">
          </div>
          <div class="user-body">
            <h3>${userData.name.title}. ${userData.name.first} ${userData.name.last}</h3>
            <p>${userData.email}</p>
            <p>${userData.phone}</p>
            <p>${userData.location.city}</p>
          </div>
        </div>`;
        userSection.innerHTML += userElement;

      }

    });
  }

 
  async function fetchUserData(){
    const response = await fetch("https://randomuser.me/api/?results=5");
    return response.json();

  }