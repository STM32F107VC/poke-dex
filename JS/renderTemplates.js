/* Render pokemon card content */
function renderCard(i, typeOneOfPokemon, typeTwoOfPokemon) {
    return /*html*/`
        <div id="card${i}" class="poke-card border-small c-pointer" onclick="openPokemonInfoCard(${i})">
        <img class="pokeball" draggable=false src="img/half_pokeball.svg" alt="half pokeball">
        <div id="IdOfPokemon" class="p-around-8 text-style">#${pokemonId[i]}</div>
        <div id="nameOfPokemon" class="text-style">• ${pokemonNames[i]} •</div>
        <div class="flex space-betw">
            <div id="type-container" class="flex flex-column">
                <div id="pokemonTypeOne${i}" class="bgc-transparent type-information p-around-8px">${typeOneOfPokemon}</div>
                <div id="pokemonTypeTwo${i}" class="bgc-transparent type-information p-around-8px">${typeTwoOfPokemon}</div>
            </div>
            <div id="imgPokemon"><img class="img-pokemon-size" draggable='false' src="${pokemonImg[i]}" alt="pokemon"></div>
            </div>
        </div >`;
}

/* Render the info card when clicking on a pokemon card */
function renderPokemonInfoCard(i, typeOne, typeTwo) {
    return /*html*/`
        <div class="inner-info-container border-small">
            <div id="info-card-top${i}" class="info-top-div p-around-8px"> 
                ${infoCardTopSubdivFirst(i)}
                ${infoCardTopSubdivSecond(i, typeOne, typeTwo)}
            </div>
            <div class="inner-info-bottomDiv margin-top-minus-24px">
                ${infoCardBottomSubdivFirst(i)}
                ${infoCardBottomSubdivSecond()}
                <div class="flex center margin-top-16px" id="about">${infoCardBottomSubdivAbout(i)}</div>
                <div class="flex flex-column text-align-center p-around-8px d-none" id="base-stats">
                    <canvas style='width: unset; height: unset;' id="canvas"></canvas>
                </div>
            </div>
        </div>`;
}

/* Pokemon info top-container top part */
function infoCardTopSubdivFirst(i) {
    return /*html*/`     
        <div class="flex space-betw p-around-8px">
            <div onclick="removeInfoCard(${i})"><img draggable='false' class="icon-size p-around-4px c-pointer" src="img/go_back.png" alt="escape"></div>
            <div id="heart${i}"><img draggable='false' onclick="addReadHeart(${i})" class="icon-size p-around-4px c-pointer" src="img/heart_white.png" alt="like"></div>
        </div>`;
}

/* Pokemon info top-container bottom part */
function infoCardTopSubdivSecond(i, typeOne, typeTwo) {
    return /*html*/`
        <div class="flex space-betw p-around-8px">
            <div class="flex flex-column">
                <div id="nameOfPokemon" class="text-style">• ${pokemonNames[i]} •</div>
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
        <div class="flex center margin-top-minus-12px"><img class="img-info-card-poke-size" draggable=false src="${pokemonImg[i]}" alt="pokemon"></div>
        <div class="flex space-betw p-around-8px margin-top-minus-62px">
            <img id="previousPicture" draggable='false' class="icon-size p-around-4px c-pointer" src="img/arrow_back.png" alt="backward" onclick="previousImg(${i})">
            <img id="nextPicture" draggable='false' class="icon-size p-around-4px c-pointer" src="img/arrow_next.png" alt="forward" onclick="nextImg(${i})">
        </div>`;
}

/* Pokemon info bottom-container bottom part */
function infoCardBottomSubdivSecond() {
    return /*html*/`
        <div>
            <div class="flex center">
                <span id="info" onclick="hideBaseStats()" class="p-around-8px fw-500 a-tag c-pointer highlight">ABOUT</span>
                <span id="stats" onclick="hideAbout()" class="p-around-8px fw-500 a-tag c-pointer">BASE STATS</span>
            </div>
        </div>`;
}

/* Pokemon info bottom-container bottom pokemon about part */
function infoCardBottomSubdivAbout(i) {
    return /*html*/`
        <div id="pokemonAbout" class="p-around-8px">
            <table>
                <tr><td>Height:</td><td>${height[i] / 10} m</td></tr>
                <tr><td>Weight:</td><td>${weight[i]} kg</td></tr>
                <tr><td>Ability:</td><td>${ability[i]}</td></tr>
            </table>
        </div>`;
}