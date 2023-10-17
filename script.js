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

/* Declare arrays */
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
    // "Pidgeot",
    // "Rattata",
    // "Raticate",
    // "Spearow",
    // "Fearow",
    // "Ekans",
    // "Arbok",
    // "Pikachu",
    // "Raichu",
    // "Sandshrew",
    // "Sandslash",
    // "Nidorina",
    // "Nidoqueen",
    // "Nidorino",
    // "Nidoking",
    // "Clefairy",
    // "Clefable",
    // "Vulpix",
    // "Ninetales",
    // "Jigglypuff",
    // "Wigglytuff",
    // "Zubat",
    // "Golbat",
    // "Oddish",
    // "Gloom",
    // "Vileplume",
    // "Paras",
    // "Parasect",
    // "Venonat",
    // "Venomoth",
    // "Diglett",
    // "Dugtrio",
    // "Meowth",
    // "Persian",
    // "Psyduck",
    // "Golduck",
    // "Mankey",
    // "Primeape",
    // "Growlithe",
    // "Arcanine",
    // "Poliwag",
    // "Poliwhirl",
    // "Poliwrath",
    // "Abra",
    // "Kadabra",
    // "Alakazam",
    // "Machop",
    // "Machoke",
    // "Machamp",
    // "Bellsprout",
    // "Weepinbell",
    // "Victreebel",
    // "Tentacool",
    // "Tentacruel",
    // "Geodude",
    // "Graveler",
    // "Golem",
    // "Ponyta",
    // "Rapidash",
    // "Slowpoke",
    // "Slowbro",
    // "Magnemite",
    // "Magneton",
    // "Farfetch'd",
    // "Doduo",
    // "Dodrio",
    // "Seel",
    // "Dewgong",
    // "Grimer",
    // "Muk",
    // "Shellder",
    // "Cloyster",
    // "Gastly",
    // "Haunter",
    // "Gengar",
    // "Onix",
    // "Drowzee",
    // "Hypno",
    // "Krabby",
    // "Kingler",
    // "Voltorb",
    // "Electrode",
    // "Exeggcute",
    // "Exeggutor",
    // "Cubone",
    // "Marowak",
    // "Hitmonlee",
    // "Hitmonchan",
    // "Lickitung",
    // "Koffing",
    // "Weezing",
    // "Rhyhorn",
    // "Rhydon",
    // "Chansey",
    // "Tangela",
    // "Kangaskhan",
    // "Horsea",
    // "Seadra",
    // "Goldeen",
    // "Seaking",
    // "Staryu",
    // "Starmie",
    // "Scyther",
    // "Jynx",
    // "Electabuzz",
    // "Magmar",
    // "Pinsir",
    // "Tauros",
    // "Magikarp",
    // "Gyarados",
    // "Lapras",
    // "Ditto",
    // "Eevee",
    // "Vaporeon",
    // "Jolteon",
    // "Flareon",
    // "Porygon",
    // "Omanyte",
    // "Omastar",
    // "Kabuto",
    // "Kabutops",
    // "Aerodactyl",
    // "Snorlax",
    // "Articuno",
    // "Zapdos",
    // "Moltres",
    // "Dratini",
    // "Dragonair",
    // "Dragonite",
    // "Mewtwo",
    // "Mew",
    // "Chikorita",
    // "Bayleef",
    // "Meganium",
    // "Cyndaquil",
    // "Quilava",
    // "Typhlosion",
    // "Totodile",
    // "Croconaw",
    // "Feraligatr",
    // "Sentret",
    // "Furret",
    // "Hoothoot",
    // "Noctowl",
    // "Ledyba",
    // "Ledian",
    // "Spinarak",
    // "Ariados",
    // "Crobat",
    // "Chinchou",
    // "Lanturn",
    // "Pichu",
    // "Cleffa",
    // "Igglybuff",
    // "Togepi",
    // "Togetic",
    // "Natu",
    // "Xatu",
    // "Mareep",
    // "Flaaffy",
    // "Ampharos",
    // "Bellossom",
    // "Marill",
    // "Azumarill",
    // "Sudowoodo",
    // "Politoed",
    // "Hoppip",
    // "Skiploom",
    // "Jumpluff",
    // "Aipom",
    // "Sunkern",
    // "Sunflora",
    // "Yanma",
    // "Wooper",
    // "Quagsire",
    // "Espeon",
    // "Umbreon",
    // "Murkrow",
    // "Slowking",
    // "Misdreavus",
    // "Unown",
    // "Wobbuffet",
    // "Girafarig",
    // "Pineco",
    // "Forretress",
    // "Dunsparce",
    // "Gligar",
    // "Steelix",
    // "Snubbull",
    // "Granbull",
    // "Qwilfish",
    // "Scizor",
    // "Shuckle",
    // "Heracross",
    // "Sneasel",
    // "Teddiursa",
    // "Ursaring",
    // "Slugma",
    // "Magcargo",
    // "Swinub",
    // "Piloswine",
    // "Corsola",
    // "Remoraid",
    // "Octillery",
    // "Delibird",
    // "Mantine",
    // "Skarmory",
    // "Houndour",
    // "Houndoom",
    // "Kingdra",
    // "Phanpy",
    // "Donphan",
    // "Porygon2",
    // "Stantler",
    // "Smeargle",
    // "Tyrogue",
    // "Hitmontop",
    // "Smoochum",
    // "Elekid",
    // "Magby",
    // "Miltank",
    // "Blissey",
    // "Raikou",
    // "Entei",
    // "Suicune",
    // "Larvitar",
    // "Pupitar",
    // "Tyranitar",
    // "Lugia",
    // "Celebi",
    // "Treecko",
    // "Grovyle",
    // "Sceptile",
    // "Torchic",
    // "Combusken",
    // "Blaziken",
    // "Mudkip",
    // "Marshtomp",
    // "Swampert",
    // "Poochyena",
    // "Mightyena",
    // "Zigzagoon",
    // "Linoone",
    // "Wurmple",
    // "Silcoon",
    // "Beautifly",
    // "Cascoon",
    // "Dustox",
    // "Lotad",
    // "Lombre",
    // "Ludicolo",
    // "Seedot",
    // "Nuzleaf",
    // "Shiftry",
    // "Taillow",
    // "Swellow",
    // "Wingull",
    // "Pelipper",
    // "Ralts",
    // "Kirlia",
    // "Gardevoir",
    // "Surskit",
    // "Masquerain",
    // "Shroomish",
    // "Breloom",
    // "Slakoth",
    // "Vigoroth",
    // "Slaking",
    // "Nincada",
    // "Ninjask",
    // "Shedinja",
    // "Whismur",
    // "Loudred",
    // "Exploud",
    // "Makuhita",
    // "Hariyama",
    // "Azurill",
    // "Nosepass",
    // "Skitty",
    // "Delcatty",
    // "Sableye",
    // "Mawile",
    // "Aron",
    // "Lairon",
    // "Aggron",
    // "Meditite",
    // "Medicham",
    // "Electrike",
    // "Manectric",
    // "Plusle",
    // "Minun",
    // "Volbeat",
    // "Illumise",
    // "Roselia",
    // "Gulpin",
    // "Swalot",
    // "Carvanha",
    // "Sharpedo",
    // "Wailmer",
    // "Wailord",
    // "Numel",
    // "Camerupt",
    // "Torkoal",
    // "Spoink",
    // "Grumpig",
    // "Spinda",
    // "Trapinch",
    // "Vibrava",
    // "Flygon",
    // "Cacnea",
    // "Cacturne",
    // "Swablu",
    // "Altaria",
    // "Zangoose",
    // "Seviper",
    // "Lunatone",
    // "Solrock",
    // "Barboach",
    // "Whiscash",
    // "Corphish",
    // "Crawdaunt",
    // "Baltoy",
    // "Claydol",
    // "Lileep",
    // "Cradily",
    // "Anorith",
    // "Armaldo",
    // "Feebas",
    // "Milotic",
    // "Castform",
    // "Kecleon",
    // "Shuppet",
    // "Banette",
    // "Duskull",
    // "Dusclops",
    // "Tropius",
    // "Chimecho",
    // "Absol",
    // "Wynaut",
    // "Snorunt",
    // "Glalie",
    // "Spheal",
    // "Sealeo",
    // "Walrein",
    // "Clamperl",
    // "Huntail",
    // "Gorebyss",
    // "Relicanth",
    // "Luvdisc",
    // "Bagon",
    // "Shelgon",
    // "Salamence",
    // "Beldum",
    // "Metang",
    // "Metagross",
    // "Regirock",
    // "Regice",
    // "Registeel",
    // "Latias",
    // "Latios",
    // "Kyogre",
    // "Groudon",
    // "Rayquaza",
    // "Turtwig",
    // "Grotle",
    // "Torterra",
    // "Chimchar",
    // "Monferno",
    // "Infernape",
    // "Piplup",
    // "Prinplup",
    // "Empoleon",
    // "Starly",
    // "Staravia",
    // "Staraptor",
    // "Bidoof",
    // "Bibarel",
    // "Kricketot",
    // "Kricketune",
    // "Shinx",
    // "Luxio",
    // "Luxray",
    // "Budew",
    // "Roserade",
    // "Cranidos",
    // "Rampardos",
    // "Shieldon",
    // "Bastiodon",
    // "Burmy",
    // "Mothim",
    // "Combee",
    // "Vespiquen",
    // "Pachirisu",
    // "Buizel",
    // "Floatzel",
    // "Cherubi",
    // "Cherrim",
    // "Shellos",
    // "Gastrodon",
    // "Ambipom",
    // "Drifloon",
    // "Drifblim",
    // "Buneary",
    // "Lopunny",
    // "Mismagius",
    // "Honchkrow",
    // "Glameow",
    // "Purugly",
    // "Chingling",
    // "Stunky",
    // "Skuntank",
    // "Bronzor",
    // "Bronzong",
    // "Bonsly",
    // "Happiny",
    // "Chatot",
    // "Spiritomb",
    // "Gible",
    // "Gabite",
    // "Garchomp",
    // "Munchlax",
    // "Riolu",
    // "Lucario",
    // "Hippopotas",
    // "Hippowdon",
    // "Skorupi",
    // "Drapion",
    // "Croagunk",
    // "Toxicroak",
    // "Carnivine",
    // "Finneon",
    // "Lumineon",
    // "Mantyke",
    // "Snover",
    // "Abomasnow",
    // "Weavile",
    // "Magnezone",
    // "Lickilicky",
    // "Rhyperior",
    // "Tangrowth",
    // "Electivire",
    // "Magmortar",
    // "Togekiss",
    // "Yanmega",
    // "Leafeon",
    // "Glaceon",
    // "Gliscor",
    // "Mamoswine",
    // "Gallade",
    // "Probopass",
    // "Dusknoir",
    // "Froslass",
    // "Rotom",
    // "Uxie",
    // "Mesprit",
    // "Azelf",
    // "Dialga",
    // "Palkia",
    // "Heatran",
    // "Regigigas",
    // "Cresselia",
    // "Phione",
    // "Manaphy",
    // "Darkrai",
    // "Arceus",
    // "Victini",
    // "Snivy",
    // "Servine",
    // "Serperior",
    // "Tepig",
    // "Pignite",
    // "Emboar",
    // "Oshawott",
    // "Dewott",
    // "Samurott",
    // "Patrat",
    // "Watchog",
    // "Lillipup",
    // "Herdier",
    // "Stoutland",
    // "Purrloin",
    // "Liepard",
    // "Pansage",
    // "Simisage",
    // "Pansear",
    // "Simisear",
    // "Panpour",
    // "Simipour",
    // "Munna",
    // "Musharna",
    // "Pidove",
    // "Tranquill",
    // "Unfezant",
    // "Blitzle",
    // "Zebstrika",
    // "Roggenrola",
    // "Boldore",
    // "Gigalith",
    // "Woobat",
    // "Swoobat",
    // "Drilbur",
    // "Excadrill",
    // "Audino",
    // "Timburr",
    // "Gurdurr",
    // "Conkeldurr",
    // "Tympole",
    // "Palpitoad",
    // "Seismitoad",
    // "Throh",
    // "Sawk",
    // "Sewaddle",
    // "Swadloon",
    // "Leavanny",
    // "Venipede",
    // "Whirlipede",
    // "Scolipede",
    // "Cottonee",
    // "Whimsicott",
    // "Petilil",
    // "Lilligant",
    // "Sandile",
    // "Krokorok",
    // "Krookodile",
    // "Darumaka",
    // "Maractus",
    // "Dwebble",
    // "Crustle",
    // "Scraggy",
    // "Scrafty",
    // "Sigilyph",
    // "Yamask",
    // "Cofagrigus",
    // "Tirtouga",
    // "Carracosta",
    // "Archen",
    // "Archeops",
    // "Trubbish",
    // "Garbodor",
    // "Zorua",
    // "Zoroark",
    // "Minccino",
    // "Cinccino",
    // "Gothita",
    // "Gothorita",
    // "Gothitelle",
    // "Solosis",
    // "Duosion",
    // "Reuniclus",
    // "Ducklett",
    // "Swanna",
    // "Vanillite",
    // "Vanillish",
    // "Vanilluxe",
    // "Deerling",
    // "Sawsbuck",
    // "Emolga",
    // "Karrablast",
    // "Escavalier",
    // "Foongus",
    // "Amoonguss",
    // "Frillish",
    // "Jellicent",
    // "Alomomola",
    // "Joltik",
    // "Galvantula",
    // "Ferroseed",
    // "Ferrothorn",
    // "Klink",
    // "Klang",
    // "Klinklang",
    // "Tynamo",
    // "Eelektrik",
    // "Eelektross",
    // "Elgyem",
    // "Beheeyem",
    // "Litwick",
    // "Lampent",
    // "Chandelure",
    // "Axew",
    // "Fraxure",
    // "Haxorus",
    // "Cubchoo",
    // "Beartic",
    // "Cryogonal",
    // "Shelmet",
    // "Accelgor",
    // "Stunfisk",
    // "Mienfoo",
    // "Mienshao",
    // "Druddigon",
    // "Golett",
    // "Golurk",
    // "Pawniard",
    // "Bisharp",
    // "Bouffalant",
    // "Rufflet",
    // "Braviary",
    // "Vullaby",
    // "Mandibuzz",
    // "Heatmor",
    // "Durant",
    // "Deino",
    // "Zweilous",
    // "Hydreigon",
    // "Larvesta",
    // "Volcarona",
    // "Cobalion",
    // "Terrakion",
    // "Virizion",
    // "Reshiram",
    // "Zekrom",
    // "Kyurem",
    // "Genesect",
    // "Chespin",
    // "Quilladin",
    // "Chesnaught",
    // "Fennekin",
    // "Braixen",
    // "Delphox",
    // "Froakie",
    // "Frogadier",
    // "Greninja",
    // "Bunnelby",
    // "Diggersby",
    // "Fletchling",
    // "Fletchinder",
    // "Talonflame",
    // "Scatterbug",
    // "Spewpa",
    // "Vivillon",
    // "Litleo",
    // "Pyroar",
];
let compareBackgroundColor = ['fighting', 'psychic', 'poison', 'dragon', 'ghost', 'dark', 'ground', 'fire', 'fairy', 'water', 'flying', 'normal', 'rock', 'electric', 'bug', 'grass', 'ice', 'steel'];

