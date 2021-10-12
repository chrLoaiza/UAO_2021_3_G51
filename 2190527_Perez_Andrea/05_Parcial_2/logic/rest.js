
document
  .getElementById("apiButton2")
  .addEventListener("click", this.generateRest.bind(this));

function generateRest() {
  const restAll = this.document.getElementById("rest");
  restAll.innerHTML = "";
  this.fetchRestData().then((data) => {
    const rest = data;
/*     if (is_closed == true) {
      is_closed = "Open";
   } else
   is_closed = "Closed";
     */
    for (let index = 0; index < rest.length; index++) {
      const element = rest[index];
      const restElement = `
<div class="card-container">
<div class="card-body">
<div class="card-header">
<h3>${element.name}</h3>
</div>
<img src="${element.logo}">
<p><b>Type: </b> ${element.type}</p>
<p><b>Address: </b> ${element.address}</p>
<p><b>Phone Number: </b> ${element.phone_number}</p>
<P><b>Schedule</b></p>
<P><b> Monday: </b>${element.hours.monday.is_closed}</P>
<P><b> Tuesday: </b>${element.hours.tuesday.is_closed}</P>
<P><b> Wednesday: </b>${element.hours.wednesday.is_closed}</P>
<P><b> Thursday: </b>${element.hours.thursday.is_closed}</P>
<P><b> Friday: </b>${element.hours.friday.is_closed}</P>
<P><b> Saturday: </b>${element.hours.saturday.is_closed}</P>
<P><b> Sunday: </b>${element.hours.sunday.is_closed}</P>


</div>
</div>`;
      restAll.innerHTML += restElement;
    }
  });
}

async function fetchRestData() {
  const response = await fetch("https://random-data-api.com/api/restaurant/random_restaurant?size=10");
  return response.json();
}