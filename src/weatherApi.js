const API_KEY = '3bf7a0b35954a29f1f35a6169ee2f0bf'; // Open weather API Key

function delay(ms) {
  // TEST: Add a delay to the request to test loading function
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function getConditionIcon(iconID) {
  // Fetch weather condition icon...
  try {
    const response = await fetch(
      `http://openweathermap.org/img/wn/${`${iconID}`}@4x.png`,
      { mode: 'cors' },
    );
    // Check response status, if not 200, there is an error
    if (response.status === 200) return response.url;
    return 'img_error';
  } catch (error) {
    console.error(`Error fetching icon: ${error}`);
    return 'img_error';
  }
}

async function getGeocoding(city) {
  // Fetch geographic coordinate (lat/lon) from the city name...
  try {
    const response = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${API_KEY}`,
      { mode: 'cors' },
    );

    // Check response status, if it's not 200, there is an error
    if (response.status !== 200) return 'error';

    const data = await response.json();

    return data[0];
  } catch (error) {
    console.error(`Error fetching coordinate: ${error}`);
    return 'errorCatch';
  }
}

async function getWeather(city) {
  // Fetch weather for the entered country

  // Get geo coordinate (lat/lon) from city name
  const coordinate = await getGeocoding(city);

  // Check if coordinate are valid
  if (coordinate === 'error' || coordinate === undefined) {
    return 'error';
  }

  if (coordinate === 'errorCatch') {
    return 'errorCatch';
  }

  // Get weather data's
  let data;

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinate.lat}&lon=${coordinate.lon}&units=metric&exclude=minutely,hourly&appid=${API_KEY}`,
      { mode: 'cors' },
    );

    // Check response status, if it's not 200, there is an error
    if (response.status !== 200) return 'error';
    data = await response.json();
  } catch (error) {
    console.error(`Error fetching weather: ${error}`);
    return 'errorCatch';
  }

  // Fetching current weather condition icon
  const currentIconID = data.current.weather[0].icon;
  const currentIconURL = await getConditionIcon(currentIconID);

  // Fetch week weather condition icon
  let weekIconURL = [];

  for (let index = 0; index < 5; index++) {
    const dailyIconID = data.daily[index].weather[0].icon;
    const dailyIconURL = await getConditionIcon(dailyIconID);
    weekIconURL.push(dailyIconURL);
  }

  /* TEST ZONE */
  await delay(2000);
  /* TEST ZONE */

  // Return row weather data and current weather condition icon
  return [data, coordinate, currentIconURL, weekIconURL];
}

export { getWeather, getConditionIcon };
