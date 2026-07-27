import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/logos/logo-vasant-valley.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">

        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            paddingLeft: "32px",
            paddingRight: "32px",
          }}>

          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <a href="#hero">
              <img
                src={logo}
                alt="School Logo"
                className="h-14 w-auto cursor-pointer"
              />
            </a>

            {/* Desktop Navigation */}
            <ul className="hidden lg:flex items-center gap-8 text-gray-700 font-medium">

              <li>
                <a href="#hero" className="hover:text-red-700 transition">
                  Home
                </a>
              </li>

              <li>
                <a href="#about" className="hover:text-red-700 transition">
                  About
                </a>
              </li>

              <li>
                <a href="#academics" className="hover:text-red-700 transition">
                  Academics
                </a>
              </li>

              <li>
                <a href="#gallery" className="hover:text-red-700 transition">
                  Gallery
                </a>
              </li>

              <li>
                <a href="#news" className="hover:text-red-700 transition">
                  News
                </a>
              </li>

              <li>
                <a href="#footer" className="hover:text-red-700 transition">
                  Contact
                </a>
              </li>

            </ul>

            {/* Desktop Login */}
            <button className="hidden lg:block bg-red-700 text-white px-5 py-2 rounded-md hover:bg-red-800 transition">
              Login
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsOpen(true)}
              className="lg:hidden p-2 text-3xl mr-1"
            >
              <FiMenu />
            </button>

          </div>

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
        className={`fixed top-0 left-0 h-screen w-[85%] max-w-[320px] bg-white shadow-xl z-50 transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >

        {/* Sidebar Header */}
        <div
          className="flex items-center justify-between py-5 border-b"
          style={{ paddingLeft: "32px", paddingRight: "24px" }}
        >
          <a href="#hero" onClick={() => setIsOpen(false)}>
            <img
              src={logo}
              alt="School Logo"
              className="h-14 w-auto"
            />
          </a>

          <button
            onClick={() => setIsOpen(false)}
            className="text-3xl"
          >
            <FiX />
          </button>

        </div>

        {/* Sidebar Links */}
        <ul
          className="mt-10 flex flex-col gap-7 text-lg font-medium text-gray-700"
          style={{ paddingLeft: "40px", paddingRight: "24px" }}
        >
          <li>
            <a href="#hero" onClick={() => setIsOpen(false)} className="hover:text-red-700 transition">
              Home
            </a>
          </li>

          <li>
            <a href="#about" onClick={() => setIsOpen(false)} className="hover:text-red-700 transition">
              About
            </a>
          </li>

          <li>
            <a href="#academics" onClick={() => setIsOpen(false)} className="hover:text-red-700 transition">
              Academics
            </a>
          </li>

          <li>
            <a href="#gallery" onClick={() => setIsOpen(false)} className="hover:text-red-700 transition">
              Gallery
            </a>
          </li>

          <li>
            <a href="#news" onClick={() => setIsOpen(false)} className="hover:text-red-700 transition">
              News
            </a>
          </li>

          <li>
            <a href="#footer" onClick={() => setIsOpen(false)} className="hover:text-red-700 transition">
              Contact
            </a>
          </li>

        </ul>

        {/* Sidebar Login */}
        <div className="px-6 mt-10">

          <button className="w-full bg-red-700 text-white py-3 rounded-md hover:bg-red-800 transition">
            Login
          </button>

        </div>

      </aside>
    </>
  );
};

export default Navbar;