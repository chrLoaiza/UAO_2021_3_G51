const request_btn = document.getElementById("request-btn");
request_btn.addEventListener("click", async () => {
  const cardList = document.getElementById("card-list");

 
  
  const response = await fetch('https://animechan.vercel.app/api/quotes');
  const animes = await response.json();
  
  console.log(response.headers.get('animes'))
    
           for (let index = 0; index < animes.length; index++) {
           const element = animes[index];
           const animeid = `
           <div id="card-list">
           <h3>Name</h3>
           <p>${element.anime}</p>
           <h3>Character</h3>
           <p>${element.character}</p>
           <h3>Quote</h3>
           <p>${element["quote"]}</p>
           
           </div>
            `;
           const anime_container = document.getElementById("parcial");
           anime_container.innerHTML += animeid;
     }
   

});


   

