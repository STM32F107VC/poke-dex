/* Declare global variables */
let convertPokemonNames;
let url;
let response;
let getPokemonName;
let getIdOfPokemon;
let getImgOfPokemon;
let getFirstTypeOfPokemon;
// let getSecondTypeOfPokemon;



let fighting = 'fighting';
let psychic = 'psychic';
let poison = 'poison';
let dragon = 'dragon';
let ghost = 'ghost';
let dark = 'dark';
let ground = 'ground';
let fire = 'fire';
let fairy = 'fairy';
let water = 'water';
let flying = 'flying';
let normal = 'normal';
let rock = 'rock';
let electric = 'electric';
let bug = 'bug';
let grass = 'grass';
let ice = 'ice';
let steel = 'steel';

/* Declare arrays */
let currentPokemon = [];
let pokemonNames = ["Bulbasaur", "Ivysaur", "Venusaur", "Charmander", "Charmeleon", "Charizard", "Squirtle", "Wartortle", "Blastoise", "Caterpie", "Metapod", "Butterfree", "Weedle", "Kakuna", "Beedrill", "Pidgey", "Pidgeotto", "Pidgeot", "Rattata", "Raticate", "Spearow", "Fearow", "Ekans", "Arbok", "Pikachu", "Raichu", "Sandshrew", "Sandslash", "Nidorina", "Nidoqueen", "Nidorino", "Nidoking", "Clefairy", "Clefable", "Vulpix", "Ninetales"];
// Auslagern
let pokemonId = [];
let pokemonImg = [];
let cardBackgroundColor = [];
let compareBackgroundColor = ['fighting', 'psychic', 'poison', 'dragon', 'ghost', 'dark', 'ground', 'fire', 'fairy', 'water', 'flying', 'normal', 'rock', 'electric', 'bug', 'grass', 'ice', 'steel'];

function init() {
    includeHTML();
    loadPokemon();
}

/* Fetch Pokemons */
async function loadPokemon() {
    for (let i = 0; i < pokemonNames.length; i++) {
        const namesOfPokemons = pokemonNames[i];
        convertPokemonNames = namesOfPokemons.toLowerCase();
        pokemonNames[i] = convertPokemonNames;
        console.log('Der Name vom Pokemon lautet:', convertPokemonNames);

        url = ('https://pokeapi.co/api/v2/pokemon/' + convertPokemonNames);
        response = await fetch(url);
        currentPokemon = await response.json();
        getPokemonName = currentPokemon['name'];
        getIdOfPokemon = currentPokemon['id'];
        getImgOfPokemon = currentPokemon['sprites']['front_shiny'];
        getFirstTypeOfPokemon = currentPokemon['types'][0]['type']['name'];
        // getSecondTypeOfPokemon = currentPokemon['types'][1]['type']['name'];
        console.log(getFirstTypeOfPokemon);
        // console.log(getSecondTypeOfPokemon);
        pokemonId.push(getIdOfPokemon);
        pokemonImg.push(getImgOfPokemon);
        cardBackgroundColor.push(getFirstTypeOfPokemon);
        console.log('Loaded Pokémon', currentPokemon);
        renderPokemonCards(i);
    }
}

/* Get pokedex container to render in all pokemon cards */
function renderPokemonCards(i) {
    let renderPokemonCards = document.getElementById('pokedex');
    let typeOfPokemon = getFirstTypeOfPokemon[0].toUpperCase() + getFirstTypeOfPokemon.slice(1);
    renderPokemonCards.innerHTML += renderCard(i, typeOfPokemon);
    setBackgroundColor(i);
}

/* Render pokemon card content */
function renderCard(i, typeOfPokemon) {
    return /*html*/`
    <div id="card${i}" class="poke-card">
        <div id="IdOfPokemon" class="p-around-8">#${pokemonId[i]}</div>
        <div id="nameOfPokemon">${pokemonNames[i].toUpperCase()}</div>
         <div class="flex space-betw">
             <div>
                 <div id="pokemonType1">${typeOfPokemon}</div>
                 <div id="pokemonType2"></div>
             </div>
             <div id="imgPokemon"><img src="${pokemonImg[i]}" alt="pokemon"></div>
         </div>
    </div>`;
}

/* Set background-color of each pokemon card */
function setBackgroundColor(i) {
    let getBackgroundColor = cardBackgroundColor[i];
    if (getBackgroundColor === fighting) { document.getElementById(`card${i}`).classList.add('bgc-fighting'); }
    else if (getBackgroundColor === psychic) { document.getElementById(`card${i}`).classList.add('bgc-psychic'); }
    else if (getBackgroundColor === poison) { document.getElementById(`card${i}`).classList.add('bgc-poison'); }
    else if (getBackgroundColor === dragon) { document.getElementById(`card${i}`).classList.add('bgc-dragon'); }
    else if (getBackgroundColor === ghost) { document.getElementById(`card${i}`).classList.add('bgc-ghost'); }
    else if (getBackgroundColor === dark) { document.getElementById(`card${i}`).classList.add('bgc-dark'); }
    else if (getBackgroundColor === ground) { document.getElementById(`card${i}`).classList.add('bgc-ground'); }
    else if (getBackgroundColor === fire) { document.getElementById(`card${i}`).classList.add('bgc-fire'); }
    else if (getBackgroundColor === fairy) { document.getElementById(`card${i}`).classList.add('bgc-fairy'); }
    else if (getBackgroundColor === water) { document.getElementById(`card${i}`).classList.add('bgc-water'); }
    else if (getBackgroundColor === flying) { document.getElementById(`card${i}`).classList.add('bgc-flying'); }
    else if (getBackgroundColor === normal) { document.getElementById(`card${i}`).classList.add('bgc-normal'); }
    else if (getBackgroundColor === rock) { document.getElementById(`card${i}`).classList.add('bgc-rock'); }
    else if (getBackgroundColor === electric) { document.getElementById(`card${i}`).classList.add('bgc-electric'); }
    else if (getBackgroundColor === bug) { document.getElementById(`card${i}`).classList.add('bgc-bug'); }
    else if (getBackgroundColor === grass) { document.getElementById(`card${i}`).classList.add('bgc-grass'); }
    else if (getBackgroundColor === ice) { document.getElementById(`card${i}`).classList.add('bgc-ice'); }
    else if (getBackgroundColor === steel) { document.getElementById(`card${i}`).classList.add('bgc-steel'); }
    else { document.getElementById(`card${i}`).classList.add('bgc-default'); }
}


