import React from 'react';
import { motion } from 'framer-motion';

type TeamMemberCardProps = {
  name: string;
  role: string;
  bio: string;
  image: string;
  index: number;
};

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  name,
  role,
  bio,
  image,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
    >
      <img
        src={`/${image}`}
        alt={name}
        className="w-40 h-40 mx-auto mb-6 rounded-full border-4 border-green-500 object-cover"
      />
      <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
      <p className="text-green-500 font-medium">{role}</p>
      <p className="text-sm text-gray-600 mt-2">{bio}</p>
    </motion.div>
  );
};

export default TeamMemberCard;
