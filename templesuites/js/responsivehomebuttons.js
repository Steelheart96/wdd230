// Temple Info Buttons
const infoBtn1 = document.getElementById("info-btn-1");
const infoBtn2 = document.getElementById("info-btn-2");
const infoBtn3 = document.getElementById("info-btn-3");

// Temple Info Content
const infoContent1 = document.getElementById("info-content-1");
const infoContent2 = document.getElementById("info-content-2");
const infoContent3 = document.getElementById("info-content-3");

// Temple Info Event Listeners

infoBtn1.addEventListener("click", () => {
    if (!infoContent1.classList.contains("responsive-block")) {
        infoContent1.classList.add("responsive-block");

        infoContent2.classList.remove("responsive-block");
        infoContent3.classList.remove("responsive-block");
    };
});

infoBtn2.addEventListener("click", () => {
    if (!infoContent2.classList.contains("responsive-block")) {
        infoContent2.classList.add("responsive-block");
        
        infoContent1.classList.remove("responsive-block");
        infoContent3.classList.remove("responsive-block");
    };
});

infoBtn3.addEventListener("click", () => {
    if (!infoContent3.classList.contains("responsive-block")) {
        infoContent3.classList.add("responsive-block");
        
        infoContent2.classList.remove("responsive-block");
        infoContent1.classList.remove("responsive-block");
    };
});

// Weather buttons

const dailyWeatherBtn = document.getElementById("daily-weather-btn");
const weeklyWeatherBtn = document.getElementById("weekly-weather-btn");

// Weather content

const dailyWeatherContent = document.getElementById("daily-weather");
const weeklyWeatherContent = document.getElementById("weekly-weather");

// Weather Event Listeners

dailyWeatherBtn.addEventListener("click", () => {
    if (!dailyWeatherContent.classList.contains("responsive-grid")) {
        dailyWeatherContent.classList.add("responsive-grid");

        weeklyWeatherContent.classList.remove("responsive-grid")
    };
});

weeklyWeatherBtn.addEventListener("click", () => {
    if (!weeklyWeatherContent.classList.contains("responsive-grid")) {
        weeklyWeatherContent.classList.add("responsive-grid");

        dailyWeatherContent.classList.remove("responsive-grid")
    };
});

// Contact/Social buttons

const socialBtn = document.getElementById("social-button");
const contactBtn = document.getElementById("contact-button");

// Contact/Social Content

const socialContent = document.getElementById("social-info");
const contactContent = document.getElementById("contact-info");

// Contact/Social Event Listeners

socialBtn.addEventListener("click", () => {
    if (!socialContent.classList.contains("responsive-grid")){
        socialContent.classList.add("responsive-grid");

        contactContent.classList.remove("responsive-grid");
    }
});

contactBtn.addEventListener("click", () => {
    if (!contactContent.classList.contains("responsive-grid")){
        contactContent.classList.add("responsive-grid");

        socialContent.classList.remove("responsive-grid");
    }
});