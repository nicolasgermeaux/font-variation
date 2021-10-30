let windowSize = window.innerWidth;

let title = document.querySelector('.idkhowtonameit__title') // On récupère l'élément
title.style.setProperty('font-variation-settings', "'wght' " + windowSize) // On lui attribue une font-variation

window.onresize = function(event) {
   windowSize = window.innerWidth; // On refresh la variable à chaque resize
   console.log(windowSize) // Tu peux voir les changements de tailles
   title.style.setProperty('font-variation-settings', "'wght' " + windowSize) // On update la font-variation
}
