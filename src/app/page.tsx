import React from 'react';
import 'tailwindcss/tailwind.css';

const HomePage = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-start">
      <header className="bg-gray-800 w-full p-4 fixed top-0">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">Security Awareness Systeem</h1>
          <nav className="space-x-4">
            <a href="/admin/login" className="hover:underline">Admin Login</a>
            <a href="/employee/login" className="hover:underline">Employee Login</a>
            <a href="/manager/login" className="hover:underline">Manager Login</a>
          </nav>
        </div>
      </header>

      <main className="container mx-auto text-center mt-24">
        <h2 className="text-4xl font-extrabold mb-4">Welkom bij het Security Awareness Systeem</h2>
        <p className="text-xl mb-8">Inloggen met een invite code of e-mail om toegang te krijgen tot de trainingen.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-purple-700 p-8 rounded-lg text-center shadow-lg transform transition duration-300 hover:scale-105">
            <i className="fas fa-lock text-5xl mb-4"></i>
            <h3 className="text-2xl font-semibold mb-2">Invite Code</h3>
            <p>Voer uw invite code in om toegang te krijgen tot het systeem</p>
          </div>
          <div className="bg-purple-700 p-8 rounded-lg text-center shadow-lg transform transition duration-300 hover:scale-105">
            <i className="fas fa-user-shield text-5xl mb-4"></i>
            <h3 className="text-2xl font-semibold mb-2">Admin Login</h3>
            <p>Beheer gebruikers, uitnodigingen en trainingen</p>
          </div>
          <div className="bg-purple-700 p-8 rounded-lg text-center shadow-lg transform transition duration-300 hover:scale-105">
            <i className="fas fa-user-tie text-5xl mb-4"></i>
            <h3 className="text-2xl font-semibold mb-2">Manager Login</h3>
            <p>Bekijk en beheer trainingsresultaten van uw medewerkers</p>
          </div>
        </div>
      </main>

      <footer className="mt-16 text-gray-600">
        <p>Security Awareness Systeem © 2024</p>
      </footer>
    </div>
  );
};

export default HomePage;
