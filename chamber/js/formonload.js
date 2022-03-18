let formLoadTime = new Date();

let dateTimeInput = document.getElementById("date-and-time");

const formTime = `${formLoadTime.toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true })}`;

dateTimeInput.setAttribute('value', `${Intl.DateTimeFormat('en-Us', { dateStyle: 'full'}).format(date)} | ${formTime}`);