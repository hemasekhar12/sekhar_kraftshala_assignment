import React, { useState } from 'react';
import axios from 'axios';
import './SearchBar.css';

const API_KEY = '5f24ac5d6c37ec22a6f83076dc0ac2f0'; //API_KEY from openweather

function SearchBar({ setWeatherData }) {
  const [location, setLocation] = useState('');

  const fetchWeatherData = async () => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`);
      setWeatherData(response.data);
    } catch (error) {
      console.error("Error fetching weather data:", error.response ? error.response.data : error.message);
      alert("Invalid location or connection issue");
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Enter location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button onClick={fetchWeatherData}>Search</button>
    </div>
  );
}

export default SearchBar;
