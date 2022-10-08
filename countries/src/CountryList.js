import React from 'react'

const CountryList = ({ countries, setShow }) => {
  return (
    <div>
      {countries.length > 10 ? (
        <div>Hello World</div>
      ) : (
        countries.map((country) => (
          <div key={country.name.common}>
            {country.name.common}{' '}
            <button onClick={() => setShow(country)}>show</button>
          </div>
        ))
      )}
    </div>
  )
}

export default CountryList
