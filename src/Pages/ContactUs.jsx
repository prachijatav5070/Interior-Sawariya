import React from 'react';

const ContactUs = () => {
  return (
    <div className='bg-[#5d84b8] pt-20'>
    <div className="max-w-6xl mx-auto bg-[#5d84b8] px-6 py-12">
      <h1 className="text-4xl font-extrabold text-center mb-4 text-[#0b1a2e]">CONTACT SAWARIYA INTERIOR</h1>
      <p className="text-center text-gray-300 mb-12 text-[20px]">
        We'd love to hear from you. Feel free to reach out using the form or contact details below.
      </p>

      <div className="flex flex-col md:flex-row  gap-12">
        {/* Contact Info Section */}
        <div className="md:w-1/2 space-y-6">
          <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold mb-4 text-amber-800 ">Contact Information</h2>
            <p><strong>Name:</strong> SAWARIYA INTERIOR</p>
            <p><strong>Working hours:</strong> 10:00 AM to 6:00 PM</p>
            <p><strong>Mobile 1:</strong> </p>
            <p><strong>Mobile 2:</strong> </p>
            <p><strong>Email:</strong> </p>
            <p><strong>Location:</strong> </p>
          </div>
             <div className='bg-gray-100 p-3 rounded'>
          <div className="mt-6">
            <h2 className="text-3xl font-semibold text-amber-800 mb-2">Location</h2>
            <iframe
              title="Bellissimo Interiors Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.3193559518365!2d77.45249977483992!3d23.0120294791804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c4297299e4a5f%3A0x8ad7819e79937c76!2sEco%20Green%20Park%2C%20Bhopal%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1717400000000"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
          </div>
        </div>

        {/* Message Form */}
        <div className="md:w-1/2 bg-gray-50 p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Enter Your Name"
              className="w-full border border-gray-500 rounded-md p-3"
            />
            <input
              type="text"
              placeholder="Enter Your Mobile Number"
              className="w-full border border-gray-500 rounded-md p-3"
            />
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full border border-gray-500 rounded-md p-3"
            />
            <input
              type="text"
              placeholder="Enter Your Address"
              className="w-full border border-gray-500 rounded-md p-3"
            />
            <input
              type="text"
              placeholder="Enter Your City"
              className="w-full border border-gray-500 rounded-md p-3"
            />
            {/* <select
              type="text"
              placeholder="Enter Your Select Services"
              className="w-full border border-gray-500 rounded-md p-2"
            /> */}
            <textarea
              placeholder="Write your message"
              className="w-full border border-gray-500 rounded-md p-2 h-24 resize-none"
            ></textarea>
            <div className='text-center'>
                <button
              type="submit"
              className="bg-amber-800 text-white px-4 py-2 rounded-md hover:bg-blue-900 transition"
            >
              Send Message
            </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ContactUs;
