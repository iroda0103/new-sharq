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
    // BO‘limlar rO‘yxati
    getDepartments: (state) => state.departments,
    
    // Yuklanish holati
    isLoading: (state) => state.loading,
    
    // Xatolik
    getError: (state) => state.error,
    
    // BO‘lim soni
    getTotalCount: (state) => state.pageInfo.total,
    
    // ID bO‘yicha bO‘limni topish
    getDepartmentById: (state) => (id) => {
      return state.departments.find(dept => dept.id === id)
    },

    // ID bO‘yicha bO‘lim xodimlarini topish
    getEmployeesByDepartmentId: (state) => (departmentId) => {
      const department = state.departments.find(dept => dept.id === parseInt(departmentId))
      return department?.employees || []
    }
  },

  actions: {
    // BO‘limlarni yuklash
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
              photo: null // Agar kerak bO‘lsa, backend dan rasm URL qO‘shiladi
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

    // BO‘limni ID bO‘yicha yuklash
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
              photo: null // Agar backend dan rasm URL kelsa, shu yerga qO‘shiladi
            })) || []
          }

          // Agar bu bO‘lim allaqachon mavjud bO‘lsa, yangilash
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

    // BO‘limlar rO‘yxatini tozalash
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