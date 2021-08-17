import './style.css'

document.querySelector('.app').innerHTML = `
  <h1>B. Academy</h1>
  <p>Boas vindas à semana de pré-work para o Bootcamp em React.js 😁</p>
`
const app = document.querySelector('.app');
const link = document.querySelector('[data-js=link]');

link.addEventListener('click', (event) => {
  event.preventDefault();
  if (app.style.display !== 'none') {
    app.style.display = 'none';
  } else {
    app.style.display = 'block';
  }
}, false);
