import React from 'react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-900 via-gray-900 to-black text-white">
      <header className="flex justify-between items-center p-6 bg-gray-800 bg-opacity-50">
        <div className="text-teal-500 text-2xl font-bold">PROFESSIONAL SECURITY</div>
        <nav className="space-x-6">
          <a href="#" className="hover:text-teal-500">HOME</a>
          <a href="#" className="hover:text-teal-500">ABOUT US</a>
          <a href="#" className="hover:text-teal-500">SERVICES</a>
          <a href="#" className="hover:text-teal-500">CONTACT</a>
        </nav>
        <div className="relative">
          <input type="text" placeholder="SEARCH" className="bg-gray-700 p-2 rounded-full pl-8" />
          <span className="absolute left-2 top-2 text-gray-500">🔍</span>
        </div>
      </header>
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto p-8">
        <div className="text-center md:text-left md:w-1/2 p-6">
          <h1 className="text-5xl font-bold text-teal-400">CYBER SECURITY</h1>
          <p className="mt-4 text-lg text-gray-300">
            Protecting Your System
          </p>
          <p className="mt-4 text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod.
          </p>
          <div className="mt-6 space-x-4">
            <button className="bg-purple-600 text-white px-6 py-2 rounded-full">JOIN US</button>
            <button className="bg-teal-500 text-white px-6 py-2 rounded-full">LEARN MORE</button>
          </div>
          <p className="mt-4 text-gray-500">
            99 SW 8th St, Miami, FL 33130
          </p>
        </div>
        <div className="relative md:w-1/2 mt-8 md:mt-0">
          <img src="/path-to-your-image.jpg" alt="Cyber Security" className="rounded-lg shadow-lg"/>
          <div className="absolute inset-0 rounded-lg border-4 border-teal-500"></div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
