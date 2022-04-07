const jsonURL = 'https://steelheart96.github.io/wdd230/templesuites/json/temples.json';
const templeCards = document.getElementById("temples");

function CreateTempleCard(temple) {

        let card = document.createElement('div');
        card.classList.add("temple-card");

        let templeName = document.createElement('h2');
        templeName.textContent = temple.name;

        let templeImage = document.createElement('img');
        templeImage.src = temple.image;
        temple.alt = `${temple.name} Image`;

        card.append(templeName, templeImage);

        // Temple Session Div
        let templeSessions = document.createElement('div');
        templeSessions.classList.add('temple-sessions');

        let ordinanceTitle = document.createElement('h4');
        ordinanceTitle.textContent = `Ordinance Schedule`;

        let ordinanceSchedule = document.createElement('p');
        ordinanceSchedule.textContent = temple.ordinance_schedule;

        let sessionTitle = document.createElement('h4');
        sessionTitle.textContent = `Session Schedule`;

        let sessionSchedule = document.createElement('p');
        sessionSchedule.textContent = temple.ordinance_schedule;

        templeSessions.append(ordinanceTitle, ordinanceSchedule, sessionTitle, sessionSchedule);

        card.append(templeSessions);

        // Temple Dropdown Div
        let templeDropDown = document.createElement('div');
        templeDropDown.classList.add("temple-info-dropdown");

        let moreInfoText = document.createElement('h4');
        moreInfoText.textContent = `More Information`;

        let moreInfoHamIcon = document.createElement('img');
        moreInfoHamIcon.src = "https://steelheart96.github.io/wdd230/templesuites/images/HamIcon.png";
        moreInfoHamIcon.alt = "Dropdown Icon";

        templeDropDown.append(moreInfoText, moreInfoHamIcon);

        card.append(templeDropDown);

        // More Temple Info Div
        let templeInfo = document.createElement("div");
        templeInfo.classList.add("more-temple-info");

        // Temple Contact Div
        let templeContact = document.createElement("div");
        templeContact.classList.add('temple-contact');

        let templePhone = document.createElement('p');
        templePhone.innerHTML = `<strong>Phone Number:</strong> ${temple.phone}`;

        let templeEmail = document.createElement('p');
        templeEmail.innerHTML = `<strong>Phone Number:</strong> ${temple.email}`;

        let templeAddress = document.createElement('p');
        templeAddress.innerHTML = `<strong>Phone Number:</strong> ${temple.address}`;

        templeContact.append(templePhone, templeEmail, templeAddress);

        templeInfo.append(templeContact);

        // Temple Services Div
        let templeServices = document.createElement("div");
        templeServices.classList.add("temple-services");

        let templeServicesTitle = document.createElement('h4');
        templeServicesTitle.textContent = `Services`;
        templeServices.append(templeServicesTitle);

        temple.services.map(service => {
            let templeService = document.createElement('p');
            templeService.textContent = service;
            templeServices.append(templeService);
        });

        templeInfo.append(templeServices);

        // Temple Closure Info Div
        let templeClosures = document.createElement('div');
        templeClosures.classList.add('temple-info');

        let templeClosuresTitle = document.createElement('h4');
        templeClosuresTitle.textContent = `Closures`;
        templeClosures.append(templeServicesTitle);

        temple.temple_closures.map(closed => {
            let templeClosure = document.createElement('p');
            templeClosure.textContent = closed;
            templeClosures.append(templeClosure);
        });

        templeInfo.append(templeClosures);

        // Temple History Div
        let templeHistory = document.createElement('div');
        templeHistory.classList.add("temple-history");

        let templeHistoryTitle = document.createElement('h4');
        templeHistoryTitle.textContent = `History`;
        templeHistory.append(templeHistoryTitle);

        temple.history.map(history => {
            let templeHistoryItem = document.createElement('p');
            templeHistoryItem.textContent = closed;
            templeHistory.append(templeHistoryItem);
        });

        templeInfo.append(templeHistory);

        card.append(templeInfo);

        templeCards.append(card);

        moreInfoHamIcon.addEventListener('click', () => {
            templeInfo.classList.toggle('responsive-block');
        });
}

fetch(jsonURL)
  .then( response => response.json() )
  .then(temples => {
      temples.temples.map( (temple) => {CreateTempleCard(temple);
        });
    });