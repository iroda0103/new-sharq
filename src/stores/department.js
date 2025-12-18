// stores/departments.js
import { defineStore } from 'pinia'
import { departmentsApi } from '../api/department'

export const useDepartmentsStore = defineStore('departments', {
  state: () => ({
    departments: [],
    loading: false,
    error: null,
    pageInfo: {
      total: 0,
      limit: 10,
      offset: 0
    }
  }),

  getters: {
    // Bo'limlar ro'yxati
    getDepartments: (state) => state.departments,
    
    // Yuklanish holati
    isLoading: (state) => state.loading,
    
    // Xatolik
    getError: (state) => state.error,
    
    // Bo'lim soni
    getTotalCount: (state) => state.pageInfo.total,
    
    // ID bo'yicha bo'limni topish
    getDepartmentById: (state) => (id) => {
      return state.departments.find(dept => dept.id === id)
    },

    // ID bo'yicha bo'lim xodimlarini topish
    getEmployeesByDepartmentId: (state) => (departmentId) => {
      const department = state.departments.find(dept => dept.id === parseInt(departmentId))
      return department?.employees || []
    }
  },

  actions: {
    // Bo'limlarni yuklash
    async fetchDepartments(params = {}) {
      this.loading = true
      this.error = null
      
      try {
        const response = await departmentsApi.getDepartments(params)
        
        if (response.data) {
          this.departments = response.data.map(dept => ({
            id: dept.id,
            name: dept.name_uz || dept.name_ru || dept.name_en,
            nameUz: dept.name_uz,
            nameRu: dept.name_ru,
            nameEn: dept.name_en,
            email: dept.email,
            phone: dept.phone,
            address: dept.address,
            tasks: dept.tasks,
            workTime: dept.work_time,
            staffInfo: dept.staff_info,
            state: dept.state,
            employeeCount: dept.staffs?.length || 0,
            employees: dept.staffs?.map(staff => ({
              id: staff.id,
              name: staff.full_name_uz,
              email: staff.email,
              phone: staff.phone,
              position: staff.position,
              type: staff.type,
              photo: null // Agar kerak bo'lsa, backend dan rasm URL qo'shiladi
            })) || []
          }))
          
          this.pageInfo = response.pageInfo || this.pageInfo
        }
        
        return response
      } catch (error) {
        this.error = error.message || 'Ma\'lumotlarni yuklashda xatolik yuz berdi'
        console.error('Departments fetch error:', error)
        throw error
      } finally {
        this.loading = false
      }
    },

    // Bo'limni ID bo'yicha yuklash
    async fetchDepartmentById(id) {
      this.loading = true
      this.error = null
      
      try {
        const response = await departmentsApi.getDepartmentById(id)
        
        if (response.data) {
          const dept = response.data
          const mappedDepartment = {
            id: dept.id,
            name: dept.name_uz || dept.name_ru || dept.name_en,
            nameUz: dept.name_uz,
            nameRu: dept.name_ru,
            nameEn: dept.name_en,
            email: dept.email,
            phone: dept.phone,
            address: dept.address,
            tasks: dept.tasks,
            workTime: dept.work_time,
            staffInfo: dept.staff_info,
            state: dept.state,
            employeeCount: dept.staffs?.length || 0,
            employees: dept.staffs?.map(staff => ({
              id: staff.id,
              name: staff.full_name_uz,
              fullName: staff.full_name_uz,
              email: staff.email,
              phone: staff.phone,
              position: staff.position,
              type: staff.type,
              photo: null // Agar backend dan rasm URL kelsa, shu yerga qo'shiladi
            })) || []
          }

          // Agar bu bo'lim allaqachon mavjud bo'lsa, yangilash
          const index = this.departments.findIndex(d => d.id === mappedDepartment.id)
          if (index !== -1) {
            this.departments[index] = mappedDepartment
          } else {
            this.departments.push(mappedDepartment)
          }

          return mappedDepartment
        }
        
        return response
      } catch (error) {
        this.error = error.message || 'Bo\'limni yuklashda xatolik yuz berdi'
        console.error('Department fetch error:', error)
        throw error
      } finally {
        this.loading = false
      }
    },

    // Bo'limlar ro'yxatini tozalash
    clearDepartments() {
      this.departments = []
      this.error = null
    },

    // Xatolikni tozalash
    clearError() {
      this.error = null
    }
  }
})