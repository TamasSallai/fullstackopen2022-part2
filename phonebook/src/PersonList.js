import React from 'react'

const PersonList = ({ persons, filter }) => {
  return (
    <div>
      <h3>Numbers</h3>
      {persons
        .filter((person) =>
          person.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
        )
        .map((person) => (
          <div key={person.name}>
            {person.name} {person.number}
          </div>
        ))}
    </div>
  )
}

export default PersonList
