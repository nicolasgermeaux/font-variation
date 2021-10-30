let windowSize = window.innerWidth
console.log(windowSize)

let title = document.querySelector('.idkhowtonameit__title') // On récupère l'élément
title.style.setProperty('font-variation-settings', "'wght' " + windowSize) // On lui attribue une font-variation

window.onresize = function(event) {
	windowSize = window.innerWidth // On refresh la variable à chaque resize
    console.log(windowSize) // Tu peux voir les changements de tailles
    title.style.setProperty('font-variation-settings', "'wght' " + windowSize/1.6) // On update la font-variation puis on divise sur 1.6 pour que ça soit étalonner sur un écran de 1440px
}
