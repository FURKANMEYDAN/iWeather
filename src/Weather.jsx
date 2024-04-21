import React from 'react';
import App from './App';
import { Link } from 'react-router-dom';
import './weather.css'
function Weather({ weatherData, getBackgroundImage, getIcon }) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    return formattedDate;
  };
  return (
    <div className="weather">
      <div className="weather-info"
       style={{ 
        backgroundImage: getBackgroundImage(), 
        width:"400px",
        height:"400px",
        borderRadius : "8px", 
        }}>
            <div className="location--container">
                  <p className='local--time'> <h3 className='location'>{weatherData.location.name},{weatherData.location.country}</h3>{formatDate(weatherData.location.localtime)}</p>
              <p style={{fontSize:""}}>
                <h1 className='temperature--writing'>
                    {weatherData.current.temp_c}°C
                </h1>
              </p>
              <p>
                <p className='condition'>
                  {weatherData.current.condition.text}
                </p>
                <p className='maxmin'>
                {weatherData.dailyMaxTemp}°c/{weatherData.dailyMinTemp}°c
                </p>
              </p>
            </div>
        <img className="weather-icon" style={{
          float:"right",
          width:"100px",
          height:"100px",
          position:"absolute",
          right:"40%",
          bottom:"50%"}} src={getIcon()} alt="weather-icon" />
      </div>
      

      <div className="weather-detail">
        <h3>
          <img src="./pngs/humidity.png" alt="humidity" />
          Humidity: <h4>{weatherData.current.humidity}%</h4>
        </h3>
        
        <h3>
          <img src="./pngs/windspeed.png" alt="wind-speed" />
          Wind Speed: <h4>{weatherData.current.wind_kph} km/h</h4>
        </h3>
        <h3>
          <img src="./pngs/sunny.png" alt="uv-index" />
         UV Index:  <h4>  {weatherData.current.uv}</h4>
        </h3>
        <h3>
          <img src="./pngs/poprain.png" alt="rain" />
          Daily Chance of Rain: <h4>{weatherData.chanceOfRain}%</h4>
        </h3>
      </div>
      <a className='geributonu' href="/">geri</a>
    </div>



  );
}

export default Weather;
