const dataUrl = 'https://steelheart96.github.io/wdd230/chamber/json/data.json';


fetch(dataUrl)
  .then( response => response.json())
  .then (companies => createSpotlights(companies));

function createSpotlights(companies){
    const cards = document.querySelector('.spotlights');
    let filteredList = companies["companies"].filter(company => sortMembers(company));
    
    randomItemList = randonListItems(filteredList, 2);

    for (let key in randomItemList) {
        newDiv = makeVisibleSpotlight(key, randomItemList);
        cards.append(newDiv);
    }

    newDiv = makeResponsiveSpotlight(randonListItems(filteredList, 1)[0]);
    cards.append(newDiv);
}

function sortMembers(company) {
    return company.membership == 'silver' || company.membership == 'gold';
}

function randonListItems(list, itemAmount) {
    let returnList = []
    for (i = 0; i < itemAmount; i++){
        let index = Math.floor(Math.random() * list.length)
        returnList.push(list[index]);
        list.splice(index, 1);
    }
    return returnList
}

function makeVisibleSpotlight(key, list){
    newDiv = document.createElement('div');
    newDiv.classList.add('spotlight');

    newH2 = document.createElement('h2');
    newH2.textContent = list[key].name;

    newImg = document.createElement('img');
    newImg.src = list[key].image;
    newImg.alt = `${list[key].name} Logo`

    newP1 = document.createElement('p');
    newP1.textContent = list[key].description;

    newHr = document.createElement('hr');

    newP2 = document.createElement('p');
    newP2.textContent = list[key].email;

    newP3 = document.createElement('p');
    newP3.textContent = list[key].phone;

    newDiv.append(newH2, newImg, newP1, newHr, newP2, newP3);

    return newDiv;
}

function makeResponsiveSpotlight(list) {
    newDiv = document.createElement('div');
    newDiv.classList.add('responsive-spotlight');

    newH2 = document.createElement('h2');
    newH2.textContent = list.name;

    newImg = document.createElement('img');
    newImg.src = list.image;
    newImg.alt = `${list.name} Logo`

    newP1 = document.createElement('p');
    newP1.textContent = list.description;

    newHr = document.createElement('hr');

    newP2 = document.createElement('p');
    newP2.textContent = list.email;

    newP3 = document.createElement('p');
    newP3.textContent = list.phone;

    newDiv.append(newH2, newImg, newP1, newHr, newP2, newP3);

    return newDiv;
}