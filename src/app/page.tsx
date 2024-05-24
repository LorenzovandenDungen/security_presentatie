import React from 'react';

const HomePage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900 text-white">
      <div className="flex flex-col md:flex-row items-center justify-center space-x-8">
        <div className="text-center md:text-left p-6">
          <h1 className="text-4xl font-bold">CYBER SECURITY</h1>
          <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button className="mt-6 bg-teal-500 text-white px-6 py-2 rounded-full">Learn More</button>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Login your account</h2>
          <form>
            <div className="mb-4">
              <label className="block mb-2">Username</label>
              <input type="text" className="w-full p-2 bg-gray-700 rounded" />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Password</label>
              <input type="password" className="w-full p-2 bg-gray-700 rounded" />
            </div>
            <div className="flex justify-between items-center mb-4">
              <a href="#" className="text-teal-500">Forget password?</a>
            </div>
            <button type="submit" className="w-full bg-teal-500 p-2 rounded">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
