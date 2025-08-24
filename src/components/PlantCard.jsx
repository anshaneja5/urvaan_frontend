import { Leaf, CheckCircle, XCircle } from 'lucide-react'

const PlantCard = ({ plant, viewMode }) => {
  const { name, price, categories, availability, imageUrl, description, careLevel, lightRequirement } = plant

  if (viewMode === 'list') {
    return (
      <div className="card p-6">
        <div className="flex gap-6">
          <img 
            src={imageUrl} 
            alt={name}
            className="w-32 h-32 object-cover rounded-lg"
          />
          <div className="flex-1">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-primary-600">${price}</span>
                {availability ? (
                  <CheckCircle className="h-5 w-5 text-green-500" />
                ) : (
                  <XCircle className="h-5 w-5 text-red-500" />
                )}
              </div>
            </div>
            <p className="text-gray-600 mb-3">{description}</p>
            <div className="flex flex-wrap gap-2 mb-3">
              {categories.map((category) => (
                <span 
                  key={category}
                  className="px-2 py-1 bg-primary-100 text-primary-700 text-sm rounded-full"
                >
                  {category}
                </span>
              ))}
            </div>
            <div className="flex gap-4 text-sm text-gray-500">
              <span>Care: {careLevel}</span>
              <span>Light: {lightRequirement}</span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="card group hover:shadow-lg transition-all duration-200">
      <div className="relative">
        <img 
          src={imageUrl} 
          alt={name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-200"
        />
        <div className="absolute top-2 right-2">
          {availability ? (
            <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
              <CheckCircle className="h-3 w-3" />
              In Stock
            </span>
          ) : (
            <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
              <XCircle className="h-3 w-3" />
              Out of Stock
            </span>
          )}
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
          {name}
        </h3>
        
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-1 mb-3">
          {categories.slice(0, 3).map((category) => (
            <span 
              key={category}
              className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-full"
            >
              {category}
            </span>
          ))}
          {categories.length > 3 && (
            <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
              +{categories.length - 3} more
            </span>
          )}
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-primary-600">${price}</span>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Leaf className="h-4 w-4" />
            <span>{careLevel}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlantCard 