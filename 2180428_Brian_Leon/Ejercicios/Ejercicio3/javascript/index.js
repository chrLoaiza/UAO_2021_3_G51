var contenido = document.querySelector('#contenido')

function traer() {
  fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data => {
      console.log(data.results['0'])
      contenido.innerHTML = `
                <div class="user-header">
                <img src="${data.results['0'].picture.large}" width="100px" class="img-fluid rounded-circle"> 
                </div>
                <div class="user-body">
                <p><h3>${data.results['0'].name.title} ${data.results['0'].name.first} ${data.results['0'].name.last}</h3></p>
                <p> ${data.results['0'].email}</p>
                <p>${data.results['0'].phone}</p>
                <p>${data.results['0'].location.city} ${data.results['0'].location.state}</p>
                </div>
                `
    })
}