let pokemonId = [];
let pokemonImg = [];
let cardBackgroundColor = [];
let secondTypeOfPokemon = [];
let height = [];
let weight = [];
let ability = [];
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
    for (let i = 0; i < pokemonNames.length; i++) {
        const namesOfPokemons = pokemonNames[i];
        convertPokemonNames = namesOfPokemons.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, '');
        pokemonNames[i] = convertPokemonNames;
        console.log('Der Name vom Pokemon lautet:', convertPokemonNames);
        url = ('https://pokeapi.co/api/v2/pokemon/' + convertPokemonNames);
        response = await fetch(url);
        currentPokemon = await response.json();
        console.log(currentPokemon);
        getPokemonJsonValuesPart1();
        getPokmonJSONValuesPart2();
        renderPokemonCards(i);
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
    removeTypeTwoClasslist(i);
    setBackgroundColor(i);
}

/* If there isn't a secon type, remove class list */
function removeTypeTwoClasslist(i) {
    if (typeTwoOfPokemon === '') {
        document.getElementById(`pokemonTypeTwo${i}`).classList.remove('bgc-transparent', 'type-information');
    } else if (secondTypeOfPokemon[i] === '') {
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
                <div id="imgPokemon"><img class="img-size" src="${pokemonImg[i]}" alt="pokemon"></div>
            </div>
        </div >`;
}

/* Show detailed pokemon informations */
function openPokemonInfoCard(i) {
    let k = true;
    let typeOne = cardBackgroundColor[i].toUpperCase();
    let typeTwo = secondTypeOfPokemon[i].toUpperCase();
    let infoContainer = document.getElementById('info-container');
    infoContainer.classList.remove('d-none');
    document.getElementById('pokedex').style = 'display: none;';
    infoContainer.innerHTML = renderPokemonInfoCard(i, typeOne, typeTwo);
    removeTypeTwoClasslist(i);
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
                <div class="flex center">${infoCardBottomSubdivAbout(i)}</div>
                <div>${infoCardBottomSubdivBaseStats(i)}</div>
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
        <div class="flex center"><img class="img-info-card-poke-size" src="${pokemonImg[i]}" alt="pokemon"></div>
        <div class="flex space-betw p-around-8px margin-top-minus-48px">
            <img id="previousPicture" class="icon-size p-around-4px" src="img/icons8-back-26.png" alt="backward" onclick="previousImg(${i})">
            <img id="nextPicture" class="icon-size p-around-4px" src="img/icons8-forward-26.png" alt="forward" onclick="nextImg(${i})">
        </div>`;
}

/* Pokemon info bottom-container bottom part */
function infoCardBottomSubdivSecond() {
    return /*html*/`
        <div>
            <div class="flex center">
                <a class="p-around-8px text-style" href="#">ABOUT</a>
                <a class="p-around-8px text-style" href="#">BASE STATS</a>
            </div>
        </div>`;
}

/* Pokemon info bottom-container bottom pokemon about part */
function infoCardBottomSubdivAbout(i) {
    return /*html*/`
        <div id="pokemonAbout" class="p-around-8px">
            <table>
                <tr><td>Height:</td><td class="text-align-center">${height[i]}</td></tr>
                <tr><td>Weight:</td><td class="text-align-center">${weight[i]}</td></tr>
                <tr><td>Ability:</td><td class="text-align-center">${ability[i]}</td></tr>
            </table>
        </div>`;
}

/* Pokemon info bottom-container bottom pokemon base-stats part */
function infoCardBottomSubdivBaseStats(i) {
    return /*html*/`
    `;
}

/* Hide info card, show all pokemon cards */
function removeInfoCard() {
    document.getElementById('pokedex').style = '';
    let infoContainer = document.getElementById('info-container');
    infoContainer.classList.add('d-none');
}

/* Set background-color of pokemon card depending on pokemon type */
function setBackgroundColor(i, k) {
    let getBackgroundColor = cardBackgroundColor[i];
    let bgColorClass = typeColors[getBackgroundColor] || 'bgc-default';
    let card = document.getElementById(`card${i}`);
    let infoCard = document.getElementById(`info-card-top${i}`);
    if (k) {
        k = false;
        infoCard.classList.add(bgColorClass);
    } else { card.classList.add(bgColorClass); }
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