window.addEventListener('load', function() {

    let boton = document.querySelector('#boton-cerrar-sesion');

    boton.addEventListener('click', function() {
        sessionStorage.removeItem('token');
        location.reload();
    })

})