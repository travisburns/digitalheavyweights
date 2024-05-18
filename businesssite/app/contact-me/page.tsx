import ContactForm from "@/components/ContactForm";
import React from "react";

const Page = () => {
  return (
    <div
      style={{ backgroundImage: "url(bg-3.jpg)" }}
      className="w-screen min-h-screen bg-cover bg-center flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
    >
      <div
        style={{ backgroundImage: "url(atombg-comp.webp)" }}
        className="relative bg-cover bg-center rounded-xl shadow-xl overflow-hidden w-full max-w-4xl"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-80"></div>
        <div className="relative z-10 p-8 sm:p-12">
          <div className="mb-8">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Get In Touch
            </h2>
            <p className="mt-4 text-lg text-white">
              Have a question or want to work together? Fill out the form below and we'll get back to you as soon as possible.
            </p>
          </div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Page;