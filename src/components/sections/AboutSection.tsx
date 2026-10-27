import React from 'react';
import { useSpring, animated, useTrail } from '@react-spring/web';
import { Code, Database, Cloud, Smartphone } from 'lucide-react';

const AboutSection: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: Code,
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Vue.js'],
      color: 'from-purple-500 to-violet-600',
    },
    {
      title: 'Backend',
      icon: Database,
      skills: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'GraphQL'],
      color: 'from-cyan-500 to-teal-600',
    },
    {
      title: 'Cloud',
      icon: Cloud,
      skills: ['AWS', 'Docker', 'Kubernetes', 'Supabase', 'Firebase'],
      color: 'from-pink-500 to-rose-600',
    },
    {
      title: 'Mobile',
      icon: Smartphone,
      skills: ['React Native', 'Expo', 'iOS', 'Android'],
      color: 'from-amber-500 to-orange-600',
    },
  ];

  const timelineItems = [
    {
      year: '2024',
      title: 'Senior Frontend Engineer',
      company: 'TechVision Inc.',
      description: 'Led a team of 5 developers building scalable React applications with TypeScript, increasing performance by 40%.',
    },
    {
      year: '2023',
      title: 'Full Stack Developer',
      company: 'DevCraft Studios',
      description: 'Built and maintained SaaS platforms using Next.js, PostgreSQL, and AWS infrastructure.',
    },
    {
      year: '2022',
      title: 'Junior Developer',
      company: 'StartUp Labs',
      description: 'Started career as a frontend-focused developer, quickly expanding into full-stack development.',
    },
  ];

  const headerAnim = useSpring({
    from: { opacity: 0, y: 30 },
    to: { opacity: 1, y: 0 },
    config: { tension: 80, friction: 20 },
  });

  const skillTrail = useTrail(skillCategories.length, {
    from: { opacity: 0, y: 20 },
    to: { opacity: 1, y: 0 },
    delay: 300,
    config: { tension: 70, friction: 20 },
  });

  const timelineAnim = useSpring({
    from: { opacity: 0, x: 50 },
    to: { opacity: 1, x: 0 },
    delay: 600,
    config: { tension: 80, friction: 20 },
  });

  return (
    <animated.div style={headerAnim} className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          About Me
        </h2>
        <p className="text-text-secondary text-lg max-w-2xl mx-auto">
          Passionate developer with 5+ years of experience building innovative web applications 
          and scalable solutions. I thrive at the intersection of design and technology.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
        {skillCategories.map((category, index) => (
          <animated.div
            key={category.title}
            className="bg-surface/50 border border-border rounded-2xl p-6 transition-all duration-300 hover:border-primary hover:bg-surface/80 group"
            style={skillTrail[index % skillTrail.length]}
          >
            <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
              <category.icon size={28} className="text-white" />
            </div>
            <h3 className="font-bold text-lg mb-3 text-text">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span 
                  key={skill}
                  className="px-3 py-1 text-sm bg-background/30 rounded-full text-text-secondary"
                >
                  {skill}
                </span>
              ))}
            </div>
          </animated.div>
        ))}
      </div>

      {/* Experience Timeline */}
      <div className="bg-surface/30 border border-border rounded-3xl p-8 mb-12">
        <h3 className="text-2xl font-bold mb-8 text-center text-text">Career Journey</h3>
        <animated.div style={timelineAnim}>
          <div className="space-y-8">
            {timelineItems.map((item, index) => (
              <div 
                key={item.company}
                className="relative pl-8 pb-8 last:pb-0"
              >
                {/* Timeline Line */}
                {index < timelineItems.length - 1 && (
                  <div className="absolute left-[21px] top-7 bottom-0 w-0.5 bg-border" />
                )}
                
                {/* Timeline Node */}
                <div className="absolute left-0 top-0 w-7 h-7 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-white" />
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-4">
                    <span className="px-3 py-1 bg-primary/20 text-primary text-sm font-medium rounded-full">
                      {item.year}
                    </span>
                    <h4 className="font-bold text-lg text-text">{item.title}</h4>
                    <span className="text-text-secondary">• {item.company}</span>
                  </div>
                  <p className="text-text-secondary leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </animated.div>
      </div>
    </animated.div>
  );
};

export default AboutSection;
