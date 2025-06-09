
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ProgramsPage from './pages/ProgramsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import emailjs from '@emailjs/browser';
import { CONTACT_INFO } from './utils/constants';

// Initialize EmailJS with your public key
emailjs.init(CONTACT_INFO.emailjs.publicKey);

// Email sending function that can be used across components
export const sendEmail = async (formData: {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}) => {
  try {
    const response = await emailjs.send(
      CONTACT_INFO.emailjs.serviceId,
      CONTACT_INFO.emailjs.templateId,
      {
        from_name: formData.name,
        from_email: formData.email,
        phone_number: formData.phone || 'Not provided',
        subject: formData.subject,
        message: formData.message,
      }
    );
    
    return { success: true, response };
  } catch (error) {
    console.error('Email sending failed:', error);
    return { success: false, error };
  }
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/programs" element={<ProgramsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;