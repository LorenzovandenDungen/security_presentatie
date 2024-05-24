import React from 'react';
import 'tailwindcss/tailwind.css';

const HomePage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-center">
      <div className="bg-white p-8 shadow-lg rounded-lg max-w-4xl text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6">
          Welkom bij het <span className="text-purple-700">Security Awareness Systeem</span>
        </h1>
        <p className="text-lg text-gray-700 mb-10">
          Inloggen met een invite code of e-mail om toegang te krijgen tot de trainingen.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <a href="/admin/login" className="bg-purple-700 text-white p-6 rounded-lg hover:bg-purple-800 transition duration-300 transform hover:scale-105">
            <div className="flex flex-col items-center">
              <i className="fas fa-user-shield text-3xl mb-4"></i>
              <h3 className="text-2xl font-semibold mb-2">Admin Login</h3>
              <p>Beheer gebruikers, uitnodigingen en trainingen.</p>
            </div>
          </a>
          <a href="/employee/login" className="bg-purple-700 text-white p-6 rounded-lg hover:bg-purple-800 transition duration-300 transform hover:scale-105">
            <div className="flex flex-col items-center">
              <i className="fas fa-user text-3xl mb-4"></i>
              <h3 className="text-2xl font-semibold mb-2">Employee Login</h3>
              <p>Voer uw invite code in om de beschikbare trainingen te zien.</p>
            </div>
          </a>
          <a href="/manager/login" className="bg-purple-700 text-white p-6 rounded-lg hover:bg-purple-800 transition duration-300 transform hover:scale-105">
            <div className="flex flex-col items-center">
              <i className="fas fa-user-tie text-3xl mb-4"></i>
              <h3 className="text-2xl font-semibold mb-2">Manager Login</h3>
              <p>Bekijk en beheer trainingsresultaten van uw medewerkers.</p>
            </div>
          </a>
        </div>
      </div>
      <footer className="mt-8 text-gray-600">
        <p>Security Awareness Systeem © 2024</p>
      </footer>
    </div>
  );
};

export default HomePage;
