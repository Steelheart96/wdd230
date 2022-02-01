const menubutton = document.querySelector('.menu-button');
const pagenav = document.querySelector('.navigation');
const ham = document.querySelector('.menu-button .ham');
const ex = document.querySelector('.menu-button .ex');

menubutton.onclick = () => {
    pagenav.classList.toggle('responsive');
    ham.classList.toggle('responsive');
    ex.classList.toggle('responsive')
};

let buttonMaxWidth = 1199;

window.onresize = () => {
    if (window.innerWidth < buttonMaxWidth){
        pagenav.classList.add('responsive');
        ham.classList.remove('responsive');
        ex.classList.add('responsive')
    };
    if (window.innerWidth > buttonMaxWidth){
        pagenav.classList.remove('responsive');
        ham.classList.remove('responsive');
        ex.classList.add('responsive')
    };
};