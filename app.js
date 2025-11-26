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

// Pantalla de bienvenida → entrar al contenido
document.addEventListener("DOMContentLoaded", () => {
    const inicio = document.getElementById("inicio-app");
    const app = document.getElementById("app");
    const btn = document.getElementById("btn-entrar");

    if (btn) {
        btn.addEventListener("click", () => {
            inicio.classList.add("hidden");
            app.classList.remove("hidden");
            mostrarSeccion("historia");
        });
    }
});
