import { Leaf } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Leaf className="h-6 w-6 text-primary-400" />
            <span className="text-lg font-semibold">Urvaan Plants</span>
          </div>
          <div className="text-gray-400 text-sm">
            © 2025 Urvaan Plant Store. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 