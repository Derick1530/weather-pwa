import React, { useState } from 'react';
import { fetchWeather } from './api/fetchWeather';
import { AiFillGithub, AiFillTwitterCircle, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import './App.css';

const App = () => {
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState('');

    const search = async (e) => {
        if (e.key === "Enter") {
            const data = await fetchWeather(query);
            setWeather(data);
            setQuery('');
        }
    }

    return (
        <div className="main-container">
            <input type="text" className="search" placeholder="Search ..." value={query} onChange={(e) => setQuery(e.target.value)} onKeyPress={search} />
            {weather.main && (
                <div className="city">
                    <h2 className="city-name">
                        <span>{weather.name}</span>
                        <sup>{weather.sys.country}</sup>
                    </h2>
                    <div className="city-temp">
                        {Math.round(weather.main.temp)}
                        <sup>&deg;C</sup>
                    </div>
                    <div className="info">
                        <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} alt={weather.weather[0].description} />
                        <p>{weather.weather[0].description}</p>
                    </div>

                </div>

            )}
            <div>
                <h4 className="h4">Developed by Derick  Z</h4>
            </div>
            <div className="icon-container">

                <a className="socialIcon" target="_blank" rel="noreferrer" href="https://github.com/Derick1530 " ><AiFillGithub size="3rem" /></a>
                <a className="socialIcon" target="_blank" rel="noreferrer" href="https://ug.linkedin.com/in/derick-zihalirwa-0b91691a6"><AiFillLinkedin size="3rem" /></a>
                <a className="socialIcon" target="_blank" rel="noreferrer" href="https://https://twitter.com/Derickzihalirw5" ><AiFillTwitterCircle size="3rem" /></a>
                <a className="socialIcon" target="_blank" rel="noreferrer" href="https://www.instagram.com/derickzihalirwa/"><AiFillInstagram size="3rem" /></a>
            </div>

        </div>
    );

}


export default App;