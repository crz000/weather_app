import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import { CLOUD, CLOUDY, SUN, RAIN, SNOW, WINDY} from './../../../constants/weathers'
import './styles.css';

const WeatherData = () => (
    <div className="weatherDataContainer">
        <WeatherTemperature temperature = {25} weatherState = {WINDY}></WeatherTemperature>
        <WeatherExtraInfo humidity = {80} wind = {"10 m/s"}></WeatherExtraInfo>        
    </div>
);

export default WeatherData;