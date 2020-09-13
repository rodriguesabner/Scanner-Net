import axios from 'axios'

const ip_local = `https://check-port.herokuapp.com/api/`

const api = axios.create({
    baseURL: ip_local
})

export default api;