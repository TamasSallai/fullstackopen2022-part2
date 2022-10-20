import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Country = ({ country }) => {
  const [weatherData, setWeatherData] = useState()

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
      )
      .then((response) => {
        setWeatherData(response.data)
      })
  }, [])

  return (
    <div>
      <h1>{country.name.common}</h1>
      <div>capital: {country.capital}</div>
      <div>area: {country.area}</div>
      <h3>Languages</h3>
      <ul>
        {Object.values(country.languages).map((language) => (
          <li key={language}>{language}</li>
        ))}
      </ul>
      <img src={country.flags.png} alt="" />
      <div>
        <h2>Weather in {country.capital}</h2>
        {weatherData && (
          <div>
            <div>tempature: {weatherData.main.temp} &#x2103;</div>
            <img
              src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
              alt="weather icon"
            />
            <div>wind {weatherData.wind.speed} m/s</div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Country
