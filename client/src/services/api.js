import axios from 'axios'

const ip_local = `http://192.168.15.9:4747/api/`

const api = axios.create({
    baseURL: ip_local
})

export default api;