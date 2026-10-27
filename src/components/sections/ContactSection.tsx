import React, { useState } from 'react';
import { useSpring, animated, useTrail } from '@react-spring/web';
import { Send, Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const headerAnim = useSpring({
    from: { opacity: 0, y: 30 },
    to: { opacity: 1, y: 0 },
    config: { tension: 80, friction: 20 },
  });

  const formTrail = useTrail(5, {
    from: { opacity: 0, x: -20 },
    to: { opacity: 1, x: 0 },
    delay: 300,
    config: { tension: 70, friction: 20 },
  });

  const infoTrail = useTrail(4, {
    from: { opacity: 0, x: 20 },
    to: { opacity: 1, x: 0 },
    delay: 400,
    config: { tension: 70, friction: 20 },
  });

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'hello@devportfolio.com',
      href: 'mailto:hello@devportfolio.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'San Francisco, CA',
      href: '#',
    },
    {
      icon: Github,
      title: 'GitHub',
      value: '@devportfolio',
      href: '#',
    },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <animated.div style={headerAnim} className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
          Let's Connect
        </h2>
        <p className="text-text-secondary text-lg max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? I'd love to hear from you.
          Drop me a message and I'll get back to you as soon as possible.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <animated.div style={formTrail[0]}>
          <div className="bg-surface/30 border border-border rounded-2xl p-8">
            <h3 className="text-xl font-bold text-text mb-6">Send me a message</h3>
            
            {isSubmitted ? (
              <animated.div 
                className="text-center py-20"
                style={{
                  animation: 'fadeIn 0.5s ease-in-out',
                }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send size={32} className="text-white" />
                </div>
                <h4 className="text-2xl font-bold text-text mb-2">Message Sent!</h4>
                <p className="text-text-secondary">
                  Thank you for your message. I'll be in touch shortly.
                </p>
              </animated.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <animated.div style={formTrail[1]}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background/50 border border-border rounded-xl text-text placeholder-text-secondary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                  />
                </animated.div>
                
                <animated.div style={formTrail[2]}>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background/50 border border-border rounded-xl text-text placeholder-text-secondary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                  />
                </animated.div>
                
                <animated.div style={formTrail[3]}>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background/50 border border-border rounded-xl text-text placeholder-text-secondary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                  />
                </animated.div>
                
                <animated.div style={formTrail[4]}>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-background/50 border border-border rounded-xl text-text placeholder-text-secondary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 resize-none"
                  />
                </animated.div>
                
                <animated.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/30 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  style={{
                    ...formTrail[4],
                    selector: {
                      opacity: 0,
                    },
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={20} />
                    </>
                  )}
                </animated.button>
              </form>
            )}
          </div>
        </animated.div>

        {/* Contact Info */}
        <div className="space-y-8">
          {contactInfo.map((info, index) => (
            <animated.div
              key={info.title}
              className="flex items-start gap-4 p-6 bg-surface/30 border border-border rounded-xl transition-all duration-300 hover:border-primary hover:bg-surface/50 group"
              style={infoTrail[index % infoTrail.length]}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <info.icon size={22} className="text-white" />
              </div>
              <div>
                <h4 className="font-bold text-text mb-1">{info.title}</h4>
                <a 
                  href={info.href} 
                  className="text-text-secondary hover:text-primary transition-colors"
                >
                  {info.value}
                </a>
              </div>
            </animated.div>
          ))}

          {/* Social Links */}
          <animated.div 
            className="flex gap-4 pt-4"
            style={infoTrail[3]}
          >
            <a 
              href="#" 
              className="w-12 h-12 bg-surface/30 border border-border rounded-full flex items-center justify-center text-text-secondary hover:text-white hover:bg-gradient-to-r hover:from-primary hover:to-secondary transition-all duration-300 group"
            >
              <Github size={20} className="group-hover:scale-110 transition-transform" />
            </a>
            <a 
              href="#" 
              className="w-12 h-12 bg-surface/30 border border-border rounded-full flex items-center justify-center text-text-secondary hover:text-white hover:bg-gradient-to-r hover:from-cyan-500 hover:to-teal-500 transition-all duration-300 group"
            >
              <Linkedin size={20} className="group-hover:scale-110 transition-transform" />
            </a>
            <a 
              href="#" 
              className="w-12 h-12 bg-surface/30 border border-border rounded-full flex items-center justify-center text-text-secondary hover:text-white hover:bg-gradient-to-r hover:from-pink-500 hover:to-rose-500 transition-all duration-300 group"
            >
              <Twitter size={20} className="group-hover:scale-110 transition-transform" />
            </a>
          </animated.div>
        </div>
      </div>
    </animated.div>
  );
};

export default ContactSection;
