import React from 'react'
import img2 from "../assets/Images/img6.png"
import img3 from "../assets/Images/img5.png"
import img1 from "../assets/Images/img3.webp"
const About = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center gap-10 pt-20 bg-[#5d84b8] transition-all duration-700 ease-in-out hover:scale-[1.01]">
        {/* Left - Image */}
        <div className="md:w-1/2 p-10 transition-transform duration-500 hover:scale-105">
          <img
            src={img2}
            alt="About Sawariya Interiors"
            className="w-full h-auto rounded-xl shadow-lg object-cover transition-transform duration-500 hover:scale-101"
          />
        </div>

        {/* Right - Content */}
       <div className="w-full md:w-1/2 space-y-4 px-4 md:px-0 text-[#1e1e1e] animate-fade-in-right transition-all duration-500 hover:scale-[1.01]">
  <h1 className="text-5xl sm:text-4xl md:text-5xl font-bold text-[#0b1a2e] transition-colors duration-300 hover:text-black">
    About Us
  </h1>
  <p className="text-gray-300 text-base sm:text-lg md:text-xl transition-opacity duration-300 hover:opacity-90">
    Welcome to SAWARIYA INTERIOR! We are your premier interior design and construction partner, based in Bhopal, dedicated to transforming ordinary spaces into extraordinary living and working environments.
  </p>
  <p className="text-gray-300 text-base sm:text-lg md:text-xl transition-opacity duration-300 hover:opacity-90">
    Established in 2015, our team of expert designers collaborates closely with clients to understand their unique needs and aspirations. We are committed to creating innovative and elegant designs that enhance both aesthetics and practicality.
  </p>
  <p className="text-gray-300 text-base sm:text-lg md:text-xl transition-opacity duration-300 hover:opacity-90">
    Every project reflects your personal style, whether it's a home renovation or a commercial upgrade. Founded by Ankur Mishra, we strive to elevate each project with passion and expertise, ensuring exceptional results that resonate with your vision.
  </p>
</div>

      </div>

      <div className="flex flex-col md:flex-row items-center gap-10 p-10 bg-[#5d84b8] transition-all duration-700 ease-in-out hover:scale-[1.01]">
        {/* Right - Content */}
        <div className="md:w-1/2 space-y-5 text-[#1e1e1e] transition-all duration-500 hover:scale-[1.01]">
          <h1 className="text-5xl font-bold text-[#0b1a2e] transition-colors duration-300 hover:text-black">Our Vision</h1>
          <p className="text-gray-300 text-[20px] transition-opacity duration-300 hover:opacity-90">
            At Sawariya Interiors Zone, our vision is to craft extraordinary, personalized spaces that reflect the lifestyle and aspirations of our clients. We believe that every space has the potential to inspire and enhance the quality of life for those who live and work within it.
          </p>
          <p className="text-gray-300 text-[20px] transition-opacity duration-300 hover:opacity-90">
            With a focus on both aesthetics and functionality, we aim to create timeless designs that evoke a sense of beauty and purpose. Our commitment to sustainability drives us to necessary adopt responsible materials and practices, ensuring that our designs contribute positively to both our clients' well-being and the environment.
          </p>
        </div>

        {/* Left - Image */}
        <div className="md:w-1/2 transition-transform duration-500 hover:scale-105">
          <img
            src={img3}
            alt="About Sawariya Interiors"
            className="w-full h-auto rounded-xl shadow-lg object-cover transition-transform duration-500 hover:scale-101"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-10 p-10 bg-[#5d84b8] transition-all duration-700 ease-in-out hover:scale-[1.01]">
        {/* Left - Image */}
        <div className="md:w-1/2 transition-transform duration-500 hover:scale-105">
          <img
            src={img1}
            alt="About Sawariya Interiors"
            className="w-full h-auto rounded-xl shadow-lg object-cover transition-transform duration-500 hover:scale-101"
          />
        </div>

        {/* Right - Content */}
        <div className="md:w-1/2 space-y-5 text-[#1e1e1e] transition-all duration-500 hover:scale-[1.01]">
          <h1 className="text-5xl  font-bold text-[#0b1a2e] transition-colors duration-300 hover:text-black">Our Mission</h1>
          <p className="text-gray-300 text-[20px] transition-opacity duration-300 hover:opacity-90">
            Sawariya Interiors Zone, our mission is to craft transformative design solutions that enrich lives and create long lasting value. We are passionate about designing spaces that are not only aesthetically stunning but also functionally effective, reflecting the unique style and needs of each client.
          </p>
          <p className="text-gray-300 text-[20px] transition-opacity duration-300 hover:opacity-90">
            By combining innovation with meticulous attention to detail, we strive to exceed expectations and foster long-term client relationships built on trust and collaboration. Our aim is to bring your vision to life, turning every project into a space that inspires and delights.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
