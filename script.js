let types = document.getElementById("types");
let search = document.getElementById("Search");
let container = document.getElementById("container");
let filter = document.getElementById("filter");
let reset = document.getElementById("reset");



reset.addEventListener("click", () => {
    window.location.reload();
});

search.addEventListener("input", function(){
    let searchValue = search.value;
     let allCards = document.querySelectorAll(".card");
    //  console.log(allCards);
     allCards.forEach(function(card){
        let pokemonName = card.children[0].children[0].children[1].innerText;
        if(pokemonName.startsWith(searchValue)){
            card.style.display = "block";
        }else{
            card.style.display = "none";
        } 
     })

})

filter.addEventListener("click", function(){
    console.log(types.value);
    let allCards = document.querySelectorAll(".card");
    allCards.forEach(function(card){
        let pokemonType = card.children[0].children[0].children[2].innerText;
        // let high = types.value;
        // high.style.textTransform = "";
        // console.log(pokemonType);
        if(pokemonType === types.value){
            // console.log(card);
            
            // console.log(types.value);
            card.style.display = "block";
        }
        else{
            card.style.display = "none";
            // console.log(pokemonType); 
        }
    })
})

function pokemonCreate(details){
    console.log(details);
    
    let card = document.createElement('div');
    let imageGen = details.sprites.front_default;
    let typess = details.types[0].type.name;
    card.classList.add("card")
    card.innerHTML=`
    <div class="inner-card" id="${details.types[0].type.name}"> 
        <div class="front-card">
        
        <img class="imgPok" src="${imageGen}">
        <div class="name">${details.name}</div>
        // Type :
        <div class="type"> ${typess}</div>
        <div class="stats">Stats : ${details.stats[0].base_stat}</div>
        
        </div>

        <div class="back-card">
        <img src='${details.sprites.back_default}'/>
        <div class="name">${details.name}</div>
        <div class="ability">${details.abilities[0].ability.name}</div>
        </div>
        </div>
    `;
    let letters="0123456789ABCDEF";
    let color="#";
    for(let i=0;i<6;i++){
       let index=Math.random()*16;

       color += letters[Math.floor(index)];
    }
    let imgPok = card.querySelector(".imgPok");
    let name = card.querySelector(".name");
    // let imgBack = card.querySelector(".imgBack");
    
    if(details.types[0].type.name === "grass" ){
        imgPok.style.background = "rgb(100, 196, 100)";
        // imgBack.style.background = "rgb(100, 196, 100)";
        name.style.background = "rgb(100, 196, 100)";
    }if(details.types[0].type.name === "bug"){
        imgPok.style.background = "#91A119";
        // imgBack.style.background = "#91A119";
        name.style.background = "#91A119";
    }if(details.types[0].type.name === "fire"){
        imgPok.style.background = "#E62829";
        // imgBack.style.background = "#E62829";
        name.style.background = "#E62829";
    }if(details.types[0].type.name === "water"){
        imgPok.style.background = "rgb(108, 216, 255)";
        // imgBack.style.background = "rgb(108, 216, 255)";
        name.style.background = "rgb(108, 216, 255)";
    }if(details.types[0].type.name === "normal"){
        imgPok.style.background = "#9FA19F";
        // imgBack.style.background = "#9FA19F";
        name.style.background = "#9FA19F";
    }if(details.types[0].type.name === "dragon"){
        imgPok.style.background = "#4B69FF";
        // imgBack.style.background = "#4B69FF";
        name.style.background = "#4B69FF";
    }
    if(details.types[0].type.name === "electric"){
        imgPok.style.background = "#FAC000";
        // imgBack.style.background = "#FAC000";
        name.style.background = "#FAC000";
    }if(details.types[0].type.name === "rock"){
        imgPok.style.background = "#AFA981";
        // imgBack.style.background = "#AFA981";
        name.style.background = "#AFA981";

    }
    if(details.types[0].type.name === "fairy"){
        imgPok.style.background = "#EF70EF";
        // imgBack.style.background = "#EF70EF";
        name.style.background = "#EF70EF";
    }
    if(details.types[0].type.name === "poison"){
        imgPok.style.background = "#9141CB";
        // imgBack.style.background = "#9141CB"; 
        name.style.background = "#9141CB";
    }
    if(details.types[0].type.name === "ground"){
        imgPok.style.background = "#915121";
        // imgBack.style.background = "#915121";
        name.style.background = "#915121";
    }
    if(details.types[0].type.name === "psychic"){
        imgPok.style.background = "#EF4179";
        // imgBack.style.background = "#EF4179";
        name.style.background = "#EF4179";
    }
    if(details.types[0].type.name === "flying"){
        imgPok.style.background = "#81B9EF";
        // imgBack.style.background = "#81B9EF";
        name.style.background = "#81B9EF";
    }
    if(details.types[0].type.name === "fighting"){
        imgPok.style.background = "#FF8000";
        // imgBack.style.background = "#FF8000";
        name.style.background = "#FF8000";
    }
    if(details.types[0].type.name === "ghost"){
        imgPok.style.background = "#704170";
        // imgBack.style.background = "#704170";
        name.style.background = "#704170";
    }
    // console.log(card);
    return card;
    
}

async function fetchPokemon(i){
    let data = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    let result = await data.json();
    return result;
}

async function fetchingMainData() {
    for (let i = 1; i<=200; i++) {
        let pokemon = await fetchPokemon(i);
        // console.log(pokemon);
        
        let card = pokemonCreate(pokemon);
        container.appendChild(card);
      }
}

fetchingMainData();

