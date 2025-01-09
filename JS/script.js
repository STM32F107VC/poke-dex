/* Made by: Sydney Bär */

/* Declare global variables */
let convertPokemonNames;
let url;
let response;
let currentPokemon;
let getPokemonName;
let getIdOfPokemon;
let getImgOfPokemon;
let getFirstTypeOfPokemon;
let getSecondTypeOfPokemon;
let typeOneOfPokemon;
let typeTwoOfPokemon;
let getHeight;
let getWeight;
let getAbiliy;
let maxPixelWidth = 300;
let startValue = 30;
let showMorePokemons = 30;
let maxAvailablePokemons = 1010;
let i = 0;
let id = 0;

/* Declare arrays */
let compareBackgroundColor = ['fighting', 'psychic', 'poison', 'dragon', 'ghost', 'dark', 'ground', 'fire', 'fairy', 'water', 'flying', 'normal', 'rock', 'electric', 'bug', 'grass', 'ice', 'steel'];
let pokemonNames = [];
let pokemonId = [];
let pokemonImg = [];
let cardBackgroundColor = [];
let secondTypeOfPokemon = [];
let height = [];
let weight = [];
let ability = [];
let calculatedHp = [];
let calculatedAttack = [];
let calculatedDefense = [];
let calculatedSpecialAttack = [];
let calculatedSpecialDefense = [];
let calculatedSpeed = [];
let likedPokemons = [];

/* JSON with pokemon types for changing cards background color */
const typeColors = {
    fighting: 'bgc-fighting',
    psychic: 'bgc-psychic',
    poison: 'bgc-poison',
    dragon: 'bgc-dragon',
    ghost: 'bgc-ghost',
    dark: 'bgc-dark',
    ground: 'bgc-ground',
    fire: 'bgc-fire',
    fairy: 'bgc-fairy',
    water: 'bgc-water',
    flying: 'bgc-flying',
    normal: 'bgc-normal',
    rock: 'bgc-rock',
    electric: 'bgc-electric',
    bug: 'bgc-bug',
    grass: 'bgc-grass',
    ice: 'bgc-ice',
    steel: 'bgc-steel',
};

/* Initialization function when body onload */
function init() {
    includeHTML();
    loadPokemon();
}

/* Fetch Pokemons */
async function loadPokemon() {
    try {
        for (i; i < startValue; i++) {
            id += 1;
            if (id <= maxAvailablePokemons) {
                await fetchPokemons();
                getPokemonValues();
            } else {
                id = 0;
                changeClasses();
            }
        }
    } catch (error) {
        console.error('Not possible to fetch pokemons data from PokéAPI.');
    }
}

/* Fetch pokemons from Poké-API and save name to pokemonNames array */
async function fetchPokemons() {
    url = ('https://pokeapi.co/api/v2/pokemon/' + id);
    response = await fetch(url);
    currentPokemon = await response.json();
    let pokemonName = currentPokemon['name'].replace(/^./, char => char.toUpperCase());
    pokemonNames.push(pokemonName);
}

/* Call functions to get informations about the pokemons */
function getPokemonValues() {
    getPokemonJsonValuesPart1();
    getPokmonJsonValuesPart2();
    getAndCalculateBaseStats();
    renderPokemonCards(i);
}

/* Add or remove CSS classes */
function changeClasses() {
    document.getElementById('load-btn').classList.add('d-none');
    document.getElementById('load-all-btn').classList.add('d-none');
    document.getElementById('loadPokemonContainer').classList.remove('space-betw');
    document.getElementById('loadPokemonContainer').classList.add('flex-end');
}

/* Load 30 more pokemons */
function loadMorePokemons() {
    startValue += showMorePokemons;
    loadPokemon();
}

/* Load all pokemons */
function loadAllPokemons() {
    document.getElementById('load-btn').classList.add('d-none');
    document.getElementById('load-all-btn').classList.add('d-none');
    document.getElementById('loadPokemonContainer').classList.remove('space-betw');
    document.getElementById('loadPokemonContainer').classList.add('flex-end');
    startValue = maxAvailablePokemons;
    loadPokemon();
}

/* Get specific pokemon out of Poke API JSON part 1 */
function getPokemonJsonValuesPart1() {
    getPokemonName = currentPokemon['name'];
    getIdOfPokemon = currentPokemon['id'];
    pokemonId.push(getIdOfPokemon);
    getImgOfPokemon = currentPokemon['sprites']['front_default'];
    pokemonImg.push(getImgOfPokemon);
    checkExistingArray();
}

