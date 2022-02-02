const bannerDate = new Date()
const bannerDay = bannerDate.getDay();

if ( bannerDay != 1 && bannerDay != 2) {
    const siteBanner = document.querySelector('.banner');
    siteBanner.classList.add('responsive');
};