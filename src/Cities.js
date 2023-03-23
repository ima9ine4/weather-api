//Cities.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Cities() {
  const cityName = window.location.pathname.split('/')[1];
  //const cityName = location.state?.cityName || "Seoul"; //왜 이렇게 해줘야해 ..?
  const [temp, setTemp] = useState(0);
  const [desc, setDesc] = useState('');
  const [icon, setIcon] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiKey = 'ea53b6f001e4d38c68b87795ddeea08f';
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

    axios.get(url)
      .then(responseData => {
        console.log(responseData);
        const data = responseData.data;
        setTemp(data.main.temp);
        setDesc(data.weather[0].description);
        setIcon(data.weather[0].icon);
        setLoading(false);
      })
      .catch(error => console.log(error));
  }, []);

  const imgSrc = `http://openweathermap.com/img/w/${icon}.png`;

  return (
    <div className="App">
      <h1>{cityName} Weather</h1>
      {loading ?
        <p>Loading</p> :
        <div>
          <img src={imgSrc} alt="Weather icon" />
          <p>{Math.floor(temp - 272.15)}C</p>
          <p>{desc}</p>
        </div>
      }
    </div>
  );
}

export default Cities;
