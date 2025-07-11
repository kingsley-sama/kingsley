 import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    comment: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    alert('Form submitted successfully!');
  };

  return (
    <div 
      className="w-full bg-cover bg-neutral-950 bg-center font-sans mb-10"
    >
      {/* Header */}
      <header className="bg-black bg-opacity-70 w-full p-0">
        <div className="w-full"></div>
      </header>

      {/* Main Container */}
      <div className="w-full max-w-4xl mx-auto mt-10  p-5">
        <h1 className="text-center text-blue-500 text-2xl font-bold uppercase tracking-wider mb-0 p-8">
          Contact Form
        </h1>
        
        <div className="w-full max-w-full mx-auto mb-5">
          {/* Name Input */}
          <div className="mb-3">
            <input
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full text-gray-100 text-lg font-normal leading-6 bg-transparent p-3 mb-3 border-0 border-b-2 border-blue-500 focus:outline-none focus:text-blue-500 transition-all duration-400 ease-in-out"
            />
          </div>

          {/* Email Input */}
          <div className="mb-3">
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full text-gray-100 text-lg font-normal leading-6 bg-transparent p-3 mb-3 border-0 border-b-2 border-blue-500 focus:outline-none focus:text-blue-500 transition-all duration-400 ease-in-out"
            />
          </div>

          {/* Comment Textarea */}
          <div className="mb-3">
            <textarea
              name="comment"
              value={formData.comment}
              onChange={handleChange}
              placeholder="Comment"
              rows="6"
              className="w-full text-gray-100 text-lg font-normal leading-6 bg-transparent p-3 mb-3 border-0 border-b-2 border-blue-500 focus:outline-none focus:text-blue-500 transition-all duration-400 ease-in-out"
            />
          </div>

          {/* Submit Button */}
          <div className="mt-2">
            <button
              type="button"
              onClick={handleSubmit}
              className="w-full bg-gray-100 text-white text-2xl font-bold py-6 px-4 border-0 cursor-pointer transition-all duration-300 ease-in-out hover:bg-blue-600 hover:text-white"
            >
              SEND!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}