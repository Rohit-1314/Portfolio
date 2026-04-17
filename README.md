# Rohit Kumar - Full-Stack Developer Portfolio

A modern, responsive portfolio website built with React.js, showcasing my skills, projects, and experience as a Full-Stack Developer specializing in Java, Spring Boot, and React.

## 🚀 Features

### ✨ Core Features
- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Contact Form**: Integrated with Google Scripts API for message handling
- **SEO Optimized**: Enhanced meta tags, structured data, and sitemap
- **PWA Ready**: Service worker, manifest, and offline capabilities
- **Performance Optimized**: Fast loading times and smooth interactions

### 📱 Mobile Optimizations
- Touch-friendly interface with proper tap targets (44px minimum)
- Prevents zoom on input focus (iOS)
- Optimized typography and spacing for mobile screens
- Responsive images and adaptive layouts
- Smooth scrolling and touch interactions

### 🔍 SEO Features
- Comprehensive meta tags for search engines
- Open Graph and Twitter Card support
- Structured data (JSON-LD) for rich snippets
- Optimized keywords and descriptions
- XML sitemap and robots.txt
- Fast loading and Core Web Vitals optimization

## 🛠️ Tech Stack

- **Frontend**: React.js, CSS3, HTML5
- **Build Tool**: Vite
- **Icons**: React Icons (Feather Icons)
- **Animations**: Framer Motion, React Intersection Observer
- **Deployment**: Netlify
- **Backend**: Google Scripts API for contact form

## 📊 Performance Features

- Service Worker for caching and offline functionality
- Optimized images and assets
- Lazy loading and code splitting
- Minimal JavaScript bundle size
- Fast Time to Interactive (TTI)

## 🎯 SEO Strategy

### Keywords Targeted
- Primary: "Rohit Kumar", "Full Stack Developer", "Java Developer"
- Secondary: "React Developer", "Spring Boot", "Portfolio", "Gorakhpur Developer"
- Long-tail: "Full Stack Developer Java React Spring Boot India"

### Content Optimization
- Semantic HTML structure
- Proper heading hierarchy (H1, H2, H3)
- Alt text for all images
- Descriptive link text and buttons
- Fast loading times for better Core Web Vitals

### Technical SEO
- Mobile-first responsive design
- HTTPS enabled
- Clean URL structure
- XML sitemap
- Robots.txt optimization
- Structured data markup

## 📱 Mobile Responsiveness

### Breakpoints
- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile Large**: 480px - 767px
- **Mobile Small**: 360px - 479px
- **Mobile XS**: Below 360px

### Mobile Features
- Hamburger navigation menu
- Touch-optimized buttons and forms
- Optimized image sizes
- Readable typography on small screens
- Fast loading on mobile networks

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Rohit-1314/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 📬 Contact Form Setup

The contact form is integrated with Google Scripts API. To set up your own:

1. Create a new Google Apps Script project
2. Set up a Google Sheet to receive form submissions
3. Deploy the script as a web app
4. Update the `GOOGLE_SCRIPT_URL` in `api/contact.js`

### Google Apps Script Code Example
```javascript
function doPost(e) {
  const sheet = SpreadsheetApp.openById('YOUR_SHEET_ID').getActiveSheet();
  const data = JSON.parse(e.postData.contents);
  
  sheet.appendRow([
    new Date(),
    data.name,
    data.email,
    data.subject,
    data.message
  ]);
  
  return ContentService.createTextOutput('Success');
}
```

## 🌐 Deployment

### Netlify Deployment

1. **Connect to Netlify**
   - Link your GitHub repository to Netlify
   - Set build command: `npm run build`
   - Set publish directory: `dist`

2. **Environment Variables** (if needed)
   ```
   VITE_GOOGLE_SCRIPT_URL=your_google_script_url
   VITE_SITE_URL=https://your-domain.netlify.app
   ```

3. **Custom Domain Setup**
   - Add your custom domain in Netlify settings
   - Configure DNS settings
   - Enable HTTPS

### Performance Optimizations

- Enable Netlify's asset optimization
- Configure proper cache headers
- Use Netlify's CDN for global delivery
- Enable gzip compression

## 📈 SEO Checklist

### On-Page SEO ✅
- [x] Optimized title tags and meta descriptions
- [x] Proper heading structure (H1, H2, H3)
- [x] Alt text for all images
- [x] Internal linking structure
- [x] Mobile-responsive design
- [x] Fast loading speed

### Technical SEO ✅
- [x] XML sitemap
- [x] Robots.txt file
- [x] Structured data markup
- [x] Open Graph tags
- [x] Twitter Card tags
- [x] Canonical URLs

### Performance ✅
- [x] Core Web Vitals optimization
- [x] Image optimization
- [x] Minified CSS and JavaScript
- [x] Service worker for caching
- [x] Gzip compression

## 🔧 Customization

### Personal Information
Update the following files with your information:
- `src/config/seo.js` - SEO and personal data
- `src/components/Hero/Hero.jsx` - Hero section content
- `src/components/About/About.jsx` - About section
- `src/components/Contact/Contact.jsx` - Contact information

