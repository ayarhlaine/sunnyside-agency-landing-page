const menu = document.querySelector('#hamburger__menu');
const header__mobile__menu = document.querySelector('#header__mobile__menu');
menu.addEventListener('click', () => {
    console.log('menu click');
    if(header__mobile__menu.classList.contains('open')){
        header__mobile__menu.classList.remove('open');
        header__mobile__menu.classList.remove('fade-in');
        header__mobile__menu.classList.add('fade-out');
    } else {
        header__mobile__menu.classList.add('open');
        header__mobile__menu.classList.remove('fade-out');
        header__mobile__menu.classList.add('fade-in');
    }
});