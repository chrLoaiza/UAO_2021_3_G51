document
  .getElementById("apiButton")
  .addEventListener("click", this.generateUsers.bind(this));

function generateUsers() {
  const usersSections = this.document.getElementById("users");
  usersSections.innerHTML = "";
  this.fetchUsersData().then((data) => {
    /* debugger */
    const users = data.results;
    for (let index = 0; index < users.length; index++) {
      const element = users[index];
      const userElement =
        `
        <div id="contenedor" class="user-container">
        <div class="user-header">
        <img src="${element.picture.large}" width="100px" class="img-fluid rounded-circle">
        </div>
        <div class="user-body">
        <p><b>Nombre: </b>${element.name.title} ${element.name.first} ${element.name.last}</p>
        <p><b>Correo Electronico: </b> ${element.email}</p>
        <p><b>Telefono: </b>${element.phone}</p>
        <p><b>Direccion: </b>${element.location.city} ${element.location.state}</p>
        </div>
        </div>
        `
      usersSections.innerHTML += userElement;
    }
  });
}
/* alert('Error'); */
async function fetchUsersData() {
  const response = await fetch("https://randomuser.me/api/?results=20");
  return response.json();
}