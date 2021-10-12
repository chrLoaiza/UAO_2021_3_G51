document.getElementById("btnGenerar").addEventListener("click", () => {
    const seccion = this.document.getElementById("usuarios");
    
    this.fetchDU().then((data) => {
        const usuarios = data.results;
        for (let index = 0; index < usuarios.length; index++){
            const elemento = usuarios[index];
            const eleUsuario = `
            <div class="contenedor">
            <div class="encabezado">
            <img src="${elemento.picture.large}" alt="perfil">
            </div>
            <div class="cuerpo">
            <h3>${elemento.name.title}. ${elemento.name.first} ${elemento.name.last}
            <p>${elemento.email}</p>
            <p>${elemento.phone}</p>
            <p>${elemento.location.city}, ${elemento.location.state} (${elemento.location.country})</p>
            </div>
        </div>`;
        seccion.innerHTML += eleUsuario;
        }
    })
});

async function fetchDU(){
    const res = await fetch("https://randomuser.me/api/?results=5");
    return res.json();
}