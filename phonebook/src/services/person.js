import axios from 'axios'

const getAll = () => {
  const response = axios.get('http://127.0.0.1:3001/persons')
  return response.then((response) => response.data)
}

const create = (newObject) => {
  const response = axios.post('http://127.0.0.1:3001/persons', newObject)
  return response.then((response) => response.data)
}

const modify = (id, modifiedObject) => {
  const response = axios.put(
    `http://127.0.0.1:3001/persons/${id}`,
    modifiedObject
  )
  return response.then((response) => response.data)
}

const remove = (id) => {
  const response = axios.delete(`http://127.0.0.1:3001/persons/${id}`)
  return response.then((response) => response)
}

export default {
  getAll,
  modify,
  create,
  remove,
}
