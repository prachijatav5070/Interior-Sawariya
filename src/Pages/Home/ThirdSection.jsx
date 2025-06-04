import React from "react";
import img from "../../assets/Images/img7.png"
const ThirdSection = () => {
  return (
    // <div className="bg-[#5d84b8]">
    <div className=" px-4 py-12 bg-[#5d84b8]">
      <div className="flex flex-col md:flex-row items-center">
        {/* Left Column */}
        <div className="md:w-1/3 space-y-8">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-[#0b1a2e]">Personalized Design</h1>
 <p className="text-gray-300 text-[20px]">              Our team works with you to create a design tailored to your specific preferences and lifestyle, ensuring your space feels uniquely yours.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-3xl font-semibold text-[#0b1a2e]">Eco-Friendly Solutions</h2>
 <p className="text-gray-300 text-[20px]">              We provide sustainable and environmentally friendly design solutions that help reduce your carbon footprint and promote a healthier living environment.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-3xl font-semibold text-[#0b1a2e]">Virtual Consultations</h2>
 <p className="text-gray-300 text-[20px]">              Connect with our experts from the comfort of your home through virtual consultations. We ensure that you receive the best advice and design ideas remotely.
            </p>
          </div>
        </div>

        {/* Center Circle Image */}
        <div className="my-8 md:my-0 md:mx-8">
  <div className="w-68 h-68 rounded-full overflow-hidden border-4 border-white shadow-lg">
    <img
      src={img}
      alt="Design Team"
      className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110 hover:translate-x-2 hover:translate-y-1"
    />
  </div>
</div>


        {/* Right Column */}
        <div className="md:w-1/3 space-y-8 text-right pr-3">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-[#0b1a2e]">Comprehensive Planning</h1>
 <p className="text-gray-300 text-[20px]">              We offer a full range of planning services, from initial consultation to final implementation, ensuring every detail is covered.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-3xl font-semibold text-[#0b1a2e]">Timely Project Completion</h2>
 <p className="text-gray-300 text-[20px]">              Our team is committed to delivering your project on time, without compromising on quality. We ensure your space is ready as per the agreed timeline.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-3xl font-semibold text-[#0b1a2e]">Customer Satisfaction</h2>
            <p className="text-gray-300 text-[20px]">
              Customer satisfaction is our top priority. We strive to exceed your expectations with every project, ensuring you are delighted with the results.
            </p>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default ThirdSection;