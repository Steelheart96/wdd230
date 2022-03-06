
// Menu
const menubutton = document.querySelector('.menu-button');
const pagenav = document.querySelector('.navigation');
const ham = document.querySelector('.menu-button .ham');
const menuex = document.querySelector('.menu-button .ex');

menubutton.onclick = () => {
    pagenav.classList.toggle('responsive');
    ham.classList.toggle('responsive');
    menuex.classList.toggle('responsive')
};

let buttonMaxWidth = 1199;

window.onresize = () => {
    if (window.innerWidth < buttonMaxWidth){
        pagenav.classList.add('responsive');
        ham.classList.remove('responsive');
        menuex.classList.add('responsive');
        ListView()
    };
    if (window.innerWidth > buttonMaxWidth){
        pagenav.classList.remove('responsive');
        ham.classList.remove('responsive');
        menuex.classList.add('responsive');
        GridView()
    };
};

// Banner

const banner = document.querySelector('.banner');
const bannerex = document.querySelector('.close-banner');
bannerex.onclick = () => {
    banner.classList.add('responsive');
};