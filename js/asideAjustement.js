const burgerBtn = document.getElementById('burgerBtn');
const sideMenu = document.getElementById('sideMenu');
const closeAside = document.getElementById('closeAside');

burgerBtn.addEventListener('click', () => {
  sideMenu.style.display = 'flex';
  document.body.style.overflow = 'hidden';
});
closeAside.addEventListener('click', () => {
  sideMenu.style.display = 'none';
  document.body.style.overflow = '';
});
// Fermer le menu en cliquant en dehors
window.addEventListener('click', (e) => {
  if (sideMenu.style.display === 'flex' && !sideMenu.contains(e.target) && e.target !== burgerBtn) {
    sideMenu.style.display = 'none';
    document.body.style.overflow = '';
  }
});