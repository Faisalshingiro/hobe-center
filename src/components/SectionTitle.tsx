import React from 'react';
import { motion } from 'framer-motion';

type SectionTitleProps = {
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
};

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  center = false,
  className = '',
}) => {
  return (
    <div className={`mb-10 ${center ? 'text-center' : ''} ${className}`}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5 }}
        className="font-heading font-bold text-3xl md:text-4xl text-primary-700"
      >
        {title}
      </motion.h2>
      
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-3 text-lg text-gray-600"
        >
          {subtitle}
        </motion.p>
      )}
      
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={`h-1 w-20 bg-secondary-400 mt-4 ${center ? 'mx-auto' : ''}`}
      />
    </div>
  );
};

export default SectionTitle;