import './style.css';
import getWeather from './weatherApi';

const p = document.querySelector('p');
const bTest = document.querySelector('button');
const cityInput = document.querySelector('#testinput');
const b2test = document.querySelector('#test-btn');

const loading = document.querySelector('.loading');

p.textContent = 'test';

bTest.addEventListener('click', async () => {
  loading.classList.add('show');
  console.log(cityInput.value);
  const apiData = await getWeather(cityInput.value);
  console.log(apiData);

  console.log('tessssst');
  loading.classList.remove('show');
});

b2test.addEventListener('click', () => {
  console.log('test test');
});
