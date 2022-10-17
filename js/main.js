let CloseButton = document.querySelector('#open-menu');

CloseButton.addEventListener('click', (e)=> {
    //
    e.preventDefault();
    let container = document.querySelector('.container')
    let navbar = document.querySelector('.navbar');
    //let containerBefore = window.getComputedStyle(container, '::before');

    if(e.target.classList.contains('open')){
        e.target.classList.remove('open');
        e.target.classList.add('close');
        container.style.setProperty('--beforeContainer', 'block');
        navbar.style.display = 'block';
        CloseButton.style.zIndex = '99999';
        CloseButton.style.backgroundImage = 'url(./../images/icon-close.svg)';
    } else{
        e.target.classList.add('open');
        navbar.style.display = 'none';
        container.style.setProperty('--beforeContainer', 'none');
        CloseButton.style.backgroundImage = 'url(./../images/icon-hamburger.svg)'; 
    }

    

    container.addEventListener('click', (e)=>{
        if(e.target.style[0] === '--beforeContainer'){
            navbar.style.display = 'none';
            container.style.setProperty('--beforeContainer', 'none');
            CloseButton.style.backgroundImage = 'url(./../images/icon-hamburger.svg)';      
        }
    });
    // container.style.setProperty('--none', 'block');
});


