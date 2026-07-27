import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/logos/logo-vasant-valley.svg";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-5 lg:px-8 py-4">

          {/* Logo */}
          <img
            src={logo}
            alt="School Logo"
            className="h-14 w-auto cursor-pointer"
          />

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-8 text-gray-700 font-medium">
            <li className="cursor-pointer hover:text-red-700 transition">Home</li>
            <li className="cursor-pointer hover:text-red-700 transition">About</li>
            <li className="cursor-pointer hover:text-red-700 transition">Academics</li>
            <li className="cursor-pointer hover:text-red-700 transition">Admissions</li>
            <li className="cursor-pointer hover:text-red-700 transition">Gallery</li>
            <li className="cursor-pointer hover:text-red-700 transition">Contact</li>
          </ul>

          {/* Desktop Login */}
          <button className="hidden lg:block bg-red-700 text-white px-5 py-2 rounded-md hover:bg-red-800 transition">
            Login
          </button>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(true)}
            className="lg:hidden text-3xl p-2 mr-1"
          >
            <FiMenu />
          </button>
        </div>
      </nav>

      {/* ================= OVERLAY ================= */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* ================= SIDEBAR ================= */}
      <aside
        className={`fixed top-0 left-0 h-screen w-[85%] max-w-[320px] bg-white shadow-xl z-50 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >

        {/* Sidebar Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b">

          <img
            src={logo}
            alt="School Logo"
            className="h-14 w-auto"
          />

          <button
            onClick={() => setIsOpen(false)}
            className="text-3xl"
          >
            <FiX />
          </button>
        </div>

        {/* Sidebar Links */}
        <ul className="mt-8 flex flex-col gap-7 px-8 text-lg font-medium text-gray-700">
          <li className="cursor-pointer hover:text-red-700 transition">
            Home
          </li>

          <li className="cursor-pointer hover:text-red-700 transition">
            About
          </li>

          <li className="cursor-pointer hover:text-red-700 transition">
            Academics
          </li>

          <li className="cursor-pointer hover:text-red-700 transition">
            Admissions
          </li>

          <li className="cursor-pointer hover:text-red-700 transition">
            Gallery
          </li>

          <li className="cursor-pointer hover:text-red-700 transition">
            Contact
          </li>
        </ul>

        {/* Sidebar Login */}
        <div className="px-8 mt-10">
          <button className="w-full bg-red-700 text-white py-3 rounded-md hover:bg-red-800 transition">
            Login
          </button>
        </div>

      </aside>
    </>
  );
};

export default Navbar;