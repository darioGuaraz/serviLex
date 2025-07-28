// main.js - ServiLex Moto Encomiendas
// Animaciones, interacciones y lógica JS modular. Comentado línea por línea.

// Módulo para animar servicios al hacer scroll
const fadeInOnScroll = (() => {
  const servicios = document.querySelectorAll(".servicio");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // Agrega un retraso escalonado para cada servicio
          setTimeout(() => {
            entry.target.classList.add("visible");
          }, index * 200); // 200ms de retraso entre cada servicio
        } else {
          entry.target.classList.remove("visible");
        }
      });
    },
    {
      threshold: 0.1, // Cuando al menos 10% del elemento es visible
      rootMargin: "0px 0px -50px 0px", // Trigger un poco antes
    }
  );

  // Observa cada servicio
  servicios.forEach((servicio) => observer.observe(servicio));
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
