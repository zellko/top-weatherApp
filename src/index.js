import './style.css';
import getWeather from './weatherApi';
import processData from './processData';
import {
  populateDom, errorModal, loadingIcon, convertTemp, animationFlip,
} from './dom';

const searchButton = document.querySelector('.search-button');
const form = document.querySelector('form');
const cityInput = document.querySelector('#city-input');
const modalClose = document.querySelector('.modal-close');
const optionScale = document.querySelectorAll('.option');

let tempScale = 'metric';

async function loadWeather() {
  loadingIcon('add');

  // Fetch weather data from OpenWeather API
  const apiData = await getWeather(cityInput.value, tempScale);

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
    // ...Get current weather data
    const cleanDataCurrent = processData.currentWeather(apiData, tempScale);
    // ...Get week weather data
    const cleanDataWeek = processData.nextWeekWeather(apiData, tempScale);

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
  // Close the modal when user click on "X" button
  errorModal.hideModal();
});

/** **********************
OPTIONS
*********************** */

optionScale.forEach((option) => option.addEventListener('click', (e) => {
  // Change temperature scale to °C or °F depending on user selection
  const unitsSelection = e.target.getAttribute('units');

  // Ignore if user click on scale which is already selected
  if (unitsSelection === tempScale) return;

  if (unitsSelection === 'imperial') {
    convertTemp.toFahrenheit(); // Convert temperature value on the DOM
    tempScale = 'imperial'; // Change selected temperature scale
    animationFlip(tempScale); // Flip setting display
  } else {
    convertTemp.toCelsius();
    tempScale = 'metric';
    animationFlip(tempScale);
  }
}));

/** **********************
PRELOAD
Avoid to trigger animation on page loading
*********************** */

const body = document.querySelector('body');

window.addEventListener('load', () => {
  body.classList.remove('preload');
});
