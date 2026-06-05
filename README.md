# 🚀 RJ Roy - Full-Stack Developer Portfolio

<div align="center">

[![Next.js](https://img.shields.io/badge/Next.js-16.2.4-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.4-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.0-06B6D4?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

[**View Live Demo**](https://royjibon.online) • [**GitHub**](https://github.com/rj-roy/ns-prt) • [**Contact**](https://royjibon.online#contact)

</div>

---

## 📋 Overview

A modern, responsive, and feature-rich portfolio website built with **Next.js 16** and **React 19**. Showcasing full-stack development projects with smooth animations, dark mode support, and optimal performance. Designed to impress with stunning UI/UX and seamless user experience.

### ✨ Key Highlights
- 🎨 **Modern Design** - Clean, professional, and contemporary UI
- 🌙 **Dark Mode** - Built-in dark/light theme toggle
- ⚡ **High Performance** - Optimized with Next.js and React Compiler
- 📱 **Fully Responsive** - Works seamlessly on all devices
- 🎯 **SEO Optimized** - Server-side rendering and metadata
- 🎬 **Smooth Animations** - Powered by Framer Motion
- 🎨 **Custom Cursor** - Interactive and engaging cursor effects
- 🔍 **Project Showcase** - Detailed project cards with filtering

---

## 🛠️ Tech Stack

### Frontend
- **React 19.2.4** - Latest React with concurrent features
- **Next.js 16.2.4** - Full-stack React framework with SSR/SSG
- **JavaScript** - Type-safe development
- **Tailwind CSS 4** - Utility-first styling framework
- **React Compiler** - Automatic optimization of React components

### UI & Animations
- **Framer Motion 12.40.0** - Advanced animation library
- **Lucide React 1.14.0** - Modern icon library
- **React Icons 5.6.0** - Popular icon sets
- **Styled Components 6.4.2** - CSS-in-JS styling

### Development Tools
- **ESLint 9** - Code quality and linting
- **PostCSS 4** - CSS processing
- **Next.js Font System** - Custom font optimization
- **Next Themes** - Theme management

---

## 📁 Project Structure

```
rj-roy/
├── public/
│   └── projects.json          # Projects data
├── src/
│   ├── app/
│   │   ├── (home)/            # Home page route
│   │   ├── (pages)/           # Other pages (projects, etc.)
│   │   ├── api/               # API routes
│   │   ├── fonts/             # Custom fonts (Cabinet, Fraunces)
│   │   ├── globals.css        # Global styles
│   │   └── layout.jsx         # Root layout
│   ├── components/
│   │   ├── home/              # Home page components
│   │   │   ├── HeroSec.jsx
│   │   │   ├── AboutSec.jsx
│   │   │   ├── SkillsSec.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── TestimonialsSec.jsx
│   │   │   └── ExperienceSection.jsx
│   │   ├── projects/          # Project pages
│   │   ├── header/            # Navigation
│   │   ├── footer/            # Footer
│   │   ├── contact/           # Contact section
│   │   ├── ui/                # UI components
│   │   │   ├── CustomCursor.jsx
│   │   │   ├── BackToTop.jsx
│   │   │   ├── ThemeToggle.jsx
│   │   │   └── ProjectCard.jsx
│   │   └── providers/         # Context providers
│   ├── lib/
│   │   ├── data.js            # Data fetching utilities
│   │   └── techIcons.js       # Technology icons mapping
│   └── assets/                # Static assets
├── eslint.config.mjs          # ESLint configuration
├── next.config.mjs            # Next.js configuration
├── tailwind.config.js         # Tailwind CSS configuration
├── postcss.config.mjs         # PostCSS configuration
└── package.json               # Dependencies & scripts
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** 18.17+ or 20+
- **npm**, **yarn**, **pnpm**, or **bun** package manager

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/rj-roy/rj-roy.git
cd rj-roy
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
pnpm install
bun install
```

3. **Set up environment variables** (if needed)
```bash
cp .env.example .env.local
```

4. **Run the development server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the site.

---

## 📦 Available Scripts

```bash
# Development
npm run dev          # Start development server with hot reload

# Production
npm run build        # Build for production
npm start            # Start production server

# Code Quality
npm run lint         # Run ESLint on the codebase
```

---

## 🎯 Features

### Home Page
- **Hero Section** - Captivating introduction with call-to-action
- **Projects Showcase** - Filterable project cards with live demos and GitHub links
- **Skills Section** - Technology stack and expertise display
- **About Section** - Personal background and professional journey
- **Testimonials** - Social proof from collaborators or clients
- **Contact Section** - Easy contact form for inquiries

### Navigation
- **Responsive Header** - Dynamic navigation with mobile menu
- **Page Navigation** - Multiple page routes for projects and details
- **Back to Top** - Smooth scroll to top button

### User Experience
- **Dark/Light Theme** - Toggle between themes with preference persistence
- **Custom Cursor** - Interactive cursor with hover effects
- **Matrix Loader** - Eye-catching loading animation
- **Smooth Transitions** - Framer Motion animations throughout
- **Mobile Responsive** - Optimized for all screen sizes (320px+)

---

## 🗂️ Component Overview

### Core Components
| Component | Purpose |
|-----------|---------|
| `NavHeader` | Main navigation component |
| `HeroSec` | Hero/banner section |
| `Projects` | Projects showcase grid |
| `SkillsSec` | Skills and technologies |
| `AboutSec` | About me section |
| `TestimonialsSection` | Client/colleague testimonials |
| `ContactSec` | Contact form |
| `ThemeToggle` | Dark/light mode switcher |
| `CustomCursor` | Custom cursor implementation |
| `BackToTop` | Scroll-to-top button |
| `ProjectCard` | Individual project card |
| `MatrixLoader` | Loading animation |

---

## 📊 API Routes

### `/api/projects`
Fetches the projects data from `public/projects.json`

**Response:**
```json
[
  {
    "id": 1,
    "title": "Project Name",
    "description": "Project description",
    "image": "/images/project.jpg",
    "tags": ["React", "Next.js"],
    "technologies": ["React", "Next.js", "Tailwind"],
    "liveUrl": "https://...",
    "githubUrl": "https://github.com/...",
    "featured": true
  }
]
```

---

## 🎨 Customization

### Colors & Theme
Edit `tailwind.config.js` to customize:
- Color palette
- Custom spacing
- Screen breakpoints
- Z-index values

### Fonts
Custom fonts (Cabinet Grotesk, Fraunces) configured in:
- `src/app/fonts/styles/FontStyle.js`

### Projects Data
Update `public/projects.json` to showcase your projects

---

## 🚢 Deployment

### Deploy on Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Deploy on Other Platforms
The project is compatible with any hosting that supports Next.js:
- Netlify
- AWS Amplify
- Render
- Railway
- etc.

**Build Command:**
```bash
npm run build
```

**Start Command:**
```bash
npm start
```

---

## 📈 Performance Optimizations

- ✅ **React Compiler** - Automatic component memoization
- ✅ **Image Optimization** - Next.js Image component with remote patterns
- ✅ **Code Splitting** - Automatic route-based code splitting
- ✅ **Server-Side Rendering** - Improved SEO and performance
- ✅ **Tailwind CSS** - Optimized CSS with PurgeCSS
- ✅ **Custom Cursor** - Optimized with requestAnimationFrame

---

## 🔒 Best Practices

- **TypeScript Support** - Leverage type safety for larger components
- **Component Composition** - Modular and reusable components
- **Responsive Design** - Mobile-first approach with Tailwind
- **Accessibility** - Semantic HTML and ARIA labels
- **SEO Optimization** - Metadata and structured data
- **Code Formatting** - ESLint for code consistency

---

## 📝 License

This project is licensed under the **MIT License** - feel free to use this portfolio template for your own projects.

---

## 💬 Support & Contact

Have questions or suggestions? Reach out:
- **Website**: [royjibon.online](https://royjibon.online)
- **Email**: [contact@royjibon.online](mailto:contact@royjibon.online)
- **GitHub**: [@yourusername](https://github.com)

---

<div align="center">

**Made with ❤️ by RJ Roy**

⭐ If you find this portfolio helpful, please consider giving it a star!

</div>