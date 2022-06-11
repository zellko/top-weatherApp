const processData = (() => {
  // Process data's and return an object with only the data...
  // ... that we want to show

  const currentWeather = (data) => {
    // Return weather data's for current weather

    // If Icon is not valid, use placeholder
    let weatherIcon;
    (data[2] !== 'img_error')
      ? weatherIcon = data[2]
      : weatherIcon = '1347e712e01cabec5496.png';

    const cleanData = {
      currentTemp: `${Math.round(data[0].current.temp / 10)}°C`,
      description: data[0].current.weather[0].description,
      humidity: `${data[0].current.humidity}%`,
      feelTemp: `${Math.round(data[0].current.feels_like / 10)}°C`,
      wind: `${Math.round(data[0].current.wind_speed / (1000 / 3600))} km/h`,
      city: data[1].name,
      country: data[1].country,
      icon: weatherIcon,
    };

    return [cleanData];
  };
  const nextWeekWeather = (data) => {
    // Return weather data's for next 5 days
    console.log('nextWeekWeather');

    return [];
  };

  return { currentWeather, nextWeekWeather };
})();

export default processData;
