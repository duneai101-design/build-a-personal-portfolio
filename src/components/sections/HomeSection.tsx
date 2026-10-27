import React from 'react';
import { useSpring, animated, useTrail } from '@react-spring/web';
import { Code, ChevronDown, Github, Linkedin, Twitter } from 'lucide-react';

const HomeSection: React.FC = () => {

  const titleAnim = useSpring({
    from: { opacity: 0, transform: 'translateY(30px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay: 200,
    config: { tension: 80, friction: 20 },
  });

  const subtitleAnim = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay: 500,
    config: { tension: 80, friction: 20 },
  });

  const trail = useTrail(3, {
    from: { opacity: 0, x: -20 },
    to: { opacity: 1, x: 0 },
    delay: 800,
    config: { tension: 60, friction: 20 },
  });

  return (
    <animated.div
      style={titleAnim}
      className="max-w-5xl mx-auto text-center relative"
    >
      {/* Hero Content */}
      <div className="space-y-8">
        <animated.h1 
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight"
          style={titleAnim}
        >
          <span className="block">I build digital</span>
          <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent bg-300% animate-gradient-x">
            experiences that matter
          </span>
        </animated.h1>

        <animated.p 
          className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto leading-relaxed"
          style={subtitleAnim}
        >
          Full-stack developer and designer crafting elegant, performant web applications 
          with modern technologies. Specialized in React, TypeScript, and cloud-scale architectures.
        </animated.p>

        {/* CTA Buttons */}
        <animated.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
          style={trail[0]}
        >
          <button className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/30 flex items-center gap-2 group">
            View My Work
            <Code size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-8 py-4 bg-surface/30 border border-border text-text rounded-full font-semibold text-lg transition-all duration-300 hover:bg-surface hover:border-primary flex items-center gap-2">
            Download Resume
          </button>
        </animated.div>

        {/* Social Links */}
        <animated.div 
          className="flex justify-center space-x-6 pt-8"
          style={trail[1]}
        >
          <a 
            href="#" 
            className="w-12 h-12 bg-surface/30 border border-border rounded-full flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
          >
            <Github size={20} className="group-hover:scale-110 transition-transform" />
          </a>
          <a 
            href="#" 
            className="w-12 h-12 bg-surface/30 border border-border rounded-full flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
          >
            <Linkedin size={20} className="group-hover:scale-110 transition-transform" />
          </a>
          <a 
            href="#" 
            className="w-12 h-12 bg-surface/30 border border-border rounded-full flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
          >
            <Twitter size={20} className="group-hover:scale-110 transition-transform" />
          </a>
        </animated.div>
      </div>

      {/* Scroll Indicator */}
      <animated.div 
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-12"
        style={trail[2]}
      >
        <div className="flex flex-col items-center gap-2 text-text-secondary">
          <span className="text-sm">Scroll to explore</span>
          <ChevronDown size={24} className="animate-bounce" />
        </div>
      </animated.div>
    </animated.div>
  );
};

export default HomeSection;
