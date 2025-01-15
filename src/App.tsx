import React from 'react';
import { Github, Linkedin, Mail, Palette, Code, Layout, Camera, ExternalLink } from 'lucide-react';

function App() {
  const projects = [
    {
      title: "Brand Identity Design",
      description: "Complete brand redesign for a tech startup",
      image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?auto=format&fit=crop&q=80&w=800",
      category: "Branding"
    },
    {
      title: "UI/UX Design System",
      description: "Component library and design system for enterprise software",
      image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=800",
      category: "UI/UX"
    },
    {
      title: "Photography Portfolio",
      description: "Custom portfolio website for a professional photographer",
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&q=80&w=800",
      category: "Web Design"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="bg-white">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Palette className="h-8 w-8 text-indigo-600" />
            <div className="flex space-x-4">
              <a href="#work" className="text-gray-700 hover:text-indigo-600">Work</a>
              <a href="#about" className="text-gray-700 hover:text-indigo-600">About</a>
              <a href="#contact" className="text-gray-700 hover:text-indigo-600">Contact</a>
            </div>
          </div>
        </nav>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Creative Designer & Developer</h1>
          <p className="text-xl text-gray-600 max-w-2xl mb-8">
            Crafting beautiful digital experiences through thoughtful design and clean code.
            Specializing in brand identity, UI/UX, and web development.
          </p>
          <div className="flex space-x-4">
            <a href="#contact" className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition">
              Get in touch
            </a>
            <a href="#work" className="border border-gray-300 px-6 py-3 rounded-lg hover:border-indigo-600 hover:text-indigo-600 transition">
              View work
            </a>
          </div>
        </div>
      </header>

      {/* Skills Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <Layout className="h-8 w-8 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
              <p className="text-gray-600">Creating intuitive and beautiful user interfaces that delight users.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <Code className="h-8 w-8 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Development</h3>
              <p className="text-gray-600">Building responsive and performant web applications.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <Camera className="h-8 w-8 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Photography</h3>
              <p className="text-gray-600">Capturing moments and creating visual stories.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="work" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12">Selected Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group relative">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <ExternalLink className="text-white h-8 w-8" />
                  </div>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">{project.title}</h3>
                <p className="text-sm text-gray-500">{project.category}</p>
                <p className="mt-1 text-sm text-gray-600">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">About Me</h2>
              <p className="text-gray-600 mb-6">
                I'm a passionate designer and developer with over 5 years of experience creating digital products.
                My approach combines aesthetic sensibility with technical expertise to deliver exceptional results.
              </p>
              <p className="text-gray-600 mb-6">
                When I'm not designing or coding, you can find me exploring photography, reading about new technologies,
                or contributing to open-source projects.
              </p>
            </div>
            <div className="relative h-96">
              <img
                src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800"
                alt="Designer at work"
                className="h-full w-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Get in Touch</h2>
          <div className="flex justify-center space-x-8">
            <a href="https://github.com" className="text-gray-600 hover:text-indigo-600 transition">
              <Github className="h-8 w-8" />
            </a>
            <a href="https://linkedin.com" className="text-gray-600 hover:text-indigo-600 transition">
              <Linkedin className="h-8 w-8" />
            </a>
            <a href="mailto:hello@example.com" className="text-gray-600 hover:text-indigo-600 transition">
              <Mail className="h-8 w-8" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-600">© 2024 Your Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;