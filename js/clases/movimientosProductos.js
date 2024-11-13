

// Carrito almacenado en localStorage
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

// Mostrar carrito
const carritoIcon = document.querySelector('.shopping-cart-icon');
carritoIcon.addEventListener('click', mostrarCarrito);

// Variable global para contar los productos en el carrito
let cantidadCarrito = 0;

// Guardar la cantidad de productos en el localStorage
function guardarCantidadCarrito() {
    localStorage.setItem('cantidadCarrito', cantidadCarrito);
}

// Recuperar la cantidad de productos al cargar la página
function recuperarCantidadCarrito() {
    const cantidadGuardada = localStorage.getItem('cantidadCarrito');
    if (cantidadGuardada) {
        cantidadCarrito = parseInt(cantidadGuardada, 10);
        actualizarContadorCarrito();
    }
}

// Función para actualizar el contador visual del carrito
function actualizarContadorCarrito() {
    const contadorCarrito = document.getElementById('carrito-contador');
    const cantidadTotal = carrito.reduce((total, producto) => total + producto.cantidad, 0);
    contadorCarrito.textContent = cantidadTotal; // Actualiza el contador en el HTML
}

// Función para agregar productos al carrito
function agregarAlCarrito(codigoProducto) {
    // Buscar el producto en el carrito
    const productoExistente = carrito.find(p => p.codigo === codigoProducto);

    if (productoExistente) {
        // Si el producto ya existe, aumentar la cantidad
        productoExistente.cantidad++;
        alert("Se actualizó la cantidad del producto")
    } else {
        // Si no existe, agregarlo con cantidad 1
        const producto = productos.find(p => p.codigo === codigoProducto);
        if (producto) {
            carrito.push({ ...producto, cantidad: 1 }); // Añadir el producto con la cantidad
            alert("Producto agregado con éxito")
        }
    }

    actualizarCarrito()
    guardarCantidadCarrito()
    actualizarContadorCarrito()
}

// Función para eliminar un producto del carrito
function eliminarDelCarrito(codigo) {
    carrito = carrito.filter(p => p.codigo !== codigo);
    actualizarCarrito();
    cantidadCarrito--;
    actualizarContadorCarrito()
}

// Función para vaciar el carrito
function vaciarCarrito() {
    carrito = [];
    actualizarCarrito();
    cantidadCarrito=0;
    actualizarContadorCarrito()
}

// Función para actualizar el carrito en el DOM
function actualizarCarrito() {
    localStorage.setItem('carrito', JSON.stringify(carrito));

    const listaCarrito = document.getElementById('carrito-lista');
    listaCarrito.innerHTML = '';

    carrito.forEach(producto => {
        const li = document.createElement('li');
        li.classList.add('list-group-item');
        li.innerHTML = `
            ${producto.nombre} - $${producto.precio} x ${producto.cantidad}
            <button class="btn btn-danger btn-sm" onclick="eliminarDelCarrito(${producto.codigo})">Eliminar</button>
        `;
        listaCarrito.appendChild(li);
        actualizarContadorCarrito()
    });
}

// Función para mostrar la ventana emergente del carrito
function mostrarCarrito() {
    const carritoModal = new bootstrap.Modal(document.getElementById('carritoModal'));
    carritoModal.show();
}

// Función para mostrar los productos en la página
function mostrarProductos() {
    const productosSection = document.getElementById('productosSection');
    productosSection.innerHTML = '';
    productos.forEach(producto => {
        const div = document.createElement('div');
        div.classList.add('col-12', 'col-sm-12', 'col-md', 'm-1','cards','card', 'card-custom');
        div.innerHTML = `
            <div class="card mb-4">
                <img src="${producto.imagen}" class="card-img-top" alt="${producto.alt}">
                <div class="card-body">
                    <h1 class="card-title h2">${producto.nombre}</h1>
                    <p class="card-text">$${producto.precio}</p>
                    <button class="btn btnCards" onclick="agregarAlCarrito(${producto.codigo})">Agregar al carrito</button>
                </div>
            </div>
        `;
        productosSection.appendChild(div);
    });
}


// Función de búsqueda para mostrar las cards de productos que coincidan con la búsqueda
function buscarProducto() {
    const busqueda = document.getElementById('search-input').value.trim().toLowerCase();

    // Si el campo de búsqueda está vacío, mostrar todos los productos
    if (busqueda === '') {
        mostrarProductos();
        return;
    }

    // Filtrar los productos por el nombre que coincida con la búsqueda
    const resultados = productos.filter(p => p.nombre.toLowerCase().includes(busqueda));

    // Limpiar el contenedor de productos
    const productosSection = document.getElementById('productosSection');
    productosSection.innerHTML = '';

    // Mostrar las cards correspondientes a los productos encontrados
    if (resultados.length > 0) {
        resultados.forEach(producto => {
            const div = document.createElement('div');
            div.classList.add('col-12', 'col-sm-12', 'col-md', 'm-1', 'cards', 'card', 'card-custom');
            div.innerHTML = `
                <div class="card mb-4">
                    <img src="${producto.imagen}" class="card-img-top" alt="${producto.alt}">
                    <div class="card-body">
                        <h5 class="card-title">${producto.nombre}</h5>
                        <p class="card-text">$${producto.precio}</p>
                        <button class="btn btnCards" onclick="agregarAlCarrito(${producto.codigo})">Agregar al carrito</button>
                    </div>
                </div>
            `;
            productosSection.appendChild(div);
        });
    } else {
        // Si no se encuentran productos, mostrar un mensaje
        productosSection.innerHTML = '<p>No se encontraron productos.</p>';
    }
}

// Evento para ejecutar la búsqueda cada vez que se escribe en el campo de búsqueda
document.getElementById('search-input').addEventListener('input', buscarProducto);

