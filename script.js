/* Declare global variables */
let convertPokemonNames;
let url;
let response;
let getPokemonName;
let getIdOfPokemon;
let getImgOfPokemon;
let getFirstTypeOfPokemon;
let getSecondTypeOfPokemon;
let typeOneOfPokemon;
let typeTwoOfPokemon;


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
        getPokemonJsonValues(currentPokemon);
        renderPokemonCards(i);
    }
}

/* Get specific pokemon values */
function getPokemonJsonValues(currentPokemon) {
    getPokemonName = currentPokemon['name'];
    getIdOfPokemon = currentPokemon['id'];
    getImgOfPokemon = currentPokemon['sprites']['front_default'];
    getFirstTypeOfPokemon = currentPokemon['types'][0]['type']['name'];
    pokemonId.push(getIdOfPokemon);
    pokemonImg.push(getImgOfPokemon);
    cardBackgroundColor.push(getFirstTypeOfPokemon);
    console.log('Loaded Pokémon', currentPokemon);
    if (currentPokemon['types'][1] === undefined) {
        console.log('Array existiert nicht.');
        getSecondTypeOfPokemon = '';
        secondTypeOfPokemon.push(getSecondTypeOfPokemon);
    } else {
        console.log('Array existiert.');
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
    if (typeTwoOfPokemon == '') {
        document.getElementById(`pokemonTypeTwo${i}`).classList.remove('bgc-transparent', 'type-information');
    }
    setBackgroundColor(i);
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
    console.log('Informationen abrufen');
    let infoContainer = document.getElementById('info-container');
    infoContainer.classList.remove('d-none');
    document.getElementById('pokedex').style = 'display: none;';
    infoContainer.innerHTML = renderPokemonInfoCard(i, typeOne, typeTwo);
    if (secondTypeOfPokemon[i] === '') {
        document.getElementById(`typeTwoCard${i}`).classList.remove('bgc-transparent', 'type-information');
    }
    setBackgroundColor(i, k);
}

/* Render the info card when clicking on a pokemon card */
function renderPokemonInfoCard(i, typeOne, typeTwo) {
    return /*html*/`
    <div class="inner-info-container border-small">
        <div id="info-card-top${i}" class="info-top-div p-around-8px"> 
            <div class="flex space-betw p-around-8px">
                <div onclick="removeInfoCard(${i})"><img class="icon-size p-around-4px" src="img/icons_back.png" alt="escape"></div>
                <div><img class="icon-size p-around-4px" src="img/icons8-heart-50.png" alt="escape"></div>
            </div>
            <div class="flex space-betw p-around-8px">
                <div class="flex flex-column">
                <div id="nameOfPokemon" class="text-style">${pokemonNames[i].toUpperCase()}</div>
                <div id="type-container" class="flex">
                    <div id="pokemonTypeOne${i}" class="bgc-transparent type-information p-around-8px">${typeOne}</div>
                    <div id="typeTwoCard${i}" class="bgc-transparent type-information p-around-8px margin-left-2px">${typeTwo}</div>
                </div>
                </div>
                <div id="IdOfPokemon" class="p-around-8 text-style font-size-28px">#${pokemonId[i]}</div>
            </div>
        </div>

        <div class="inner-info-bottomDiv">
            <div class="flex center"><img class="img-info-card-poke-size" src="${pokemonImg[i]}" alt="pokemon"></div>
            <div class="flex space-betw p-around-8px">
                <img class="icon-size p-around-4px" src="img/icons8-back-26.png" alt="backward">
                <img class="icon-size p-around-4px" src="img/icons8-forward-26.png" alt="forward">
            </div>
            <div>
                <div class="flex center">
                    <a class="p-around-8px text-style" href="#">ABOUT</a>
                    <a class="p-around-8px text-style" href="#">BASE STATS</a>
                </div>
            </div>
            <div>

            </div>
        </div>
    </div>`;
}

/* Hide info card, show all pokemon cards */
function removeInfoCard(i) {
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
    } else {
        card.classList.add(bgColorClass);
    }
}

