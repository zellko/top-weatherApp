import { addDays, eachDayOfInterval } from 'date-fns';

const processData = (() => {
  // Process data's and return an object with only the data...
  // ... that we want to show

  const currentWeather = (data, units) => {
    // Return weather data's for current weather

    // Set temperature unit symbol
    let unitsSymbol;
    (units === 'metric')
      ? unitsSymbol = '°C'
      : unitsSymbol = '°F';

    // If Icon is not valid, use placeholder
    let weatherIcon;
    (data[2] !== 'img_error')
      ? weatherIcon = data[2]
      : weatherIcon = '1347e712e01cabec5496.png';

    // Create object with only needed data's...
    const cleanData = {
      currentTemp: `${Math.round(data[0].current.temp)}${unitsSymbol}`,
      description: data[0].current.weather[0].description,
      humidity: `${data[0].current.humidity}%`,
      feelTemp: `${Math.round(data[0].current.feels_like)}${unitsSymbol}`,
      wind: `${Math.round(data[0].current.wind_speed / (1000 / 3600))} km/h`,
      city: data[1].name,
      country: data[1].state,
      icon: weatherIcon,
    };

    // ...and return it
    return cleanData;
  };
  const nextWeekWeather = (data, units) => {
    // Return weather data's for next 5 days

    // Set temperature unit symbol
    let unitsSymbol;
    (units === 'metric')
      ? unitsSymbol = '°C'
      : unitsSymbol = '°F';

    // Create array which will contain only needed data's
    let weekWeather = [];

    // Get today date
    const today = new Date();
    // Get week
    const todayPlus5 = addDays(today, 4);
    const week = eachDayOfInterval({
      start: today,
      end: todayPlus5,
    });

    // Fill up "weekWeather" array with next 5 days weather condition
    for (let index = 0; index < 5; index++) {
      const day = week[index];
      const dayName = day.toLocaleDateString(undefined, { weekday: 'short' });

      // If Icon is not valid, use placeholder
      let weatherIcon;
      (data[3][index] !== 'img_error')
        ? weatherIcon = data[3][index]
        : weatherIcon = '1347e712e01cabec5496.png';

      // Add only needed data's to our array
      const dayData = {
        dayName,
        img: weatherIcon,
        tempMin: `${Math.round(data[0].daily[index].temp.min)}${unitsSymbol}`,
        tempMax: `${Math.round(data[0].daily[index].temp.max)}${unitsSymbol}`,
      };

      weekWeather.push(dayData);
    }

    // Return week weather data's
    return weekWeather;
  };

  return { currentWeather, nextWeekWeather };
})();

export default processData;
