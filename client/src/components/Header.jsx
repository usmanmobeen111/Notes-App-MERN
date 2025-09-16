import React from 'react';
import { motion } from 'framer-motion';
import { FaStickyNote } from 'react-icons/fa';

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white py-6 px-4 shadow-lg"
    >
      <div className="container mx-auto flex items-center justify-center">
        <div
        
          className="flex items-center space-x-3"
        >
          <FaStickyNote className="text-3xl" />
          <h1 className="text-3xl font-bold tracking-wide">Notes App</h1>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
