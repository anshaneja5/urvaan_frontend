import { Link } from 'react-router-dom'
import { ArrowRight, Leaf, Sparkles, Shield } from 'lucide-react'

const Home = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Discover Your Perfect
            <span className="text-primary-600"> Plant Companion</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Browse through our extensive collection of beautiful plants, from easy-care succulents 
            to stunning flowering varieties. Find the perfect plant to brighten your space.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/plants" className="btn-primary inline-flex items-center">
              Browse Plants
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link to="/add-plant" className="btn-outline">
              Add New Plant
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose Urvaan Plants?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Plants</h3>
              <p className="text-gray-600">Carefully selected plants from trusted growers</p>
            </div>
            <div className="text-center">
              <div className="bg-secondary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-8 w-8 text-secondary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Care Tips</h3>
              <p className="text-gray-600">Detailed care instructions for every plant</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Plant Health</h3>
              <p className="text-gray-600">Healthy, disease-free plants guaranteed</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home 