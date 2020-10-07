var correo = document.getElementById("mail");
var password = document.getElementById("password");
var boton = document.getElementById("boton");

function verificarCuenta() {
  if (correo.value == "" || password.value == "") {
     alert("!Debes de llenar los datos para acceder¡");
  } else {
     alert("Haz iniciado con " + correo.value);
  }
}
 