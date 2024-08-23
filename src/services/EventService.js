import axios from 'axios'

const API = axios.create({
  baseURL: 'https://raw.githubusercontent.com/Code-Pop/Real-World_Vue-3',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})
// export default API

export default {
  getEvents() {
    return API.get('/master/db.json')
  },
  getEvent() {
    return API.get('/master/db.json')
  }
}
