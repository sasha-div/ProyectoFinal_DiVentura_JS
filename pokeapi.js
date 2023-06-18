// ELEMENTOS DEL DOM
const pokeShow = document.querySelector("#pokeShow")

let url = "https://pokeapi.co/api/v2/pokemon/gengar"

fetch(url)
    .then(response => response.json())
    .then(data => pokeMostrar(data))

// FUNCIÓN PARA OBTENER LA DATA DEL POKÉMON Y MOSTRAR EN LA PÁGINA
function pokeMostrar(pokeData) {
    let pokeTipos = pokeData.types.map((type) => ` 
                                            <li class="list-group-item ${type.type.name}"> Tipos: ${type.type.name}</li>  `)
    pokeTipos = pokeTipos.join("")

    const div = document.createElement("div")
    div.classList.add("row")
    div.innerHTML = `
                    <div class="col-md-4">
                        <img src="${pokeData.sprites.other["official-artwork"].front_default}" class="pt-5 img-fluid rounded-start" alt="imagen - ${pokeData.name}">
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
