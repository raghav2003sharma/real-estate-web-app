import React from 'react';

const AboutPage = () => {
  return (
    <div className="bg-[#f8f3e9] text-[#3f3b2e] min-h-screen px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-10">About Us</h1>

        <p className="text-lg leading-relaxed mb-6">
          At <strong>Sharma Real Estate</strong>, we believe in more than just transactions — we believe in building long-term relationships. Based in Punjab, we’ve been helping individuals and families find their perfect homes and investment properties for over 5 years.
        </p>

        <p className="text-lg leading-relaxed mb-6">
          Our expertise covers residential and commercial properties across Chandigarh, Mohali, Zirakpur, and Panchkula. Whether it’s buying your first home or expanding your real estate portfolio, our experienced team is here to guide you at every step.
        </p>

        <p className="text-lg leading-relaxed mb-6">
          We are known for our honest advice, fair pricing, and unmatched local market knowledge. Our goal is to simplify the real estate process while delivering exceptional service.
        </p>

        <div className="mt-10">
          <img
            src="/office-team.jpg"
            alt="Our Team"
            className="rounded-lg shadow-lg w-full object-cover"
          />
          <p className="text-sm text-center mt-2 text-gray-600">The Sharma Real Estate Team</p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
