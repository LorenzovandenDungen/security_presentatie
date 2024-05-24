'use client'; // Mark this component as a client component

import React, { useEffect } from 'react';
import './globals.css'; // Correct import path for the CSS file
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // Import from next/navigation instead of next/router

const HomePage = () => {
  const router = useRouter();

  useEffect(() => {
    if (router.pathname === "/admin") {
      router.push("/admin/login");
    }
  }, [router]);

  return (
    <div className="bg-gradient-to-b from-purple-900 to-black text-white min-h-screen flex flex-col items-center justify-start">
      <header className="bg-gradient-to-r from-purple-800 to-purple-600 w-full p-6 fixed top-0 shadow-lg z-50">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">Security Awareness Systeem</h1>
          <nav className="space-x-6">
            <Link href="/admin/login" className="hover:text-gray-300 transition-colors duration-300">
              Admin Login
            </Link>
            <Link href="/employee/login" className="hover:text-gray-300 transition-colors duration-300">
              Employee Login
            </Link>
            <Link href="/manager/login" className="hover:text-gray-300 transition-colors duration-300">
              Manager Login
            </Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto text-center mt-32">
        <h2 className="text-5xl font-extrabold mb-4">Welkom bij het Security Awareness Systeem</h2>
        <p className="text-xl mb-12">Inloggen met een invite code of e-mail om toegang te krijgen tot de trainingen.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-purple-700 p-10 rounded-lg text-center shadow-xl transform transition duration-500 hover:scale-105 hover:bg-purple-800">
            <i className="fas fa-lock text-5xl mb-6"></i>
            <h3 className="text-2xl font-semibold mb-4">Invite Code</h3>
            <p className="text-lg">Voer uw invite code in om toegang te krijgen tot het systeem</p>
          </div>
          <div className="bg-purple-700 p-10 rounded-lg text-center shadow-xl transform transition duration-500 hover:scale-105 hover:bg-purple-800">
            <i className="fas fa-user text-5xl mb-6"></i>
            <h3 className="text-2xl font-semibold mb-4">E-mail</h3>
            <p className="text-lg">Gebruik uw e-mailadres om in te loggen</p>
          </div>
          <div className="bg-purple-700 p-10 rounded-lg text-center shadow-xl transform transition duration-500 hover:scale-105 hover:bg-purple-800">
            <i className="fas fa-chart-line text-5xl mb-6"></i>
            <h3 className="text-2xl font-semibold mb-4">Statistieken</h3>
            <p className="text-lg">Bekijk de voortgang en resultaten van uw medewerkers</p>
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
