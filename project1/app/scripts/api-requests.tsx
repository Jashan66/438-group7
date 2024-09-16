import { useEffect } from "react";
import { useState } from "react";


interface weatherData {
    temperature: number;
    condition: number;
    windSpeed: number;
    precip: number;
};



export const getData = async () => {
    const[weatherInfo, setWeatherInfo] = useState([]);
    let location = "Marina";

        const response = await fetch(`http://api.weatherstack.com/current?access_key=71d6ae72b6384e3eed4d1c6a5b659de6&query=${location}`);
        const data = await response.json();
        setWeatherInfo(data);

    let temperature = data.current.temperature;    

    let condition = data.current.weather_descriptions;

    let windSpeed = data.current.wind_speed;


    let precip = data.current.precip;
   
        

    let weatherJSON = `{"temperature": "${temperature}", "condition": "${condition}", "windSpeed": "${windSpeed}", "precip": "${precip}"}`
    let weather: weatherData = JSON.parse(weatherJSON);
    console.log(weatherJSON);

    return weatherJSON;


    
}
