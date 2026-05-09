# Evren Shah - Portfolio Website

A modern, responsive portfolio website built with React, featuring smooth animations and a clean, professional design.

##  Design Features

- **Pixel-perfect UI** matching the provided design mockups
- **Smooth animations** using Framer Motion
- **Fully responsive** layout for all screen sizes
- **Modern aesthetics** with consistent color palette and typography
- **Clean code** structure with reusable components

##  Project Structure

```
portfolio-website/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   └── Header.css
│   ├── pages/
│   │   ├── Home.js
│   │   ├── Home.css
│   │   ├── AboutMe.js
│   │   ├── AboutMe.css
│   │   ├── Skills.js
│   │   ├── Skills.css
│   │   ├── Projects.js
│   │   ├── Projects.css
│   │   ├── ContactMe.js
│   │   └── ContactMe.css
│   ├── styles/
│   │   └── globals.css
│   ├── App.js
│   └── index.js
└── package.json
```

##  Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm start
   ```

3. **Open your browser:**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build/` folder.

##  Pages

### 1. Home (Personal)
- Hero section with animated illustration
- Introduction text
- Social media links
- Smooth entrance animations

### 2. About Me
- Personal introduction
- Achievement statistics
- Core values and philosophy
- Gradient background design

### 3. Skills
- Grid layout of technical skills
- Icon representations
- Hover animations
- Highlighted primary skills

### 4. Projects (Experience)
- Professional experience timeline
- Company logos
- Detailed role descriptions
- Dark theme design

### 5. Contact Me
- Contact information display
- Working contact form
- Social media links
- Purple gradient background

##  Design System

### Colors
- **Primary Black:** `#000000`
- **White:** `#FFFFFF`
- **Gray Light:** `#F5F5F5`
- **Gray Medium:** `#999999`
- **Gray Dark:** `#1A1A1A`

### Typography
- **Primary Font:** DM Sans
- **Display Font:** Playfair Display

### Spacing Scale
- XS: 0.5rem
- SM: 1rem
- MD: 2rem
- LG: 3rem
- XL: 4rem
- 2XL: 6rem

##  Technologies Used

- **React** - UI library
- **React Router DOM** - Navigation
- **Framer Motion** - Animations
- **CSS3** - Styling
- **Google Fonts** - Typography

##  Responsive Breakpoints

- **Desktop:** > 1024px
- **Tablet:** 768px - 1024px
- **Mobile:** < 768px
- **Small Mobile:** < 480px

##  Key Features

1. **Smooth Page Transitions** - Animated navigation between pages
2. **Interactive Components** - Hover effects and micro-interactions
3. **Form Validation** - Built-in form handling with status feedback
4. **Optimized Performance** - Lazy loading and code splitting
5. **Accessibility** - Semantic HTML and ARIA labels
6. **SEO Friendly** - Proper meta tags and structure

##  Component Highlights

### Header Component
- Fixed position navigation
- Active page indication
- Smooth scroll effect
- Animated logo and links

### Home Page
- Floating SVG illustration
- Staggered text animations
- Social media integration
- Professional introduction

### Skills Grid
- Responsive grid layout
- Interactive skill cards
- SVG icons for each technology
- Highlighted primary skills

### Experience Cards
- Company branding
- Timeline layout
- Detailed descriptions
- Hover animations

### Contact Form
- Real-time validation
- Success/error states
- Contact information display
- Social links integration

## 🔄 Future Enhancements

- [ ] Add blog section
- [ ] Implement dark mode toggle
- [ ] Add project case studies
- [ ] Integrate with CMS
- [ ] Add testimonials section
- [ ] Implement analytics

##  Customization Guide

### Updating Personal Information

1. **Home Page:** Edit `src/pages/Home.js`
2. **About Section:** Edit `src/pages/AboutMe.js`
3. **Skills:** Modify the skills array in `src/pages/Skills.js`
4. **Experience:** Update experiences in `src/pages/Projects.js`
5. **Contact Info:** Change details in `src/pages/ContactMe.js`

### Changing Colors

Edit the CSS variables in `src/styles/globals.css`:

```css
:root {
  --color-black: #000000;
  --color-white: #FFFFFF;
  /* ... add your colors */
}
```

### Adding New Pages

1. Create new component in `src/pages/`
2. Add route in `src/App.js`
3. Update navigation in `src/components/Header.js`

##  Contributing

This is a personal portfolio project, but suggestions and improvements are welcome!

##  License

This project is open source and available under the MIT License.

##  Author

**Evren Shah**
- Location: India
- Role: Frontend Developer

---

Built with ❤️ using React and modern web technologies.
