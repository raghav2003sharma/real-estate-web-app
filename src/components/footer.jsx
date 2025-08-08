import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#3f3b2e] text-white py-6 mt-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-sm">
        <p className="mb-2 md:mb-0">
          &copy; {new Date().getFullYear()} Sharma Real Estate. All rights reserved.
        </p>
        <div className="flex gap-4">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Service</a>
          <a href="#" className="hover:underline">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
