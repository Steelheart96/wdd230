const datemod = document.querySelector('#datemod');
datemod.textContent = `Last Modified: ${document.lastModified}`;

const copyright = document.querySelector('#copyright');
copyright.textContent = new Date().getFullYear();