const datemod = document.querySelector('.datemod');
datemod.textContent = `Last Modified: ${document.lastModified}`;

const copyright = document.querySelector('#copyright');
copyright.textContent = new Date().getFullYear();

const displayDate = document.querySelector('.current-date');
const date = new Date()
displayDate.textContent = Intl.DateTimeFormat('en-Us', { dateStyle: 'full'}).format(date);

