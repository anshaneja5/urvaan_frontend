import { useState, useEffect } from 'react'
import { Search, Filter, Grid, List, Loader2 } from 'lucide-react'
import PlantCard from '../components/PlantCard'
import { fetchPlants, fetchCategories } from '../services/api'

const PlantCatalog = () => {
  const [plants, setPlants] = useState([])
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [viewMode, setViewMode] = useState('grid')

  useEffect(() => {
    loadPlants()
    loadCategories()
  }, [])

  const loadPlants = async () => {
    try {
      setLoading(true)
      const data = await fetchPlants()
      setPlants(data)
      setError(null)
    } catch (err) {
      setError('Failed to load plants. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const loadCategories = async () => {
    try {
      const data = await fetchCategories()
      setCategories(data)
    } catch (err) {
      console.error('Failed to load categories:', err)
    }
  }

  const handleSearch = async () => {
    try {
      setLoading(true)
      const data = await fetchPlants({ search: searchTerm, category: selectedCategory })
      setPlants(data)
    } catch (err) {
      setError('Search failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleCategoryChange = async (category) => {
    setSelectedCategory(category)
    try {
      setLoading(true)
      const data = await fetchPlants({ search: searchTerm, category })
      setPlants(data)
    } catch (err) {
      setError('Filter failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const clearFilters = () => {
    setSearchTerm('')
    setSelectedCategory('')
    loadPlants()
  }

  if (loading && plants.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-96">
        <div className="text-center">
          <Loader2 className="h-12 w-12 text-primary-600 animate-spin mx-auto mb-4" />
          <p className="text-gray-600">Loading plants...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-96">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error}</p>
          <button onClick={loadPlants} className="btn-primary">
            Try Again
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Plant Catalog</h1>
        <p className="text-gray-600">Discover our collection of beautiful plants</p>
      </div>

      {/* Search and Filter Section */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Search */}
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search plants by name or category..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                className="input-field pl-10"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="lg:w-48">
            <select
              value={selectedCategory}
              onChange={(e) => handleCategoryChange(e.target.value)}
              className="input-field"
            >
              <option value="">All Categories</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* Search Button */}
          <button onClick={handleSearch} className="btn-primary">
            Search
          </button>

          {/* Clear Filters */}
          {(searchTerm || selectedCategory) && (
            <button onClick={clearFilters} className="btn-outline">
              Clear
            </button>
          )}
        </div>
      </div>

      {/* View Mode Toggle */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setViewMode('grid')}
            className={`p-2 rounded-lg ${
              viewMode === 'grid' ? 'bg-primary-100 text-primary-600' : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            <Grid className="h-5 w-5" />
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`p-2 rounded-lg ${
              viewMode === 'list' ? 'bg-primary-100 text-primary-600' : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            <List className="h-5 w-5" />
          </button>
        </div>
        <p className="text-gray-600">{plants.length} plants found</p>
      </div>

      {/* Plants Grid/List */}
      {loading ? (
        <div className="flex items-center justify-center py-12">
          <Loader2 className="h-8 w-8 text-primary-600 animate-spin mr-2" />
          <span className="text-gray-600">Updating results...</span>
        </div>
      ) : plants.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">No plants found matching your criteria.</p>
          <button onClick={clearFilters} className="btn-primary mt-4">
            View All Plants
          </button>
        </div>
      ) : (
        <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6' : 'space-y-4'}>
          {plants.map((plant) => (
            <PlantCard key={plant._id} plant={plant} viewMode={viewMode} />
          ))}
        </div>
      )}
    </div>
  )
}

export default PlantCatalog 