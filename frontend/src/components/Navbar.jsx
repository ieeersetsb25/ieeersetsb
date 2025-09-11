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
    <div
      style={{
        display: "flex",
        background: "#fff",
        justifyContent: "space-between",
        alignItems: "center",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          padding: "1rem",
          gap: "10px",
        }}
      >
        <img
          src={IEEELogo}
          alt="IEEE Logo"
          style={{ width: "10rem", background: "#fff" }}
        />
        <img
          src={RSETLogo}
          alt="RSET Logo"
          style={{ width: "10rem", background: "#fff" }}
        />
      </div>
      <nav>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "2.5rem",
            fontFamily: "Segoe UI, Arial, sans-serif",
            fontWeight: 600,
            fontSize: "1.1rem",
          }}
        >
          {navLinks.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                style={{
                  color: isActive ? "#0057b7" : "#333",
                  textDecoration: "none",
                  padding: "0.5rem 1.2rem",
                  borderRadius: "24px",
                  background: isActive ? "#e6f0fa" : "transparent",
                  transition: "all 0.2s ease-in-out",
                  boxShadow: isActive ? "0 2px 8px rgba(0,87,183,0.1)" : "none",
                }}
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