### Styling
- `src/index.css` - Global styles and CSS variables
- Component-specific CSS files for detailed styling
- Update color scheme in CSS custom properties

### Content
- Replace profile image in `src/Assets/`
- Update resume PDF in `public/`
- Modify project data and images
- Update skills and experience sections

## 📊 Analytics and Monitoring

### Recommended Tools
- **Google Analytics 4** - Website traffic analysis
- **Google Search Console** - SEO performance monitoring
- **PageSpeed Insights** - Performance optimization
- **Lighthouse** - Overall website quality audit

### Key Metrics to Monitor
- Page load speed and Core Web Vitals
- Mobile usability scores
- Search console impressions and clicks
- User engagement and bounce rate

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly on mobile devices
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **Email**: rohit369id@gmail.com
- **LinkedIn**: [Rohit Kumar](https://www.linkedin.com/in/rohit-kumar-a02564265)
- **GitHub**: [Rohit-1314](https://github.com/Rohit-1314)
- **Portfolio**: [rohit1314.netlify.app](https://rohit1314.netlify.app)

---

⭐ If you found this portfolio helpful, please give it a star on GitHub!

## 🚀 Features

- **Modern Design**: Clean, professional UI with smooth animations
- **Responsive Layout**: Optimized for all devices (desktop, tablet, mobile)
- **Interactive Sections**: Smooth scrolling navigation and hover effects
- **Skills Showcase**: Animated progress bars and skill categories
- **Project Gallery**: Featured projects with live demos and GitHub links
- **Experience Timeline**: Professional experience with detailed descriptions
- **Contact Form**: Functional contact form with validation
- **Performance Optimized**: Built with Vite for fast loading times

## 🛠️ Built With

- **Frontend**: React.js, CSS3, HTML5
- **Build Tool**: Vite
- **Animations**: Framer Motion
- **Icons**: React Icons (Feather Icons)
- **Intersection Observer**: react-intersection-observer
- **Deployment**: Ready for Vercel, Netlify, or GitHub Pages

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── resume.pdf
│   ├── project-placeholder.jpg
│   └── company-logo-placeholder.jpg
├── src/
│   ├── components/
│   │   ├── Navbar/
│   │   ├── Hero/
│   │   ├── About/
│   │   ├── Skills/
│   │   ├── Projects/
│   │   ├── Experience/
│   │   ├── Certifications/
│   │   ├── Contact/
│   │   ├── Footer/
│   │   └── ScrollToTop/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── package.json
├── vite.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the website

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment.

## 📝 Customization

### Personal Information
Update the following files with your personal information:
- Hero section content in `src/components/Hero/Hero.jsx`
- About section details in `src/components/About/About.jsx`
- Skills and technologies in `src/components/Skills/Skills.jsx`
- Projects information in `src/components/Projects/Projects.jsx`
- Experience details in `src/components/Experience/Experience.jsx`
- Contact information in `src/components/Contact/Contact.jsx`

### Assets
Replace placeholder files in the `public/` directory:
- `resume.pdf` - Your actual resume
- `project-placeholder.jpg` - Screenshots of your projects
- `company-logo-placeholder.jpg` - Company logos

### Styling
The website uses CSS custom properties (variables) for consistent theming:
- Colors: Defined in `src/index.css`
- Component-specific styles: In respective component CSS files

## 🎯 Sections Overview

1. **Hero Section**: Introduction with call-to-action buttons
2. **About Me**: Personal bio, education, and interests
3. **Skills**: Technical skills with animated progress bars
4. **Projects**: Featured projects with descriptions and links
5. **Experience**: Professional experience timeline
6. **Certifications**: Academic and professional achievements
7. **Contact**: Contact form and social media links
8. **Footer**: Additional links and information

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1200px+)
- Laptop (992px - 1199px)
- Tablet (768px - 991px)
- Mobile (320px - 767px)

## 🌟 Key Features

### Animations
- Smooth scroll navigation
- Fade-in animations on scroll
- Hover effects on interactive elements
- Loading spinner and transitions

### Performance
- Optimized images and assets
- Efficient React components
- CSS optimization
- Fast Vite build system

### Accessibility
- Semantic HTML structure
- ARIA labels for screen readers
- Keyboard navigation support
- High contrast colors

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Deploy with automatic builds on push

### Netlify
1. Build the project: `npm run build`
2. Upload the `dist/` folder to Netlify
3. Configure custom domain if needed

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add deploy script to package.json
3. Run: `npm run deploy`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 About Rohit Kumar

- **Name**: Rohit Kumar
- **Education**: B.Tech CSE, ITM Gorakhpur (2022-2025)
- **Email**: rohit369id@gmail.com
- **Phone**: +91 7905384124
- **LinkedIn**: [rohit-kumar-a02564265](https://www.linkedin.com/in/rohit-kumar-a02564265)
- **GitHub**: [Rohit-1314](https://github.com/Rohit-1314)

## 🙏 Acknowledgments

- React.js community for excellent documentation
- Framer Motion for smooth animations
- Feather Icons for beautiful icons
- Vite for fast development experience

---

**Made with ❤️ by Rohit Kumar**
