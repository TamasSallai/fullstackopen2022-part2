import React from 'react'

const PersonForm = ({ handleSubmit, setName, setNumber }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        name: <input onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        number: <input onChange={(e) => setNumber(e.target.value)} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

export default PersonForm
