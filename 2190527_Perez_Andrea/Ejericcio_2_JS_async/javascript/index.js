
document
  .getElementById("apiButton")
  .addEventListener("click", this.generateUsers.bind(this));

function generateUsers() {
  const userAll = this.document.getElementById("users");
  userAll.innerHTML = "";
  this.fetchUsersData().then((data) => {
    const users = data.results;
    for (let index = 0; index < users.length; index++) {
      const element = users[index];
      const userElement = `
  <div class="user-container">
  <div class="user-header">
  <img src="${element.picture.large}" alt="medium_profile">
  </div>
  <div class="user-body">
  <h3>${element.name.title}. ${element.name.first} ${element.name.last}</h3>
  <p>Age: ${element.registered.age} years old</p>
  <p>Gender: ${element.gender}</p>
  <p>Email: ${element.email}</p>
  <p> Phone: ${element.phone}</p>
  <p> Location: ${element.location.city}, ${element.location.state} (${element.location.country})</p>
  </div>
  </div>`;
      userAll.innerHTML += userElement;
    }
  });
}

async function fetchUsersData() {
  const response = await fetch("https://randomuser.me/api/?results=6");
  return response.json();
}
