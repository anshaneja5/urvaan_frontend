import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://urvaan-backend.onrender.com/api'

// Create axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Plants API
export const fetchPlants = async (params = {}) => {
  try {
    const response = await api.get('/plants', { params })
    return response.data.data
  } catch (error) {
    throw error
  }
}

export const fetchPlantById = async (id) => {
  try {
    const response = await api.get(`/plants/${id}`)
    return response.data.data
  } catch (error) {
    throw error
  }
}

export const addPlant = async (plantData) => {
  try {
    const response = await api.post('/plants', plantData)
    return response.data
  } catch (error) {
    throw error
  }
}

export const updatePlant = async (id, plantData) => {
  try {
    const response = await api.put(`/plants/${id}`, plantData)
    return response.data
  } catch (error) {
    throw error
  }
}

export const deletePlant = async (id) => {
  try {
    const response = await api.delete(`/plants/${id}`)
    return response.data
  } catch (error) {
    throw error
  }
}

// Categories API
export const fetchCategories = async () => {
  try {
    const response = await api.get('/categories')
    return response.data.data
  } catch (error) {
    throw error
  }
}

// Health check
export const checkHealth = async () => {
  try {
    const response = await api.get('/health')
    return response.data
  } catch (error) {
    throw error
  }
} 