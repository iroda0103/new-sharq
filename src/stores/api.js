import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Request interceptor
api.interceptors.request.use(
  (config) => {
    // keyinchalik token shu yerda qo‘shiladi
    // const token = localStorage.getItem('token')
    // if (token) config.headers.Authorization = `Bearer ${token}`

    return config
  },
  (error) => Promise.reject(error)
)

// Response interceptor
api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    console.error('API error:', error)
    return Promise.reject(error)
  }
)

export default api
