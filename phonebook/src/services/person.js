import axios from 'axios'

const getAll = () => {
  const response = axios.get('api/persons')
  return response.then((response) => response.data)
}

const create = (newObject) => {
  const response = axios.post('api/persons', newObject)
  return response.then((response) => response.data)
}

const modify = (id, modifiedObject) => {
  const response = axios.put(`api/persons/${id}`, modifiedObject)
  return response.then((response) => response.data)
}

const remove = (id) => {
  const response = axios.delete(`api/persons/${id}`)
  return response.then((response) => response)
}

export default {
  getAll,
  modify,
  create,
  remove,
}
