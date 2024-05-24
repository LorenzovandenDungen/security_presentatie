// src/app/page.tsx

import React from 'react';
import 'tailwindcss/tailwind.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const HomePage: React.FC = () => {
  return (
    <div className="bg-teal-100">
      <div className="bg-gradient-to-r from-purple-900 to-purple-800 text-white p-8">
        <div className="flex justify-between items-center">
          <div className="text-3xl font-bold">HOME</div>
          <nav className="space-x-8 text-xl">
            <a href="#" className="hover:text-teal-400">ABOUT US</a>
            <a href="#" className="hover:text-teal-400">SERVICES</a>
            <a href="#" className="hover:text-teal-400">CONTACT</a>
          </nav>
          <div className="flex items-center space-x-4">
            <input type="text" placeholder="Search" className="p-2 rounded-full text-black" />
            <div className="flex items-center space-x-2">
              <i className="fas fa-mouse text-teal-400"></i>
              <span>PROFESSIONAL SECURITY</span>
            </div>
          </div>
        </div>

        <div className="flex mt-16">
          <div className="w-1/2 space-y-4">
            <h1 className="text-7xl font-bold text-teal-400">CYBER SECURITY</h1>
            <h2 className="text-2xl">PROTECTING YOUR SYSTEM</h2>
            <p className="text-lg max-w-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod.</p>
            <div className="space-x-4">
              <button className="bg-purple-700 py-2 px-4 rounded-full hover:bg-teal-400 transition duration-300">JOIN US</button>
              <button className="bg-purple-700 py-2 px-4 rounded-full hover:bg-teal-400 transition duration-300">LEARN MORE</button>
            </div>
            <div className="mt-8">
              <div className="border border-teal-400 rounded-lg p-4 inline-block">
                <i className="fas fa-shield-alt text-4xl text-teal-400"></i>
              </div>
            </div>
            <address className="not-italic mt-4">99 SW 8th St, Miami, FL 33130</address>
          </div>
          <div className="w-1/2 relative">
            <img
              src="https://placehold.co/400x300"
              alt="A person wearing a hoodie holding a mask, with laptops in the background"
              className="rounded-xl border-8 border-teal-400"
            />
            <div className="absolute inset-0 rounded-xl border-8 border-teal-400 opacity-50"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
