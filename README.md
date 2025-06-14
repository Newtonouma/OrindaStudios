# Iconic Studios - Photography Portfolio

A modern, responsive photography portfolio website built with React and Vite featuring professional CSS component isolation architecture.

## ✨ Features

- **Modern Design**: Clean, professional photography portfolio layout
- **Responsive**: Mobile-first design that works on all devices
- **CSS Isolation**: Each component has scoped CSS to prevent style bleeding
- **Performance Optimized**: Built with Vite for fast development and production builds
- **Component Architecture**: Modular React components for maintainability

## 🛠️ Technologies

- **React 18** - Modern React with hooks
- **Vite** - Next generation frontend tooling
- **CSS3** - Component-scoped styling with CSS custom properties
- **JavaScript ES6+** - Modern JavaScript features

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
cd YOUR-REPO-NAME
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Build for production
```bash
npm run build
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
├── pages/              # Page components
├── assets/             # Images and static files
├── Header/             # Header component with hero section
├── Navbar/             # Navigation component
├── Gallery/            # Photo gallery component
├── Footer/             # Footer component
└── ...                 # Other feature components
```

## 🎨 CSS Architecture

This project uses a **component-scoped CSS architecture** to prevent style bleeding:

- Each component has its own CSS file with scoped variables
- Global styles are limited to `src/index.css` 
- No global CSS variable conflicts between components
- Maintainable and scalable styling approach

## 📝 Recent Updates

- ✅ **CSS Isolation Complete**: All components now have scoped CSS
- ✅ **No Style Bleeding**: Components are fully isolated
- ✅ **Shared Variables**: Consistent design tokens in global scope
- ✅ **Performance Optimized**: Clean, efficient CSS architecture

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.
