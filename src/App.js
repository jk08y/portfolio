import React, { useState, useEffect } from 'react';

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const navigationLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-md shadow-sm z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tight dark:text-white">JK</div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 items-center">
            {navigationLinks.map(({ href, label }) => (
              <a 
                key={href} 
                href={href} 
                className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {label}
              </a>
            ))}
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="ml-4 text-xl focus:outline-none hover:rotate-12 transition-transform"
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
              <button 
                onClick={() => {
                  setDarkMode(!darkMode);
                  setMobileMenuOpen(false);
                }}
                className="w-full text-left px-4 py-3 text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                {darkMode ? '☀️' : '🌙'} Toggle Dark Mode
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 pt-20">
        {/* Hero Section */}
        <section id="home" className="h-screen flex items-center justify-center text-center">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 dark:text-white tracking-tight">
              Hi, I'm Jk
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              Full Stack Developer crafting innovative web solutions with passion and precision.
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

        {/* About Section */}
        <section id="about" className="py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 dark:text-white tracking-tight">About Me</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                I'm a passionate developer specializing in creating responsive, user-centric web applications. 
                With expertise in modern technologies, I transform complex challenges into elegant digital solutions.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { title: "Web Development", skills: "React, Next.js, Tailwind" },
                  { title: "Backend", skills: "Python, Django, Flask" }
                ].map(({ title, skills }) => (
                  <div key={title} className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-bold text-blue-600 dark:text-blue-400 mb-2">{title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{skills}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-64 h-64 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full shadow-lg"></div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 dark:text-white tracking-tight">
            Recent Projects
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Web Platform", description: "Responsive React Application" },
              { title: "Backend System", description: "Scalable Django Project" },
              { title: "Mobile Design", description: "Elegant Responsive Interface" }
            ].map((project, index) => (
              <div 
                key={index} 
                className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-xl transition-all transform hover:-translate-y-2"
              >
                <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-700 dark:to-gray-600 mb-4 rounded-lg"></div>
                <h3 className="text-xl font-bold mb-2 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                <div className="flex space-x-4">
                  <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm">
                    View Project
                  </a>
                  <a href="#" className="border border-blue-600 text-blue-600 dark:text-blue-400 px-4 py-2 rounded hover:bg-blue-600 hover:text-white text-sm">
                    GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 border-t border-gray-200 dark:border-gray-700">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-center md:text-left mb-4 md:mb-0">
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  &copy; 2024 JK. All Rights Reserved.
                </p>
              </div>
              <div className="flex space-x-4">
                {['GitHub', 'LinkedIn', 'Twitter', 'Instagram'].map((platform) => (
                  <a 
                    key={platform} 
                    href="#" 
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors"
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
