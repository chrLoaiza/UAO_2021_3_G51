/**
 * This is the API URL to fetch data
 * https://randomuser.me/api/?results=5
 */

document
  .getElementById("apiButton")
  .addEventListener("click", this.generateUsers.bind(this));

function generateUsers() {
  const dataPromise = this.getRandomUsers();
  dataPromise.then((dataAPI) => {
    const sectionUsers = document.getElementById("users");
    const userArr = dataAPI.results;
    for (let index = 0; index < userArr.length; index++) {
      const userData = userArr[index];
      const userEl = `
        <div class="user-container">
          <div class="user-header">
            <img src= ${userData.picture.large} alt="medium_profile">
          </div>
          <div class="user-body">
            <h3>${userData.name.title}. ${userData.name.first} ${userData.name.last}</h3>
            <p>${userData.email}</p>
            <p>${userData.phone}</p>
            <p>${userData.location.city}, ${userData.location.state} (${userData.location.country})</p>
          </div>
        </div>
      `;
      sectionUsers.innerHTML += userEl;
    }
  });
}

async function getRandomUsers() {
  const requesApi = await fetch("https://randomuser.me/api/?results=5");
  const data = await requesApi.json();
  return data;
}
