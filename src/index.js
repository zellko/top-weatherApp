import './style.css';
import { getWeather } from './weatherApi';

const p = document.querySelector('p');
const bTest = document.querySelector('button');
const cityInput = document.querySelector('#testinput');

p.textContent = 'yxooooo';

bTest.addEventListener('click', () => {
  console.log(cityInput.value);
  getWeather(cityInput.value);
});
