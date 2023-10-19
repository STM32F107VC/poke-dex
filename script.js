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
startValue = 30;
let i = 0;
let maxAvailablePokemons = 919;

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
    for (i; i < startValue; i++) {
        let id = i;
        if (i == 0) { id += 1; }
        url = ('https://pokeapi.co/api/v2/pokemon/' + id);
        response = await fetch(url);
        currentPokemon = await response.json();
        pokemonNames.push(currentPokemon['name']);
        console.log(currentPokemon);
        getPokemonJsonValuesPart1();
        getPokmonJSONValuesPart2();
        getAndCalculateBaseStats();
        renderPokemonCards(i);
    }
}

/* Load 30 more pokemons */
function loadMorePokemons() {
    startValue += i;
    if (startValue < maxAvailablePokemons) {
        loadPokemon();
    } else {
        alert('All Pokemons are loaded.');
    }
}

/* Get specific pokemon out of Poke API JSON part 1 */
function getPokemonJsonValuesPart1() {
    getPokemonName = currentPokemon['name'];
    getIdOfPokemon = currentPokemon['id'];
    pokemonId.push(getIdOfPokemon);
    getImgOfPokemon = currentPokemon['sprites']['front_default'];
    pokemonImg.push(getImgOfPokemon);
    console.log('Loaded Pokémon', currentPokemon);
    checkExistingArray();
}

/* Get specific pokemon values out of Poke API JSON part 2 */
function getPokmonJSONValuesPart2() {
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

/* Render pokemon card content */
function renderCard(i, typeOneOfPokemon, typeTwoOfPokemon) {
    return /*html*/`
        <div id="card${i}" class="poke-card border-small" onclick="openPokemonInfoCard(${i})">
            <div id="IdOfPokemon" class="p-around-8 text-style">#${pokemonId[i]}</div>
            <div id="nameOfPokemon" class="text-style">${pokemonNames[i].toUpperCase()}</div>
            <div class="flex space-betw">
                <div id="type-container" class="flex flex-column">
                    <div id="pokemonTypeOne${i}" class="bgc-transparent type-information p-around-8px">${typeOneOfPokemon}</div>
                    <div id="pokemonTypeTwo${i}" class="bgc-transparent type-information p-around-8px">${typeTwoOfPokemon}</div>
                </div>
                <div id="imgPokemon"><img class="img-pokemon-size" src="${pokemonImg[i]}" alt="pokemon"></div>
            </div>
        </div >`;
}

/* Show detailed pokemon informations */
function openPokemonInfoCard(i) {
    let k = true;
    let typeOne = cardBackgroundColor[i].toUpperCase();
    let typeTwo = secondTypeOfPokemon[i].toUpperCase();
    let infoContainer = document.getElementById('info-container');
    document.getElementById('loadPokemonContainer').classList.add('d-none');
    infoContainer.classList.remove('d-none');
    infoContainer.classList.add('bgc-pokeGrey');
    document.getElementById('pokedex').style = 'display: none;';
    infoContainer.innerHTML = renderPokemonInfoCard(i, typeOne, typeTwo);
    removeTypeTwoClasslistPart2(i);
    setBackgroundColor(i, k);
}

/* Render the info card when clicking on a pokemon card */
function renderPokemonInfoCard(i, typeOne, typeTwo) {
    return /*html*/`
        <div class="inner-info-container border-small">
            <div id="info-card-top${i}" class="info-top-div p-around-8px"> 
                ${infoCardTopSubdivFirst(i)}
                ${infoCardTopSubdivSecond(i, typeOne, typeTwo)}
            </div>
            <div class="inner-info-bottomDiv">
                ${infoCardBottomSubdivFirst(i)}
                ${infoCardBottomSubdivSecond()}
                <div class="flex center margin-top-16px" id="about">${infoCardBottomSubdivAbout(i)}</div>
                <div class="flex flex-column text-align-center p-around-8px d-none" id="base-stats">${infoCardBottomSubdivBaseStats(i)}</div>
                <div class="flex center font-size-12px margin-top-minus-4px d-none" id="legend">1. Hp 2. Attack 3. Defense 4. Spec. Attack 5. Spec. Defense 6. Speed</div>
            </div>
        </div>`;
}

/* Pokemon info top-container top part */
function infoCardTopSubdivFirst(i) {
    return /*html*/`     
        <div class="flex space-betw p-around-8px">
            <div onclick="removeInfoCard(${i})"><img class="icon-size p-around-4px" src="img/icons_back.png" alt="escape"></div>
            <div id="heart${i}"><img onclick="addReadHeart(${i})" class="icon-size p-around-4px" src="img/icons8-heart-50.png" alt="escape"></div>
        </div>`;
}

/* Pokemon info top-container bottom part */
function infoCardTopSubdivSecond(i, typeOne, typeTwo) {
    return /*html*/`
        <div class="flex space-betw p-around-8px">
            <div class="flex flex-column">
                <div id="nameOfPokemon" class="text-style">${pokemonNames[i].toUpperCase()}</div>
                <div id="type-container" class="flex">
                    <div id="pokemonTypeOne${i}" class="bgc-transparent type-information p-around-8px">${typeOne}</div>
                    <div id="typeTwoCard${i}" class="bgc-transparent type-information p-around-8px margin-left-2px">${typeTwo}</div>
                </div>
            </div>
            <div id="IdOfPokemon" class="p-around-8 text-style font-size-28px">#${pokemonId[i]}</div>
        </div>`;
}

/* Pokemon info bottom-container top part */
function infoCardBottomSubdivFirst(i) {
    return /*html*/`
        <div class="flex center margin-top-minus-12px"><img class="img-info-card-poke-size" src="${pokemonImg[i]}" alt="pokemon"></div>
        <div class="flex space-betw p-around-8px margin-top-minus-62px">
            <img id="previousPicture" class="icon-size p-around-4px" src="img/icons8-back-26.png" alt="backward" onclick="previousImg(${i})">
            <img id="nextPicture" class="icon-size p-around-4px" src="img/icons8-forward-26.png" alt="forward" onclick="nextImg(${i})">
        </div>`;
}

/* Pokemon info bottom-container bottom part */
function infoCardBottomSubdivSecond() {
    return /*html*/`
        <div class="margin-top-minus-12px">
            <div class="flex center">
                <span onclick="hideBaseStats()" class="p-around-8px text-style a-tag">ABOUT</span>
                <span onclick="hideAbout()" class="p-around-8px text-style a-tag">BASE STATS</span>
            </div>
        </div>`;
}

/* Pokemon info bottom-container bottom pokemon about part */
function infoCardBottomSubdivAbout(i) {
    return /*html*/`
        <div id="pokemonAbout" class="p-around-8px">
            <table>
                <tr><td>Height:</td><td class="text-align-center">${height[i] / 10} m</td></tr>
                <tr><td>Weight:</td><td class="text-align-center">${weight[i]} kg</td></tr>
                <tr><td>Ability:</td><td class="text-align-center">${ability[i]}</td></tr>
            </table>
        </div>`;
}

/* Pokemon info bottom-container bottom pokemon base-stats part */
function infoCardBottomSubdivBaseStats(i) {
    let maxPixelWidth = 150;
    return /*html*/`
        <div class="margin-bottom-2px bars-diagram" style="width: ${calculatedHp[i] * 100 / maxPixelWidth}%">1</div>
        <div class="margin-bottom-2px bars-diagram" style="width: ${calculatedAttack[i] * 100 / maxPixelWidth}%"><span>&nbsp;2</span></div> 
        <div class="margin-bottom-2px bars-diagram" style="width: ${calculatedDefense[i] * 100 / maxPixelWidth}%"><span>&nbsp;3</span></div> 
        <div class="margin-bottom-2px bars-diagram" style="width: ${calculatedSpecialAttack[i] * 100 / maxPixelWidth}%"><span>&nbsp;4</span></div>
        <div class="margin-bottom-2px bars-diagram" style="width: ${calculatedSpecialDefense[i] * 100 / maxPixelWidth}%"><span>&nbsp;5</span></div>
        <div class="margin-bottom-2px bars-diagram" style="width: ${calculatedSpeed[i] * 100 / maxPixelWidth}%"><span>&nbsp;6</span></div>`;
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
    document.getElementById('legend').classList.remove('d-none');
}

/* Hide base-stats pokemon section */
function hideBaseStats() {
    document.getElementById('about').classList.remove('d-none');
    document.getElementById('base-stats').classList.add('d-none');
    document.getElementById('legend').classList.add('d-none');
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
            child.classList.add(bgColorClass);
        }
    } else { card.classList.add(bgColorClass); }
}

