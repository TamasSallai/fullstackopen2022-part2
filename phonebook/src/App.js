import axios from 'axios'
import { useEffect, useState } from 'react'
import Filter from './Filter'
import PersonForm from './PersonForm'
import PersonList from './PersonList'

const App = () => {
  const [persons, setPersons] = useState([])
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    axios
      .get('http://127.0.0.1:3001/persons')
      .then((response) => setPersons(response.data))
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()

    const personExists = persons.find(
      (person) => person.name.toLowerCase() === name.toLowerCase()
    )

    if (personExists) {
      alert(`${name} is already added to the phonebook.`)
      return
    }

    if (!name) {
      alert(`Name is not valid`)
      return
    }

    if (!number) {
      alert(`Number is not valid`)
      return
    }

    setPersons([...persons, { name: name, number: number }])
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={setFilter} />

      <h3>Add a new</h3>
      <PersonForm
        handleSubmit={handleSubmit}
        setName={setName}
        setNumber={setNumber}
      />

      <h3>Numbers</h3>
      <PersonList persons={persons} filter={filter} />
    </div>
  )
}

export default App
