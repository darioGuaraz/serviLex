// main.js - ServiLex Moto Encomiendas
// Animaciones, interacciones y lógica JS modular. Comentado línea por línea.

// Módulo para animar servicios al hacer scroll
const fadeInOnScroll = (() => {
  // Selecciona todos los elementos con la clase 'fade-in'
  const fadeEls = document.querySelectorAll(".fade-in");

  // Función para mostrar el elemento si está en viewport
  const showOnScroll = () => {
    fadeEls.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 60) {
        el.style.opacity = 1;
        el.style.transform = "translateY(0)";
      }
    });
  };

  // Escucha el evento scroll y ejecuta la función
  window.addEventListener("scroll", showOnScroll);
  // Ejecuta al cargar la página
  showOnScroll();
})();

// Módulo para microinteracciones en botones
const buttonInteractions = (() => {
  // Selecciona todos los botones de WhatsApp
  const whatsappBtns = document.querySelectorAll(".whatsapp-btn");

  // Agrega animación al hacer click
  whatsappBtns.forEach((btn) => {
    btn.addEventListener("mousedown", () => {
      btn.style.transform = "scale(0.97)";
    });
    btn.addEventListener("mouseup", () => {
      btn.style.transform = "scale(1)";
    });
    btn.addEventListener("mouseleave", () => {
      btn.style.transform = "scale(1)";
    });
  });
})();

// Módulo para navegación accesible
const navAccessibility = (() => {
  // Permite navegar con teclado por el menú
  const navLinks = document.querySelectorAll(".nav a");
  navLinks.forEach((link) => {
    link.addEventListener("focus", () => {
      link.style.outline = "2px solid var(--color-accent)";
    });
    link.addEventListener("blur", () => {
      link.style.outline = "none";
    });
  });
})();

// Módulo para feedback visual en servicios
const servicioHover = (() => {
  // Selecciona todos los servicios
  const servicios = document.querySelectorAll(".servicio");
  servicios.forEach((servicio) => {
    servicio.addEventListener("mouseenter", () => {
      servicio.style.boxShadow = "0 6px 32px rgba(195,42,8,0.18)";
    });
    servicio.addEventListener("mouseleave", () => {
      servicio.style.boxShadow = "0 2px 12px rgba(11,19,40,0.08)";
    });
  });
})();

// Todas las funciones son modulares y reutilizables para escalar el proyecto.

//codigo para que la fecha del footer cambie segun el año
document.getElementById("year").textContent = new Date().getFullYear();
