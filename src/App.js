import React, { useState, useEffect } from 'react';

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Persist dark mode preference
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Navigation Icons as simple SVG components
  const NavigationIcons = {
    Home: () => (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
        <polyline points="9 22 9 12 15 12 15 22"></polyline>
      </svg>
    ),
    About: () => (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
      </svg>
    )
  };

  const navigationLinks = [
    { href: "#home", icon: NavigationIcons.Home, label: "Home" },
    { href: "#about", icon: NavigationIcons.About, label: "About" },
    { href: "#projects", icon: "💼", label: "Projects" },
    { href: "#skills", icon: "💻", label: "Skills" },
    { href: "#contact", icon: "📧", label: "Contact" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-all duration-300">
      {/* Fixed Header with Responsive Navigation */}
      <header className="fixed top-0 left-0 w-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-md shadow-lg z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold dark:text-white">JK</div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 items-center">
            {navigationLinks.map(({ href, label, icon: Icon }) => (
              <a 
                key={href} 
                href={href} 
                className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {typeof Icon === 'function' ? <Icon /> : Icon}
                {label}
              </a>
            ))}
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="ml-4 focus:outline-none hover:rotate-12 transition-transform"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-800 shadow-lg">
            <nav className="flex flex-col divide-y divide-gray-200 dark:divide-gray-700">
              {navigationLinks.map(({ href, label, icon: Icon }) => (
                <a 
                  key={href} 
                  href={href} 
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 flex items-center text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  {typeof Icon === 'function' ? <Icon /> : Icon}
                  {label}
                </a>
              ))}
              <button 
                onClick={() => {
                  setDarkMode(!darkMode);
                  setMobileMenuOpen(false);
                }}
                className="w-full text-left px-4 py-3 flex items-center hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                {darkMode ? '☀️' : '🌙'} Toggle Dark Mode
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content with Improved Spacing and Responsiveness */}
      <main className="container mx-auto px-4 pt-24 space-y-16">
        {/* Home Section */}
        <section id="home" className="min-h-screen flex items-center justify-center text-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 dark:text-white">
              Hi, I'm Jk
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto">
              Full Stack Developer | Web & App Creator | Tech Innovator
            </p>
            <div className="flex justify-center space-x-4">
              <a 
                href="#projects" 
                className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors"
              >
                View My Work
              </a>
              <a 
                href="#contact" 
                className="border border-blue-600 text-blue-600 dark:text-blue-400 px-6 py-3 rounded-full hover:bg-blue-600 hover:text-white transition-colors"
              >
                Contact Me
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="flex items-center">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 dark:text-white">About Me</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                I'm a passionate developer with expertise in React, Python, JavaScript, and modern web technologies. 
                I create responsive, user-friendly web and mobile applications that solve real-world problems.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { title: "Web Development", skills: "React, Next.js, Tailwind CSS" },
                  { title: "Backend", skills: "Python, Django, Flask" }
                ].map(({ title, skills }) => (
                  <div key={title} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
                    <h3 className="font-bold text-blue-600 dark:text-blue-400 mb-2">{title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{skills}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-64 h-64 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full overflow-hidden shadow-lg"></div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 dark:text-white">My Projects</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Project 1", description: "React & Tailwind Web App" },
              { title: "Project 2", description: "Full-stack Django Application" },
              { title: "Project 3", description: "Responsive Mobile Design" }
            ].map((project, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-xl transition-all transform hover:-translate-y-2"
              >
                <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-700 dark:to-gray-600 mb-4 rounded-lg"></div>
                <h3 className="text-xl font-bold mb-2 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                <div className="flex space-x-4">
                  <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                    View Project
                  </a>
                  <a href="#" className="border border-blue-600 text-blue-600 dark:text-blue-400 px-4 py-2 rounded hover:bg-blue-600 hover:text-white">
                    GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-100 dark:bg-gray-800 py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-center md:text-left mb-4 md:mb-0">
                <p className="text-gray-600 dark:text-gray-400">&copy; 2024 JK. All Rights Reserved.</p>
              </div>
              <div className="flex space-x-6">
                {['GitHub', 'LinkedIn', 'Twitter', 'Instagram'].map((platform) => (
                  <a 
                    key={platform} 
                    href="#" 
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {platform}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default App;
