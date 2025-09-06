import React from 'react';

const execomMembers = [
  { name: 'Arjun V', role: 'Chairperson', img: 'https://randomuser.me/api/portraits/men/32.jpg' },
  { name: 'Sneha R', role: 'Vice Chairperson', img: 'https://randomuser.me/api/portraits/women/44.jpg' },
  { name: 'Rahul M', role: 'Secretary', img: 'https://randomuser.me/api/portraits/men/45.jpg' },
  { name: 'Priya S', role: 'Treasurer', img: 'https://randomuser.me/api/portraits/women/46.jpg' },
];

function ExecomPage() {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem', fontFamily: 'Segoe UI, Arial, sans-serif', background: '#f4f8fb', minHeight: '80vh' }}>
      <section style={{ background: '#fff', borderRadius: '16px', padding: '2rem', boxShadow: '0 2px 12px #0057b71a', marginBottom: '2rem' }}>
        <h1 style={{ textAlign: 'center', color: '#0057b7', fontWeight: 700, marginBottom: '2rem', fontSize: '2.2rem' }}>Executive Committee</h1>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2.5rem', justifyContent: 'center' }}>
          {execomMembers.map((member) => (
            <div key={member.name} style={{ background: '#f4f8fb', borderRadius: '12px', padding: '1.5rem', width: '220px', textAlign: 'center', boxShadow: '0 2px 8px #0057b71a', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <img src={member.img} alt={member.name} style={{ width: '90px', height: '90px', borderRadius: '50%', objectFit: 'cover', marginBottom: '1rem', border: '3px solid #0057b7' }} />
              <h3 style={{ margin: '0.5rem 0', color: '#0057b7', fontWeight: 600 }}>{member.name}</h3>
              <p style={{ color: '#00aaff', fontWeight: 'bold', marginBottom: 0 }}>{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default ExecomPage;