import axios from 'axios'
import { useEffect, useState } from 'react'

import Country from './Country'
import CountryList from './CountryList'

const App = () => {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')
  const [filteredCountries, setFilteredCountries] = useState([])

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all').then((response) => {
      setCountries(response.data)
    })
  }, [])

  useEffect(() => {
    setFilteredCountries(
      countries.filter((country) =>
        country.name.common.toLowerCase().includes(filter.toLowerCase())
      )
    )
  }, [filter, countries])

  const setShow = (country) => {
    setFilteredCountries([country])
  }

  return (
    <div className="App">
      <input type="text" onChange={(e) => setFilter(e.target.value)} />

      {filteredCountries.length === 1 ? (
        <Country country={filteredCountries[0]} />
      ) : (
        <CountryList countries={filteredCountries} setShow={setShow} />
      )}
    </div>
  )
}

export default App
