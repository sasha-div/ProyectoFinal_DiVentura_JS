// ELEMENTOS DEL DOM
const pokeShow = document.querySelector("#pokeShow")

let url = "https://pokeapi.co/api/v2/pokemon/gengar"

fetch(url)
    .then(response => response.json())
    .then(data => pokeMostrar(data))

function pokeMostrar(pokeData) {

    let pokeTipos = pokeData.types.map((type) => ` 
                                            <li class="list-group-item ${type.type.name}"> Tipos: ${type.type.name}</li>  `)
    pokeTipos = pokeTipos.join("")

    const div = document.createElement("div")
    div.classList.add("row,g-0")
    div.innerHTML = `
                    <div class="col-md-4">
                        <img src="${pokeData.sprites.other["official-artwork"].front_default}" class="img-fluid rounded-start" alt="imagen - ${pokeData.name}">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title text-uppercase">${pokeData.name}</h5>
                            <p class="card-text">Gengar es un Pokémon de aspecto sombrío y sonrisa
                                siniestra. Se desliza a través de las paredes y asusta a los demás.</p>
                            <ul class="list-group">
                                ${pokeTipos}
                                <li class="list-group-item">Altura: ${pokeData.height}m</li>
                                <li class="list-group-item">Peso: ${pokeData.weight}kg</li>
                            </ul>
                            <p class="pt-5 card-text"><small class="text-body-secondary">PokéAPI ID:
                            ${pokeData.id}</small></p>
                        </div>
                    </div>
                    `
    pokeShow.append(div)
}



/*

<div class="card mt-2" style="max-width: 100;">
    <div class="row g-0">
        <div class="col-md-4">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/94.png"
                class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
            <div class="card-body">
                <h5 id="pokeName" class="card-title text-uppercase">GENGAR</h5>
                <p id="pokeDesc" class="card-text">Gengar es un Pokémon de aspecto sombrío y sonrisa
                    siniestra. Se desliza a través de las paredes y asusta a los demás.</p>
                <ul class="list-group">
                    <li id="pokeType" class="list-group-item">Tipo: </li>
                    <li id="pokeHeight" class="list-group-item">Altura: </li>
                    <li id="pokeWeight" class="list-group-item">Peso: </li>
                </ul>
                <p id="pokeId" class="pt-5 card-text"><small class="text-body-secondary">PokéAPI ID:
                        94</small></p>
            </div>
        </div>
    </div>
</div>

*/



    // fetch("./catalogo.json")
    // .then(response => response.json())
    // .then(data => {
    //     catalogo = data
    //     cargarJuegos(catalogo)
    // })
