import React, { useState, useEffect } from 'react';
import { Github, Twitter, Sun, Moon } from 'lucide-react';

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    
    const sections = document.querySelectorAll('section');
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));

    const handleScroll = () => {
      const scrollY = window.scrollY;
      document.querySelectorAll('[data-scroll-speed]').forEach(element => {
        const speed = parseFloat(element.getAttribute('data-scroll-speed'));
        element.style.transform = `translateY(${scrollY * speed}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [darkMode]);

  const navigationLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" }
  ];

  const ThemeToggle = () => (
    <div 
      onClick={() => setDarkMode(!darkMode)}
      className="cursor-pointer transition-transform hover:scale-110"
      aria-label="Toggle Dark Mode"
    >
      {darkMode ? (
        <Sun className="w-6 h-6 text-yellow-500 hover:rotate-12 transition-transform" />
      ) : (
        <Moon className="w-6 h-6 text-blue-600 hover:rotate-12 transition-transform" />
      )}
    </div>
  );

  const TechSkill = ({ name, level }) => (
    <div className="flex items-center space-x-3 mb-2">
      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
      <span className="text-gray-700 dark:text-gray-300">{name}</span>
      <div className="flex-grow h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <div 
          className="h-full bg-blue-500 rounded-full" 
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );

  const ProjectHighlight = ({ title, description, technologies, links }) => (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow space-y-4">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span 
            key={index} 
            className="px-2 py-1 bg-blue-50 dark:bg-gray-700 text-blue-600 dark:text-blue-300 text-xs rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex space-x-4">
        {links.map(({ href, label, icon: Icon }) => (
          <a 
            key={label}
            href={href} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <Icon className="mr-2 w-4 h-4" />
            {label}
          </a>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <header className="fixed top-0 left-0 w-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-md shadow-sm z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tight dark:text-white">JK</div>
          
          <nav className="hidden md:flex items-center space-x-6">
            {navigationLinks.map(({ href, label }) => (
              <a 
                key={href} 
                href={href} 
                className={`text-sm font-medium transition-colors ${
                  activeSection === href.slice(1) 
                    ? 'text-blue-600 dark:text-blue-400' 
                    : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                {label}
              </a>
            ))}
            <ThemeToggle />
          </nav>

          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button 
              className="focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-800 shadow-lg">
            <nav className="flex flex-col divide-y divide-gray-200 dark:divide-gray-700">
              {navigationLinks.map(({ href, label }) => (
                <a 
                  key={href} 
                  href={href} 
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      <main className="container mx-auto px-4 pt-16">
        <section id="home" className="min-h-screen flex items-center justify-center text-center py-12">
          <div className="max-w-xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 dark:text-white tracking-tight">
              JK: Full Stack Developer
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              Transforming ideas into elegant, efficient digital solutions with cutting-edge web technologies.
            </p>
            <div className="flex justify-center space-x-4">
              <a 
                href="#projects" 
                className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors font-medium"
              >
                View Projects
              </a>
              <a 
                href="#contact" 
                className="border border-blue-600 text-blue-600 dark:text-blue-400 px-6 py-3 rounded-full hover:bg-blue-600 hover:text-white transition-colors font-medium"
              >
                Contact Me
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 dark:text-white tracking-tight">
                Technical Expertise
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-blue-600 dark:text-blue-400">
                    Frontend Development
                  </h3>
                  <TechSkill name="React" level={90} />
                  <TechSkill name="TypeScript" level={85} />
                  <TechSkill name="Next.js" level={80} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-blue-600 dark:text-blue-400">
                    Backend Development
                  </h3>
                  <TechSkill name="Node.js" level={85} />
                  <TechSkill name="Python" level={75} />
                  <TechSkill name="GraphQL" level={70} />
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-64 h-64 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full shadow-lg"></div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 dark:text-white tracking-tight">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ProjectHighlight 
              title="Portfolio Website"
              description="Responsive personal portfolio with advanced theme switching"
              technologies={['React', 'Tailwind', 'Framer Motion']}
              links={[
                { 
                  href: "https://github.com/yourusername/portfolio", 
                  label: "GitHub",
                  icon: Github
                }
              ]}
            />
            <ProjectHighlight 
              title="E-Commerce Platform"
              description="Full-stack e-commerce solution with advanced state management"
              technologies={['Next.js', 'Redux', 'Stripe']}
              links={[
                { 
                  href: "https://github.com/yourusername/ecommerce", 
                  label: "GitHub",
                  icon: Github
                }
              ]}
            />
            <ProjectHighlight 
              title="Real-time Chat App"
              description="Scalable messaging application with WebSocket integration"
              technologies={['React', 'Node.js', 'Socket.io']}
              links={[
                { 
                  href: "https://github.com/yourusername/chat-app", 
                  label: "GitHub",
                  icon: Github
                }
              ]}
            />
          </div>
        </section>

        <footer className="py-8 border-t border-gray-200 dark:border-gray-700">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-center md:text-left mb-4 md:mb-0">
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  &copy; 2024 JK. All Rights Reserved.
                </p>
              </div>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/yourusername" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href="https://twitter.com/yourusername" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-400"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default App;