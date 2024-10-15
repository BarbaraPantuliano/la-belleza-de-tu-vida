
/*Linkeado en la página de productos*/


// constantes para los datos de inicio de sesión
const nombreUsuario = "GUIDO";
const contrasenia = "1234";


//función que solicita y chequea los datos de inicio

function iniciarSesion(){

    let usuario = prompt("Ingrese su nombre de usuario");
    let contra = prompt("Ingrese su contraseña");

    if((usuario === nombreUsuario) && (contra === contrasenia)){

        alert("Bienvenido/a " + usuario + " a La Belleza de Tu Vida. \n Por el momento sólo podrás comprar productos")
        return true;
    }else{

        alert("Los datos no son correctos")
        return false;

    }

}



//variables para productos

let cod_gelEfectoPeeling = 1;
let precio_gelEfectoPeeling = 10000.00;

let cod_cremaHumectante =2;
let precio_cremaHumectante = 7000.00;

let cod_limpiadorFacial = 3;
let precio_limpiadorFacial = 9500.00;

let cod_gelNocturno = 4;
let precio_gelNocturno = 12000.00;

let cod_kitHumectacion = 5;
let precio_kitHumectacion = 20000.00;

let cod_tonicoFacial = 6;
let precio_tonicoFacial = 14000.00;


//Condicional para que, si puso bien los datos de inicio de sesión lo habilite a hacer la compra

if(iniciarSesion()){

    //Se consulta si quiere iniciar la compra
    let iniciarCompra = confirm ("Desea iniciar su compra?")


    //Arranca la compra
    if (iniciarCompra){

        let totalCarrito = 0;
        let lista_compra = "";

        let continuar = true;

        //Código que se repite mientras desee agregar más productos
        while (continuar) {

            let cod_producto = parseInt(prompt("Por favor, ingrese el código del producto que desea comprar:"));

            if (!isNaN(cod_producto)){

                if (cod_producto === cod_gelEfectoPeeling) {

                    lista_compra += "Gel efecto Peeling $" + precio_gelEfectoPeeling + "\n";
                    totalCarrito += precio_gelEfectoPeeling;

                } else if (cod_producto === cod_cremaHumectante) {

                    lista_compra += "Crema Humectante $" + precio_cremaHumectante + "\n";
                    totalCarrito += precio_cremaHumectante;

                } else if (cod_producto === cod_limpiadorFacial) {

                    lista_compra += "Limpiador Facial $" + precio_limpiadorFacial + "\n";
                    totalCarrito += precio_limpiadorFacial;

                } else if (cod_producto === cod_gelNocturno) {

                    lista_compra += "Gel Nocturno $" + precio_gelNocturno + "\n";
                    totalCarrito += precio_gelNocturno;

                } else if (cod_producto === cod_kitHumectacion) {

                    lista_compra += "Kit Humectación $" + precio_kitHumectacion + "\n";
                    totalCarrito += precio_kitHumectacion;

                } else if (cod_producto === cod_tonicoFacial) {

                    lista_compra += "Tónico Facial $" + precio_tonicoFacial + "\n";
                    totalCarrito += precio_tonicoFacial;

                } else {
                    
                    alert("Código inválido");
                }

            } else {

                alert("Debe ingresar un código correcto");
            }

            continuar = confirm("¿Desea agregar otro producto?");

        }

        alert("Compra finalizada.\nLista de productos:\n" + lista_compra + "Total del carrito: $" + totalCarrito);

        // Preguntar si desea aplicar un cupón de descuento
        let aplicarDescuento = confirm("¿Desea aplicar un cupón de descuento?");

        if (aplicarDescuento) {

            let cupon = prompt("Ingrese el código del cupón:");

            if (cupon === "DIA DE LA MADRE") {

                let descuento = totalCarrito * 0.20;
                

                alert("Cupón aplicado. Ha obtenido un 20% de descuento.\nTotal después del descuento: $" + (totalCarrito -= descuento));
            
            } else {

                alert("Cupón inválido.");
                
            }

            abonar(totalCarrito);
            

        }else{

            alert("Compra finalizada.\nLista de productos:\n" + lista_compra + "Total del carrito: $" + totalCarrito);

            abonar(totalCarrito);

        }

        
        

    } else {


        alert("No se inició la compra.");

        iniciarCompra = confirm ("Desea iniciar su compra?")

    }

}else {

    alert("No se pudo iniciar sesión. No se puede acceder a la compra.");
}



//Función para elegir la manera de abonar
function abonar(totalCarrito) {

    let formaPago = prompt("¿Cómo desea abonar? (1: Efectivo, 2: Tarjeta)");
    
    switch (formaPago) {

        case '1':
            //Si elige abonar en efectivo tiene un 10% de descuento
            let descuentoEfectivo= totalCarrito*0.10
            totalCarrito-= descuentoEfectivo;
            alert("Usted ha seleccionado pagar en efectivo. Total a pagar: $" + totalCarrito);
            break;

        case '2':

            alert("Usted ha seleccionado pagar con tarjeta. Total a pagar: $" + totalCarrito);
            pagoTarjeta();
            break;

        default:

            alert("Forma de pago no válida. Total a pagar: $" + totalCarrito);
            break;

    }
}

//Función para ingresar los datos de la tarjeta. 
function pagoTarjeta(){

    let nombreApellido = prompt ("Ingrese Nombre y Apellido como figura en la tarjeta");

    let numeroTarjeta  = prompt("Ingrese los números de su tarjeta");

    let fechaVencimiento = prompt("Ingrese la fecha de vencimiento dd/mm");

    let codSeguridad = prompt("Ingrese el código de seguridad");

    if(nombreApellido !="" && (numeroTarjeta !="" && !isNaN(numeroTarjeta)) && fechaVencimiento !="" && codSeguridad != ""){

        alert("Recibirá confirmación de pago una vez validada la información ingresada");
    
    }else{

        alert("Debe ingresar todos los datos solicitados");
    }

}



