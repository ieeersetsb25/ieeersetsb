import React, { useState } from 'react';

function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '2rem 1rem',
        fontFamily: 'Segoe UI, Arial, sans-serif',
        background: '#f4f8fb',
        minHeight: '80vh',
      }}
    >
      <section
        style={{
          background: '#fff',
          borderRadius: '16px',
          padding: '2rem',
          boxShadow: '0 2px 12px #0057b71a',
          margin: '2rem auto',
          maxWidth: 500,
        }}
      >
        <h1
          style={{
            textAlign: 'center',
            color: '#0057b7',
            fontWeight: 700,
            marginBottom: '1.5rem',
            fontSize: '2rem',
          }}
        >
          Contact Us
        </h1>
        {submitted ? (
          <div style={{ textAlign: 'center', color: '#0057b7' }}>
            <h3>Thank you for reaching out!</h3>
            <p>We will get back to you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '1.2rem' }}>
              <label
                htmlFor="name"
                style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  color: '#0057b7',
                  fontWeight: 600,
                }}
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '0.7rem',
                  borderRadius: '6px',
                  border: '1px solid #b3c6e0',
                  fontSize: '1rem',
                }}
              />
            </div>
            <div style={{ marginBottom: '1.2rem' }}>
              <label
                htmlFor="email"
                style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  color: '#0057b7',
                  fontWeight: 600,
                }}
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '0.7rem',
                  borderRadius: '6px',
                  border: '1px solid #b3c6e0',
                  fontSize: '1rem',
                }}
              />
            </div>
            <div style={{ marginBottom: '1.2rem' }}>
              <label
                htmlFor="message"
                style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  color: '#0057b7',
                  fontWeight: 600,
                }}
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={4}
                style={{
                  width: '100%',
                  padding: '0.7rem',
                  borderRadius: '6px',
                  border: '1px solid #b3c6e0',
                  fontSize: '1rem',
                }}
              />
            </div>
            <button
              type="submit"
              style={{
                background: 'linear-gradient(90deg, #0057b7 60%, #00aaff 100%)',
                color: '#fff',
                padding: '0.9rem 2.5rem',
                border: 'none',
                borderRadius: '24px',
                cursor: 'pointer',
                fontWeight: 700,
                fontSize: '1.1rem',
                boxShadow: '0 2px 8px #0057b71a',
              }}
            >
              Send Message
            </button>
          </form>
        )}
      </section>

      <section
        style={{ textAlign: 'center', marginTop: '2rem', color: '#0057b7' }}
      >
        <h3>Contact Details</h3>
        <p>Rajagiri School of Engineering & Technology, Kochi, Kerala, India</p>
        <p>
          Email:{' '}
          <a href="mailto:ieee@rset.edu.in" style={{ color: '#00aaff' }}>
            ieee@rset.edu.in
          </a>
        </p>
        <p>
          Phone:{' '}
          <a href="tel:+919876543210" style={{ color: '#00aaff' }}>
            +91 98765 43210
          </a>
        </p>
      </section>
    </div>
  );
}

export default ContactPage;
