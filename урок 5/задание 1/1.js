'use strict';


const par = document.querySelector('.modal-windo__par');
const openPar = document.querySelector('.modal-windo__heading');
const closePar = document.querySelector('.sing-exit');

closePar.addEventListener("click", function () {
  par.classList.add('hinge');
  par.classList.remove('zoomIn');
  setTimeout(function(){
    par.classList.add('modal-windo__par-close');}, 1900);
});


openPar.addEventListener("click", function () {
  par.classList.add('zoomIn');
  par.classList.remove('hinge');
  par.classList.remove('modal-windo__par-close');
});