const menu = document.querySelector("nav");
const header = document.querySelector("#mi-encabezado");

// Obtén la altura del encabezado
const headerHeight = header.offsetHeight;

// Función que cambia el color de fondo del menú cuando se desplaza
window.addEventListener("scroll", () => {
if (window.scrollY > headerHeight) {
menu.style.backgroundColor = "rgb(86, 255, 247)"; // Cambia el color de fondo a
azul
} else {
menu.style.backgroundColor = "rgb(49, 255, 247)"; // Vuelve al fondo
transparente
}
});