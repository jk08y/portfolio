import React, { useState, useEffect } from 'react';

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  // Persist dark mode preference
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Navigation Icons as simple SVG components
  const HomeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
      <polyline points="9 22 9 12 15 12 15 22"></polyline>
    </svg>
  );

  const UserIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
      <circle cx="12" cy="7" r="4"></circle>
    </svg>
  );

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-all duration-300">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 w-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-md shadow-lg z-50">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold dark:text-white">JK</div>
          <div className="flex space-x-6 items-center">
            {[
              { href: "#home", icon: HomeIcon, label: "Home" },
              { href: "#about", icon: UserIcon, label: "About" },
              { href: "#projects", icon: () => "💼", label: "Projects" },
              { href: "#skills", icon: () => "💻", label: "Skills" },
              { href: "#contact", icon: () => "📧", label: "Contact" }
            ].map(({ href, label }) => (
              <a 
                key={href} 
                href={href} 
                className="hover:text-blue-600 dark:hover:text-blue-400 flex items-center transition-colors"
              >
                {label}
              </a>
            ))}
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="focus:outline-none hover:rotate-12 transition-transform"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 pt-24">
        {/* Home Section */}
        <section id="home" className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4 dark:text-white">Hi, I'm Jk</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Full Stack Developer | Web & App Creator | Tech Innovator
            </p>
            <div className="flex justify-center space-x-6">
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
        <section id="about" className="min-h-screen flex items-center">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 dark:text-white">About Me</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                I'm a passionate developer with expertise in React, Python, JavaScript, and modern web technologies. 
                I create responsive, user-friendly web and mobile applications that solve real-world problems.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { title: "Web Development", skills: "React, Next.js, Tailwind CSS" },
                  { title: "Backend", skills: "Python, Django, Flask" }
                ].map(({ title, skills }) => (
                  <div key={title}>
                    <h3 className="font-bold text-blue-600 dark:text-blue-400">{title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{skills}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-64 h-64 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                <div className="w-full h-full bg-blue-600 opacity-50"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen">
          <h2 className="text-4xl font-bold text-center mb-12 dark:text-white">My Projects</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Project 1", description: "A web application using React and Tailwind CSS" },
              { title: "Project 2", description: "A full-stack app with Django backend" },
              { title: "Project 3", description: "Mobile-first responsive design project" }
            ].map((project, index) => (
              <div 
                key={index} 
                className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 hover:scale-105 transition-transform"
              >
                <div className="h-48 bg-gray-200 dark:bg-gray-700 mb-4 rounded"></div>
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
        <footer className="bg-gray-100 dark:bg-gray-800 py-8 mt-12">
          <div className="container mx-auto px-4 text-center">
            <div className="flex justify-center space-x-6 mb-6">
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
            <p className="text-gray-600 dark:text-gray-400">&copy; 2024 JK. All Rights Reserved.</p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default App;