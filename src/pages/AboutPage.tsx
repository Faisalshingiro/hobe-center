
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import TeamMemberCard from '../components/TeamMemberCard';
import { ABOUT_INFO, TEAM_MEMBERS } from '../utils/constants';
import { Heart, Leaf, BookOpen, Users, Lightbulb } from 'lucide-react';
import NewsletterSignup from '../components/NewsletterSignup';

const AboutPage = () => {
  const values = [
    { 
      name: ABOUT_INFO.values[0], 
      icon: Leaf,
      description: "Protecting and honoring the natural world through sustainable practices and education."
    },
    { 
      name: ABOUT_INFO.values[1], 
      icon: Users,
      description: "Building strong communities that can adapt to change while supporting one another."
    },
    { 
      name: ABOUT_INFO.values[2], 
      icon: BookOpen,
      description: "Creating hands-on educational experiences that engage all the senses and foster deep learning."
    },
    { 
      name: ABOUT_INFO.values[3], 
      icon: Heart,
      description: "Honoring and integrating traditional knowledge and practices that have sustained communities for generations."
    },
    { 
      name: ABOUT_INFO.values[4], 
      icon: Lightbulb,
      description: "Embracing creative solutions and adaptive approaches to environmental and social challenges."
    }
  ];

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
              About Hobe Cultural Heritage Center
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-gray-100"
            >
              Cradled in the emerald hills of Nyabihu District’s Bigogwe Sector, just 20 metres from the new Kigali–Musanze–Rubavu highway, Hobe Cultural Heritage Center is your gateway to Rwanda’s vibrant traditions and breathtaking landscapes. Strategically nestled between two of the country's ecological treasures Gishwati-Mukura National Park and Volcanoes National Park Hobe is more than a cultural stop; it's a journey into Rwanda’s soul.
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="font-heading font-bold text-3xl text-primary-700 mb-3">
                  Our Mission
                </h2>
                <div className="h-1 w-16 bg-secondary-400 mb-5" />
                <p className="text-gray-600 mb-10 text-lg">
                  {ABOUT_INFO.mission}
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h2 className="font-heading font-bold text-3xl text-primary-700 mb-3">
                  Our Vision
                </h2>
                <div className="h-1 w-16 bg-secondary-400 mb-5" />
                <p className="text-gray-600 text-lg">
                  {ABOUT_INFO.vision}
                </p>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-lg overflow-hidden h-64 md:h-96"
            >
              <img 
                src="images/youth.jpeg"
                alt="HOBE CENTER mission and vision"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="py-16 md:py-24 bg-primary-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Our Story"
            subtitle="The journey of HOBE CENTER from vision to reality."
            center
          />
          
          <div className="max-w-3xl mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5 }}
              className="text-gray-600 mb-6 text-lg text-center"
            >
              {ABOUT_INFO.story}
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5 }}
              className="rounded-lg overflow-hidden h-64"
            >
              <img 
                src="images/pic3.jpeg"
                alt="HOBE CENTER history"
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-lg overflow-hidden h-64"
            >
              <img 
                src="images/pic2.jpeg"
                alt="HOBE CENTER campus"
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-lg overflow-hidden h-64"
            >
              <img 
                src="images/story.jpeg"
                alt="HOBE CENTER community"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Our Values"
            subtitle="The principles that guide our work and community."
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {values.map((value, index) => (
              <motion.div
                key={value.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-primary-50 rounded-lg p-6 shadow-soft"
              >
                <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                  <value.icon size={24} className="text-primary-600" />
                </div>
                
                <h3 className="font-heading font-semibold text-xl text-primary-700 mb-2">
                  {value.name}
                </h3>
                
                <p className="text-gray-600">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Our Team */}
      <section className="py-16 md:py-24 bg-primary-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Our Team"
            subtitle="Meet the dedicated people behind HOBE CENTER."
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {TEAM_MEMBERS.map((member, index) => (
              <TeamMemberCard
                key={member.name}
                name={member.name}
                role={member.role}
                bio={member.bio}
                image={member.image}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Location */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Our Location"
            subtitle="HOBE CENTER is located in the beautiful Bigogwe sector of Nyabihu district in Rwanda's Western Province."
            center
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5 }}
              className="rounded-lg overflow-hidden h-64 md:h-96"
            >
              <img 
                src="https://images.pexels.com/photos/5487106/pexels-photo-5487106.jpeg"
                alt="HOBE CENTER location"
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            <div>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="font-heading font-semibold text-2xl text-primary-700 mb-4"
              >
                Nestled in Rwanda's Natural Beauty.
              </motion.h3>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-gray-600 mb-4"
              >
                Our center is surrounded by the stunning landscapes of Rwanda's Western Province, offering an ideal setting for connecting with nature and learning about sustainable living practices.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-gray-600 mb-4"
              >
                The facility includes outdoor learning spaces, demonstration gardens, and community gathering areas, all designed to facilitate immersive educational experiences and foster connection with the natural environment.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-gray-600"
              >
                Nyabihu district is known for its rich biodiversity, agricultural landscapes, and vibrant communities, providing the perfect backdrop for our programs and activities.
              </motion.p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <NewsletterSignup />
    </>
  );
};

export default AboutPage;