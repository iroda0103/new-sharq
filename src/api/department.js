// api/departments.js
import axios from 'axios'

// Axios instance yaratish (agar umuminst bO‘lmasa)
const apiClient = axios.create({
  baseURL: 'https://api.sharqedu.uz/api',
  // baseURL: 'http://localhost:3000/api',
  headers: {
    'Content-Type': 'application/json'
  }
})

// Request interceptor (agar token kerak bO‘lsa)
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Response interceptor
apiClient.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response) {
      // Server xatosi
      console.error('API Error:', error.response.data)
      return Promise.reject(error.response.data)
    } else if (error.request) {
      // SO‘rov yuborildi lekin javob kelmadi
      console.error('Network Error:', error.request)
      return Promise.reject({ message: 'Tarmoq xatosi. Internet aloqangizni tekshiring.' })
    } else {
      // Boshqa xatolar
      console.error('Error:', error.message)
      return Promise.reject({ message: error.message })
    }
  }
)

export const departmentsApi = {
  // Barcha bO‘limlarni olish
  getDepartments(params = {}) {
    return apiClient.get('/departments', { params })
  },

  // BO‘limni ID bO‘yicha olish
  getDepartmentById(id) {
    return apiClient.get(`/departments/${id}`)
  },

  // BO‘lim yaratish
  createDepartment(data) {
    return apiClient.post('/departments', data)
  },

  // BO‘limni yangilash
  updateDepartment(id, data) {
    return apiClient.put(`/departments/${id}`, data)
  },

  // BO‘limni O‘chirish
  deleteDepartment(id) {
    return apiClient.delete(`/departments/${id}`)
  }
}

export default apiClient