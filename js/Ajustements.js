// Sélectionne toutes les images dans la grille des produits
document.querySelectorAll('.images-grid img').forEach(img => {
  img.style.cursor = 'zoom-in';
  img.addEventListener('click', function() {
    document.getElementById('imageModal').style.display = 'flex';
    document.getElementById('modalImg').src = this.src;
    document.getElementById('modalImg').alt = this.alt || '';
  });
});

// Fermer le modal
document.getElementById('closeModal').onclick = function() {
  document.getElementById('imageModal').style.display = 'none';
  document.getElementById('modalImg').src = '';
};

// Fermer le modal en cliquant en dehors de l'image
document.getElementById('imageModal').onclick = function(e) {
  if (e.target === this) {
    this.style.display = 'none';
    document.getElementById('modalImg').src = '';
  }
};