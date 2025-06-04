import React from 'react';
import aboutImg from '../../assets/Images/img2.webp'; // Replace with your actual image path

const FirtsSection = () => {
  return (
    <>
    <style>
  {`
    @keyframes jump {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-15px); }
    }
    .animate-jump {
      animation: jump 0.7s ease-in-out;
    }
  `}
</style>

    
    <div className="flex flex-col md:flex-row items-center gap-10 p-10 bg-[#5d84b8]">
      {/* Left - Image */}
      <div className="md:w-1/2">
        <img
  src={aboutImg}
  alt="About Bellissimo Interiors"
  className="w-full max-w h-auto rounded-xl shadow-lg object-cover transition-transform duration-700 ease-in-out hover:scale-105"
/>


      </div>

      {/* Right - Content */}
      <div className="md:w-1/2 space-y-5 text-[#1e1e1e]">
        <h1 className="text-3xl md:text-4xl font-bold text-[#0b1a2e]">About Us</h1>
      <p className="text-gray-300 text-[20px]">  
          Welcome to SAWARIYA INTERIOR! We are your premier interior design and construction partner, based in Bhopal, dedicated to transforming ordinary spaces into extraordinary living and working environments.
        </p>
        <p className="text-gray-300 text-[20px]">  
          Established in 2015, our team of expert designers collaborates closely with clients to understand their unique needs and aspirations. We are committed to creating innovative and elegant designs that enhance both aesthetics and practicality.
        </p>
        <p className="text-gray-300 text-[20px]">  
          Every project reflects your personal style, whether it's a home renovation or a commercial upgrade. Founded by Ankur Mishra, we strive to elevate each project with passion and expertise, ensuring exceptional results that resonate with your vision.
        </p>
      </div>
    </div>
    </>
  );
};

export default FirtsSection;
