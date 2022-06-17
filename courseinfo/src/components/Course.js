const Header = ({ name }) => <h2>{name}</h2>

const Total = ({ parts }) => {
  let total = parts.reduce(
    (previousValue, currentValue) => previousValue + currentValue.exercises,
    0
  )

  return <strong>Number of exercises {total}</strong>
}

const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
)

const Content = ({ parts }) => (
  <div>
    {parts.map((part) => (
      <Part key={part.id} part={part} />
    ))}
  </div>
)

const Course = ({ course }) => (
  <div>
    <Header name={course.name} />
    <Content parts={course.parts} />
    <Total parts={course.parts} />
  </div>
)

export default Course
