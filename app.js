// VARIABLES VACÍAS
let carrito = []
let catalogo = []

// fetch("./catalogo.json")
//     .then(response => response.json())
//     .then(data => {
//         catalogo = data
//         cargarJuegos(catalogo)
//     })

// ELEMENTOS DEL DOM
const carritoJuegos = document.getElementById("cJuegos") //tablebody
const listaJuegos = document.querySelector("#listaJuegos"); //catálogo de juegos
const contador = document.querySelector("#contador") //contador
let btnsAgregar = document.querySelectorAll(".articulo-agregar") //agregar al carrito
const btnVaciar = document.querySelector("#btnVaciar") //vaciar el carrito
const totalCarrito = document.querySelector("#total") //total del carro

// PRODUCTOS EN CATÁLOGO
catalogo.push(new Articulos("https://i.ibb.co/ZSKJ2kX/product-001.webp", "Elden Ring", "PS4", 45000, "Elden-01"))
catalogo.push(new Articulos("https://i.ibb.co/9VPmHvf/product-002.webp", "The Last of Us: Part II", "PS4", 40000, "Last-02"))
catalogo.push(new Articulos("https://i.ibb.co/sPXZKPJ/product-003.webp", "Horizon: Forbidden West", "PS4", 45000, "Horizon-03"))
catalogo.push(new Articulos("https://i.ibb.co/zJq5jtb/product-004.webp", "Zelda: Breath of The Wild", "Switch", 45000, "Zelda-04"))
catalogo.push(new Articulos("https://i.ibb.co/L0ZpLMV/product-005.webp", "Mario Kart 8", "Switch", 35000, "Mario-05"))
catalogo.push(new Articulos("https://i.ibb.co/gMV3wYY/product-006.webp", "Tomb Raider", "Xbox", 30000, "Tomb-06"))
catalogo.push(new Articulos("https://i.ibb.co/WBJfNjD/product-007.webp", "It Takes Two", "Xbox", 40000, "TakesTwo-07"))
catalogo.push(new Articulos("https://i.ibb.co/FVmhDPY/product-008.webp", "The Elder Scrolls V: Skyrim", "PS4", 35000, "Skyrim-08"))

// CATÁLOGO GURADADO EN LOCAL STORAGE
localStorage.setItem("catalogo", JSON.stringify(catalogo))

// ASIGNANDO EVENTOS
allEventListeners()

function allEventListeners() {
    window.addEventListener("DOMContentLoaded", cargarJuegos)
    window.addEventListener("DOMContentLoaded", actualizarContador)
    window.addEventListener("DOMContentLoaded", mostrarAgregarAlCarrito)
    btnVaciar.addEventListener("click", vaciar)
}

// CARGANDO LOS ARTÍCULOS EN LA PÁGINA
function cargarJuegos() {
    catalogo = JSON.parse(localStorage.getItem("catalogo")) || []
    carrito = JSON.parse(localStorage.getItem("carrito")) || []
    poblarlistaJuegos()
    actualizarCarrito()
}

function poblarlistaJuegos() {
    catalogo.forEach(articulos => {
        const cardContainer = document.createElement("div")
        cardContainer.classList.add("col-md-3", "mb-3")
        cardContainer.innerHTML = `
                <div class="card card-custom">
                    <div class="card-wrapper">
                        <img src= "${articulos.cover}" class="img-fluid rounded" alt="portada">
                                <div class="card-content">
                                    <h2 class="card-title">${articulos.nombre}</h2>
                                    <p class="card-text">${articulos.precio}</p>
                                </div>
                            <div class="card-actions">
                            <button id="${articulos.id}" class="articulo-agregar btn btn-primary">Añadir al carrito</button>
                        </div>
                    </div>
                </div> `
        listaJuegos.appendChild(cardContainer)
    })

    actualizarBtnsAgregar()
}

function actualizarBtnsAgregar() {
    btnsAgregar = document.querySelectorAll(".articulo-agregar")
    btnsAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito)
    })
}

function actualizarCarrito() {
    estadoBtnVaciar()
    carritoJuegos.innerHTML = ""
    totalCarrito.innerText = 0;
    carrito.forEach((juego) => {
        mostrarAgregarAlCarrito(juego)
    });
}

function actualizarContador() {
    let numContador = carrito.reduce((acumulador, articulo) => acumulador + articulo.cantidad, 0)
    contador.innerText = numContador
}

function estadoBtnVaciar() {
    if (carrito.length === 0) {
        btnVaciar.disabled = true;
    } else {
        btnVaciar.disabled = false;
    }
}

function vaciar() {
    carrito = []
    localStorage.setItem("carrito", JSON.stringify(carrito))
    actualizarCarrito()
    actualizarContador()

    Toastify({
        text: "¡Has vaciado el carrito!",
        duration: 2000,
        close: false,
        gravity: "top",
        position: "center",
        stopOnFocus: true,
        style: {
            background: "linear-gradient(90deg, hsla(260, 28%, 53%, 1) 0%, hsla(170, 42%, 71%, 1) 100%)",
            borderRadius: "1rem",
            textTransform: "uppercase",
            fontSize: ".75rem"
        },
        offset: {
            x: '1.5rem',
            y: '1.5rem'
        },
        onClick: function () { }
    }).showToast();
}

function mostrarAgregarAlCarrito() {
    estadoBtnVaciar()
    carritoJuegos.innerHTML = ""
    carrito.forEach(juego => {
        const fila = document.createElement("tr")
        fila.innerHTML = `
                    <td><img class="imgCover" src="${juego.cover}" alt="${juego.nombre}"></td>
                    <td>${juego.nombre}</td>
                    <td>${juego.plataforma}</td>
                    <td>${juego.precio}</td>
                    `
        carritoJuegos.append(fila)

        calcularTotal();
    })
}

function calcularTotal() {
    let total = 0
    carrito.forEach((articulos) => {
        total += articulos.precio
    })

    totalCarrito.textContent = total
}

let carritoLS = localStorage.getItem("carrito")

if (carritoLS) {
    carrito = JSON.parse(carritoLS)
    actualizarContador()
} else {
    carrito = [];
}


function agregarAlCarrito(e) {
    Toastify({
        text: "Agregado al carrito",
        duration: 2000,
        close: false,
        gravity: "top",
        position: "center",
        stopOnFocus: true,
        style: {
            background: "linear-gradient(90deg, hsla(260, 28%, 53%, 1) 0%, hsla(170, 42%, 71%, 1) 100%)",
            borderRadius: "1rem",
            textTransform: "uppercase",
            fontSize: ".75rem"
        },
        offset: {
            x: '1.5rem',
            y: '1.5rem'
        },
        onClick: function () { }
    }).showToast();

    e.preventDefault()
    const idBtnsAgregar = e.currentTarget.id
    const productoAgregado = catalogo.find(articulo => articulo.id === idBtnsAgregar)

    if (carrito.some(articulo => articulo.id === idBtnsAgregar)) {
        const indice = carrito.findIndex(articulo => articulo.id === idBtnsAgregar)
        carrito[indice].cantidad++
    } else {
        productoAgregado.cantidad = 1
        carrito.push(productoAgregado)
    }

    actualizarContador()
    mostrarAgregarAlCarrito(productoAgregado)

    localStorage.setItem("carrito", JSON.stringify(carrito))
}

