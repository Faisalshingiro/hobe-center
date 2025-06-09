import React from 'react';
import { ArrowRight, Clock, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from './Button';

type ProgramCardProps = {
  title: string;
  description: string;
  image: string;
  duration?: string;
  ageGroup?: string;
  index: number;
};

const ProgramCard: React.FC<ProgramCardProps> = ({
  title,
  description,
  image,
  duration,
  ageGroup,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-lg overflow-hidden shadow-soft group"
    >
      <div className="relative h-56 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-800/60 to-transparent" />
      </div>
      
      <div className="p-6">
        <h3 className="font-heading font-semibold text-xl text-primary-700 mb-2">
          {title}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-3">
          {description}
        </p>
        
        {(duration || ageGroup) && (
          <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-500">
            {duration && (
              <div className="flex items-center gap-1">
                <Clock size={16} />
                <span>{duration}</span>
              </div>
            )}
            
            {ageGroup && (
              <div className="flex items-center gap-1">
                <Users size={16} />
                <span>{ageGroup}</span>
              </div>
            )}
          </div>
        )}
        
        <Button 
          to="/programs" 
          variant="outline" 
          className="mt-2 group-hover:bg-primary-500 group-hover:text-white"
        >
          Learn More
          <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </motion.div>
  );
};

export default ProgramCard;