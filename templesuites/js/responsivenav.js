let hamBtn = document.querySelector('.ham-icon');
const navItems = document.querySelector('.main-nav ul');

hamBtn.addEventListener('click', ResponsiveNav);

function ResponsiveNav() {
    navItems.classList.toggle('responsive-none');
    navItems.classList.toggle('responsive-block');

    if (navItems.classList.value == 'responsive-block') {
        hamBtn.src = 'images/DownArrow.png';
    }
    else {
        hamBtn.src = 'images/HamIcon.png';
    }
}