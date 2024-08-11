import React, { useState, useEffect } from 'react';
import './WeatherWidget.css';
const apiKey = import.meta.env.VITE_API_KEY


const WeatherWidget = () => {
  const [city, setCity] = useState('Bangalore');
  const [weather, setWeather] = useState(null); 
  const [error, setError] = useState('');
  const API_KEY = apiKey; 

  const fetchWeather = async (city) => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      if (!response.ok) {
        throw new Error('City not found');
      }
      const data = await response.json();
      setWeather({
        temperature: data.main.temp,
        description: data.weather[0].description,
        city: data.name,
        country: data.sys.country,
      });
      setError('');
    } catch (err) {
      setError(err.message);
      setWeather(null);
    }
  };

  useEffect(() => {
    fetchWeather(city); 
    const id = setInterval(() => fetchWeather(city), 900000); 
    return () => clearInterval(id);
  }, [city]);

  const handleSearch = () => {
    fetchWeather(city);
  };

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <div className="weather-widget-bar">
      <div className="weather-info">
        <input
          type="text"
          value={city}
          onChange={handleInputChange}
          placeholder="Enter city"
          className="weather-input"
        />
        <button onClick={handleSearch} className="weather-button">Search</button>

        {error && <p className="error">{error}</p>}
        {weather && (
          <div className="weather-details">
            <span className="weather-city">{weather.city}, {weather.country}</span>
            <span className="weather-temperature">{weather.temperature}°C</span>
            <span className="weather-description">{weather.description}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeatherWidget;
