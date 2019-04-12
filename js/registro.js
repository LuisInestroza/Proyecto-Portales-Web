!function () {
    "use strict";

    

    document.addEventListener('DOMContentLoaded', function () {
        // variables

        var nombre = document.getElementById('nombre');
        var apellido = document.getElementById('apellido');
        var correo = document.getElementById('mail');
        var password = document.getElementById('password');
        var fecha = document.getElementById('fecha');
        var boton = document.getElementById('boton');

        function verificarCuenta(event) {
            event.preventDefault();
            if (nombre.value == "" ||apellido.value == "" || correo.value =="" || password.value == "" || fecha.value=="") {

                select.boton.alert("!Debes de llenar los datos para acceder¡");

            }
            else {
                var nombre = parseInt(nombre.value, 10) || 0;
                var apellido = parseInt(apellido.value, 10) || 0;
                var correo = parseInt(correo.value, 10) || 0;
                var password = parseInt(password.value, 10) || 0;
                var fecha = parseInt(fecha.value, 10) || 0;

            }
        }

    })
}();