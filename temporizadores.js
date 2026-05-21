const pantalla = document.getElementById("pantalla");
const boton = document.getElementById("btnIniciar");

function mostrarMensaje(texto) {

  const mensaje = document.createElement("div");

  mensaje.classList.add("mensaje");

  mensaje.textContent = texto;

  pantalla.appendChild(mensaje);
}

boton.addEventListener("click", () => {

  // Limpiar pantalla
  pantalla.innerHTML = "";

  mostrarMensaje("Inicio del programa");

  // Ejecutar después de 3 segundos
  setTimeout(() => {

    mostrarMensaje("¡Hola después de 3 segundos!");

  }, 3000);

  // Ejecutar cada 2 segundos
  const intervalo = setInterval(() => {

    const hora = new Date().toLocaleTimeString();

    mostrarMensaje("Hora actual: " + hora);

  }, 2000);

  // Detener intervalo después de 10 segundos
  setTimeout(() => {

    clearInterval(intervalo);

    mostrarMensaje("El intervalo fue detenido despues de 10 segundos");

  }, 10000);

  mostrarMensaje("Fin del código principal");
});