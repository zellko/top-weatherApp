import './style.css';

import getWeather from './weatherApi';
import processData from './processData';
import { populateDom, showErrorModal, loadingIcon } from './dom';

const searchButton = document.querySelector('.search-button');
const form = document.querySelector('form');
const cityInput = document.querySelector('#city-input');

async function loadWeather() {
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
}

/** **********************
EVENT LISTENER
*********************** */

form.addEventListener('keydown', (e) => {
  // When user press "Enter"...
  const key = e.code;
  if (key === 'Enter') {
    loadWeather(); // ...load the weather
    e.preventDefault(); // ...prevent form submit
  }
});

searchButton.addEventListener('click', (e) => {
  // When click button "search"...
  loadWeather(); // ...load the weather
  e.preventDefault(); // ...prevent form submit
});

/** **********************
AUTOCOMPLETE
*********************** */

// import { GeocoderAutocomplete } from '@geoapify/geocoder-autocomplete';
// import autocomplete from './geoapify';

// let timer; // Timer identifier
// const waitTime = 500; // Wait time in milliseconds ;

// cityInput.addEventListener('keyup', (e) => {
//   const entry = e.target.value;

//   if (entry.length <= 1) return;

//   // Clear timer
//   clearTimeout(timer);

//   // Wait for X ms and then process the request
//   timer = setTimeout(async () => {
//     await autocomplete(entry);
//   }, waitTime);
// });

// const autocomplete = new GeocoderAutocomplete(
//   document.getElementById('autocomplete'),
//   'API_KEY',
//   { type: 'city', skipIcons: true, skipDetails: true },
// );

// autocomplete.on('select', (location) => {
//   // check selected location here
//   console.log(location);
// });

// autocomplete.on('suggestions', (suggestions) => {
//   // process suggestions here
// });
