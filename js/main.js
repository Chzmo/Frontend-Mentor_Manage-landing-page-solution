let CloseButton = document.querySelector('#open-menu');

CloseButton.addEventListener('click', (e)=> {
    //
    e.preventDefault();
    let container = document.querySelector('.container')
    let containerBefore = window.getComputedStyle(container, '::before');

    container.style.setProperty('--none', 'block');
});


