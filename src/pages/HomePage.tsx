
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import ProgramCard from '../components/ProgramCard';
import TestimonialCard from '../components/TestimonialCard';
import NewsletterSignup from '../components/NewsletterSignup';
import { HERO_DATA, PROGRAMS, TESTIMONIALS } from '../utils/constants';

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src={HERO_DATA.image}
            alt="HOBE CENTER"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 to-primary-800/50" />
        </div>
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-2xl text-white">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-4 leading-tight"
            >
              {HERO_DATA.title}
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl mb-3 font-light"
            >
              {HERO_DATA.subtitle}
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-200 mb-8 text-lg"
            >
              {HERO_DATA.description}
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Button to={HERO_DATA.ctaLink} variant="secondary" size="lg">
                {HERO_DATA.ctaText}
                <ArrowRight size={18} className="ml-2" />
              </Button>
              
              <Button to={HERO_DATA.secondaryCtaLink} variant="outline" size="lg" className="text-white border-white hover:bg-green-800 hover:text-black">
                {HERO_DATA.secondaryCtaText}
              </Button>
            </motion.div>
          </div>
        </div>
        
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: 0.6,
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 0.2
            }}
          >
            <a 
              href="#welcome" 
              className="flex flex-col items-center text-white"
              aria-label="Scroll down"
            >
              <span className="text-sm mb-2">Scroll Down</span>
              <span className="block w-5 h-5 border-b-2 border-r-2 border-white transform rotate-45" />
            </a>
          </motion.div>
        </div>
      </section>
      
      {/* Welcome Section */}
      <section id="welcome" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle 
                title="Welcome to HOBE CENTER" 
                subtitle="Cultivating a deeper connection with nature and community in Rwanda."
              />
              
              <p className="text-gray-600 mb-6">
                HOBE CENTER is a place of learning, connection, family, growth and a place of everything nestled in Rwanda's beautiful Nyabihu district. Our programs combine traditional ecological knowledge with modern sustainable practices to create transformative experiences for individuals and communities.
              </p>
              
              <p className="text-gray-600 mb-8">
                Whether you're interested in immersive nature education, sustainable agriculture, or community development, our center offers diverse opportunities to engage with the natural world and develop practical skills for a sustainable future.
                <br />
                Here, the feeling of belonging finds you even before you step outside. 
                May your hearth never run out of milk may you always find warmth, welcome, and abundance.

              </p>
              
              <Button to="/about" variant="primary">
                Learn About Our Story
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
                          <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5 }}
                className="rounded-lg overflow-hidden h-48 md:h-64"
              >
                <video
                  src="images/view1.mp4" // Replace with your video URL
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls
                />
              </motion.div>

              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="rounded-lg overflow-hidden h-64 w-80 md:h-80 mt-8"
              >
                <img 
                  src="images/pic3.jpeg" 
                  alt="HOBE CENTER sustainable agriculture" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="rounded-lg overflow-hidden h-64 md:h-80"
              >
                <img 
                  src="images/pic1.jpeg" 
                  alt="HOBE CENTER community building" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="rounded-lg overflow-hidden h-48 w-80 md:h-64 mt-8"
              >
                <img 
                  src="images/pic2.jpeg" 
                  alt="HOBE CENTER youth leadership" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Programs Section */}
      <section className="py-16 md:py-24 bg-primary-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Our Programs" 
            subtitle="Explore our transformative offerings at HOBE CENTER."
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROGRAMS.map((program, index) => (
              <ProgramCard
                key={program.id}
                title={program.title}
                description={program.description}
                image={program.image}
                duration={program.duration}
                ageGroup={program.ageGroup}
                index={index}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button to="/programs" variant="primary">
              View All Programs
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="What People Say" 
            subtitle="Hear from those who have experienced HOBE CENTER programs."
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                text={testimonial.text}
                author={testimonial.author}
                role={testimonial.role}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="font-heading font-bold text-3xl md:text-4xl mb-4"
          >
            Ready to Connect with Nature?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-100 max-w-2xl mx-auto mb-8 text-lg"
          >
            Join us at HOBE CENTER and be part of a community dedicated to environmental stewardship, sustainable living, and personal growth.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button to="/programs" variant="secondary" size="lg">
              Explore Programs
            </Button>
            
            <Button to="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-green-400 hover:text-black">
              Contact Us
            </Button>
          </motion.div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <NewsletterSignup />
    </>
  );
};

export default HomePage;