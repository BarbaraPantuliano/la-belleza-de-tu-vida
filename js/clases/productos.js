// Clase Producto
class Producto {
    constructor(codigo, nombre, precio, imagen, alt) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
        this.alt = alt;
    }
}

/// Productos iniciales
const productos = [
    new Producto(1, "Gel efecto Peeling", 10000, "../assets/gelefectopeeling.jpg", "imagen de un pote abierto con un producto color mostaza adentro, una mano sosteniéndolo y un dedo tomando el producto"), 
    new Producto(2, "Crema Humectante", 7000, "../assets/cremahumectante.jpg", "imagen de unas manos apretando un dispensador de crema"),
    new Producto(3, "Limpiador Facial", 9500, "../assets/limpiadorfacial.jpg", "imagen de un pote de crema apoyado sobre una base blanca"),
    new Producto(4, "Gel Nocturno", 12000, "../assets/gelrecuperacionnocturna.jpg", "imagen de dos potes de cremas al lado de la canilla del lavabo"),
    new Producto(5, "Kit Humectación", 20000, "../assets/kitdehumectacion.jpg", "imagen de 4 productos faciales uno al lado del otro, rodeados de pétalos rosas"),
    new Producto(6, "Tónico Facial", 14000, "../assets/tonicofacialproducto.jpg", "imagen de una mano sosteniendo un producto facial, detrás se ve una maceta con una planta y al lado del producto un caracol de mar"),
    new Producto(7, "Jabón Exfoliante", 8000,  "../assets/jabonexfoliante.jpg", "imagen de un producto en un frasco, con su caja acostada al lado "),
    new Producto(8, "Serum", 18000, "../assets/serum.jpg", "imagen de un producto facial con un gotero, y detrás su respectiva caja"),
    new Producto(9, "Protector Solar", 9500, "../assets/protectorsolar.jpg", "imagen de un pote de protector solar apoyado en el piso y de fondo se ve parte de una pileta")
];
