// Variables vacías para almacenar los juegos del carrito del usuario y de mi catálogo
let carrito = []
let catalogo = []

// Elementos que llamo del DOM
const btnAnadir = document.getElementsByClassName("btn-primary") //Para añadir juegos al carrito
const contador = document.getElementById("contador") //Para que el número del carrito vaya aumentando
const totalCarrito = document.getElementById("total") //Para sacar el total del carro
const btnVaciar = document.getElementById("btn-vaciar") //Para vaciar el carrito

// Productos que creé y metí en el catálogo de mi tienda
catalogo.push(new Articulos("https://i.ibb.co/ZSKJ2kX/product-001.webp", "Elden Ring", "PS4", 45000))
catalogo.push(new Articulos("https://i.ibb.co/9VPmHvf/product-002.webp", "The Last of Us: Part II", "PS4", 40000))
catalogo.push(new Articulos("https://i.ibb.co/sPXZKPJ/product-003.webp", "Horizon: Forbidden West", "PS4", 45000))
catalogo.push(new Articulos("https://i.ibb.co/zJq5jtb/product-004.webp", "Zelda: Breath of The Wild", "Switch", 45000))
catalogo.push(new Articulos("https://i.ibb.co/L0ZpLMV/product-005.webp", "Mario Kart 8", "Switch", 35000))
catalogo.push(new Articulos("https://i.ibb.co/gMV3wYY/product-006.webp", "Tomb Raider", "Xbox", 30000))
catalogo.push(new Articulos("https://i.ibb.co/WBJfNjD/product-007.webp", "It Takes Two", "Xbox", 40000))
catalogo.push(new Articulos("https://i.ibb.co/FVmhDPY/product-008.webp", "The Elder Scrolls V: Skyrim", "PS4", 35000))

// Con esta función guardo mi catálogo en el storage local del navegador
localStorage.setItem("catalogo", JSON.stringify(catalogo))

// Incluyo la función para asignar los eventos para cargar los juegos al inicio, agregar al carrito y vaciar al hacer clic
allEventListeners()

function allEventListeners() {
    window.addEventListener("DOMContentLoaded", cargarJuegos)
    btnAnadir.addEventListener("click", manejoSubmit)
    btnVaciar.addEventListener("click", vaciar)
}

function cargarJuegos() {
    catalogo = JSON.parse(localStorage.getItem("catalogo")) || [];
    carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    llenarSelect();
    actualizarCarrito();
    if (!carrito.length) {
        btnVaciar.setAttribute("disabled", true);
    }
}
