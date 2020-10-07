var nombre = document.getElementById("nombre");
var apellido = document.getElementById("apellido");
var correo = document.getElementById("correo");
var password = document.getElementById("password");
var fecha = document.getElementById("fecha");
var boton = document.getElementById("boton");

function verificarCuenta() {
  if (
    nombre.value == "" ||
    apellido.value == "" ||
    correo.value == "" ||
    password.value == "" ||
    fecha.value == ""
  ) {
    alert("!Debes de llenar los datos para acceder¡");
  } else {
    window.open("http://127.0.0.1:5500/404.html");
    
  }
}

        
        
