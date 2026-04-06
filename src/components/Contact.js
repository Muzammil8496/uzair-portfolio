import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaSpinner, FaWhatsapp } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const formRef = useRef();
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const SERVICE_ID = 'service_2es5q7l';
  const TEMPLATE_ID = 'template_seq81o9';
  const PUBLIC_KEY = '6k7WwjyUOp8QJ5wA8';

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
      setStatus({
        type: 'error',
        message: '❌ Failed to send. Please try again.'
      });
    } finally {
      setIsSending(false);
      setTimeout(() => setStatus({ type: '', message: '' }), 5000);
    }
  };

  const whatsappNumber = '923492209006';
  const whatsappLink = `https://wa.me/${whatsappNumber}`;
  const phoneLink = `tel:+923492209006`;

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-white via-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-purple-500 text-lg mb-2 font-medium">Get In Touch</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Let's Work Together
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Contact Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="backdrop-blur-xl bg-white/60 border border-white/40 shadow-xl rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Contact Info</h3>
            <p className="text-gray-600 mb-8">
              I'm available for freelance projects, Let’s build something amazing.
            </p>

            <div className="space-y-6">

              {/* Email */}
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center group-hover:scale-110 transition">
                  <FaEnvelope className="text-purple-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-700">Email</p>
                  <a href="mailto:uzairsaeed010@gmail.com">
                    <p className="text-gray-500 group-hover:text-blue-500 transition">
                      uzairsaeed010@gmail.com
                    </p>
                  </a>
                </div>
              </div>

              {/* Phone */}
              <a href={phoneLink} className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center group-hover:scale-110 transition">
                  <FaPhone className="text-blue-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-700">Call Me</p>
                  <p className="text-gray-500 group-hover:text-blue-500 transition">
                    +92 349 220 9006
                  </p>
                </div>
              </a>

              {/* WhatsApp */}
              <a href={whatsappLink} target="_blank" className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center group-hover:scale-110 transition">
                  <FaWhatsapp className="text-green-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-700">WhatsApp</p>
                  <p className="text-gray-500 group-hover:text-blue-500 transition">
                    +92 349 220 9006
                  </p>
                </div>
              </a>

              {/* Location */}
              <a
                href="https://www.google.com/maps?q=Khyber+Pakhtunkhwa+Pakistan"
                target="_blank"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center group-hover:scale-110 transition">
                  <FaMapMarkerAlt className="text-pink-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-700">Location</p>
                  <p className="text-gray-500 group-hover:text-blue-500 transition">
                    Khyber Pakhtunkhwa, Pakistan
                  </p>
                </div>
              </a>

            </div>
          </motion.div>

          {/* Form Card */}
          <motion.form
            ref={formRef}
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="backdrop-blur-xl bg-white/60 border border-white/40 shadow-xl rounded-2xl p-8 space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 bg-white/70 border border-gray-300 rounded-lg focus:border-blue-500 hover:border-blue-400 outline-none transition"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 bg-white/70 border border-gray-300 rounded-lg focus:border-blue-500 hover:border-blue-400 outline-none transition"
              required
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 bg-white/70 border border-gray-300 rounded-lg focus:border-blue-500 hover:border-blue-400 outline-none transition"
              required
            ></textarea>

            <button
              type="submit"
              disabled={isSending}
              className="w-full py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg hover:opacity-90 transition flex items-center justify-center gap-2"
            >
              {isSending ? (
                <>
                  <FaSpinner className="animate-spin" />
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </button>

            {status.message && (
              <div className={`p-3 rounded-lg text-sm ${
                status.type === 'success'
                  ? 'bg-green-100 text-green-700'
                  : 'bg-red-100 text-red-700'
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