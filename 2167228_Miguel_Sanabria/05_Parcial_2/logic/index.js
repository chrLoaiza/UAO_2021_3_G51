
let lcards = document.getElementById("cards")

function fetchPokemon(id,num){
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  .then(function(response){
    response.json()
    .then(function(pokemon){
      displayPokemon(pokemon, num)
    })
  })
}

function randomNumber(){
  for (let index = 1; index < 5; index++) {
    let poke = Math.round((Math.random()*889)+1)
    fetchPokemon(poke,index)
  }
}

 randomNumber();

 function displayPokemon(pokemon, num){
   let card = lcards.querySelector(`#card-${num}`)
   let image = card.getElementsByTagName("img")[0]
    image.setAttribute("src", `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`)
    let name = card.getElementsByTagName("h3")[0]
    name.textContent = pokemon.name
    let id = card.getElementsByTagName("p")[0]
    id.textContent = "("+pokemon.id+")"
    let height = card.getElementsByClassName("value")[0]
    height.textContent = pokemon.height
    let weight = card.getElementsByClassName("value")[1]
    weight.textContent = pokemon.weight
    let hp = card.getElementsByClassName("value")[2]
    hp.textContent = pokemon.stats[0].base_stat
    let attack = card.getElementsByClassName("value")[3]
    attack.textContent = pokemon.stats[1].base_stat
    let defense = card.getElementsByClassName("value")[4]
    defense.textContent = pokemon.stats[2].base_stat
 }
