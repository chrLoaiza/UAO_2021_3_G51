/**
 * This is the API URL to fetch data
 * https://randomuser.me/api/?results=5
 */

document
  .getElementById("apiButton")
  .addEventListener("click", this.generateUsers.bind(this));

  function generateUsers(){
    const users = this.requestAPIUser();
    users.then((data)=>{
      const userSection = document.getElementById('users');
      const users = data.results;
      for (let index = 0; index < users.length; index ++){
        const userData = users[index];
        const userEle = `
          <div class="user-container">
            <div class="user-header">
              <img src="${userData.picture.medium}" alt="medium_profile">
            </div>
            <div class="user-body">
              <h3>${userData.name.title + userData.name.first + userData.name.last}</h3>
              <p>${userData.email}</p>
              <p>${userData.cell}</p>
              <p>${userData.location.city + " ," + userData.location.state + " ("+ userData.location.country+")"}</p>
            </div>
          </div>`;
        userSection.innerHTML += userEle;
      }
    })
  }

  async function requestAPIUser(){
    const request = await fetch('https://randomuser.me/api/?results=5');
    return request.json();
  }
