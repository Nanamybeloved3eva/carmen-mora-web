// Mostrar secciones principales
function mostrarSeccion(id) {
    document.querySelectorAll('.seccion').forEach(s => s.classList.remove('activa'));
    const el = document.getElementById(id);
    if (el) el.classList.add('activa');

    // Cuando entras a especialidades, activar la primera por defecto
    if (id === 'especialidades') {
        mostrarSubseccion('ciencias');
    }
}

// Mostrar subsecciones de especialidades
function mostrarSubseccion(id) {
    document.querySelectorAll('.subseccion').forEach(s => s.classList.remove('activa'));
    const el = document.getElementById(id);
    if (el) {
        el.classList.add('activa');
        el.scrollIntoView({ behavior: "smooth", block: "start" });

        
    }
}

// Pantalla de bienvenida original
window.addEventListener("load", () => {
  const splash = document.getElementById("splash");
  setTimeout(() => {
    splash.classList.add("hidden");
  }, 2300);
});

    }
});


