import React from 'react';

const events = [
  {
    title: 'TechTalk 2025',
    date: 'Sept 15, 2025',
    description: 'A seminar on emerging technologies and innovation.',
  },
  {
    title: 'Robotics Workshop',
    date: 'Oct 10, 2025',
    description: 'Hands-on workshop on robotics and automation.',
  },
  {
    title: 'AI Bootcamp',
    date: 'Nov 5, 2025',
    description: 'Intensive bootcamp on Artificial Intelligence.',
  },
];

function EventsPage() {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem', fontFamily: 'Segoe UI, Arial, sans-serif', background: '#f4f8fb', minHeight: '80vh' }}>
      <section style={{ background: '#fff', borderRadius: '16px', padding: '2rem', boxShadow: '0 2px 12px #0057b71a', marginBottom: '2rem' }}>
        <h1 style={{ textAlign: 'center', color: '#0057b7', fontWeight: 700, marginBottom: '2rem', fontSize: '2.2rem' }}>Events</h1>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2.5rem', justifyContent: 'center' }}>
          {events.map((event) => (
            <div key={event.title} style={{ background: '#f4f8fb', borderRadius: '12px', padding: '1.5rem', width: '260px', boxShadow: '0 2px 8px #0057b71a', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <h3 style={{ marginBottom: '0.5rem', color: '#0057b7', fontWeight: 600 }}>{event.title}</h3>
              <p style={{ fontWeight: 'bold', marginBottom: '0.5rem', color: '#00aaff' }}>{event.date}</p>
              <p style={{ color: '#222', textAlign: 'center' }}>{event.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default EventsPage;