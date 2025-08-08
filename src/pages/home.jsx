import React from 'react';

const HomePage = () => {
  return (
    <div className="bg-[#f8f3e9] min-h-screen text-[#3f3b2e] font-sans">

      {/* Hero Section */}
      <section className="text-center py-20 px-5">
        <h2 className="text-5xl md:text-6xl font-bold mb-6">Building Futures Together</h2>
        <p className="text-lg md:text-xl mb-8">Expert Real Estate Solutions in Punjab</p>
       <a href="/properties"> <button className="border border-[#3f3b2e] text-[#3f3b2e] px-6 py-2 rounded-full text-sm hover:bg-[#3f3b2e] hover:text-white transition">
          Get Started
        </button></a>
      </section>

      {/* Our Journey Section */}
      <section className="flex flex-col md:flex-row items-center justify-center px-10 py-20 gap-10">
        <div className="md:w-1/2 text-center md:text-left">
          <h3 className="text-4xl font-bold mb-6">Our Journey in Real Estate</h3>
          <p className="text-base leading-relaxed mb-6">
            Sharma Real Estate has been a trusted name in property listings for over five years.
            We specialize in houses, plots, and buildings in Chandigarh, Mohali, Zirakpur,
            and Panchkula, making us your ideal partner for all real estate needs.
          </p>
          <button className="border border-[#3f3b2e] text-[#3f3b2e] px-6 py-2 rounded-full text-sm hover:bg-[#3f3b2e] hover:text-white transition">
            Learn More
          </button>
        </div>
      
      </section>
      <section className="bg-[#fff9ef] text-[#3f3b2e] px-6 py-16 text-center">
  <h2 className="text-3xl font-bold mb-4">About Us</h2>
  <p className="max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
    Sharma Real Estate has helped hundreds of clients find their dream homes in Punjab.
    With 5+ years of experience in property consultation, we focus on trust, value, and simplicity.
  </p>
  <div className="mt-6">
    <a
      href="/about"
      className="inline-block border border-[#3f3b2e] text-[#3f3b2e] px-6 py-2 rounded-full text-sm hover:bg-[#3f3b2e] hover:text-white transition"
    >
      Learn More
    </a>
  </div>
</section>


     
    </div>
  );
};

export default HomePage;
