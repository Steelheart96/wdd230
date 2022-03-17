const cards = document.querySelector('.cards')
const dataUrl = 'https://steelheart96.github.io/wdd230/chamber/json/data.json'

const listBtn = document.getElementById('list-btn')
const gridBtn = document.getElementById('grid-btn')

fetch(dataUrl)
  .then( response => response.json() )
  .then(companies => { CompanyCards(companies) });

listBtn.addEventListener('click', ListView)
gridBtn.addEventListener('click', GridView)

function CompanyCards(companies){
    companies['companies'].forEach(company => {
        divEl = document.createElement('div')
        divEl.classList.add('card-company')
        divEl.classList.add('card-grid')

        imgEl = document.createElement('img');
        imgEl.src = `${company['image']}`
        imgEl.alt = `Image of ${company['name']}'s Logo`

        pAddress = document.createElement('p');
        pAddress.textContent = `${company['address']}`;
        
        pPhone = document.createElement('p');
        pPhone.textContent = `${company['phone']}`;

        aLink = document.createElement('a');
        aLink.target = `_blank`;
        aLink.href = `${company['link']}`;
        aLink.textContent = `${company['name']}`;
        aLink.classList.add('card-link');

        divEl.append(imgEl, pAddress, pPhone, aLink);

        cards.appendChild(divEl);
    });
}

function GridView() {
    cards.classList.remove('cards-list')
    cards.classList.add('cards-grid')

    let cardsArray = document.querySelectorAll('.card-company')
    cardsArray.forEach( card => {
        card.classList.remove('card-list')
        card.classList.add('card-grid')
    })
}

function ListView() {
    cards.classList.remove('cards-grid')
    cards.classList.add('cards-list')

    let cardsArray = cards.querySelectorAll('.card-company')
    cardsArray.forEach( card => {
        card.classList.remove('card-grid')
        card.classList.add('card-list')
    })
}