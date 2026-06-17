//NAVBAR
function renderNavbar() {
    const navbarHTML = `
                    <nav class="navbar navbar-expand-lg sticky-top navbar-dark">
                        <div class="container">
                            <a class="navbar-brand" href="index.html">
                                <img src="https://placehold.co/40x40/00f2fe/000000?text=YH" alt="Logo Yoel" class="navbar-logo">
                                <span class="brand-text">YOEL HERNANDEZ DE JESUS</span>
                            </a>
                            <button
                                class="navbar-toggler border-0"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarContent"
                                aria-controls="navbarContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarContent">
                                <ul class="navbar-nav ms-auto mb-2 mb-lg-0 gap-3">
                                    <li class="nav-item">
                                        <a class="nav-link ${window.location.pathname.endsWith("index.html") || window.location.pathname === "/" ? "active" : ""}" href="index.html">Inicio</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link ${window.location.pathname.endsWith("proyectos.html") ? "active" : ""}" href="proyectos.html">Proyectos</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link ${window.location.pathname.endsWith("sobremi.html") ? "active" : ""}" href="sobremi.html">Sobre mí</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link ${window.location.pathname.endsWith("contacto.html") ? "active" : ""}" href="contacto.html">Contacto</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                `;

    // Buscamos el contenedor
    const container = document.getElementById("navbar-container");
    if (container) {
        container.innerHTML = navbarHTML;
    }
}

//FOOTER
function renderFooter() {
    const year = new Date().getFullYear(); // Obtiene el año
    const footerHTML = `
                    <footer>
                        <div class="container text-center">
                            <div class="d-flex justify-content-center gap-4 mb-3">
                                <a href="https://github.com/yoelHDZ" class="social-icon" aria-label="GitHub"><i class="bi bi-github"></i></a>
                                <a href="https://www.linkedin.com/in/yoelhdz/" class="social-icon" aria-label="LinkedIn"><i class="bi bi-linkedin"></i></a>
                            </div>
                            <p class="text-secondary small mb-0">
                                &copy; ${year} Yoel Hernández. Todos los derechos reservados.
                            </p>
                            <p class="text-secondary small mt-1">
                                Hecho con <i class="bi bi-suit-heart-fill text-danger"></i>
                            </p>
                        </div>
                    </footer>
                `;

    // Buscamos el contenedor e inyectamos el HTML
    const container = document.getElementById("footer-container");
    if (container) {
        container.innerHTML = footerHTML;
    }
}

// --- INICIALIZAR COMPONENTES ---
// Cuando la página termine de cargar, dibujamos la navbar y el footer
document.addEventListener("DOMContentLoaded", () => {
    renderNavbar();
    renderFooter();
});
