/* Render pokemon card content */
function renderCard(i, typeOneOfPokemon, typeTwoOfPokemon) {
    return /*html*/`
        <div id="card${i}" class="poke-card border-small cursoir-point" onclick="openPokemonInfoCard(${i})">
        <img class="pokeball" src="img/half_pokeball.svg" alt="half pokeball">
        <div id="IdOfPokemon" class="p-around-8 text-style">#${pokemonId[i]}</div>
        <div id="nameOfPokemon" class="text-style">• ${pokemonNames[i]} •</div>
        <div class="flex space-betw">
            <div id="type-container" class="flex flex-column">
                <div id="pokemonTypeOne${i}" class="bgc-transparent type-information p-around-8px">${typeOneOfPokemon}</div>
                <div id="pokemonTypeTwo${i}" class="bgc-transparent type-information p-around-8px">${typeTwoOfPokemon}</div>
            </div>
            <div id="imgPokemon"><img class="img-pokemon-size" src="${pokemonImg[i]}" alt="pokemon"></div>
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
            <div onclick="removeInfoCard(${i})"><img class="icon-size p-around-4px cursoir-point" src="img/icons_back.png" alt="escape"></div>
            <div id="heart${i}"><img onclick="addReadHeart(${i})" class="icon-size p-around-4px cursoir-point" src="img/icons8-heart-50.png" alt="escape"></div>
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
            <img id="previousPicture" class="icon-size p-around-4px cursoir-point" src="img/icons8-back-26.png" alt="backward" onclick="previousImg(${i})">
            <img id="nextPicture" class="icon-size p-around-4px cursoir-point" src="img/icons8-forward-26.png" alt="forward" onclick="nextImg(${i})">
        </div>`;
}

/* Pokemon info bottom-container bottom part */
function infoCardBottomSubdivSecond() {
    return /*html*/`
        <div class="margin-top-minus-12px">
            <div class="flex center">
                <span onclick="hideBaseStats()" class="p-around-8px a-tag cursoir-point">ABOUT</span>
                <span onclick="hideAbout()" class="p-around-8px a-tag cursoir-point">BASE STATS</span>
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
    let maxPixelWidth = 400;
    return /*html*/`
        <div class="margin-bottom-2px bars-diagram" style="width: ${calculatedHp[i] * 100 / maxPixelWidth}%">1</div>
        <div class="margin-bottom-2px bars-diagram" style="width: ${calculatedAttack[i] * 100 / maxPixelWidth}%"><span>&nbsp;2</span></div> 
        <div class="margin-bottom-2px bars-diagram" style="width: ${calculatedDefense[i] * 100 / maxPixelWidth}%"><span>&nbsp;3</span></div> 
        <div class="margin-bottom-2px bars-diagram" style="width: ${calculatedSpecialAttack[i] * 100 / maxPixelWidth}%"><span>&nbsp;4</span></div>
        <div class="margin-bottom-2px bars-diagram" style="width: ${calculatedSpecialDefense[i] * 100 / maxPixelWidth}%"><span>&nbsp;5</span></div>
        <div class="margin-bottom-2px bars-diagram" style="width: ${calculatedSpeed[i] * 100 / maxPixelWidth}%"><span>&nbsp;6</span></div>`;
}