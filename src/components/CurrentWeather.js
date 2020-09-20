import React, {useState} from 'react';
import axios from 'axios';

const CurrentWeather = () => {

    const weatherapi = {
        key: "8066be851335adb57c11222b9bddd798",
        base: "http://api.openweathermap.org/data/2.5/"
      }
    

    const [query, setQuery] = useState("London");
    const [weather, setWeather] = useState({});

    const dateBuilder = date => {

        let months = ["January", "February", "March", "April", "May", "June", 
        "July", "August", "September", "October", "November", "December"];

        let days = ["Sunday","Monday", "Tuesday", "Wednesday", 
        "Thursday", "Friday", "Saturday"];

        let d = date.getDate();
        let day = days[date.getDay()];
        let month = months[date.getMonth()];
        let year = date.getFullYear(); 

        return `${d} ${day} ${month} ${year}`;

    }

    const onClickHandler= () => {
        
        fetch(`${weatherapi.base}weather?q=${query}&units=metric&APPID=${weatherapi.key}`)
        .then(response => response.json())
        .then(result => {
            setWeather(result);
           console.log(result);
        })
        
       
    }

    return(
        <div>
            <div>
                <button type="text" onClick={onClickHandler}>Click</button>   
            </div>

            {(typeof weather.main != undefined)?(
                <div>
                    <div>{weather.name},{weather.sys.country}</div>
                    <div>{dateBuilder(new Date())}</div>
                </div>
            
            ):("")

            }
        </div>
    );
}

export default CurrentWeather;