import './style.css';
import getWeather from './weatherApi';
import processData from './processData';

const p = document.querySelector('p');
const bTest = document.querySelector('button');
const cityInput = document.querySelector('#testinput');
const b2test = document.querySelector('#test-btn');

const loading = document.querySelector('.loading');

p.textContent = 'test';

bTest.addEventListener('click', async () => {
  loading.classList.add('show');
  console.log(cityInput.value);

  // Fetch weather data from OpenWeather API
  const apiData = await getWeather(cityInput.value);
  console.log(apiData);

  // Check if data are correct
  if (apiData !== 'error') {
    // If yes, process datas
    processData.currentWeather(apiData);
  } else {
    // If no, show error on the page
    loading.classList.remove('show');
    return; // TODO - Show error on the page e.g. bottom modal
  }

  loading.classList.remove('show');
});

b2test.addEventListener('click', () => {
  console.log('test test');
});
