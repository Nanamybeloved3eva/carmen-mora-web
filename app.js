// Manejo de la pantalla de bienvenida
const splash = document.getElementById("splash");
const app = document.getElementById("app");

setTimeout(() => {
  splash.style.display = "none";
  app.classList.remove("hidden");
}, 5000);

// Función para mostrar una sección principal y ocultar las demás
function mostrarSeccion(id) {
  // Ocultar todas las secciones principales
  document.querySelectorAll(".seccion").forEach(s => s.classList.remove("activa"));
  
  // Mostrar la sección seleccionada
  const seccion = document.getElementById(id);
  seccion.classList.add("activa");

  // Si es la sección de especialidades, mostrar la primera subsección por defecto
  if(id === "especialidades") {
    mostrarSubseccion("ciencias");
  }
}

// Función para mostrar una subsección de especialidades y ocultar las demás
function mostrarSubseccion(id) {
  document.querySelectorAll(".subseccion").forEach(s => s.classList.remove("activa"));
  document.getElementById(id).classList.add("activa");
}
