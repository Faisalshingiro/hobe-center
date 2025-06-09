
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import { CONTACT_INFO } from '../utils/constants';
import NewsletterSignup from '../components/NewsletterSignup';

const ContactPage = () => {
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
              Contact Us
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-gray-100"
            >
              Have questions about our programs or want to visit HOBE CENTER? We'd love to hear from you.
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Contact Information */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5 }}
                className="font-heading font-bold text-3xl text-primary-700 mb-3"
              >
                Get in Touch
              </motion.h2>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="h-1 w-16 bg-secondary-400 mb-6"
              />
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-gray-600 mb-8"
              >
                We welcome inquiries about our programs, visiting the center, or potential collaborations. Fill out the contact form or reach out to us directly using the information below.
              </motion.p>
              
              <div className="space-y-6 mb-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex items-start space-x-4"
                >
                  <div className="bg-primary-100 rounded-full p-3">
                    <MapPin size={24} className="text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg text-primary-700 mb-1">Address</h3>
                    <p className="text-gray-600">{CONTACT_INFO.address}</p>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="flex items-start space-x-4"
                >
                  <div className="bg-primary-100 rounded-full p-3">
                    <Mail size={24} className="text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg text-primary-700 mb-1">Email</h3>
                    <a 
                      href={`mailto:${CONTACT_INFO.email}`} 
                      className="text-gray-600 hover:text-primary-600 transition-colors duration-200"
                    >
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="flex items-start space-x-4"
                >
                  <div className="bg-primary-100 rounded-full p-3">
                    <Phone size={24} className="text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg text-primary-700 mb-1">Phone</h3>
                    <a 
                      href={`tel:${CONTACT_INFO.phone}`} 
                      className="text-gray-600 hover:text-primary-600 transition-colors duration-200"
                    >
                      {CONTACT_INFO.phone}
                    </a>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="flex items-start space-x-4"
                >
                  <div className="bg-primary-100 rounded-full p-3">
                    <Clock size={24} className="text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg text-primary-700 mb-1">Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 8:00 AM - 5:00 PM</p>
                    <p className="text-gray-600">Saturday: 9:00 AM - 1:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </motion.div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="bg-primary-50 p-6 rounded-lg"
              >
                <h3 className="font-medium text-lg text-primary-700 mb-2">Visiting HOBE CENTER</h3>
                <p className="text-gray-600 mb-2">
                  If you're planning to visit us, please contact us in advance to schedule your visit. We offer guided tours of our facilities and can provide information on accommodation options in the area.
                </p>
                <p className="text-gray-600">
                  From Kigali, take the road to Musanze/Gisenyi and turn at Bigogwe center. Local landmarks and signs will guide you to HOBE CENTER.
                </p>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="font-heading font-bold text-3xl text-primary-700 mb-6">
                Send Us a Message
              </h2>
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-16 md:py-24 bg-primary-50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="font-heading font-bold text-3xl text-primary-700 mb-8 text-center"
          >
            Our Location
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-lg overflow-hidden h-96 bg-white shadow-soft"
          >
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center p-6">
                <MapPin size={48} className="text-primary-600 mx-auto mb-4" />
                <h3 className="font-heading font-semibold text-xl text-primary-700 mb-2">
                  HOBE CENTER
                </h3>
                <p className="text-gray-600">
                  Located in Bigogwe Sector, Nyabihu District, Western Province, Rwanda
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <NewsletterSignup />
    </>
  );
};

export default ContactPage;