document.addEventListener('DOMContentLoaded', function() {
    const projectsSection = document.getElementById('projects-section');
    const skillsSection = document.getElementById('skills-section');
  
    // Ocultar inicialmente las secciones
    projectsSection.style.opacity = '0';
    projectsSection.style.transition = 'opacity 0.6s ease-out';
    skillsSection.style.opacity = '0';
    skillsSection.style.transition = 'opacity 0.6s ease-out';
  
    // Configurar IntersectionObserver para mostrar las secciones al hacer scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1'; // Mostrar la sección
          observer.unobserve(entry.target); // Dejar de observar una vez que se muestra
        }
      });
    }, { threshold: 0.1 });
  
    // Observar las secciones
    observer.observe(projectsSection);
    observer.observe(skillsSection);
  });
  