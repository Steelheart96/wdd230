const menubutton = document.querySelector('.menu-button');
const pagenav = document.querySelector('.navigation');
const ham = document.querySelector('.menu-button .ham');
const ex = document.querySelector('.menu-button .ex');

menubutton.onclick = () => {
    pagenav.classList.toggle('responsive');
    ham.classList.toggle('responsive');
    ex.classList.toggle('responsive')
};


// window.onresize = () => {
//     if(window.innerWidth > 1000){
//     firstNav.classList.remove('open');
//     button.classList.remove('open')
//     }
// }

let buttonMaxWidth = 1199;

window.onresize = () => {
    if (window.innerWidth < buttonMaxWidth){
        pagenav.classList.add('responsive');
    };
    if (window.innerWidth > buttonMaxWidth){
        pagenav.classList.remove('responsive');
    };
};

// window.addEventListener('resize', () => {
//     if (window.innerWidth > 760) pagenav.classList.remove('responsive')
// }, true);