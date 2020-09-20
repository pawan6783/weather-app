import React from 'react';
import '../assets/stylesheets/App.css';
import CurrentWeather from '../components/CurrentWeather';
import Header from '../components/Header';

function App() {

  const weatherapi = {
    key: "8066be851335adb57c11222b9bddd798",
    base: "http://api.openweathermap.org/data/2.5/"
  }

  return (
    <div className="App">
      <Header/>
      <div><CurrentWeather weatherapi={weatherapi}/></div>
    </div>
  );
}

export default App;
