// Mobile Navigation
let toggleButton = document.getElementById('js-toggle-nav');
let navMenu = document.getElementById('js-nav');

toggleButton.addEventListener('click', function(){
  navMenu.classList.toggle('hidden');
});