/* Get specific pokemon values out of Poke API JSON part 2 */
function getPokmonJsonValuesPart2() {
    getFirstTypeOfPokemon = currentPokemon['types'][0]['type']['name'];
    cardBackgroundColor.push(getFirstTypeOfPokemon);
    getHeight = currentPokemon['height'];
    height.push(getHeight);
    getWeight = (currentPokemon['weight'] / 10).toFixed(0);
    weight.push(getWeight);
    getAbiliy = currentPokemon['abilities'][0]['ability']['name'];
    ability.push(getAbiliy);
}

/* Get base stats values */
function getAndCalculateBaseStats() {
    calculatedHp.push(currentPokemon['stats'][0]['base_stat']);
    calculatedAttack.push(currentPokemon['stats'][1]['base_stat']);
    calculatedDefense.push(currentPokemon['stats'][2]['base_stat']);
    calculatedSpecialAttack.push(currentPokemon['stats'][3]['base_stat']);
    calculatedSpecialDefense.push(currentPokemon['stats'][4]['base_stat']);
    calculatedSpeed.push(currentPokemon['stats'][5]['base_stat']);
}

/* Check if the second type array really exists */
function checkExistingArray() {
    if (currentPokemon['types'][1] === undefined) {
        getSecondTypeOfPokemon = '';
        secondTypeOfPokemon.push(getSecondTypeOfPokemon);
    } else {
        getSecondTypeOfPokemon = currentPokemon['types'][1]['type']['name'].toUpperCase();
        secondTypeOfPokemon.push(getSecondTypeOfPokemon);
    }
}

/* Get pokedex container to render in all pokemon cards */
function renderPokemonCards(i) {
    let renderPokemonCards = document.getElementById('pokedex');
    typeOneOfPokemon = getFirstTypeOfPokemon.toUpperCase();
    typeTwoOfPokemon = getSecondTypeOfPokemon.toUpperCase();
    renderPokemonCards.innerHTML += renderCard(i, typeOneOfPokemon, typeTwoOfPokemon);
    removeTypeTwoClasslistPart1(i);
    setBackgroundColor(i);
}

/* If there isn't a second type, remove class list */
function removeTypeTwoClasslistPart1(i) {
    if (typeTwoOfPokemon === '') {
        document.getElementById(`pokemonTypeTwo${i}`).classList.remove('bgc-transparent', 'type-information');
    }
}

/* If there isn't a second type, remove class list */
function removeTypeTwoClasslistPart2(i) {
    if (secondTypeOfPokemon[i] === '') {
        let typeTwoClasslist = document.getElementById(`typeTwoCard${i}`);
        typeTwoClasslist.classList.remove('bgc-transparent', 'type-information');
        typeTwoClasslist.classList.add('d-none', 'text-align-center');
    }
}

/* Show detailed pokemon informations */
function openPokemonInfoCard(i) {
    let k = true;
    let typeOne = cardBackgroundColor[i].toUpperCase();
    let typeTwo = secondTypeOfPokemon[i].toUpperCase();
    let infoContainer = document.getElementById('info-container');
    infoContainer.classList.remove('d-none');
    infoContainer.classList.add('bgc-pokeGrey');
    document.getElementById('loadPokemonContainer').classList.add('d-none');
    document.getElementById('pokedex').style = 'display: none;';
    infoContainer.innerHTML = renderPokemonInfoCard(i, typeOne, typeTwo);
    const c = document.getElementById('base-Stats');
    addDataToChart(c, i);
    removeArrow(i);
    removeTypeTwoClasslistPart2(i);
    setBackgroundColor(i, k);
}

/* Add pokemon stats to chart */
function addDataToChart(c, i) {
    (async function () {
        const data = [
            { ability: 'HP', count: calculatedHp[i] },
            { ability: 'ATK', count: calculatedAttack[i] },
            { ability: 'DEF', count: calculatedDefense[i] },
            { ability: 'SPEC ATK', count: calculatedSpecialAttack[i] },
            { ability: 'SPEC DEF', count: calculatedSpecialDefense[i] },
            { ability: 'SPEED', count: calculatedSpeed[i] },
        ];

        new Chart(c, {
            type: 'bar',
            data: {
                labels: data.map(row => row.ability),
                datasets: [
                    {
                        label: 'Base stats',
                        data: data.map(row => row.count),
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(255, 205, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(201, 203, 207, 0.2)'
                          ],
                          borderWidth: 2
                    }
                ],
                
            },

            options: {
                scales: {
                  y: {
                    beginAtZero: true
                  }
                }
              },
        }
        );
    })();
}

