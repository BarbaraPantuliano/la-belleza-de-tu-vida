
// Inicio de sesión
const sesion = document.getElementById("loginModal");
const closeBtn = document.getElementById("closeBtn");
const loginForm = document.getElementById("loginForm");
const loginBtn = document.getElementById("loginBtn");

// Muestra la ventana cuando la página se carga
window.onload = function() {
    sesion.style.display = "block"; // Muestra la ventana
    recuperarCantidadCarrito();
    actualizarContadorCarrito(); // Inicializa el contador en la carga de la página
}

// Cerrar la ventana cuando el usuario hace clic en el botón de cerrar
closeBtn.onclick = function() {
    sesion.style.display = "none";
}


// Manejo del formulario de inicio de sesión
loginForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar que la página se recargue al enviar el formulario

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Verificación de datos
    if (username && password) {
        alert("¡Bienvenido, " + username + "!");
        sesion.style.display = "none"; // Cierra la ventana después de iniciar sesión
    } else {
        alert("Por favor ingresa un nombre de usuario y contraseña válidos.");
    }
});

// Mostrar productos al cargar la página
mostrarProductos();

// Actualizar el carrito al cargar la página
actualizarCarrito();
actualizarContadorCarrito()

// Inicialización de eventos
document.getElementById('vaciar-carrito').addEventListener('click', vaciarCarrito, actualizarContadorCarrito);
