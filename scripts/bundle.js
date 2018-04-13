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
    
},false);


var elems = document.querySelectorAll('[data-modal]');
var modals = {};
var close = document.querySelectorAll('.close');


    for(var i =0; i<elems.length; i++){
        elems[i].style.display="none";
        modals[elems[i].getAttribute('data-modal')] = elems[i];
    }

    var btns = document.querySelectorAll('[data-to]');

    document.querySelector('body').addEventListener('click', handleClick, false);

    function showModal(elem){
        elem.style.display = "block";
        main.classList.add('blur');
    }

 function handleClick(e) {
        var btn = e.target.closest('[data-to]');
        if(!btn){
            return
        }

        var identifiant = btn.getAttribute('data-to');
        if(!identifiant){
            console.warn('Pas de suite');
            return
        }

        var elem = modals[identifiant];
        showModal(elem);

    }

for (var y=0; y<close.length; y++){
  
   function closeModal(e){
     
     var modal = e.target.closest('[data-modal]');
     modal.style.display ="none";
    main.classList.remove('blur');
   }

  close[y].addEventListener('click', closeModal, false);

}
