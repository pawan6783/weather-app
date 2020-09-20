import React from 'react';
import '../assets/stylesheets/App.css';
import CurrentWeather from '../components/CurrentWeather';
import Header from '../components/Header';

function App() {

  

  return (
    <div className="App">
      <Header/>
      <div><CurrentWeather/></div>
    </div>
  );
}

export default App;
