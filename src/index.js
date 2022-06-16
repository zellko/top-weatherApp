import './style.css';

import { getWeather } from './weatherApi';
import processData from './processData';
import { populateDom, errorModal, loadingIcon } from './dom';

const searchButton = document.querySelector('.search-button');
const form = document.querySelector('form');
const cityInput = document.querySelector('#city-input');
const modalClose = document.querySelector('.modal-close');

async function loadWeather() {
  loadingIcon('add');

  // Fetch weather data from OpenWeather API
  const apiData = await getWeather(cityInput.value);

  // Check if data are correct
  if (apiData === 'error') {
    // If no, show error on the page - E.g. Incorrect / not found city name
    loadingIcon('remove');
    const message = 'Something went wrong! Please check city name or retry later';
    errorModal.showModal(message);
  } else if (apiData === 'errorCatch') {
    // If no, show error on the page - Catch others errors (e.g. network)
    loadingIcon('remove');
    const message = 'Something went wrong! Please retry later';
    errorModal.showModal(message);
  } else {
    // If yes, process data's...
    const cleanDataCurrent = processData.currentWeather(apiData); // Get current weather data
    const cleanDataWeek = processData.nextWeekWeather(apiData); // Get current weather data

    // ...then, populate "current" card ...
    populateDom.currentCard(cleanDataCurrent);
    // ...and "next week" card
    populateDom.nextWeekCard(cleanDataWeek);
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

modalClose.addEventListener('click', () => {
  errorModal.hideModal();
});

/** **********************
PRELOAD
Avoid to trigger animation on page loading
*********************** */

const body = document.querySelector('body');

window.addEventListener('load', () => {
  body.classList.remove('preload');
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
