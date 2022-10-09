import React from 'react'

const Notification = ({ notification }) => {
  const error = {
    marginBottom: '10px',
    padding: '10px',
    border: '3px solid red',
    borderRadius: '5px',
    background: 'lightgrey',
    color: 'red',
  }

  const success = {
    marginBottom: '10px',
    padding: '10px',
    border: '3px solid green',
    borderRadius: '5px',
    background: 'lightgrey',
    color: 'green',
  }

  if (!notification) {
    return null
  }

  return (
    <div style={notification.type === 'success' ? success : error}>
      {notification.message}
    </div>
  )
}

export default Notification
