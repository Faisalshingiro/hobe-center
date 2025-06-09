import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X} from 'lucide-react';
import { NAV_LINKS } from '../utils/constants';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-md py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link 
          to="/" 
          className="flex items-center space-x-2 text-primary-600"
          onClick={closeMenu}
        >
                    <img 
            src="images/LOGO.png" 
            alt="HOBE CENTER Logo" 
            className="w-9 h-9 object-contain rounded-full"
          />
          <span className={`font-heading font-bold text-xl ${scrolled ? 'text-primary-600' : 'text-white'}`}>
            HOBE CENTER
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `font-medium text-md transition-colors duration-200 hover:text-primary-500 ${
                  isActive
                    ? 'text-primary-500'
                    : scrolled
                    ? 'text-gray-700'
                    : 'text-white'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className={`px-4 py-2 rounded-md font-medium text-sm transition-all duration-200 
              ${scrolled 
                ? 'bg-primary-500 text-white hover:bg-primary-600' 
                : 'bg-white text-primary-600 hover:bg-opacity-90'}`}
          >
            Get In Touch
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden z-20"
          onClick={toggleMenu}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? (
            <X size={24} className="text-gray-700" />
          ) : (
            <Menu size={24} className={scrolled ? 'text-gray-700' : 'text-white'} />
          )}
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-10 bg-white"
          >
            <div className="h-full flex flex-col pt-24 px-6">
              <nav className="flex flex-col space-y-6">
                {NAV_LINKS.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    className={({ isActive }) =>
                      `font-medium text-lg transition-colors duration-200 ${
                        isActive ? 'text-primary-500' : 'text-gray-700'
                      }`
                    }
                    onClick={closeMenu}
                  >
                    {link.name}
                  </NavLink>
                ))}
                <Link
                  to="/contact"
                  className="px-4 py-2 bg-primary-500 text-white rounded-md font-medium text-center"
                  onClick={closeMenu}
                >
                  Get In Touch
                </Link>
              </nav>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Navbar;