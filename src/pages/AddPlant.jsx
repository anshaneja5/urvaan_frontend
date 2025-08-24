import { useState, useEffect } from 'react'
import { Plus, Loader2, CheckCircle } from 'lucide-react'
import { fetchCategories, addPlant } from '../services/api'

const AddPlant = () => {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(null)
  
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    categories: [],
    availability: true,
    description: '',
    imageUrl: '',
    stockQuantity: '',
    careLevel: 'Medium',
    lightRequirement: 'Medium Light',
    wateringFrequency: 'Medium'
  })

  const [errors, setErrors] = useState({})

  useEffect(() => {
    loadCategories()
  }, [])

  const loadCategories = async () => {
    try {
      const data = await fetchCategories()
      setCategories(data)
    } catch (err) {
      console.error('Failed to load categories:', err)
    }
  }

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
    
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleCategoryToggle = (category) => {
    setFormData(prev => ({
      ...prev,
      categories: prev.categories.includes(category)
        ? prev.categories.filter(c => c !== category)
        : [...prev.categories, category]
    }))
    
    if (errors.categories) {
      setErrors(prev => ({ ...prev, categories: '' }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Plant name is required'
    }
    
    if (!formData.price || formData.price <= 0) {
      newErrors.price = 'Price must be a positive number'
    }
    
    if (formData.categories.length === 0) {
      newErrors.categories = 'At least one category is required'
    }
    
    if (!formData.description.trim()) {
      newErrors.description = 'Description is required'
    }
    
    if (formData.stockQuantity < 0) {
      newErrors.stockQuantity = 'Stock quantity cannot be negative'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }
    
    try {
      setLoading(true)
      setError(null)
      
      const plantData = {
        ...formData,
        price: parseFloat(formData.price),
        stockQuantity: parseInt(formData.stockQuantity) || 0
      }
      
      await addPlant(plantData)
      
      setSuccess(true)
      setFormData({
        name: '',
        price: '',
        categories: [],
        availability: true,
        description: '',
        imageUrl: '',
        stockQuantity: '',
        careLevel: 'Medium',
        lightRequirement: 'Medium Light',
        wateringFrequency: 'Medium'
      })
      
      setTimeout(() => setSuccess(false), 3000)
      
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to add plant. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-12 text-center">
        <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Plant Added Successfully!</h2>
        <p className="text-gray-600 mb-6">Your new plant has been added to the catalog.</p>
        <button 
          onClick={() => setSuccess(false)}
          className="btn-primary"
        >
          Add Another Plant
        </button>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Add New Plant</h1>
        <p className="text-gray-600">Add a new plant to your catalog</p>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Information */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Plant Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={`input-field ${errors.name ? 'border-red-500' : ''}`}
                placeholder="Enter plant name"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Price *
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  step="0.01"
                  min="0"
                  className={`input-field pl-8 ${errors.price ? 'border-red-500' : ''}`}
                  placeholder="0.00"
                />
              </div>
              {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price}</p>}
            </div>
          </div>

          {/* Categories */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Categories *
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {categories.map((category) => (
                <label key={category} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.categories.includes(category)}
                    onChange={() => handleCategoryToggle(category)}
                    className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                  />
                  <span className="text-sm text-gray-700">{category}</span>
                </label>
              ))}
            </div>
            {errors.categories && <p className="text-red-500 text-sm mt-1">{errors.categories}</p>}
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description *
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              rows="3"
              className={`input-field ${errors.description ? 'border-red-500' : ''}`}
              placeholder="Describe the plant..."
            />
            {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
          </div>

          {/* Additional Fields */}
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Stock Quantity
              </label>
              <input
                type="number"
                name="stockQuantity"
                value={formData.stockQuantity}
                onChange={handleInputChange}
                min="0"
                className={`input-field ${errors.stockQuantity ? 'border-red-500' : ''}`}
                placeholder="0"
              />
              {errors.stockQuantity && <p className="text-red-500 text-sm mt-1">{errors.stockQuantity}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Care Level
              </label>
              <select
                name="careLevel"
                value={formData.careLevel}
                onChange={handleInputChange}
                className="input-field"
              >
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Light Requirement
              </label>
              <select
                name="lightRequirement"
                value={formData.lightRequirement}
                onChange={handleInputChange}
                className="input-field"
              >
                <option value="Low Light">Low Light</option>
                <option value="Medium Light">Medium Light</option>
                <option value="Bright Light">Bright Light</option>
                <option value="Direct Sunlight">Direct Sunlight</option>
              </select>
            </div>
          </div>

          {/* Image URL */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Image URL
            </label>
            <input
              type="url"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleInputChange}
              className="input-field"
              placeholder="https://example.com/image.jpg"
            />
            <p className="text-gray-500 text-sm mt-1">Leave empty to use default image</p>
          </div>

          {/* Availability */}
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="availability"
              checked={formData.availability}
              onChange={handleInputChange}
              className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
            />
            <label className="text-sm font-medium text-gray-700">
              Plant is available for purchase
            </label>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={loading}
              className="btn-primary inline-flex items-center disabled:opacity-50"
            >
              {loading ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin mr-2" />
                  Adding Plant...
                </>
              ) : (
                <>
                  <Plus className="h-5 w-5 mr-2" />
                  Add Plant
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddPlant 