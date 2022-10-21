import personService from './services/person'
import { useEffect, useState } from 'react'
import Filter from './Filter'
import PersonForm from './PersonForm'
import PersonList from './PersonList'
import Notification from './Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [notification, setNotification] = useState()

  useEffect(() => {
    personService.getAll().then((data) => setPersons(data))
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name) {
      alert(`Name is not valid`)
      return
    }

    if (!number) {
      alert(`Number is not valid`)
      return
    }

    const personExists = persons.find(
      (person) => person.name.toLowerCase() === name.toLowerCase()
    )
    if (personExists) {
      if (
        window.confirm(
          `${personExists.name} is already added to the phonebook, replace the old number with a new one?`
        )
      ) {
        const modifiedPerson = { ...personExists, number: number }
        personService
          .modify(personExists.id, modifiedPerson)
          .then((returnedPerson) => {
            setPersons(
              persons.map((person) =>
                person.id !== returnedPerson.id ? person : modifiedPerson
              )
            )
            setNotification({
              type: 'success',
              message: `${modifiedPerson.name}'s number has been modified.`,
            })
            setTimeout(() => {
              setNotification(null)
            }, 5000)
          })
          .catch((err) => {
            setNotification({
              type: 'error',
              message: `Information about ${modifiedPerson.name} has been already removed.`,
            })
            setTimeout(() => {
              setNotification(null)
            }, 5000)
          })
      }

      return
    }

    const newPerson = { name: name, number: number }
    personService
      .create(newPerson)
      .then((person) => {
        setPersons(persons.concat(person))
        setNotification({ type: 'success', message: `Added ${name}` })
        setTimeout(() => {
          setNotification(null)
        }, 5000)
      })
      .catch((error) => {
        setNotification({ type: 'error', message: error.response.data.error })
        setTimeout(() => {
          setNotification(null)
        }, 5000)
      })
  }

  const handleDelete = (id) => {
    const currentPerson = persons.find((person) => person.id === id)
    if (window.confirm(`Delete ${currentPerson.name} ?`)) {
      personService
        .remove(id)
        .then(setPersons(persons.filter((person) => person.id !== id)))
        .catch((err) => {
          setNotification({
            type: 'error',
            message: `Information about ${currentPerson.name} has been already removed.`,
          })
          setTimeout(() => {
            setNotification(null)
          }, 5000)
        })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <Notification notification={notification} />

      <Filter filter={setFilter} />

      <h3>Add a new</h3>
      <PersonForm
        handleSubmit={handleSubmit}
        setName={setName}
        setNumber={setNumber}
      />

      <h3>Numbers</h3>
      <PersonList
        persons={persons}
        filter={filter}
        handleDelete={handleDelete}
      />
    </div>
  )
}

export default App
