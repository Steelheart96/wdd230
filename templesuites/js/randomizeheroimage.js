let imageDiv = document.querySelector(".hero-image");

var imgArray = new Array("images/SanDiegoTemple.jpg", "images/GilbertAZTemple.jpg", "images/WashingtonTemple.jpg");
var imgIndex = Math. floor(Math.random() * imgArray.length);

imageDiv.style.backgroundImage = `url('${imgArray[imgIndex]}')`