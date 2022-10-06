import React from 'react'

const PersonForm = ({ handleSubmit, setName, setNumber }) => {
  return (
    <div>
      <h3>Add a new</h3>
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
    </div>
  )
}

export default PersonForm
