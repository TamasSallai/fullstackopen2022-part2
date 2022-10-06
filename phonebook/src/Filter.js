import React from 'react'

const Filter = ({ filter }) => (
  <div>
    Filter shown with
    <input onChange={(e) => filter(e.target.value)} />
  </div>
)

export default Filter
