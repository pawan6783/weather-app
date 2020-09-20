import React, {useState} from 'react';

const CurrentWeather = props => {

    const [query, setQuery] = useState("");
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

    const search = event => {
        
        if(event.key === "Enter")
        {
            fetch(`${props.weatherapi.base}weather?q=${query}&units=metric&APPID=${props.weatherapi.key}`)
            .then(response => response.json())
            .then(result => {
                setWeather(result);
                console.log(result);
                setQuery("");
            })
    
        }
        
    }

    return(
        <div>
            <div>
                <input type="text" placeholder="Search"
                onChange={(e) => {setQuery(e.target.value)}}
                value={query}
                onKeyPress={search}
                ></input>
            </div>
            
           {(typeof weather.main != "undefined")?(
               <div>
                    <div>{weather.name},{weather.sys.country}</div>
                    <div>{dateBuilder(new Date())}</div>
                    <div>{Math.round(weather.main.temp)}*C</div>
               </div>
           ):("")}
        </div>
    );
}

export default CurrentWeather;