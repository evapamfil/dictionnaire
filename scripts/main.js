var modal = document.querySelector('.modal'),
    btnCOnnexion = document.querySelector('.button-co'),
    btnInscription = document.querySelector('.button-inscription'),
    main = document.querySelector('main'),
    close = document.querySelector('.close')

btnCOnnexion.addEventListener('click', function () {
   if(modal.classList.contains('co')){
       modal.style.display ="block";
       main.classList.add('blur')
   }

}, false)

close.addEventListener('click', function () {
    modal.style.display="none"
    main.classList.remove('blur')
},false)
