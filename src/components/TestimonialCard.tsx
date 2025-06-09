import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

type TestimonialCardProps = {
  text: string;
  author: string;
  role: string;
  index: number;
};

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  text,
  author,
  role,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-lg p-6 shadow-soft relative"
    >
      <Quote 
        size={40} 
        className="absolute top-4 right-4 text-primary-100 rotate-180"
      />
      
      <p className="text-gray-600 mb-6 relative z-10">
        "{text}"
      </p>
      
      <div className="flex items-center mt-4">
        <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
          <span className="text-primary-600 font-semibold">
            {author.charAt(0)}
          </span>
        </div>
        
        <div className="ml-3">
          <h4 className="font-heading font-semibold text-primary-700">
            {author}
          </h4>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;