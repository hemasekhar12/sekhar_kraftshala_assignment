import React from 'react';
import moment from 'moment';
import './WeatherCard.css';

function WeatherCard({ data }) {
  return (
    <div className="weather-card">
      <h2>{data.name}</h2>
      <p>{moment().format('LLLL')}</p>
      <p>Temperature: {(data.main.temp - 273.15).toFixed(2)}°C</p>
      <p>Humidity: {data.main.humidity}%</p>
      <p>Wind Speed: {data.wind.speed} m/s</p>
      <p>Description: {data.weather[0].description}</p>
    </div>
  );
}

export default WeatherCard;
