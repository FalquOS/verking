function adjustWelcome() {
  const welcome = document.querySelector('.Welcome');
  if (!welcome) return;

  const width = window.innerWidth;

  if (width <= 768) {
    // petit écran (mobile)
    welcome.style.width = '90vw';
    welcome.style.margin = '20px auto';
    welcome.style.fontSize = '1.5rem';
  } else if (width <= 1024) {
    // tablette
    welcome.style.width = '80vw';
    welcome.style.margin = '40px auto';
    welcome.style.fontSize = '2rem';
  } else {
    // grand écran
    welcome.style.width = '480px';
    welcome.style.margin = '110px 0 0 700px';
    welcome.style.fontSize = '2.5rem';
  }
}

// Appelle la fonction au chargement de la page et à chaque redimensionnement
window.addEventListener('load', adjustWelcome);
window.addEventListener('resize', adjustWelcome);
