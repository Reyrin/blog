const trig = document.querySelector('body');

trig.addEventListener('click', (e) => {
    
    const target = e.target;

    if (target.classList.contains('burger')) {
        trig.classList.toggle('show-sidebar')
    }

});