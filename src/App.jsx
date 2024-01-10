import React from 'react';
import { Route, Routes } from "react-router-dom";
import Navbar from './components/NavbarCP/Navbar';
import Home from './components/PagesCP/Home';
import Contact from './components/PagesCP/Contact';
import Form from './components/PagesCP/Form';

export default function App() {
  return (
    <div>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/form" element={<Form/>} />
      </Routes>
    </div>
  );
}