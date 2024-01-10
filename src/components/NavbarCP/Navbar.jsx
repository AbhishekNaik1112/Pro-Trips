import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <Link to={'/'} className="text-2xl font-bold text-red-600 hover:text-gray-300">
        KALVIUM &#10084; 
      </Link>

      <div className="mt-2">
        <Link to="/form" className="text-lg text-blue-600 hover:text-gray-300">
          Registration Form
        </Link>
        <Link to="/contact" className="ml-4 text-lg text-blue-600 hover:text-gray-300">
          Contact
        </Link>
      </div>
    </div>
  );
}