/* Set background color of bars */
function setBarsBackgroundColor(i) {
    let getBackgroundColor = cardBackgroundColor[i];
    let bgColorClass = typeColors[getBackgroundColor] || 'bgc-default';
    let bars = document.getElementById('base-stats');
    bars.children.classList.add(bgColorClass);
}

// Go to previous picture
function previousImg(i) {
    if (!(i <= (pokemonNames.length - pokemonNames.length))) { // Check that i isn't smaller than array length
        i -= 1;
        openPokemonInfoCard(i);
        if (i === (pokemonNames.length - pokemonNames.length)) { removeArrowLeft('leftArrow'); }
    }
}

// Go to next picture
function nextImg(i) {
    if (i < pokemonNames.length - 1) { // Check that i isn't bigger than array length 
        i += 1;
        openPokemonInfoCard(i);
        if (i === pokemonNames.length - 1) { removeArrowRight('rightArrow'); }
    }
}

// Hide left arrow if first picture is reached
function removeArrowLeft(leftArrow) {
    let arrowBehindPrevious = document.getElementById('previousPicture');
    if (leftArrow) { arrowBehindPrevious.classList.add('hideArrow'); }
}

// Hide right arrow if last picture is reached
function removeArrowRight(rightArrow) {
    let arrowBehindNext = document.getElementById('nextPicture');
    if (rightArrow) { arrowBehindNext.classList.add('hideArrow'); }
}

/* Add red heart for like */
function addReadHeart(i) {
    let heart = document.getElementById(`heart${i}`);
    heart.innerHTML = '';
    heart.innerHTML = /*html*/`<img class="icon-size p-around-4px" onclick ="removeRedHeart(${i})" src ="img/icons8-heart-50-filled.png" alt="red heart">`;
}

/* Remove red heart for dislike */
function removeRedHeart(i) {
    let heart = document.getElementById(`heart${i}`);
    heart.innerHTML = '';
    heart.innerHTML = /*html*/`<img class="icon-size p-around-4px" onclick ="addReadHeart(${i})" src ="img/icons8-heart-50.png" alt="like">`;
}

/* Search pokemons with search field */
function filterPokemons() {
    let search = document.getElementById('search').value;
    let container = document.getElementById("pokedex");
    container.innerHTML = '';
    search = search.toLowerCase();
    for (let k = 0; k < pokemonNames.length; k++) {
        let name = pokemonNames[k];
        if (name.includes(search)) {
            renderPokemonCards(k);
        } else if (search.value === '') {
            loadPokemon();
        }
    }
}


