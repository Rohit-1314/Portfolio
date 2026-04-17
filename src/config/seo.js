// SEO and structured data configuration
export const seoConfig = {
  siteUrl: 'https://rohit1314.netlify.app',
  siteName: 'Rohit Kumar Portfolio',
  defaultTitle: 'Rohit Kumar - Full-Stack Developer | Java | React | Spring Boot',
  defaultDescription: 'Rohit Kumar - Aspiring Full-Stack Developer from Gorakhpur, India. Expert in Java, React.js, Spring Boot, and modern web development. View my portfolio showcasing innovative projects and technical skills.',
  author: 'Rohit Kumar',
  twitterHandle: '@rohit1314',
  
  keywords: [
    'Rohit Kumar',
    'Full Stack Developer',
    'Java Developer',
    'React Developer',
    'Spring Boot',
    'JavaScript',
    'Frontend Developer',
    'Backend Developer',
    'Web Developer',
    'Software Engineer',
    'Portfolio',
    'Projects',
    'Gorakhpur Developer',
    'Rohit Kumar Portfolio',
    'Rohit1314',
    'Rohit Kumar Gorakhpur',
    'Rohit Kumar ITM Gorakhpur',
    'Rohit1314 Netlify',
    'Rohit1314.netlify.app',
    'Rohit1314 Electronics',
    'Rohit Kumar MP Polytechnic Gorakhpur',
    'India',
    'Computer Science Graduate',
    'HTML',
    'CSS',
    'Node.js',
    'REST API',
    'Database',
    'Git',
    'GitHub',
    'Responsive Design',
    'UI/UX'
  ],
  
  skills: [
    'Java',
    'React',
    'Spring Boot',
    'JavaScript',
    'HTML',
    'CSS',
    'Node.js',
    'REST APIs',
    'Database Design',
    'Git',
    'GitHub',
    'MySQL',
    'MongoDB',
    'Bootstrap',
    'Tailwind CSS'
  ],
  
  social: {
    github: 'https://github.com/Rohit-1314',
    linkedin: 'https://www.linkedin.com/in/rohit-kumar-a02564265',
    email: 'rohit369id@gmail.com'
  },
  
  location: {
    city: 'Gorakhpur',
    state: 'Uttar Pradesh',
    country: 'India'
  }
};

// Generate structured data for different page types
export const generateStructuredData = (pageType = 'website') => {
  const baseData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: seoConfig.author,
    url: seoConfig.siteUrl,
    image: `${seoConfig.siteUrl}/public/images/rohit-profile.jpg`,
    sameAs: [
      seoConfig.social.github,
      seoConfig.social.linkedin
    ],
    jobTitle: 'Full-Stack Developer',
    worksFor: {
      '@type': 'Organization',
      name: 'Freelance'
    },
    alumniOf: 'Computer Science Graduate',
    knowsAbout: seoConfig.skills,
    address: {
      '@type': 'PostalAddress',
      addressLocality: seoConfig.location.city,
      addressRegion: seoConfig.location.state,
      addressCountry: seoConfig.location.country
    },
    email: seoConfig.social.email
  };

  if (pageType === 'portfolio') {
    return {
      ...baseData,
      '@type': ['Person', 'CreativeWork'],
      creator: baseData,
      about: seoConfig.defaultDescription
    };
  }

  return baseData;
};
