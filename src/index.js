import './style.css';
import getWeather from './weatherApi';
import processData from './processData';
import { populateDom, showErrorModal, loadingIcon } from './dom';

const bTest = document.querySelector('button');
const cityInput = document.querySelector('#testinput');
const b2test = document.querySelector('#test-btn');

bTest.addEventListener('click', async () => {
  loadingIcon('add');
  console.log(cityInput.value);

  // Fetch weather data from OpenWeather API
  const apiData = await getWeather(cityInput.value);
  console.log(apiData);

  // Check if data are correct
  if (apiData !== 'error') {
    // If yes, process data's...
    const cleanData = processData.currentWeather(apiData);
    console.log(cleanData);

    // ...then, populate "current" card ...
    populateDom.currentCard(cleanData[0]);
    // ...and "next week" card
  } else {
    // If no, show error on the page
    loadingIcon('remove');
    // TODO - Show error on the page e.g. bottom modal
  }

  loadingIcon('remove');
});

b2test.addEventListener('click', () => {
  console.log('test test');
});
