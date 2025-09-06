import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/execom', label: 'Execom' },
  { to: '/events', label: 'Events' },
  { to: '/contact', label: 'Contact' },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <nav style={{
      background: '#fff',
      borderBottom: '2px solid #0057b7',
      boxShadow: '0 2px 12px rgba(0,87,183,0.1)',
      padding: '0.7rem 0',
      position: 'sticky',
      top: 0,
      zIndex: 100,
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '2.5rem',
        fontFamily: 'Segoe UI, Arial, sans-serif',
        fontWeight: 600,
        fontSize: '1.1rem',
      }}>
        {navLinks.map(link => {
          const isActive = location.pathname === link.to;
          return (
            <Link
              key={link.to}
              to={link.to}
              style={{
                color: isActive ? '#0057b7' : '#333',
                textDecoration: 'none',
                padding: '0.5rem 1.2rem',
                borderRadius: '24px',
                background: isActive ? '#e6f0fa' : 'transparent',
                transition: 'all 0.2s ease-in-out',
                boxShadow: isActive ? '0 2px 8px rgba(0,87,183,0.1)' : 'none',
              }}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
