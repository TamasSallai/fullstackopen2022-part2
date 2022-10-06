import { useState } from 'react'
import Filter from './Filter'
import PersonForm from './PersonForm'
import PersonList from './PersonList'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
  ])
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const [filter, setFilter] = useState('')

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
      <PersonForm
        handleSubmit={handleSubmit}
        setName={setName}
        setNumber={setNumber}
      />
      <PersonList persons={persons} filter={filter} />
    </div>
  )
}

export default App
