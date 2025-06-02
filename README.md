# ☕ Coffee Haven

A modern, responsive coffee shop web application built with React and TypeScript. Coffee Haven offers a seamless experience for customers to browse coffee products, place orders, and explore our coffee culture.

## 🚀 Features

- 📱 Responsive design for all devices
- 🛒 Interactive shopping cart with local storage persistence
- 💳 Seamless checkout process with receipt generation
- 🌟 Featured products showcase
- 📜 Dynamic menu management
- 🤝 About us and contact pages
- 🎨 Modern UI with Tailwind CSS
- 🔄 Real-time cart updates
- 📱 Mobile-first design approach
- 🌐 SEO-friendly structure

## 🛠️ Tech Stack

### Frontend
- **Core**:
  - React 18.2.0
  - TypeScript 5.4.2
  - React Router DOM 6.22.3 (for routing)

### Styling
- **CSS Framework**:
  - Tailwind CSS 3.4.1
  - PostCSS 8.4.35
  - Autoprefixer 10.4.18

### UI Components
- **Icons**:
  - Hero Icons 2.1.1
  - React Icons 5.5.0

### State Management
- React Context API
- Local Storage for persistence

### User Experience
- React Hot Toast 2.4.1 (for notifications)
- Dynamic loading states
- Error boundaries

### Development Tools
- Create React App
- ESLint
- Prettier
- TypeScript Compiler
- npm package manager

## 📦 Installation & Setup

### Prerequisites
Before you begin, ensure you have the following installed:
- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)
- Git

### Step 1: Clone the Repository
```bash
# Clone the repository
git clone https://github.com/Ejxzdevs/Coffee-Haven.git

# Navigate to the project directory
cd Coffee-Haven
```

### Step 2: Install Dependencies
```bash
# Install all required packages
npm install
```

### Step 3: Set Up Environment (if needed)
```bash
# Copy the example environment file
cp .env.example .env

# Edit the .env file with your configuration
# Note: This step might not be necessary for basic setup
```

### Step 4: Start Development Server
```bash
# Run the development server
npm start
```
The application will automatically open in your default browser at `http://localhost:3000`

### Step 5: Build for Production
```bash
# Create a production build
npm run build

# The build files will be in the 'build' folder
```

## 🏗️ Project Structure

```
coffee-haven/
├── public/                 # Static files
│   ├── index.html         # Main HTML file
│   └── assets/            # Images and other assets
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── Cart.tsx
│   │   ├── FeaturedProducts.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   └── ReceiptModal.tsx
│   ├── context/          # React Context providers
│   │   ├── CartContext.tsx
│   │   └── ProductsContext.tsx
│   ├── pages/            # Page components
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Home.tsx
│   │   └── Menu.tsx
│   ├── services/         # Business logic
│   │   └── storage.ts
│   ├── styles/           # Global styles
│   ├── types/            # TypeScript type definitions
│   ├── utils/            # Utility functions
│   └── App.tsx          # Main application component
├── package.json         # Project dependencies and scripts
└── README.md           # Project documentation
```

## 🔧 Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/AmazingFeature`
3. Commit your changes: `git commit -m 'Add some AmazingFeature'`
4. Push to the branch: `git push origin feature/AmazingFeature`
5. Open a Pull Request

### Contribution Guidelines
- Write clear, descriptive commit messages
- Update documentation as needed
- Follow the existing code style
- Add comments for complex logic
- Test your changes thoroughly

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Credits

- Built with [React](https://reactjs.org/)
- Developed using [Cursor](https://cursor.sh/) - The AI-first code editor
- Icons from [Hero Icons](https://heroicons.com/) and [React Icons](https://react-icons.github.io/react-icons/)
- UI Components styled with [Tailwind CSS](https://tailwindcss.com/)

## 📞 Contact & Support

- Creator: Ejxzdevs - [@Ejxzdevs](https://github.com/Ejxzdevs)
- Project Link: [https://github.com/Ejxzdevs/Coffee-Haven](https://github.com/Ejxzdevs/Coffee-Haven)
- Report Issues: [Issue Tracker](https://github.com/Ejxzdevs/Coffee-Haven/issues)

### Support the Project
If you find this project helpful, please give it a ⭐️ on GitHub!

---
Made with ❤️ and ☕ by Ejxzdevs
