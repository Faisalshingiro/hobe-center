import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { NAV_LINKS, SOCIAL_LINKS, CONTACT_INFO } from '../utils/constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-600 text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
            <img 
            src="images/LOGO.png" 
            alt="HOBE CENTER Logo" 
            className="w-9 h-9 object-contain rounded-full"
          />
              <span className="font-heading font-bold text-xl">HOBE CENTER</span>
            </div>
            <p className="text-gray-100 text-sm leading-relaxed">
              A center for nature education, sustainable living, and community development in Rwanda's beautiful Nyabihu district.
            </p>
            <div className="flex space-x-4 pt-2">
              {SOCIAL_LINKS.map((link) => {
                const Icon = 
                  link.name === "Facebook" ? Facebook :
                  link.name === "Instagram" ? Instagram : 
                  Twitter;
                
                return (
                  <a 
                    key={link.name}
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover:text-secondary-300 transition-colors duration-300"
                    aria-label={link.name}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-gray-100 hover:text-secondary-300 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Programs</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/programs" 
                  className="text-gray-100 hover:text-secondary-300 transition-colors duration-300 text-sm"
                >
                  Nature Education
                </Link>
              </li>
              <li>
                <Link 
                  to="/programs" 
                  className="text-gray-100 hover:text-secondary-300 transition-colors duration-300 text-sm"
                >
                  Sustainable Agriculture
                </Link>
              </li>
              <li>
                <Link 
                  to="/programs" 
                  className="text-gray-100 hover:text-secondary-300 transition-colors duration-300 text-sm"
                >
                  Community Development
                </Link>
              </li>
              <li>
                <Link 
                  to="/programs" 
                  className="text-gray-100 hover:text-secondary-300 transition-colors duration-300 text-sm"
                >
                  Youth Leadership
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="flex-shrink-0 mt-1" />
                <span className="text-sm text-gray-100">{CONTACT_INFO.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="flex-shrink-0" />
                <a 
                  href={`mailto:${CONTACT_INFO.email}`} 
                  className="text-sm text-gray-100 hover:text-secondary-300 transition-colors duration-300"
                >
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="flex-shrink-0" />
                <a 
                  href={`tel:${CONTACT_INFO.phone}`} 
                  className="text-sm text-gray-100 hover:text-secondary-300 transition-colors duration-300"
                >
                  {CONTACT_INFO.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-500 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-100">
            &copy; {currentYear} HOBE CENTER. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li>
                <a 
                  href="#" 
                  className="text-xs text-gray-100 hover:text-secondary-300 transition-colors duration-300"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-xs text-gray-100 hover:text-secondary-300 transition-colors duration-300"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;