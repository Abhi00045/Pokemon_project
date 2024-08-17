let types = document.getElementById("types");
let search = document.getElementById("Search");
let container = document.getElementById("container");
let filter = document.getElementById("filter");
let reset = document.getElementById("reset");

reset.addEventListener("click", () => {
    window.location.reload();
});

search.addEventListener("input", function(){
    let searchValue = user_input.value;
     let allCards = document.querySelectorAll(".card");
    //  console.log(allCards);
     allCards.forEach(function(card){
        let pokemonName = card.children[0].children[0].children[2].innerText;
        if(pokemonName.startsWith(searchValue)){
            card.style.display = "block";
        }else{
            card.style.display = "none";
        } 
     })

})

filter.addEventListener("click", function(){
    let allCards = document.querySelectorAll(".card");
    allCards.forEach(function(card){
        let pokemonType = card.children[0].children[0].children[3].innerText;
        if(pokemonType === select_type.value){
            card.style.display = "block";
        }
        else{
            card.style.display = "none";
        }
    })
})

function pokemonCreate(details){
    let card = document.createElement('div');
    card.classList.add("card")
    card.innerHTML=`
    <div class="inner-card" id="${details.types[0].type.name}"> 
        <div class="front-card">
        <div class="id">${details.id}</div>
        <img src="${details.sprites.front_default}">
        <div class="name">${details.name}</div>
        <div class="type">${details.types[0].type.name}</div>
        <div class="stats">stats : ${details.stats[0].base_stat}</div>
        </div>

        <div class="back-card">
        <img src='${details.sprites.back_default}'/>
        <div class="name">${details.name}</div>
        <div class="ability">${details.abilities[0].ability.name}</div>
        </div>
        </div>
    `;
    console.log(card);
    return card;
    
}

async function fetchPokemon(i){
    let data = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    let result = await data.json();
    return result;
}

async function fetchingMainData() {
    for (let i = 1; i <= 1; i++) {
        let pokemon = await fetchPokemon(i);
        console.log(pokemon);
        
        let card = pokemonCreate(pokemon);
        container.appendChild(card);
      }
}

fetchingMainData();

