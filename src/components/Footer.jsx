import logo from "../assets/logos/logo-vasant-valley.svg";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="footer" className="py-24 lg:py-28 bg-[#111827] text-gray-300">

      <div
        className="max-w-7xl mx-auto py-16"
        style={{
          paddingLeft: "45px",
          paddingRight: "45px",
        }}
      >
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Column 1 */}

          <div>

            <img
              src={logo}
              alt="School Logo"
              className="h-16 mb-5 bg-white rounded-lg p-2"
            />

            <p className="leading-7 text-gray-400">
              Vasant Valley School is committed to nurturing young minds through
              academic excellence, innovation and holistic development.
            </p>

          </div>

          {/* Column 2 */}

          <div>

            <h3 className="text-white text-xl font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3">

              <li><a href="#hero" className="hover:text-red-500 transition">Home</a></li>

              <li><a href="#about" className="hover:text-red-500 transition">About</a></li>

              <li><a href="#academics" className="hover:text-red-500 transition">Academics</a></li>

              <li><a href="#gallery" className="hover:text-red-500 transition">Gallery</a></li>

              <li><a href="#news" className="hover:text-red-500 transition">News</a></li>

            </ul>

          </div>

          {/* Column 3 */}

          <div>

            <h3 className="text-white text-xl font-semibold mb-5">
              Contact
            </h3>

            <div className="space-y-4">

              <p className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 text-red-500" />
                <span>New Delhi, India</span>
              </p>

              <p className="flex items-center gap-3">
                <FaPhoneAlt className="text-red-500" />
                <span>+91 98765 43210</span>
              </p>

              <p className="flex items-center gap-3">
                <FaEnvelope className="text-red-500" />
                <span>info@vasantvalley.edu</span>
              </p>

            </div>

          </div>

          {/* Column 4 */}

          <div>

            <h3 className="text-white text-xl font-semibold mb-5">
              Follow Us
            </h3>

            <div className="flex gap-4">

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-gray-700 flex items-center justify-center hover:bg-red-700 transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-gray-700 flex items-center justify-center hover:bg-red-700 transition"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-gray-700 flex items-center justify-center hover:bg-red-700 transition"
              >
                <FaLinkedinIn />
              </a>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom Bar */}

      <div className="border-t border-gray-700">

        <div className="max-w-7xl mx-auto px-6 md:px-10 py-6 text-center text-sm text-gray-400">

          © 2026 Vasant Valley School. All Rights Reserved.

        </div>

      </div>

    </footer>
  );
};

export default Footer;