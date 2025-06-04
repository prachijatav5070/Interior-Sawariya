import React from "react";

const Footer = () => {
  return (
    <>
<hr className="border-t-2 border-[#d99852]" />
    
    <footer className="bg-[#0b1a2e] text-white px-6 py-10 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Column 1: Logo and Title */}
       <div className="flex flex-col items-start leading-tight">
  <span className="text-[#00AEEF] font-bold text-xl">SAWARIYA</span>
  <span className="text-[#00AEEF] font-bold text-xl">Interior</span>
</div>


        {/* Column 2: About Us */}
        <div>
          <h2 className="text-2xl font-bold text-[#d99852] mb-4">About Us</h2>
          <p className="text-[20px] leading-relaxed">
            Welcome to SAWARIYA INTERIOR! We are your premier interior design
            and construction partner, based in Bhopal, dedicated to transforming
            ordinary spaces into extraordinary living and working environments.{" "}
            <strong className="text-white">... Read More</strong>
          </p>
        </div>

        {/* Column 3: Our Services */}
        <div>
          <h2 className="text-2xl font-bold text-[#d99852] mb-4">Our Services</h2>
          <ul className="text-[20px] space-y-2 leading-relaxed">
            <li>Commercial and Residential Interiors</li>
            <li>New design and layout</li>
            <li>New Civil Construction</li>
            <li>Interior Design and Decoration</li>
            <li>Industrial Sheds</li>
            <li>Modern Interiors</li>
          </ul>
        </div>

        {/* Column 4: Contact Us */}
        <div>
          <h2 className="text-2xl font-bold text-[#d99852] mb-4">Contact Us</h2>
          <p className="text-[20px] leading-relaxed">
            
          </p>
          <p className="mt-2 text-[15px] font-semibold">
            Phone:{" "}
            <span className="font-normal text-white">
              {/* +91 88714 45551, +91 75540 44077 */}
            </span>
          </p>
          <p className="text-[15px] font-semibold">
            Email:{" "}
            <span className="font-normal text-white">
              {/* SAWARIYA INTERIOR19@gmail.com */}
            </span>
          </p>
          <p className="text-[15px] font-semibold">
            Location:{" "}
            <span className="font-normal text-white">View on Google Maps</span>
          </p>
        </div>
      </div>

      {/* WhatsApp icons at the corners */}
      <div className="flex justify-between mt-10">
        <a href="https://wa.me/910000000" target="_blank" rel="noreferrer">
          <img
            src="https://img.icons8.com/color/48/000000/whatsapp--v1.png"
            alt="WhatsApp"
            className="w-14 h-14 rounded-full border-4 border-white"
          />
        </a>
        <a href="https://wa.me/91000000" target="_blank" rel="noreferrer">
          <img
            src="https://img.icons8.com/color/48/000000/whatsapp--v1.png"
            alt="WhatsApp"
            className="w-14 h-14 rounded-full border-4 border-white"
          />
        </a>
      </div>
    </footer>
    </>
  );
};

export default Footer;
