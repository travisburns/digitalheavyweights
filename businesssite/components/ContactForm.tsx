import React from "react";

const ContactForm = () => {
  return (
    <form className="w-[100%]">
      <h2 className="text-3xl font-bold mb-8 text-white">Contact Me</h2>
      <div className="mb-6">
        <input
          type="text"
          placeholder="Your name"
          name="name"
          className="w-full px-4 py-3 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500"
        />
      </div>
      <div className="mb-6">
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="w-full px-4 py-3 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500"
        />
      </div>
      <div className="mb-6">
        <textarea
          placeholder="Your message"
          name="message"
          rows={5}
          className="w-full px-4 py-3 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500"
        ></textarea>
      </div>
      <button className="w-full px-6 py-3 text-base font-semibold text-white uppercase transition-colors duration-200 ease-in-out bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700">
        Send a message
      </button>
    </form>
  );
};

export default ContactForm;