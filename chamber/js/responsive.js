
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

let directoryScreenWidth = 1199;

window.onresize = () => {
    if (window.innerWidth < directoryScreenWidth){
        pagenav.classList.add('responsive');
        ham.classList.remove('responsive');
        menuex.classList.add('responsive');
        if (document.URL.includes('directory')){
            ListView()
        }
    };
    if (window.innerWidth > directoryScreenWidth){
        pagenav.classList.remove('responsive');
        ham.classList.remove('responsive');
        menuex.classList.add('responsive');
        if (document.URL.includes('directory')){
            GridView()
        }
    };
};

// Banner

const banner = document.querySelector('.banner');
const bannerex = document.querySelector('.close-banner');
bannerex.onclick = () => {
    banner.classList.add('responsive');
};