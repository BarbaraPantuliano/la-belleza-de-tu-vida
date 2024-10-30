
/*Linkeado en la página de productos*/

// Constantes para los datos de inicio de sesión 
const nombreUsuario = "GUIDO";
const contrasenia = "1234";

// Clase Producto
class Producto {
    constructor(codigo, nombre, precio) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
    }
}

// Array de productos utilizando la clase Producto
const productos = [
    new Producto(1, "Gel efecto Peeling", 10000),
    new Producto(2, "Crema Humectante", 7000),
    new Producto(3, "Limpiador Facial", 9500),
    new Producto(4, "Gel Nocturno", 12000),
    new Producto(5, "Kit Humectación", 20000),
    new Producto(6, "Tónico Facial", 14000)
];

// Función que solicita y chequea los datos de inicio
function iniciarSesion() {
    let usuario = prompt("Ingrese su nombre de usuario");
    let contra = prompt("Ingrese su contraseña");

    if ((usuario === nombreUsuario) && (contra === contrasenia)) {
        alert("Bienvenido/a " + usuario + " a La Belleza de Tu Vida. \nPor el momento sólo podrás comprar productos");
        return true;
    } else {
        alert("Los datos no son correctos");
        return false;
    }
}

// Función para filtrar productos
function filtrarProductos() {
    let productosFiltrados = []; // Inicia un array vacío
    let continuarBuscando = true;

    while (continuarBuscando) {
        let buscarNombre = prompt("Ingrese el nombre del producto a buscar:");
        const filtrados = productos.filter(p => p.nombre.toLowerCase().includes(buscarNombre.toLowerCase()));

        if (filtrados.length > 0) {
            let listaFiltrada = "Productos encontrados:\n";
            filtrados.forEach(p => {
                listaFiltrada += `${p.codigo}: ${p.nombre} - $${p.precio}\n`;
            });
            alert(listaFiltrada);
            // Agrega los productos filtrados al array
            productosFiltrados = [...productosFiltrados, ...filtrados];
        } else {
            alert("No se encontraron productos que coincidan con su búsqueda.");
        }

        // Preguntar si desea buscar más productos
        continuarBuscando = confirm("¿Desea buscar más productos?");
    }

    return productosFiltrados; // Devuelve los productos filtrados
}



// Función para iniciar la compra
function iniciarCompra(productosDisponibles) {
    let totalCarrito = 0;
    let lista_compra = "";
    

    // Agregar productos filtrados al carrito
    if (productosDisponibles.length > 0) {
        let agregarFiltrados = confirm("¿Desea agregar los productos filtrados al carrito?");
        if (agregarFiltrados) {
            productosDisponibles.forEach(producto => {
                lista_compra += `${producto.nombre} $${producto.precio}\n`;
                totalCarrito += producto.precio;
            });
        }
    }

    
    let continuar = confirm ("Desea agregar más productos?")

   
    // Opción de agregar más productos
        while (continuar) {
            let cod_producto = parseInt(prompt("Por favor, ingrese el código del producto que desea comprar:"));

            const producto = productos.find(p => p.codigo === cod_producto);
            if (producto) {
                lista_compra += `${producto.nombre} $${producto.precio}\n`;
                totalCarrito += producto.precio;
            } else {
                alert("Código inválido");
            }

            continuar = confirm("¿Desea agregar otro producto?");
        }
        
        alert("Compra finalizada.\nLista de productos:\n" + lista_compra + "Total del carrito: $" + totalCarrito)
    
    // Preguntar si desea aplicar un cupón de descuento
    let aplicarDescuento = confirm("¿Desea aplicar un cupón de descuento?");
    
    if (aplicarDescuento) {
        let cupon = prompt("Ingrese el código del cupón:");

        if (cupon === "DIA DE LA MADRE") {
            let descuento = totalCarrito * 0.20;
            totalCarrito -= descuento;
            alert("Cupón aplicado. Ha obtenido un 20% de descuento.\nTotal después del descuento: $" + totalCarrito);
        } else {
            alert("Cupón inválido.");
        }
    }

    // Función que trae la forma de abonar
    abonar(totalCarrito);
}

// Función para elegir la manera de abonar
function abonar(totalCarrito) {
    let formaPago = prompt("¿Cómo desea abonar? (1: Efectivo, 2: Tarjeta)");

    switch (formaPago) {
        case '1':
            // Si elige abonar en efectivo tiene un 10% de descuento
            let descuentoEfectivo = totalCarrito * 0.10;
            totalCarrito -= descuentoEfectivo;
            alert("Usted ha seleccionado pagar en efectivo. Total a pagar: $" + totalCarrito);
            break;

        case '2':
            alert("Usted ha seleccionado pagar con tarjeta. Total a pagar: $" + totalCarrito);
            // Función que trae para ingresar los datos
            pagoTarjeta();
            break;

        default:
            alert("Forma de pago no válida. Total a pagar: $" + totalCarrito);
            break;
    }
}

// Función para ingresar los datos de la tarjeta
function pagoTarjeta() {
    let nombreApellido = prompt("Ingrese Nombre y Apellido como figura en la tarjeta");
    let numeroTarjeta = prompt("Ingrese los números de su tarjeta");
    let fechaVencimiento = prompt("Ingrese la fecha de vencimiento dd/mm");
    let codSeguridad = prompt("Ingrese el código de seguridad");

    if (nombreApellido && numeroTarjeta && !isNaN(numeroTarjeta) && fechaVencimiento && codSeguridad) {
        alert("Recibirá confirmación de pago una vez validada la información ingresada");
    } else {
        alert("Debe ingresar todos los datos solicitados");
    }
}



// Condicional para que, si puso bien los datos de inicio de sesión lo habilite a hacer la compra
if (iniciarSesion()) {
    // Filtrar productos antes de la compra
    const productosFiltrados = filtrarProductos();

    // Se consulta si quiere iniciar la compra
    let iniciarCompraConfirm = confirm("¿Desea iniciar su compra?");
    
    if (iniciarCompraConfirm) {
        iniciarCompra(productosFiltrados); 
    } else {
        alert("No se inició la compra.");
    }
} else {
    alert("No se pudo iniciar sesión. No se puede acceder a la compra.");
}


