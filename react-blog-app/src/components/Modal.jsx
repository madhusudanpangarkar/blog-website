// src/ContactForm.js
import React, { useState } from 'react';

const Modal = () => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmission = () => {
    // Add your submission logic here
    console.log(`Email: ${email}, Subject: ${subject}, Message: ${message}`);
  };

  return (
    <div className="flex max-w-2xl mx-auto mt-8">
      <div className="flex-shrink-0">
        {/* Replace 'path/to/image.jpg' with the actual path to your image */}
        <img src="path/to/image.jpg" alt="Your Image" className="w-32 h-32 rounded" />
      </div>
      <div className="flex-grow pl-8">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Email:</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Subject:</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Message:</label>
            <textarea
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button
            type="button"
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
            onClick={handleSubmission}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
