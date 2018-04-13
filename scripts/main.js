var main = document.querySelector('main'),
    var elems = document.querySelectorAll('[data-modal]')
    var modals = {},
        current = null
    var close = document.querySelectorAll('.close')


    for(var i =0; i<elems.length; i++){
        elems[i].style.display="none";
        modals[elems[i].getAttribute('data-modal')] = elems[i]
    }

var btns = document.querySelectorAll('[data-to]')

document.querySelector('body').addEventListener('click', handleClick, false);

function showModal(elem){
    if(current){
        //current.style.display = "none";
    }

    elem.style.display = "block";
    current = elem
    main.classList.add('blur')
}

function handleClick(e) {
    var btn = e.target.closest('[data-to]')
    if(!btn){
        return
    }

    var identifiant = btn.getAttribute('data-to')
    if(!identifiant){
        console.warn('Pas de suite')
        return
    }

    var elem = modals[identifiant];
    showModal(elem)

}

for (var y=0; y<close.length; y++){

    function closeModal(){

        var modal = close.closest('[data-modal]')
        modal.style.display ="none"
        main.classList.remove('blur')
        console.log('close')
    }

    close[y].addEventListener('click', closeModal, false)

}