/* Remove arro left, when first pokecard and right when last one is clicked */
function removeArrow(i) {
    if (i == 0) {
        removeArrowLeft('leftArrow');
    }
    else if (i == pokemonNames.length - 1) {
        removeArrowRight('rightArrow');
    }
}

/* Hide info card, show all pokemon cards */
function removeInfoCard() {
    document.getElementById('pokedex').style = '';
    document.getElementById('loadPokemonContainer').classList.remove('d-none');
    let infoContainer = document.getElementById('info-container');
    infoContainer.classList.add('d-none');
}

/* Hide about pokemon section */
function hideAbout() {
    document.getElementById('about').classList.add('d-none');
    document.getElementById('base-stats').classList.remove('d-none');
}

/* Hide base-stats pokemon section */
function hideBaseStats() {
    document.getElementById('about').classList.remove('d-none');
    document.getElementById('base-stats').classList.add('d-none');
}

/* Set background-color of pokemon card depending on pokemon type */
function setBackgroundColor(i, k) {
    let getBackgroundColor = cardBackgroundColor[i];
    let bgColorClass = typeColors[getBackgroundColor] || 'bgc-default';
    let card = document.getElementById(`card${i}`);
    let infoCard = document.getElementById(`info-card-top${i}`);
    let bars = document.getElementById('base-stats');
    if (k) {
        k = false;
        infoCard.classList.add(bgColorClass);
        for (let j = 0; j < bars.children.length; j++) {
            let child = bars.children[j];
            // child.classList.add(bgColorClass);
        }
    } else { 
        card.classList.add(bgColorClass);
    }
}

/* Set background color of bars */
function setBarsBackgroundColor(i) {
    let getBackgroundColor = cardBackgroundColor[i];
    let bgColorClass = typeColors[getBackgroundColor] || 'bgc-default';
    let bars = document.getElementById('base-stats');
    bars.children.classList.add(bgColorClass);
}

/* Go to previous picture */
function previousImg(i) {
    if (!(i <= (pokemonNames.length - pokemonNames.length))) { // Check that i isn't smaller than array length
        i -= 1;
        openPokemonInfoCard(i);
        if (i === (pokemonNames.length - pokemonNames.length)) { removeArrowLeft('leftArrow'); }
    }
}

/* Go to next picture */
function nextImg(i) {
    if (i < pokemonNames.length - 1) { // Check that i isn't bigger than array length 
        i += 1;
        openPokemonInfoCard(i);
        if (i === pokemonNames.length - 1) { removeArrowRight('rightArrow'); }
    }
}

/* Hide left arrow if first picture is reached */
function removeArrowLeft(leftArrow) {
    let arrowHide = document.getElementById('previousPicture');
    if (leftArrow) { arrowHide.classList.add('hideArrow'); }
}

/* Hide right arrow if last picture is reached */
function removeArrowRight(rightArrow) {
    let arrowHide = document.getElementById('nextPicture');
    if (rightArrow) { arrowHide.classList.add('hideArrow'); }
}

/* Add red heart for like */
function addReadHeart(i) {
    let heart = document.getElementById(`heart${i}`);
    heart.innerHTML = '';
    heart.innerHTML = /*html*/`<img class="icon-size p-around-4px c-pointer" onclick ="removeRedHeart(${i})" src ="img/heart_filled.png" alt="red heart">`;
}

/* Remove red heart for dislike */
function removeRedHeart(i) {
    let heart = document.getElementById(`heart${i}`);
    heart.innerHTML = '';
    heart.innerHTML = /*html*/`<img class="icon-size p-around-4px c-pointer" onclick ="addReadHeart(${i})" src ="img/heart_white.png" alt="like">`;
}

/* Search pokemons with search field */
function filterPokemons() {
    let search = document.getElementById('search').value;
    let container = document.getElementById("pokedex");
    container.innerHTML = '';

    for (let k = 0; k < pokemonNames.length; k++) {
        let name = pokemonNames[k];

        if (name.includes(search)) {
            renderPokemonCards(k);
        }
    }
}