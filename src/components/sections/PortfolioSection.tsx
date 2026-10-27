import React from 'react';
import { useSpring, animated, useTrail } from '@react-spring/web';
import { Github, Globe } from 'lucide-react';

const PortfolioSection: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce platform with real-time inventory, payment processing, and admin dashboard.',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      category: 'Full Stack',
      image: 'https://images.unsplash.com/photo-1460925895613-36d0d5b3c2c3?w=800&auto=format&fit=crop&q=80',
      github: '#',
      demo: '#',
    },
    {
      id: 2,
      title: 'TaskFlow Pro',
      description: 'Modern task management app with real-time collaboration, drag-and-drop interface, and team analytics.',
      tags: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS'],
      category: 'Productivity',
      image: 'https://images.unsplash.com/photo-1499750310108-73022f8d216b?w=800&auto=format&fit=crop&q=80',
      github: '#',
      demo: '#',
    },
    {
      id: 3,
      title: 'Nexa Dashboard',
      description: 'Enterprise analytics dashboard with interactive data visualizations and real-time metric tracking.',
      tags: ['React', 'D3.js', 'GraphQL', 'AWS'],
      category: 'Dashboard',
      image: 'https://images.unsplash.com/photo-1487814708874-3f9e9b3b0c1e?w=800&auto=format&fit=crop&q=80',
      github: '#',
      demo: '#',
    },
    {
      id: 4,
      title: 'Aura Mobile App',
      description: 'Meditation and mindfulness application with guided sessions, progress tracking, and community features.',
      tags: ['React Native', 'Expo', 'Firebase', 'Audio'],
      category: 'Mobile App',
      image: 'https://images.unsplash.com/photo-1513635065359-864b5dc1c2e8?w=800&auto=format&fit=crop&q=80',
      github: '#',
      demo: '#',
    },
    {
      id: 5,
      title: 'CryptoVista',
      description: 'Cryptocurrency tracking platform with portfolio management, price alerts, and market insights.',
      tags: ['Vue.js', 'TypeScript', 'CoinGecko API', 'Chart.js'],
      category: 'Web App',
      image: 'https://images.unsplash.com/photo-1632124586036-3f746c2f16c5?w=800&auto=format&fit=crop&q=80',
      github: '#',
      demo: '#',
    },
    {
      id: 6,
      title: 'SocialSync',
      description: 'Social media management tool for scheduling posts, analyzing engagement, and monitoring mentions.',
      tags: ['SvelteKit', 'Prisma', 'Redis', 'OAuth'],
      category: 'SaaS',
      image: 'https://images.unsplash.com/photo-1485827401242-7f1b3a9d3c5c?w=800&auto=format&fit=crop&q=80',
      github: '#',
      demo: '#',
    },
  ];

  const headerAnim = useSpring({
    from: { opacity: 0, y: 30 },
    to: { opacity: 1, y: 0 },
    config: { tension: 80, friction: 20 },
  });

  const projectTrail = useTrail(projects.length, {
    from: { opacity: 0, y: 20 },
    to: { opacity: 1, y: 0 },
    delay: 300,
    config: { tension: 70, friction: 20 },
  });

  return (
    <animated.div style={headerAnim} className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
          Featured Work
        </h2>
        <p className="text-text-secondary text-lg max-w-2xl mx-auto">
          A curated collection of projects I've built, showcasing my expertise in full-stack development,
          modern frameworks, and clean architectural patterns.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <animated.div
            key={project.id}
            className="group relative bg-surface/50 border border-border rounded-2xl overflow-hidden transition-all duration-500 hover:border-primary hover:shadow-2xl hover:shadow-primary/20"
            style={projectTrail[index % projectTrail.length]}
          >
            {/* Project Image */}
            <div className="relative h-48 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-60" />
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full border border-primary/30">
                  {project.category}
                </span>
              </div>
            </div>

            {/* Project Content */}
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-bold text-text group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed line-clamp-2">
                {project.description}
              </p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="px-2 py-1 text-xs bg-background/30 rounded-full text-text-secondary"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex gap-4 pt-4 border-t border-border">
                <a 
                  href={project.demo} 
                  className="flex items-center gap-2 text-sm font-medium text-text-secondary hover:text-primary transition-colors group/link"
                >
                  <Globe size={16} className="group-hover/link:scale-110 transition-transform" />
                  Live Demo
                </a>
                <a 
                  href={project.github} 
                  className="flex items-center gap-2 text-sm font-medium text-text-secondary hover:text-primary transition-colors group/link"
                >
                  <Github size={16} className="group-hover/link:scale-110 transition-transform" />
                  GitHub
                </a>
              </div>
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </animated.div>
        ))}
      </div>
    </animated.div>
  );
};

export default PortfolioSection;
