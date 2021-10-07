var url = 'https://random-data-api.com/api/restaurant/random_restaurant?size=10';


const request_btn = document.getElementById("request-btn");
request_btn.addEventListener("click", async () => {
    const cardList = this.document.getElementById("card-list");
    const response = await fetch(url)
        .then(res => res.json())
        .then(data => {
            const users = data;
            for (let index = 0; index < users.length; index++) {
                console.log(data[index])
                contenido.innerHTML = `
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
                `
            }
        })
});