import React, { useState, useEffect } from 'react';
import { Home, Briefcase, Mail, User, Menu, X } from 'lucide-react';
import { useSpring, animated } from '@react-spring/web';
import HomeSection from './components/sections/HomeSection';
import AboutSection from './components/sections/AboutSection';
import PortfolioSection from './components/sections/PortfolioSection';
import ContactSection from './components/sections/ContactSection';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'portfolio', label: 'Portfolio', icon: Briefcase },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const bgAnim = useSpring({
    backgroundPosition: isMenuOpen ? '25% 50%' : '50% 50%',
    config: { tension: 50, friction: 20 },
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'portfolio', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setIsMenuOpen(false);
    }
  };

  return (
    <div 
      className="min-h-screen bg-background text-text font-sans relative overflow-x-hidden transition-all duration-500"
      style={{
        background: 'radial-gradient(circle at 50% 50%, #121212 0%, #0a0a0a 100%)',
      }}
    >
      {/* Floating gradient orbs */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <animated.div 
          style={{
            position: 'absolute',
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
            top: '-100px',
            left: '-100px',
            animation: 'float 20s ease-in-out infinite',
            ...bgAnim,
          }}
        />
        <div 
          className="absolute w-[500px] h-[500px] rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.1) 0%, transparent 70%)',
            bottom: '-50px',
            right: '-100px',
            animation: 'float 25s ease-in-out infinite reverse',
          }}
        />
        <div 
          className="absolute w-[400px] h-[400px] rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(236, 72, 153, 0.08) 0%, transparent 70%)',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            animation: 'pulse-slow 15s ease-in-out infinite',
          }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-background/50 backdrop-blur-xl border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            DevPortfolio
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                  activeSection === item.id
                    ? 'bg-primary text-white shadow-lg shadow-primary/25'
                    : 'text-text-secondary hover:text-text hover:bg-surface'
                }`}
              >
                <item.icon size={16} />
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-text-secondary hover:text-text hover:bg-surface transition-all duration-300"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-16 left-0 w-full bg-surface/90 backdrop-blur-xl border-b border-border z-40">
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-3 rounded-lg text-left font-medium transition-all duration-300 flex items-center gap-3 ${
                  activeSection === item.id
                    ? 'bg-primary text-white'
                    : 'text-text-secondary hover:text-text hover:bg-background'
                }`}
              >
                <item.icon size={20} />
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="relative z-10">
        <section id="home" className="min-h-screen pt-16 flex items-center">
          <div className="container mx-auto px-6 py-20">
            <HomeSection />
          </div>
        </section>

        <section id="about" className="min-h-screen pt-16 flex items-center">
          <div className="container mx-auto px-6 py-20">
            <AboutSection />
          </div>
        </section>

        <section id="portfolio" className="min-h-screen pt-16 flex items-center">
          <div className="container mx-auto px-6 py-20">
            <PortfolioSection />
          </div>
        </section>

        <section id="contact" className="min-h-screen pt-16 flex items-center">
          <div className="container mx-auto px-6 py-20">
            <ContactSection />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-surface/30 border-t border-border py-12">
        <div className="container mx-auto px-6 text-center">
          <p className="text-text-secondary">
            © {new Date().getFullYear()} DevPortfolio. Crafted with passion and precision.
          </p>
          <div className="mt-4 flex justify-center space-x-6">
            <a href="#" className="text-text-secondary hover:text-primary transition-colors">
              GitHub
            </a>
            <a href="#" className="text-text-secondary hover:text-primary transition-colors">
              LinkedIn
            </a>
            <a href="#" className="text-text-secondary hover:text-primary transition-colors">
              Twitter
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
