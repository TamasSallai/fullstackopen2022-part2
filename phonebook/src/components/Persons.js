const Persons = ({ persons }) => (
  <>
    {persons.map((person) => (
      <Person key={person.name} name={person.name} number={person.number} />
    ))}
  </>
)

const Person = ({ name, number }) => (
  <div>
    {name} {number}
  </div>
)

export default Persons
