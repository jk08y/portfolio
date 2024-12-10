import React, { useState, useEffect, useRef } from 'react';
import { Github, Twitter, Sun, Moon, Code, Briefcase, User, Send, Menu, X, Download, ExternalLink } from 'lucide-react';

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [modalContent, setModalContent] = useState(null);
  const [emailCopied, setEmailCopied] = useState(false);

  const skills = [
    { category: 'Frontend', skills: [
      { name: 'React', level: 90, color: 'bg-blue-500' },
      { name: 'TypeScript', level: 85, color: 'bg-teal-500' },
      { name: 'Next.js', level: 80, color: 'bg-purple-500' }
    ]},
    { category: 'Backend', skills: [
      { name: 'Node.js', level: 85, color: 'bg-green-500' },
      { name: 'GraphQL', level: 75, color: 'bg-pink-500' },
      { name: 'Python', level: 70, color: 'bg-yellow-500' }
    ]}
  ];

  const projects = [
    {
      id: 1,
      title: 'AI-Powered Task Manager',
      description: 'Full-stack application with AI-driven task prioritization and intelligent scheduling.',
      technologies: ['React', 'Node.js', 'Machine Learning'],
      github: 'https://github.com/yourusername/ai-task-manager',
      liveDemo: 'https://ai-task-manager.vercel.app'
    },
    {
      id: 2,
      title: 'Real-Time Collaboration Platform',
      description: 'Seamless team collaboration tool with live editing and communication features.',
      technologies: ['WebSockets', 'React', 'GraphQL'],
      github: 'https://github.com/yourusername/collaboration-platform',
      liveDemo: 'https://team-collab.netlify.app'
    },
    {
      id: 3,
      title: 'E-Commerce Microservices',
      description: 'Scalable e-commerce platform with microservices architecture and advanced state management.',
      technologies: ['Docker', 'Kubernetes', 'React'],
      github: 'https://github.com/yourusername/ecommerce-microservices',
      liveDemo: 'https://ecommerce-microservices.app'
    }
  ];

  const contactInfo = {
    email: 'johndoe@example.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA'
  };

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

    return () => {
      observer.disconnect();
    };
  }, [darkMode]);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    });
  };

  const openModal = (content) => {
    setModalContent(content);
  };

  const closeModal = () => {
    setModalContent(null);
  };

  const SkillBar = ({ name, level, color }) => (
    <div className="flex items-center space-x-3 mb-2">
      <div className={`w-2 h-2 ${color} rounded-full`}></div>
      <span className="text-gray-700 dark:text-gray-300 w-24">{name}</span>
      <div className="flex-grow h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <div 
          className={`h-full ${color} rounded-full transition-all duration-500`} 
          style={{ width: `${level}%` }}
        ></div>
      </div>
      <span className="text-xs text-gray-500 dark:text-gray-400">{level}%</span>
    </div>
  );

  const NavigationMenu = () => (
    <nav className="fixed top-0 left-0 w-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-md shadow-sm z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold tracking-tight dark:text-white">JD</div>
        
        <div className="hidden md:flex items-center space-x-6">
          {['home', 'about', 'projects', 'skills', 'contact'].map(section => (
            <a 
              key={section} 
              href={`#${section}`} 
              className={`flex items-center text-sm font-medium transition-colors ${
                activeSection === section 
                  ? 'text-blue-600 dark:text-blue-400' 
                  : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>

        <div className="md:hidden flex items-center space-x-4">
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="text-gray-600 dark:text-gray-300"
          >
            {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
          </button>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-800 shadow-lg">
          <nav className="flex flex-col divide-y divide-gray-200 dark:divide-gray-700">
            {['home', 'about', 'projects', 'skills', 'contact'].map(section => (
              <a 
                key={section} 
                href={`#${section}`} 
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 flex items-center text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}
          </nav>
        </div>
      )}
    </nav>
  );

  const Modal = () => {
    if (!modalContent) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-[100] flex items-center justify-center p-4">
        <div className="bg-white dark:bg-gray-800 rounded-xl max-w-lg w-full max-h-[80vh] overflow-y-auto p-6 relative shadow-2xl">
          <button 
            onClick={closeModal}
            className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 hover:text-red-500"
          >
            <X className="w-6 h-6" />
          </button>
          {modalContent}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <NavigationMenu />
      
      <main className="container mx-auto px-4 pt-24">
        <section id="home" className="min-h-screen flex items-center justify-center text-center py-12">
          <div className="max-w-xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 dark:text-white tracking-tight">
              John Doe
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              Full Stack Developer | Technology Innovator | Problem Solver
            </p>
            <div className="flex justify-center space-x-4">
              <a 
                href="#projects" 
                className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors font-medium flex items-center"
              >
                <Code className="mr-2 w-5 h-5" /> View Projects
              </a>
              <a 
                href="#contact" 
                className="border border-blue-600 text-blue-600 dark:text-blue-400 px-6 py-3 rounded-full hover:bg-blue-600 hover:text-white transition-colors font-medium flex items-center"
              >
                <Send className="mr-2 w-5 h-5" /> Contact
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 dark:text-white tracking-tight">
                About Me
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                A passionate full-stack developer with 7+ years of experience in creating innovative digital solutions. 
                I specialize in building scalable web applications using modern technologies and best practices.
              </p>
              <div className="flex space-x-4 mt-6">
                <a 
                  href="/resume.pdf" 
                  download 
                  className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-colors flex items-center"
                >
                  <Download className="mr-2 w-5 h-5" /> Download CV
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-64 h-64 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full shadow-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center" style={{
                  backgroundImage: 'url("/api/placeholder/400/400")'
                }}></div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 dark:text-white tracking-tight">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map(({ category, skills }) => (
              <div key={category} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <h3 className="text-2xl font-semibold mb-6 text-blue-600 dark:text-blue-400">
                  {category} Skills
                </h3>
                {skills.map((skill) => (
                  <SkillBar 
                    key={skill.name} 
                    name={skill.name} 
                    level={skill.level} 
                    color={skill.color} 
                  />
                ))}
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 dark:text-white tracking-tight">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map(project => (
              <div 
                key={project.id} 
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all group"
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <div className="flex space-x-2">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-black dark:hover:text-white"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a 
                      href={project.liveDemo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-blue-600"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-2 py-1 bg-blue-50 dark:bg-gray-700 text-blue-600 dark:text-blue-300 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <button 
                  onClick={() => openModal(
                    <div>
                      <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
                      <p className="mb-4">{project.description}</p>
                      <div className="mb-4">
                        <h3 className="font-semibold mb-2">Technologies Used</h3>
                        <ul className="list-disc pl-5">
                          {project.technologies.map((tech, index) => (
                            <li key={index} className="text-gray-600 dark:text-gray-400">
                              {tech}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex space-x-4">
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors flex items-center"
                        >
                          <Github className="mr-2 w-5 h-5" /> GitHub
                        </a>
                        <a 
                          href={project.liveDemo} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="border border-blue-600 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full hover:bg-blue-600 hover:text-white transition-colors flex items-center"
                        >
                          <ExternalLink className="mr-2 w-5 h-5" /> Live Demo
                        </a>
                      </div>
                    </div>
                  )}
                  className="w-full bg-blue-50 dark:bg-gray-700 text-blue-600 dark:text-blue-300 px-4 py-2 rounded-full hover:bg-blue-100 dark:hover:bg-gray-600 transition-colors"
                >
                  View Details
                </button>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 dark:text-white tracking-tight">
              Contact Me
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-semibold mb-6 text-blue-600 dark:text-blue-400">
                  Get in Touch
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-50 dark:bg-gray-800 p-3 rounded-full">
                      <Send className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="text-gray-600 dark:text-gray-400">Email</p>
                      <div className="flex items-center space-x-2">
                        <span className="font-medium">{contactInfo.email}</span>
                        <button 
                          onClick={() => copyToClipboard(contactInfo.email)}
                          className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
                        >
                          {emailCopied ? 'Copied!' : 'Copy'}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-50 dark:bg-gray-800 p-3 rounded-full">
                      <User className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="text-gray-600 dark:text-gray-400">Phone</p>
                      <span className="font-medium">{contactInfo.phone}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-50 dark:bg-gray-800 p-3 rounded-full">
                      <Briefcase className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="text-gray-600 dark:text-gray-400">Location</p>
                      <span className="font-medium">{contactInfo.location}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-6 text-blue-600 dark:text-blue-400">
                  Send a Message
                </h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                      Full Name
                    </label>
                    <input 
                      type="text" 
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                      Email Address
                    </label>
                    <input 
                      type="email" 
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                      Your Message
                    </label>
                    <textarea 
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Write your message here..."
                      required
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    className="w-full bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors font-medium"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <footer className="py-8 border-t border-gray-200 dark:border-gray-700">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-center md:text-left mb-4 md:mb-0">
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  &copy; 2024 John Doe. All Rights Reserved.
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

      <Modal />
    </div>
  );
};

export default App;
