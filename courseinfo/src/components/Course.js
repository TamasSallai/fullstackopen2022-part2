import React from 'react'

const Total = ({ sum }) => <p>Number of exercises {sum}</p>

const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
)

const Content = ({ parts }) => {
  const total = parts.reduce((a, b) => a + b.exercises, 0)
  return (
    <>
      {parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}

      <Total sum={total} />
    </>
  )
}

const Header = ({ course }) => <h2>{course.name}</h2>

const Course = ({ course }) => (
  <div>
    <Header course={course} />
    <Content parts={course.parts} />
  </div>
)

export default Course
