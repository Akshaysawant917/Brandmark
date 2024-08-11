import React from 'react';
import WeatherWidget from './WeatherWidget';
import HeroSection from './HeroSection';
import './App.css';
import TestimonialsSection from './TestimonialsSection';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <WeatherWidget /> 
        <HeroSection />
        <TestimonialsSection/>
      </header>
    </div>
  );
}

export default App;
