import React from "react";
import { Link, useLocation } from "react-router-dom";
import IEEELogo from "../assets/ieee-logo.png";
import RSETLogo from "../assets/rsetiee-logo.png";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/execom", label: "Execom" },
  { to: "/events", label: "Events" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <div className="flex justify-between items-center sticky top-0 z-50 bg-white shadow-md">
      <div className="flex flex-col items-center p-4 gap-2.5">
        <img
          src={IEEELogo}
          alt="IEEE Logo"
          className="w-40 bg-white"
        />
        <img
          src={RSETLogo}
          alt="RSET Logo"
          className="w-40 bg-white"
        />
      </div>
      <nav className="pr-4">
        <div className="flex items-center justify-center gap-10 font-sans font-semibold text-lg">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`px-5 py-2 rounded-3xl transition-all duration-200 ${
                  isActive 
                    ? 'text-[#0057b7] bg-[#e6f0fa] shadow-[0_2px_8px_rgba(0,87,183,0.1)]' 
                    : 'text-gray-800 hover:text-[#0057b7]'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;