import React, { useState } from 'react';
import axios from 'axios';
import Header from '/Header';
import Weather from '/Weather';
import '/index.css';
import SearchBar from '/Searchbar';

const WEATHER_API_KEY = "ede048b59ff34e4ab0251227240104";

function App() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [searchCity, setSearchCity] = useState('');

  const getBackgroundImage = () => {
    if (!weather) return '';
    const condition = weather.current.condition.text.toLowerCase();
    const isDay = new Date().getHours() < 18 && new Date().getHours() >= 6; 
    switch (condition) {
      case 'clear':
      case 'sunny':
        return `url(${isDay ? './pngs/clear_day.png' : './pngs/clear_night.png'})`;
      case 'partly cloudy':
        return `url(${isDay ? './pngs/partly_cloudy_day.png' : './pngs/partly_cloudy_night.png'})`;
      case 'cloudy':
      case 'overcast':
        return `url(${isDay ? './pngs/cloudy_day.png' : './pngs/cloudy_night.png'})`;
      case 'rain':
      case 'moderate rain':
      case 'light rain':
      case 'mist':
        return `url(${isDay ? './pngs/rainy_day.png' : './pngs/rainy_night.png'})`;
      case 'storm':
        return `url(${isDay ? './pngs/storm_day.png' : './pngs/storm_night.png'})`;
      default:
        return '';
    }
  };

  const getIcon = () => {
    if (!weather) return '';
    const condition = weather.current.condition.text.toLowerCase();
    const isDay = new Date().getHours() < 18 && new Date().getHours() >= 6; 
    switch (condition) {
      case 'clear':
      case 'sunny':
        return isDay ? './pngs/clear_icon_day.png' : './pngs/clear_icon_night.png';
      case 'partly cloudy':
        return isDay ? './pngs/partly_cloudy_icon_day.png' : './pngs/partly_cloudy_icon_night.png';
      case 'cloudy':
      case 'overcast':
        return isDay ? './pngs/cloudy_icon_day.png' : './pngs/cloudy_icon_night.png';
      case 'rain':
      case 'light rain':
        case 'moderate rain':
      case 'mist':
        return isDay ? './pngs/rainy_icon_day.png' : './pngs/rainy_icon_night.png';
      case 'storm':
        return isDay ? './pngs/storm_icon_day.png' : './pngs/storm_icon_night.png';
      default:
        return '';
    }
  };

  const fetchWeatherData = async (cityName) => {
    try {
      const currentWeatherResponse = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=${cityName}`);
      const forecastResponse = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${WEATHER_API_KEY}&q=${cityName}`);

      const currentWeatherData = currentWeatherResponse.data;
      const forecastData = forecastResponse.data.forecast.forecastday[0];


      const chanceOfRain = forecastData.day.daily_chance_of_rain;
      const dailyMaxTemp = forecastData.day.maxtemp_c;
      const dailyMinTemp = forecastData.day.mintemp_c;

    
      currentWeatherData.chanceOfRain = chanceOfRain;
      currentWeatherData.dailyMaxTemp = dailyMaxTemp;
      currentWeatherData.dailyMinTemp = dailyMinTemp;

      setWeather(currentWeatherData);
      setError(null);
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setError('City not found');
    }
  };

  const handleSearch = () => {
    fetchWeatherData(searchCity);
  };

  const handleInputChange = (event) => {
    setSearchCity(event.target.value);
  };

  return (
    <div className="App">
      {!weather && <Header />}
      {!weather && <SearchBar searchCity={searchCity} handleInputChange={handleInputChange} handleSearch={handleSearch} />}
      {error && <p>{error}</p>}
      {weather && <Weather weatherData={weather} getBackgroundImage={getBackgroundImage} getIcon={getIcon} />}
    </div>
  );
}

export default App;
