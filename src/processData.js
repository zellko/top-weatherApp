import { addDays, eachDayOfInterval } from 'date-fns';
import { getConditionIcon } from './weatherApi';

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
      currentTemp: `${Math.round(data[0].current.temp)}°C`,
      description: data[0].current.weather[0].description,
      humidity: `${data[0].current.humidity}%`,
      feelTemp: `${Math.round(data[0].current.feels_like)}°C`,
      wind: `${Math.round(data[0].current.wind_speed / (1000 / 3600))} km/h`,
      city: data[1].name,
      country: data[1].state,
      icon: weatherIcon,
    };

    return [cleanData];
  };
  const nextWeekWeather = async (data) => {
    // Return weather data's for next 5 days
    console.log('nextWeekWeather');
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

      const iconID = data[0].daily[index].weather[0].icon; // Get condition icon
      const iconImg = await getConditionIcon(iconID); // Fetch URL to see if available

      const dayData = {
        dayName,
        img: iconImg,
        tempMin: Math.round(data[0].daily[index].temp.min),
        tempMax: Math.round(data[0].daily[index].temp.max),
      };

      weekWeather.push(dayData);
    }

    console.log(weekWeather);
    return weekWeather;
  };

  return { currentWeather, nextWeekWeather };
})();

export default processData;
