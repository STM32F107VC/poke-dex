/* Declare global variables */
let convertPokemonNames;
let url;
let response;
let getPokemonName;
let getIdOfPokemon;
let getImgOfPokemon;


/* Declare arrays */
let currentPokemon = [];
let pokemonNames = [
    "Bulbasaur",
    "Ivysaur",
    "Venusaur",
    "Charmander",
    "Charmeleon",
    "Charizard",
    "Squirtle",
    "Wartortle",
    "Blastoise",
    "Caterpie",
    "Metapod",
    "Butterfree",
    "Weedle",
    "Kakuna",
    "Beedrill",
    "Pidgey",
    "Pidgeotto",
    "Pidgeot",
    "Rattata",
    "Raticate",
    "Spearow",
    "Fearow",
    "Ekans",
    "Arbok",
    "Pikachu",
    "Raichu",
    "Sandshrew",
    "Sandslash",
    "Nidorina",
    "Nidoqueen",
    "Nidorino",
    "Nidoking",
    "Clefairy",
    "Clefable",
    "Vulpix",
    "Ninetales"
]; // Auslagern
let pokemonId = [];
let pokemonImg = [];
let cardBackgroundColor = [];

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
        pokemonId.push(getIdOfPokemon);
        pokemonImg.push(getImgOfPokemon);
        cardBackgroundColor.push(currentPokemon['game_indices'][1]['version']['name']);
        console.log('Loaded Pokémon', currentPokemon);
        renderPokemonCards(i);
    }

    // renderPokemonInfo(currentPokemon);
}

// function renderPokemonInfo(currentPokemon) {
//     let name = currentPokemon['name'];
//     let imgPath = currentPokemon['sprites']['front_shiny'];
//     document.getElementById('pokemonName').innerHTML = `${name}`;
//     document.getElementById('pokemonImage').src = `${imgPath}`;
// }

/* Render pokemon card */
function renderPokemonCards(i) {
    let renderPokemonCards = document.getElementById('pokedex');
    renderPokemonCards.innerHTML += /*html*/`
       <div id="card${i}" class="poke-card">
           <div id="IdOfPokemon" class="p-around-8">#${pokemonId[i]}</div>
           <div id="nameOfPokemon">${pokemonNames[i].toUpperCase()}</div>
            <div class="flex space-betw">
                <div>
                    <div></div>
                    <div></div>
                </div>
                <div id="imgPokemon"><img src="${pokemonImg[i]}" alt="pokemon"></div>
            </div>
       </div>`;
}