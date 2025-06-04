import React from 'react';
import img2 from '../../assets/Images/img2.webp';
import img3 from '../../assets/Images/img3.webp';
import img4 from '../../assets/Images/img4.webp';
import img5 from '../../assets/Images/img5.png';
import img6 from '../../assets/Images/img6.png';
import img7 from '../../assets/Images/img7.png';
const cardData = [
  {
    id: 1,
    image: img2,
    title: 'Interior Design',
    description: 'Creative and customized interior design solutions.',
  },
  {
    id: 2,
    image: img5,
    title: 'Furniture',
    description: 'Hand-crafted modern and classic furniture sets.',
  },
  {
    id: 3,
    image: img3,
    title: 'Lighting',
    description: 'Ambient and focused lighting for every space.',
  },
  {
    id: 4,
    image: img4,
    title: 'Home Decor',
    description: 'Elegant decorative items that elevate your home.',
  },
];

const SecondSection = () => {
  return (
    <>
      <h1 className="bg-[#5d84b8] text-3xl md:text-4xl font-bold text-[#0b1a2e] text-center py-6 ">
        Why Choose Sawariya
      </h1>
      <div className="flex flex-wrap justify-center gap-8 p-10 bg-[#5d84b8] transition-all duration-700 ease-in-out hover:scale-[1.01]">
        {cardData.map((card) => (
          <div
            key={card.id}
            className="bg-white w-72 shadow-lg rounded-bl-3xl rounded-tr-3xl overflow-hidden flex flex-col  transition-transform duration-500 hover:scale-105"
          >
            {/* Full width image */}
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-48 object-cover"
            />
            {/* Content */}
            <div className="p-4 flex flex-col justify-between flex-grow">
              <h2 className="text-2xl font-bold text-[#0b1a2e] text-center mb-2">{card.title}</h2>
              <p className="text-gray-800 text-[20px]  text-center mb-2">{card.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-[#0b1a2e] py-10">
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto px-4 text-center">
    <div>
      <h1 className="text-white text-3xl font-bold">1000+</h1>
      <p className="text-[#d99852] text-2xl mt-2">Satisfied Clients</p>
    </div>
    <div>
      <h1 className="text-white text-3xl font-bold">250+</h1>
      <p className="text-[#d99852] text-2xl mt-2">Projects Completed</p>
    </div>
    <div>
      <h1 className="text-white text-3xl font-bold">10+</h1>
      <p className="text-[#d99852] text-2xl mt-2">Years of Experience</p>
    </div>
    <div>
      <h1 className="text-white text-3xl font-bold">50+</h1>
      <p className="text-[#d99852] text-2xl mt-2">Team Members</p>
    </div>
  </div>
</div>
<div className='bg-[#5d84b8]'>
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#0b1a2e] mb-12">Our Work Process</h1>

      <div className="space-y-12">
  {/* Step 1 */}
  <div className="px-4 md:px-8 py-6">
    <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
      <div className="flex-1 bg-gray-100 rounded px-6 py-4 shadow transition-transform duration-500 hover:scale-[1.02]">
        <h2 className="text-2xl font-semibold text-[#0b1a2e] mb-2">Site Visit</h2>
        <p className="text-gray-800 text-[20px]">
          Our team visits the site to gather information about your space.
        </p>
      </div>
      <img
        src={img3}
        alt="Site Visit"
        className="w-40 h-40 object-cover rounded-lg shadow transform transition-all duration-700 ease-out hover:scale-105 hover:translate-x-2"
      />
    </div>
  </div>

  {/* Step 2 */}
  <div className="px-4 md:px-8 py-6">
    <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-6">
      <div className="flex-1 bg-gray-100 rounded px-6 py-4 shadow transition-transform duration-500 hover:scale-[1.02]">
        <h2 className="text-2xl font-semibold text-[#0b1a2e] mb-2">Precise Measurements</h2>
        <p className="text-gray-800 text-[20px]">
          We take detailed measurements to ensure accuracy in planning.
        </p>
      </div>
      <img
        src={img5}
        alt="Measurements"
        className="w-40 h-40 object-cover rounded-lg shadow transform transition-all duration-700 ease-out hover:scale-105 hover:-translate-x-2"
      />
    </div>
  </div>

  {/* Step 3 */}
  <div className="px-4 md:px-8 py-6">
    <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
      <div className="flex-1 bg-gray-100 rounded px-6 py-4 shadow transition-transform duration-500 hover:scale-[1.02]">
        <h2 className="text-2xl font-semibold text-[#0b1a2e] mb-2">Collaborative Design</h2>
        <p className="text-gray-800 text-[20px]">
          We work with you to refine the design based on your ideas.
        </p>
      </div>
      <img
        src={img6}
        alt="Design Collaboration"
        className="w-40 h-40 object-cover rounded-lg shadow transform transition-all duration-700 ease-out hover:scale-105 hover:translate-x-2"
      />
    </div>
  </div>

  {/* Step 4 */}
  <div className="px-4 md:px-8 py-6">
    <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-6">
      <div className="flex-1 bg-gray-100 rounded px-6 py-4 shadow transition-transform duration-500 hover:scale-[1.02]">
        <h2 className="text-2xl font-semibold text-[#0b1a2e] mb-2">Precise Measurements</h2>
        <p className="text-gray-800 text-[20px]">
          We take detailed measurements to ensure accuracy in planning.
        </p>
      </div>
      <img
        src={img7}
        alt="Measurements"
        className="w-40 h-40 object-cover rounded-lg shadow transform transition-all duration-700 ease-out hover:scale-105 hover:-translate-x-2"
      />
    </div>
  </div>

  {/* Step 5 */}
  <div className="px-4 md:px-8 py-6">
    <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
      <div className="flex-1 bg-gray-100 rounded px-6 py-4 shadow transition-transform duration-500 hover:scale-[1.02]">
        <h2 className="text-2xl font-semibold text-[#0b1a2e] mb-2">Collaborative Design</h2>
        <p className="text-gray-800 text-[20px]">
          We work with you to refine the design based on your ideas.
        </p>
      </div>
      <img
        src={img2}
        alt="Design Collaboration"
        className="w-40 h-40 object-cover rounded-lg shadow transform transition-all duration-700 ease-out hover:scale-105 hover:translate-x-2"
      />
    </div>
  </div>
</div>

    </div>
</div>
    </>
  );
};

export default SecondSection;
