import React from 'react';

const announcements = [
  {
    title: 'IEEE RSET SB Wins Regional Award',
    date: 'Aug 2025',
    img: 'https://ieeemeasb.org/wp-content/uploads/2023/12/3fd3f88c-bf2e-4536-ba84-2c290e1e64e3-600x600.jpg',
    description: 'Our SB was recognized for outstanding membership development.'
  },
  {
    title: 'AI Bootcamp Success',
    date: 'July 2025',
    img: 'https://ieeemeasb.org/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-16-at-21.16.12_ea2457c7-600x600.jpg',
    description: 'Students excelled in the AI Bootcamp, showcasing innovative projects.'
  }
];

const events = [
  {
    title: 'TechTalk 2025',
    date: 'Sept 15, 2025',
    description: 'A seminar on emerging technologies and innovation.'
  },
  {
    title: 'Robotics Workshop',
    date: 'Oct 10, 2025',
    description: 'Hands-on workshop on robotics and automation.'
  }
];

const testimonials = [
  {
    name: 'Dr. Ajmal KT',
    role: 'Ex-Counselor',
    img: 'https://ieeemeasb.org/wp-content/uploads/2023/12/ajmal.jpeg',
    quote: 'My journey with IEEE started when I was doing my M Tech at RIT Kottayam. Those memorable experiences I gained during my M Tech days made me part of the IEEE family at RSET.'
  },
  {
    name: 'Mr. Ameen Shahid N',
    role: 'Chairman (2020-21)',
    img: 'https://ieeemeasb.org/wp-content/uploads/2023/12/ameen.jpg',
    quote: 'IEEE helped me throughout my college life and continues to inspire my career. Organizing and participating in national-level events boosted our confidence tremendously.'
  }
];

function HomePage() {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', fontFamily: 'Segoe UI, Arial, sans-serif', background: '#f4f8fb' }}>
      
      {/* Hero Section */}
      <section style={{ background: 'linear-gradient(90deg, #0057b7 60%, #00aaff 100%)', color: '#fff', borderRadius: '0 0 32px 32px', padding: '3rem 1rem 2rem', textAlign: 'center', marginBottom: '2rem', boxShadow: '0 4px 24px rgba(0,87,183,0.1)' }}>
        <img src="/vite.svg" alt="IEEE RSET SB Logo" style={{ width: '90px', marginBottom: '1.5rem', filter: 'drop-shadow(0 2px 8px #00336644)' }} />
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem', fontWeight: 700, letterSpacing: '1px' }}>IEEE RSET SB</h1>
        <p style={{ fontSize: '1.3rem', maxWidth: 650, margin: '0 auto', lineHeight: 1.6 }}>
          Empowering Innovation & Technology at Rajagiri School of Engineering & Technology
        </p>
      </section>

      {/* About Section */}
      <section id="about" style={{ margin: '2.5rem 0', background: '#fff', borderRadius: '16px', padding: '2rem', boxShadow: '0 2px 12px rgba(0,87,183,0.1)' }}>
        <h2 style={{ color: '#0057b7', fontWeight: 700, marginBottom: '1rem' }}>About Us</h2>
        <p style={{ fontSize: '1.1rem', color: '#222', lineHeight: 1.7 }}>
          IEEE RSET SB fosters technical excellence and professional growth among students. We organize workshops, seminars, and networking opportunities to empower future engineers and innovators.
        </p>
      </section>

      {/* Announcements Section */}
      <section style={{ margin: '2.5rem 0' }}>
        <h2 style={{ color: '#0057b7', fontWeight: 700, marginBottom: '1.5rem', textAlign: 'center' }}>Announcements</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' }}>
          {announcements.map((a) => (
            <div key={a.title} style={{ background: '#fff', borderRadius: '12px', padding: '1.5rem', width: '320px', boxShadow: '0 2px 12px rgba(0,87,183,0.1)', textAlign: 'center' }}>
              <img src={a.img} alt={a.title} style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '8px', marginBottom: '1rem' }} />
              <h3 style={{ margin: '0.5rem 0', color: '#0057b7', fontWeight: 600 }}>{a.title}</h3>
              <p style={{ color: '#00aaff', fontWeight: 'bold', marginBottom: '0.5rem' }}>{a.date}</p>
              <p style={{ color: '#222' }}>{a.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Events Section */}
      <section id="events" style={{ margin: '2.5rem 0', background: '#fff', borderRadius: '16px', padding: '2rem', boxShadow: '0 2px 12px rgba(0,87,183,0.1)' }}>
        <h2 style={{ color: '#0057b7', fontWeight: 700, marginBottom: '1.5rem', textAlign: 'center' }}>Recent Events</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' }}>
          {events.map((event) => (
            <div key={event.title} style={{ background: '#f9fcff', borderRadius: '10px', padding: '1.5rem', width: '260px', boxShadow: '0 2px 8px rgba(0,87,183,0.1)' }}>
              <h3 style={{ marginBottom: '0.5rem', color: '#0057b7', fontWeight: 600 }}>{event.title}</h3>
              <p style={{ fontWeight: 'bold', marginBottom: '0.5rem', color: '#00aaff' }}>{event.date}</p>
              <p style={{ color: '#222' }}>{event.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section style={{ margin: '2.5rem 0' }}>
        <h2 style={{ color: '#0057b7', fontWeight: 700, marginBottom: '1.5rem', textAlign: 'center' }}>Testimonials</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' }}>
          {testimonials.map((t) => (
            <div key={t.name} style={{ background: '#fff', borderRadius: '12px', padding: '1.5rem', width: '320px', boxShadow: '0 2px 12px rgba(0,87,183,0.1)', textAlign: 'center' }}>
              <img src={t.img} alt={t.name} style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover', marginBottom: '1rem', border: '3px solid #0057b7' }} />
              <h3 style={{ margin: '0.5rem 0', color: '#0057b7', fontWeight: 600 }}>{t.name}</h3>
              <p style={{ color: '#00aaff', fontWeight: 'bold', marginBottom: '0.5rem' }}>{t.role}</p>
              <p style={{ fontStyle: 'italic', color: '#444' }}>&quot;{t.quote}&quot;</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ textAlign: 'center', color: '#555', marginTop: '2rem', padding: '1.5rem 0', borderTop: '1px solid #e0e6ed', background: '#fff', borderRadius: '16px 16px 0 0' }}>
        <div style={{ marginBottom: '0.5rem' }}>
          <a href="https://facebook.com/meaieeesb" target="_blank" rel="noopener noreferrer" style={{ margin: '0 1rem', color: '#0057b7', fontWeight: 600 }}>Facebook</a>
          <a href="https://instagram.com/ieeemeasb" target="_blank" rel="noopener noreferrer" style={{ margin: '0 1rem', color: '#0057b7', fontWeight: 600 }}>Instagram</a>
          <a href="https://linkedin.com/company/ieeemeasb" target="_blank" rel="noopener noreferrer" style={{ margin: '0 1rem', color: '#0057b7', fontWeight: 600 }}>LinkedIn</a>
        </div>
        &copy; 2025 IEEE RSET SB
      </footer>
    </div>
  );
}

export default HomePage;
