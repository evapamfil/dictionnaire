var modal = document.querySelector('.modal');
var btnCOnnexion = document.querySelector('.button-co');
var btnInscription = document.querySelector('.button-inscription');
var main = document.querySelector('main');
var close = document.querySelector('.close');

btnCOnnexion.addEventListener('click', function () {
   if(modal.classList.contains('co')){
       modal.style.display ="block";
       main.classList.add('blur');
   }

}, false);

close.addEventListener('click', function () {
    modal.style.display="none";
    main.classList.remove('blur');
},false);
