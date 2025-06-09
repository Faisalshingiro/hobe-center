import React, { useState } from 'react';
import { Send } from 'lucide-react';
import Button from '../components/Button';
import { sendEmail } from '../App';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    try {
      const result = await sendEmail({
        name: 'Newsletter Subscriber',
        email: email,
        subject: 'Newsletter Subscription',
        message: `New newsletter subscription request from ${email}`,
      });
      
      if (result.success) {
        setSubmitted(true);
        setEmail('');
        
        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      } else {
        throw new Error('Failed to subscribe');
      }
    } catch (err) {
      setError('Failed to subscribe. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="bg-primary-50 py-12 md:py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-heading font-bold text-2xl md:text-3xl text-primary-700 mb-3">
          Stay Connected with HOBE CENTER
        </h2>
        
        <p className="text-gray-600 max-w-2xl mx-auto mb-6">
          Subscribe to our newsletter to receive updates on our programs, events, and ways to get involved with our community.
        </p>
        
        {error && (
          <div className="max-w-md mx-auto mb-4">
            <p className="text-error-600 bg-error-500/10 p-3 rounded-md">
              {error}
            </p>
          </div>
        )}
        
        {submitted ? (
          <div className="bg-white p-4 rounded-lg shadow-soft inline-block">
            <div className="flex items-center gap-2 text-success-600">
              <Send size={20} />
              <p className="font-medium">
                Thank you for subscribing to our newsletter!
              </p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
            />
            
            <Button
              type="submit"
              variant="primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="animate-spin mr-2">⏳</span>
                  Subscribing...
                </>
              ) : (
                <>
                  Subscribe
                  <Send size={16} className="ml-2" />
                </>
              )}
            </Button>
          </form>
        )}
      </div>
    </div>
  );
};

export default NewsletterSignup;