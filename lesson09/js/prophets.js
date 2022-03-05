const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
  .then( response => response.json() )
  .then(prophetsArray => {
      MakeCards(prophetsArray);
  });

function MakeCards(prophetsList){
    prophetsList['prophets'].forEach(prophet => {
        divEl = document.createElement('div');
        divEl.classList.add('card');

        h2El = document.createElement('h2');
        h2El.textContent = `${prophet['name']} ${prophet['lastname']}`;

        pBirthDate = document.createElement('p');
        pBirthDate.textContent = `Date of Birth: ${prophet['birthdate']}`;

        pBirthPlace = document.createElement('p');
        pBirthPlace.textContent = `Place of Birth: ${prophet['birthplace']}`;

        imgEl = document.createElement('img');
        imgEl.src = `${prophet['imageurl']}`;
        imgEl.alt = `Picture of ${prophet['name']} ${prophet['lastname']} - ${Suffix(prophet['order'])}`;

        divEl.append(h2El, pBirthDate, pBirthPlace, imgEl);
        cards.append(divEl);
    });
}  

function Suffix(order) {
    let suffix = 'th'
    if (order === 1){
        suffix = 'st'
    } else if (order === 2){
        suffix = 'nd'
    } else if (order === 3){
        suffix = 'rd'
    }
    return `${order}${suffix} Latter Day President`
}