# 🌱 Urvaan Plant Store

A full-stack Mini Plant Store application built with React, Node.js, Express, and MongoDB. This project demonstrates modern web development practices with a focus on user experience, scalability, and clean code architecture.

## ✨ Features

### 🌿 Plant Catalog
- **Comprehensive Plant Database**: 50+ plants with realistic names, prices, and categories
- **Rich Plant Information**: Name, price, categories, availability, care level, light requirements, and more
- **High-Quality Images**: Beautiful plant images for enhanced visual appeal

### 🔍 Search & Filter
- **Smart Search**: Case-insensitive search by plant name and category keywords
- **Category Filtering**: Filter plants by Indoor, Outdoor, Succulent, Air Purifying, Home Decor, etc.
- **Real-time Results**: Instant search results with loading states

### 👨‍💼 Admin Features
- **Add New Plants**: Comprehensive form with validation for adding new plants
- **Multiple Categories**: Support for plants belonging to multiple categories
- **Input Validation**: Robust form validation ensuring data integrity

### 📱 Responsive Design
- **Mobile-First**: Optimized for all device sizes
- **Modern UI**: Clean, intuitive interface with smooth animations
- **Loading States**: Professional loading and error handling throughout the app

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks and functional components
- **Vite** - Fast build tool and development server
- **Tailwind CSS v4** - Utility-first CSS framework for rapid UI development
- **React Router** - Client-side routing
- **Axios** - HTTP client for API communication
- **Lucide React** - Beautiful, customizable icons

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **Express Validator** - Input validation middleware
- **CORS** - Cross-origin resource sharing

### Database
- **MongoDB** - Scalable, document-based database
- **50+ Plant Records** - Comprehensive plant database with realistic data
- **Text Indexing** - Optimized search functionality

## 🚀 Getting Started

### 🌐 Live Application
- **Frontend**: [https://urvaan-frontend.vercel.app/](https://urvaan-frontend.vercel.app/)
- **Backend API**: [https://urvaan-backend.onrender.com/](https://urvaan-backend.onrender.com/)

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or pnpm

### Database Seeding
The application comes with a comprehensive database seeder containing 50+ plants:
```bash
cd backend
node seeder/seed.js
```

## 📁 Project Structure

```
urvaan-plant-store/
├── backend/                 # Backend API
│   ├── models/             # MongoDB models
│   ├── routes/             # API routes
│   ├── seeder/             # Database seeder
│   ├── server.js           # Express server
│   └── package.json        # Backend dependencies
├── frontend/               # React frontend
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── pages/          # Page components
│   │   ├── services/       # API services
│   │   ├── App.jsx         # Main app component
│   │   └── main.jsx        # Entry point
│   ├── public/             # Static assets
│   └── package.json        # Frontend dependencies
├── package.json            # Root package.json
└── README.md               # Project documentation
```

## 🌐 API Endpoints

### Plants
- `GET /api/plants` - Get all plants with search/filter
- `GET /api/plants/:id` - Get plant by ID
- `POST /api/plants` - Add new plant
- `PUT /api/plants/:id` - Update plant
- `DELETE /api/plants/:id` - Delete plant

### Categories
- `GET /api/categories` - Get all categories

### Health
- `GET /api/health` - API health check

## 🎨 UI Components

### Reusable Components
- **Navbar** - Responsive navigation with mobile menu
- **PlantCard** - Flexible plant display (grid/list views)
- **Footer** - Clean, minimal footer
- **Form Components** - Validated input fields and buttons

### Design System
- **Color Palette** - Primary (green) and secondary (yellow) color scheme
- **Typography** - Inter font family for excellent readability
- **Spacing** - Consistent spacing using Tailwind's scale
- **Animations** - Smooth transitions and hover effects

## 🔧 Configuration

### Frontend Configuration
- **Vite Config** - Development server (no proxy needed for hosted backend)
- **Tailwind Config** - Custom color palette and animations
- **PostCSS** - CSS processing pipeline
- **Environment Variables** - Configurable backend API URL

### Backend Configuration
- **Environment Variables** - MongoDB connection and server settings
- **CORS** - Configured for development and production
- **Validation** - Input validation for all API endpoints

## 🚀 Deployment

### Frontend Deployment
```bash
cd frontend
npm run build
# Deploy dist/ folder to your hosting platform
```

### Backend Deployment
```bash
cd backend
npm start
# Deploy to platforms like Heroku, Railway, or DigitalOcean
```

### Environment Variables for Production
```bash
MONGODB_URI=your_production_mongodb_uri
PORT=process.env.PORT || 5000
NODE_ENV=production
```

## 🧪 Testing

The application includes comprehensive error handling and validation:
- **Frontend Validation** - Form validation with error messages
- **Backend Validation** - API input validation using express-validator
- **Error Boundaries** - Graceful error handling throughout the app
- **Loading States** - Professional loading indicators

## 🌟 Extra Features

### Performance Optimizations
- **Text Indexing** - MongoDB text search for fast queries
- **Image Optimization** - Responsive images with proper sizing
- **Lazy Loading** - Efficient component rendering

### User Experience
- **Responsive Design** - Mobile-first approach
- **Smooth Animations** - CSS transitions and hover effects
- **Accessibility** - Semantic HTML and proper ARIA labels
- **Loading States** - Professional loading indicators

### Code Quality
- **ESLint** - Code quality and consistency
- **Modular Architecture** - Clean separation of concerns
- **Reusable Components** - DRY principle implementation
- **Type Safety** - Proper prop validation and error handling

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- **Urvaan** - For providing this exciting development opportunity
- **Plant Community** - For inspiration in plant categorization and care
- **Open Source Community** - For the amazing tools and libraries used

---

**Built with ❤️ for the Urvaan Software Development Intern Assignment**
