import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaSpinner } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const formRef = useRef();
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  // ✅ APNI REAL IDs YAHAN LAGAO ✅
  const SERVICE_ID = 'service_2es5q7l';        // Service ID
  const TEMPLATE_ID = 'template_seq81o9';      // Template ID
  const PUBLIC_KEY = '6k7WwjyUOp8QJ5wA8';     // Public Key (yeh format hota hai)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus({ type: '', message: '' });

    try {
      const result = await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        PUBLIC_KEY
      );

      if (result.text === 'OK') {
        setStatus({
          type: 'success',
          message: '✅ Message sent successfully! I will get back to you soon.'
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send');
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus({
        type: 'error',
        message: '❌ Failed to send. Please try again or email directly: uzairsaeed010@gmail.com'
      });
    } finally {
      setIsSending(false);
      setTimeout(() => setStatus({ type: '', message: '' }), 5000);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-pink-500 text-lg mb-2">Get In Touch</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Let's Work Together
          </h2>
          <div className="w-20 h-1 bg-pink-500 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Contact Info</h3>
            <p className="text-gray-600 mb-8">
              I'm currently available for freelance work. Feel free to reach out!
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                  <FaEnvelope className="text-pink-500 text-xl" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Email</p>
                  <p className="text-gray-800">uzairsaeed010@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                  <FaPhone className="text-pink-500 text-xl" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Phone</p>
                  <p className="text-gray-800">+92 349 220 9006</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                  <FaMapMarkerAlt className="text-pink-500 text-xl" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Location</p>
                  <p className="text-gray-800">Khyber Pakhtunkhwa, Pakistan</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            ref={formRef}
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-pink-500"
              required
              disabled={isSending}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-pink-500"
              required
              disabled={isSending}
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-pink-500"
              required
              disabled={isSending}
            ></textarea>
            
            <button
              type="submit"
              disabled={isSending}
              className="w-full py-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-all font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              {isSending ? (
                <>
                  <FaSpinner className="animate-spin" />
                  <span>Sending...</span>
                </>
              ) : (
                <span>Send Message</span>
              )}
            </button>
            
            {status.message && (
              <div className={`p-3 rounded-lg ${
                status.type === 'success' 
                  ? 'bg-green-100 text-green-700 border border-green-200' 
                  : 'bg-red-100 text-red-700 border border-red-200'
              }`}>
                {status.message}
              </div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;