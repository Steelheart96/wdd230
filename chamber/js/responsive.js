const menubutton = document.querySelector('.menu-button');
const pagenav = document.querySelector('.navigation')

menubutton.addEventListener('click', () => {pagenav.classList.toggle('responsive')});

window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};