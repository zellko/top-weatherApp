const currentCity = document.querySelector('.current-city');
const currentCountry = document.querySelector('.current-country');
const currentIcon = document.querySelector('.current-icon');
const currentTemp = document.querySelector('.current-temp');
const currentDesc = document.querySelector('.current-desc');
const currentFeel = document.querySelector('.current-feel');
const currentHumi = document.querySelector('.current-humi');
const currentWind = document.querySelector('.current-wind');

const weekDay = document.querySelectorAll('.week-card-day h4');
const weekIcon = document.querySelectorAll('.week-card-day img');
const weekMaxTemp = document.querySelectorAll('.week-card-day h4 + img + p ');
const weekMinTemp = document.querySelectorAll('.week-card-day h4 + img + p + p');

const loading = document.querySelector('.loading');

const populateDom = (() => {
  const currentCard = (data) => {
    currentCity.textContent = data.city;
    currentCountry.textContent = `${data.country}`;
    currentIcon.src = data.icon;
    currentIcon.alt = 'Weather condition icon';
    currentTemp.textContent = data.currentTemp;
    currentDesc.textContent = data.description;
    currentFeel.textContent = `Feel: ${data.feelTemp}`;
    currentHumi.textContent = `Humidity: ${data.humidity}`;
    currentWind.textContent = `Wind: ${data.wind}`;
  };
  const nextWeekCard = (data) => {
    for (let index = 0; index < 5; index++) {
      weekDay[index].textContent = data[index].dayName;
      weekIcon[index].src = data[index].img;
      weekIcon[index].alt = `${data[index].dayName} weather condition icon`;
      weekMaxTemp[index].textContent = `${data[index].tempMax}°C`;
      weekMinTemp[index].textContent = `${data[index].tempMin}°C`;
    }
  };

  return { currentCard, nextWeekCard };
})();

function showErrorModal() {}

function loadingIcon(display) {
  (display === 'add')
    ? loading.classList.add('show')
    : loading.classList.remove('show');
}

export { populateDom, showErrorModal, loadingIcon };
