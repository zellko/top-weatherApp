const currentCity = document.querySelector('.current-city');
const currentCountry = document.querySelector('.current-country');
const currentIcon = document.querySelector('.current-icon');
const currentTemp = document.querySelector('.current-temp');
const currentDesc = document.querySelector('.current-desc');
const currentFeel = document.querySelector('.current-feel');
const currentHumi = document.querySelector('.current-humi');
const currentWind = document.querySelector('.current-wind');

const loading = document.querySelector('.loading');

const populateDom = (() => {
  const currentCard = (data) => {
    currentCity.textContent = data.city;
    currentCountry.textContent = data.country;
    currentIcon.src = data.icon;
    currentIcon.alt = 'Weather condition icon';
    currentTemp.textContent = data.currentTemp;
    currentDesc.textContent = data.description;
    currentFeel.textContent = data.feelTemp;
    currentHumi.textContent = data.humidity;
    currentWind.textContent = data.wind;
  };
  const nextWeekCard = (data) => {};

  return { currentCard, nextWeekCard };
})();

function showErrorModal() {}
function loadingIcon(display) {
  (display === 'add')
    ? loading.classList.add('show')
    : loading.classList.remove('show');
}

export { populateDom, showErrorModal, loadingIcon };
