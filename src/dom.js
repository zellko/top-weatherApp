const currentCity = document.querySelector('.current-city');
const currentCountry = document.querySelector('.current-country');
const currentIcon = document.querySelector('.current-icon');
const currentTemp = document.querySelector('.current-temp .temp');
const currentDesc = document.querySelector('.current-desc');
const currentFeel = document.querySelector('.current-feel .temp');
const currentHumi = document.querySelector('.current-humi span');
const currentWind = document.querySelector('.current-wind span');

const weekDay = document.querySelectorAll('.week-card-day h4');
const weekIcon = document.querySelectorAll('.week-card-day img');
const weekMaxTemp = document.querySelectorAll('.week-card-day h4 + img + p span');
const weekMinTemp = document.querySelectorAll('.week-card-day h4 + img + p + p span');
const allTempField = document.querySelectorAll('.temp');
const loading = document.querySelector('.loading');
const loadingScreen = document.querySelector('.loading-screen');
const modal = document.querySelector('.modal');
const modalText = document.querySelector('.modal p');
const optionFlip = document.querySelector('.flip');

const populateDom = (() => {
  const currentCard = (data) => {
    currentCity.textContent = data.city;
    currentCountry.textContent = `${data.country}`;
    currentIcon.src = data.icon;
    currentIcon.alt = 'Weather condition icon';
    currentTemp.textContent = data.currentTemp;
    currentDesc.textContent = data.description;
    currentFeel.textContent = data.feelTemp;
    currentHumi.textContent = data.humidity;
    currentWind.textContent = data.wind;
  };
  const nextWeekCard = (data) => {
    for (let index = 0; index < 5; index++) {
      weekDay[index].textContent = data[index].dayName;
      weekIcon[index].src = data[index].img;
      weekIcon[index].alt = `${data[index].dayName} weather condition icon`;
      weekMaxTemp[index].textContent = data[index].tempMax;
      weekMinTemp[index].textContent = data[index].tempMin;
    }
  };

  return { currentCard, nextWeekCard };
})();

const errorModal = (() => {
  // Module to hid / show "Error" modal
  const hideModal = () => {
    modal.classList.remove('show');
  };

  const showModal = (message) => {
    modalText.textContent = message;
    modal.classList.add('show');
    setTimeout(hideModal, 5000);
  };

  return { showModal, hideModal };
})();

const convertTemp = (() => {
  // Module to convert DOM temperature °C / °F
  const toCelsius = () => {
    for (let index = 0; index < allTempField.length; index++) {
      const value = allTempField[index].textContent; // Get the value of the span

      // If value is null, return
      if (value === '') return;

      let valueSplit = value.split('°'); // Split value [tempValue , Symbol]

      // Convert tempValue to °C
      const tempConverted = Math.round((Number(valueSplit[0]) - 32) / 1.8);
      valueSplit[0] = tempConverted;
      valueSplit[1] = 'C'; // Change symbol

      // Update DOM value with converted value
      allTempField[index].textContent = valueSplit.join('°');
    }
  };

  const toFahrenheit = () => {
    for (let index = 0; index < allTempField.length; index++) {
      const value = allTempField[index].textContent; // Get the value of the span

      // If value is null, return
      if (value === '') return;

      let valueSplit = value.split('°'); // Split value [tempValue , Symbol]

      // Convert tempValue to °F
      const tempConverted = Math.round(Number(valueSplit[0]) * 1.80 + 32);
      valueSplit[0] = tempConverted;
      valueSplit[1] = 'F'; // Change symbol

      // Update DOM value with converted value
      allTempField[index].textContent = valueSplit.join('°');
    }
  };

  return { toCelsius, toFahrenheit };
})();

function loadingIcon(display) {
  // Function to display "loading" screen while fetching data's
  if (display === 'add') {
    loading.classList.add('show');
    loadingScreen.classList.add('show');
  } else {
    loading.classList.remove('show');
    loadingScreen.classList.remove('show');
  }
}

function animationFlip(units) {
  // Flip background of settings "Metric / Fahrenheit"
  if (units === 'imperial') {
    optionFlip.classList.add('flip-active');
  } else {
    optionFlip.classList.remove('flip-active');
  }
}

export {
  populateDom, errorModal, loadingIcon, convertTemp, animationFlip,
};
