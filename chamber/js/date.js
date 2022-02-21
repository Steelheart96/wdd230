const datemod = document.querySelector('.datemod');
datemod.textContent = `Last Modified: ${document.lastModified}`;

const copyright = document.querySelector('#copyright');
copyright.textContent = new Date().getFullYear();

const displayDate = document.querySelector('#date');
const date = new Date()
const latestDate = Intl.DateTimeFormat('en-Us', { dateStyle: 'full'}).format(date)
displayDate.textContent = latestDate;

let myStorage = window.sessionStorage;

const lastActive = myStorage.getItem('last-active');
let activeP = document.querySelector('#last-active')
if (lastActive == !undefined) {
    activeP.textContent = ``
} else {
    activeP.textContent = `Last Active: ${lastActive}`
}

myStorage.setItem('last-active', latestDate)