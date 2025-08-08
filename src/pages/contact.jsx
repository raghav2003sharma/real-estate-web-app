import React from 'react';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
} from 'react-icons/fa';

const ContactPage = () => {
  return (
    <div className="bg-[#f8f3e9] text-[#3f3b2e] px-6 py-16 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>

        {/* Grid: Contact Info + Form */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
              <p>We’d love to hear from you! Reach out via phone, email, or visit our office.</p>
            </div>

            <div className="space-y-4 text-base">
              <div className="flex items-start gap-4">
                <FaPhoneAlt className="mt-1 text-lg" />
                <a href="tel:+919876543210" className="hover:underline">+91 98765 43210</a>
              </div>
              <div className="flex items-start gap-4">
                <FaEnvelope className="mt-1 text-lg" />
                <a href="mailto:info@sharmarealestate.com" className="hover:underline">info@sharmarealestate.com</a>
              </div>
              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="mt-1 text-lg" />
                <p>Office #24, Sector 70, Mohali, Punjab, India</p>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
              <div className="flex gap-4 text-xl">
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-600"
                >
                  <FaWhatsapp />
                </a>
                <a
                  href="https://facebook.com/sharmarealestate"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://instagram.com/sharmarealestate"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-500"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-6 space-y-4">
            <h2 className="text-xl font-semibold">Send Us a Message</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm mb-1" htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm mb-1" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm mb-1" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring"
                  placeholder="Write your message..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-[#3f3b2e] text-white px-6 py-2 rounded-full hover:opacity-90"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
