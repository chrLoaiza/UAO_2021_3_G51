
document
    .getElementById("request-btn")
    .addEventListener("click", this.generateUsers.bind(this));

function generateUsers() {
    const usersSections = this.document.getElementById("users");
    usersSections.innerHTML = "";
    this.fetchUsersData().then((data) => {
   


        
        const users = data;
        for (let index = 0; index < users.length; index++) {
            const element = users[index];
            const userElement =
                `
                <div id="contenedor" class="user-container">
                <div class="user-header">
                <img src="${data[index].logo}" width="250px">
                </div>
                <div class="user-body">
                <p> <b>Food type: </b>${data[index].type}</p>
                <p> <b>Phone: </b>${data[index].phone_number}</p>
                <p> <b>Address: </b>${data[index].address}</p>
                <br>
                
                <p> <b>Monday: </b>${data[index].hours.monday.is_closed}</p>
                <p> <b>Tuesday: </b>${data[index].hours.monday.is_closed}</p>
                <p> <b>Wednesday: </b>${data[index].hours.monday.is_closed}</p>
                <p> <b>Thursday: </b>${data[index].hours.monday.is_closed}</p>
                <p> <b>Friday: </b>${data[index].hours.monday.is_closed}</p>
                <p> <b>Saturday: </b>${data[index].hours.monday.is_closed}</p>
                <p> <b>Sunday: </b>${data[index].hours.monday.is_closed}</p>
                </div>
                </div>
                `
            usersSections.innerHTML += userElement;
        }
    });
}

async function fetchUsersData() {
    const response = await fetch("https://random-data-api.com/api/restaurant/random_restaurant?size=10");
    return response.json();
}