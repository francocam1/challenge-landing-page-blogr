// Boton hamburger 

const btn = document.querySelector('.header__btn');
const nav = document.querySelector('.header__nav');
const imgBtn = document.getElementById('btn-hamburger'); 
const btnDrop = document.querySelector('.header__nav-btn-drop');
const menuDrop = document.querySelector('.header__nav-list-drop');
const btnCompany = document.querySelector('.btn-company');
const listCompany = document.querySelector('.list-company');
const btnConnect = document.querySelector('.btn-connect');
const listConnect = document.querySelector('.list-connect');
const buttons = document.querySelectorAll('.header__nav-btn-drop');



btn.addEventListener('click', () => {
    nav.classList.toggle('header__nav--active')
    btn.classList.toggle('header__btn--active')
    




    if(nav.classList.contains('header__nav--active')) {
        imgBtn.src = 'images/icon-close.svg';

        document.body.style.overflow = 'hidden';
    } else {
        imgBtn.src = 'images/icon-hamburger.svg';
        document.body.style.overflow = 'auto';
    }


    




    
const navLinks = document.querySelectorAll('.header__nav a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        
        nav.classList.remove('header__nav--active');

        
        imgBtn.src = 'images/icon-hamburger.svg';

        
        document.body.style.overflow = 'auto';
        
        
        btnDrop.classList.remove('header__nav-btn-drop--active');
        menuDrop.classList.remove('header__nav-list-drop--active');
        
    });




    
});




})

// Boton drop Product



btnDrop.addEventListener( 'click', () => {
    if (window.innerWidth < 1024) {
    btnDrop.classList.toggle('header__nav-btn-drop--active');
    menuDrop.classList.toggle('header__nav-list-drop--active');

    btnCompany.classList.remove('btn-company--active');
    listCompany.classList.remove('list-company--active');

    btnConnect.classList.remove('btn-connect--active');
    listConnect.classList.remove('list-connect--active');

    }

});

// Boton drop Company


btnCompany.addEventListener( 'click', () => {
    if (window.innerWidth < 1024) {
    btnCompany.classList.toggle('btn-company--active');
    listCompany.classList.toggle('list-company--active');

    btnDrop.classList.remove('header__nav-btn-drop--active');
    menuDrop.classList.remove('header__nav-list-drop--active');

    btnConnect.classList.remove('btn-connect--active');
    listConnect.classList.remove('list-connect--active');
    }

});

// Boton drop Connect



btnConnect.addEventListener( 'click', ()=> {
    

    if (window.innerWidth < 1024) {
    btnConnect.classList.toggle('btn-connect--active');
    listConnect.classList.toggle('list-connect--active');


    btnDrop.classList.remove('header__nav-btn-drop--active');
    menuDrop.classList.remove('header__nav-list-drop--active');

    btnCompany.classList.remove('btn-company--active');
    listCompany.classList.remove('list-company--active');

    }
}

);


