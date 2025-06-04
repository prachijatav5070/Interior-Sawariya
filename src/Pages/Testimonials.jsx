import { Star } from 'lucide-react';
import { useState } from 'react';
const Testimonials = () => {
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(null);
const [review, setReview] = useState('');
  const maxChars = 180;
  return (
    <div className='bg-[#5d84b8] '>
       
   
    <div className="max-w-xl mx-auto p-6 bg-[#5d84b8] pt-40 ">
     

      <div className="bg-gray-100 shadow-md rounded-lg p-6 space-y-6">
         <div className="text-center mb-8 bg-gray-100 rounded">
        <h1 className="text-3xl pt-2 font-bold mb-2 text-amber-800">Share Your Experience</h1>
        <p className="text-gray-600 p-2">We'd love to hear your feedback!</p>
      </div>
        <div>
          <label className="block text-xl font-medium mb-1">Name</label>
          <input
            type="text"
            className="w-full border border-black rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label className="block text-xl font-medium mb-1">Rating</label>
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                size={28}
                onClick={() => setRating(star)}
                onMouseEnter={() => setHovered(star)}
                onMouseLeave={() => setHovered(null)}
                className={`cursor-pointer transition ${
                  (hovered || rating) >= star ? 'fill-yellow-400 stroke-yellow-400' : 'stroke-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

         <div>
      <label className="block text-xl font-medium mb-1">Review</label>
      <textarea
        className="w-full border border-black rounded-md p-2 h-24 resize-none focus:outline-none focus:ring focus:ring-blue-300"
        placeholder="Write your review..."
        value={review}
        onChange={(e) => {
          if (e.target.value.length <= maxChars) {
            setReview(e.target.value);
          }
        }}
      />
      <div className="text-left text-xl text-gray-500 mt-1">
        {review.length}/{maxChars}
      </div>
    </div>

       <div className='text-center'>
         <button className="bg-amber-800 text-[20px]  text-white px-4 py-2 rounded-md hover:bg-[#5d84b8]lue-700 transition">
          Submit Review
        </button>
       </div>
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-4xl font-semibold text-white">Testimonials</h2>
        <p className="text-white text-[20px] mt-2">See what our clients have to say about our services.</p>
      </div>
    </div>
     </div>
  );
};

export default Testimonials;
