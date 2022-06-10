const API_KEY = '3bf7a0b35954a29f1f35a6169ee2f0bf';
const test = document.querySelector('#test');
const loading = document.querySelector('.loading');

function delay(ms) {
  // TEST: Add a delay to the resquest to test loading function
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function getGeocoding(city) {
  // Fetch geographic coordinate from the city name...
  // ... enter by user
  try {
    const response = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${API_KEY}`,
      { mode: 'cors' },
    );
    const data = await response.json();
    return data[0];
  } catch (error) {
    console.error(`Error fetching coordinate: ${error}`);
    return 'error';
  }
}

async function getWeather(city) {
  // Fetch weather for the entered country

  // Add "loading" icon on the screen
  loading.classList.add('show');

  // Get geo coordinate (lat/lon) from city name
  const coordinate = await getGeocoding(city);

  // Check if coordinate are valid
  if (coordinate === 'error' || coordinate === undefined) {
    loading.classList.remove('show');
    return 'error';
  }

  // await delay(2000);
  // console.log('Waited 2s');

  // Get weather datas
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinate.lat}&lon=${coordinate.lon}&exclude=minutely,hourly&appid=${API_KEY}`,
      { mode: 'cors' },
    );

    const data = await response.json();

    console.log(data);
    // Check if weather data are valid
    if (data.cod) {
      return 'error';
    }
  } catch (error) {
    console.log(`Error fetching weather: ${error}`);
    loading.classList.remove('show');
    return 'error';
  }

  // Fetching image
  const icon = await fetch('https://openweathermap.org/img/wn/10d@4x.png', {
    mode: 'cors',
  });
  // const response2 = await icon.json();
  // console.log(response2);

  const { url } = icon;
  test.src = url;
  loading.classList.remove('show');
}

export { getWeather };
