// Write code to fetch data for 10 Pokemon

async function getPokeList() {
    const url = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=20";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        
        const data = await response.json();
        displayPokeList(data.results);
    } catch (error) {
        console.error(error.message);
    }
}

//Use a JavaScript loop to display the names and URLs of your 10 Pokemon on the page
//Add an event listener to each Pokemon to listen for a click
function displayPokeList(data){
    const list = document.createElement('ul');
    for(const poke of data){
        const item =  document.createElement("li");
        item.innerText = poke.name;
        item.addEventListener("click", () => {
            onePokemon(poke.url);
        });
        list.appendChild(item);
    }
    document.body.appendChild(list);
}

async function onePokemon(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const data = await response.json();
        displayIndividual(data);
    } catch (error) {
        console.error(error.message);
    }
}
const pokemonCard = document.createElement("div");
document.body.appendChild(pokemonCard);

function displayIndividual(pokemon){
    pokemonCard.innerHTML = `<h2>${pokemon.name}</h2> 
    <img src = "${pokemon.sprites.front_default}" alt="Pokemon Front"></img>`
}
getPokeList();




