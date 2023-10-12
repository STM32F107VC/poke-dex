/* Declare variables */
let convertPokemonNames;
let url;
let getIdOfPokemon;
let response;
let getPokemonName

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
];
let pokemonNamesLowerCase = [];
let pokemonId = [];

function init() {
    loadPokemon();
}

/* Fetch Pokemons */
async function loadPokemon() {
    for (let i = 0; i < pokemonNames.length; i++) {
        const namesOfPokemons = pokemonNames[i];
        convertPokemonNames = namesOfPokemons.toLowerCase();
        pokemonNames[i] = convertPokemonNames;
        // pokemonNamesLowerCase.push(convertPokemonNames);


        console.log('Der Name vom Pokemon lautet:', convertPokemonNames);
        url = ('https://pokeapi.co/api/v2/pokemon/' + convertPokemonNames);
        response = await fetch(url);
        currentPokemon = await response.json();
        getPokemonName = currentPokemon['name'];
        getIdOfPokemon = currentPokemon['id'];
        pokemonId.push(getIdOfPokemon);
        console.log('Loaded Pokémon', currentPokemon);
    }
    // renderPokemonInfo(currentPokemon);
}

// function renderPokemonInfo(currentPokemon) {
//     let name = currentPokemon['name'];
//     let imgPath = currentPokemon['sprites']['front_shiny'];
//     document.getElementById('pokemonName').innerHTML = `${name}`;
//     document.getElementById('pokemonImage').src = `${imgPath}`;
// }