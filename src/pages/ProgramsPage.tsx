
import SectionTitle from '../components/SectionTitle';
import { PROGRAMS, SPORTS_EVENTS} from '../utils/constants';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Activity, Trophy } from 'lucide-react';
import Button from '../components/Button';
import NewsletterSignup from '../components/NewsletterSignup';

const ProgramsPage = () => {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-primary-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-heading font-bold text-4xl md:text-5xl mb-4"
            >
              Our Programs
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-gray-100"
            >
              Discover the transformative experiences we offer at HOBE CENTER, designed to connect people with nature, build sustainable skills, and foster community resilience.
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Programs */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          {PROGRAMS.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-20 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={`order-1 ${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                <div className="rounded-lg overflow-hidden h-64 md:h-96">
                  <img 
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className={`order-2 ${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                <h2 className="font-heading font-bold text-3xl text-primary-700 mb-3">
                  {program.title}
                </h2>
                
                <div className="h-1 w-16 bg-secondary-400 mb-5" />
                
                <p className="text-gray-600 mb-6 text-lg">
                  {program.description}
                </p>
                
                <div className="flex flex-wrap gap-6 mb-6 text-gray-600">
                  <div className="flex items-center gap-2">
                    <Calendar size={18} className="text-primary-500" />
                    <span>{program.duration}</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Users size={18} className="text-primary-500" />
                    <span>{program.ageGroup}</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <MapPin size={18} className="text-primary-500" />
                    <span>HOBE CENTER, Nyabihu</span>
                  </div>
                </div>
                
            <div className="mb-6">
              <h3 className="font-medium text-lg text-primary-700 mb-2">
                What you'll learn:
              </h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-600">
                {program.learningPoints.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
                
                <Button to="/contact" variant="primary">
                  Inquire About This Program
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

       {/* Sports & Leisure Events */}
       <section className="py-16 md:py-24 bg-primary-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Sports & Leisure Events"
            subtitle="Stay active and connected with our community through regular sports and recreational activities."
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {SPORTS_EVENTS.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg overflow-hidden shadow-soft group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-800/60 to-transparent" />
                </div>
                
                <div className="p-6">
                  <h3 className="font-heading font-semibold text-xl text-primary-700 mb-3">
                    {event.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    {event.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} className="text-primary-500" />
                      <span>{event.schedule}</span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Activity size={16} className="text-primary-500" />
                      <span>{event.difficulty}</span>
                    </div>
                  </div>
                  
                  <Button 
                    to="/contact" 
                    variant="outline"
                    className="mt-4 group-hover:bg-primary-500 group-hover:text-white"
                  >
                    Join Event
                    <Trophy size={16} className="ml-2" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Custom Programs */}
      <section className="py-16 md:py-24 bg-primary-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Custom Programs"
            subtitle="We can design specialized programs for your school, organization, or community."
            center
          />
          
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray-600 mb-8">
              In addition to our standard offerings, HOBE CENTER can create tailored experiences that address your specific needs and goals. From corporate team-building retreats to educational programs for schools, we work closely with you to develop meaningful experiences that connect people with nature and build sustainable skills.
            </p>
            
            <Button to="/contact" variant="primary" size="lg">
              Request a Custom Program
            </Button>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <NewsletterSignup />
    </>
  );
};

export default ProgramsPage;