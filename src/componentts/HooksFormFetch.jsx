import React, { useState, useEffect } from 'react'

const HooksFormFetch = () => {

    //item with state , call to setState
    const [weather, setWeather] = useState([]);


    //Function handling fetch 
    const getWeather = async () => {
        let res = await fetch('https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=8c219e6035437fd7bcb8f4a61bab7a29');
        let weather = await res.json();
        setWeather(weather);
        console.log(weather);
    }

    //Tell when to render as setState does
    useEffect(() => {
        getWeather();
    },//When this changes below it makes rerender
    []);


    return (

        <div>
            <h1>Hello</h1>
            {weather.id}
            {weather.name}
        </div>

    );
}

export default HooksFormFetch;

//api key 8c219e6035437fd7bcb8f4a61bab7a29 , a3470d0cbd396a7dbe77d22352096f05
//https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=YOUR_API_KEY