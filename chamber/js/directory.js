const cards = document.querySelector('.directory')
const dataUrl = 'https://steelheart96.github.io/wdd230/chamber/json/data.json'

fetch(dataUrl)
    .then( response => response.json() )
    .then(companyies => {
        CompanyCards(companyies);
    });

function CompanyCards(companyies){
    companyies['companyies'].forEach(company => {
        divEl = document.createElement('div');
        divEl.classList.add('card-dir');

        imgEl = document.createElement('img');
        imgEl.src = `${company[image]}`
        imgEl.alt = `Image of ${company['name']}'s Logo`

        pAddress = document.createElement('p');
        pAddress.textContent = `${company['address']}`;
        
        pPhone = document.createElement('p');
        pPhone.textContent = `${company['phone']}`;

        aLink = document.createElement('a');
        aLink.target = `_blank`;
        aLink.href = `${company['link']}`;
        aLink.textContent = `${company['name']}`;

        divEl.append(imgEl, pAddress, pPhone, aLink);

        cards.append(divEl)
    });
}