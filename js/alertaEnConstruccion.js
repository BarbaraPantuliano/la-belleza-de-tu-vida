/*document.addEventListener('DOMContentLoaded', function() {
        Swal.fire({
            title: "Página en construcción!",
            text: "Lo siento! Todavía estamos trabajando aquí!",
            imageUrl:"./assets/construccion.jpg",
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: "Página en construcción"
          });
})*/

document.addEventListener('DOMContentLoaded', function() {
  
    // Obtenemos el nombre de la página actual
    const paginaActual = window.location.pathname;
  
    // Variable para la ruta de la imagen
    let rutaImagen;
  
    // Definir la ruta de la imagen según la página
    if (paginaActual === '/index.html') {
      rutaImagen = './assets/construccion.jpg';  
    } else {
      // Página por defecto (si no coincide con las anteriores)
      rutaImagen = '../assets/construccion.jpg';
    }
  
    // Mostrar la alerta con la ruta correcta
    Swal.fire({
      title: 'Página en construcción',
      text: 'Lo siento! Todavía estamos trabajando aquí!',
      imageUrl: rutaImagen,  // Usar la ruta que se ha determinado
      imageAlt: 'Imagen en construcción',  
      imageWidth: 200,  
      confirmButtonText: 'Entendido'
    });
  });
  