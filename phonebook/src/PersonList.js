import React from 'react'
import Person from './Person'

const PersonList = ({ persons, filter, handleDelete }) => {
  return (
    <div>
      {persons
        .filter((person) =>
          person.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
        )
        .map((person) => (
          <Person
            key={person.name}
            person={person}
            handleDelete={() => handleDelete(person.id)}
          />
        ))}
    </div>
  )
}

export default PersonList
