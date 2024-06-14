import React, { useState } from 'react';
import './App.css';
import WeatherCard from './WeatherCard';
import SearchBar from './SearchBar';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`App ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <header className="app-header">
        <h1>Weather App</h1>
        <button className="toggle-mode" onClick={() => setDarkMode(!darkMode)}>
          Toggle {darkMode ? 'Light' : 'Dark'} Mode
        </button>
      </header>
      <SearchBar setWeatherData={setWeatherData} />
      {weatherData && <WeatherCard data={weatherData} />}
    </div>
  );
}

export default App;
