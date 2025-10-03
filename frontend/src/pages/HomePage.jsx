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
    <div className="max-w-[1200px] mx-auto bg-[#f4f8fb] min-h-screen font-sans p-4">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#0057b7] from-60% to-[#00aaff] text-white rounded-b-[32px] py-12 px-4 mb-8 text-center shadow-[0_4px_24px_rgba(0,87,183,0.1)]">
        <img 
          src="/vite.svg" 
          alt="IEEE RSET SB Logo" 
          className="w-[90px] mb-6 mx-auto drop-shadow-[0_2px_8px_#00336644]" 
        />
        <h1 className="text-5xl font-bold mb-4 tracking-wider">IEEE RSET SB</h1>
        <p className="text-xl max-w-[650px] mx-auto leading-relaxed">
          Empowering Innovation & Technology at Rajagiri School of Engineering & Technology
        </p>
      </section>

      {/* About Section */}
      <section id="about" className="my-10 bg-white rounded-2xl p-8 shadow-md">
        <h2 className="text-[#0057b7] font-bold text-2xl mb-4">About Us</h2>
        <p className="text-lg text-gray-800 leading-relaxed">
          IEEE RSET SB fosters technical excellence and professional growth among students. We organize workshops, seminars, and networking opportunities to empower future engineers and innovators.
        </p>
      </section>

      {/* Announcements Section */}
      <section className="my-10">
        <h2 className="text-[#0057b7] font-bold text-2xl mb-6 text-center">Announcements</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {announcements.map((a) => (
            <div key={a.title} className="bg-white rounded-xl p-6 w-80 shadow-md text-center">
              <img 
                src={a.img} 
                alt={a.title} 
                className="w-full h-48 object-cover rounded-lg mb-4" 
              />
              <h3 className="text-[#0057b7] font-semibold text-xl my-2">{a.title}</h3>
              <p className="text-[#00aaff] font-bold mb-2">{a.date}</p>
              <p className="text-gray-800">{a.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="my-10 bg-white rounded-2xl p-8 shadow-md">
        <h2 className="text-[#0057b7] font-bold text-2xl mb-6 text-center">Recent Events</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {events.map((event) => (
            <div key={event.title} className="bg-[#f9fcff] rounded-xl p-6 w-64 shadow-sm">
              <h3 className="text-[#0057b7] font-semibold text-lg mb-2">{event.title}</h3>
              <p className="font-bold text-[#00aaff] mb-2">{event.date}</p>
              <p className="text-gray-800">{event.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="my-10">
        <h2 className="text-[#0057b7] font-bold text-2xl mb-6 text-center">Testimonials</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white rounded-xl p-6 w-80 shadow-md text-center">
              <img 
                src={t.img} 
                alt={t.name} 
                className="w-20 h-20 rounded-full object-cover mb-4 mx-auto border-[3px] border-[#0057b7]" 
              />
              <h3 className="text-[#0057b7] font-semibold text-xl my-2">{t.name}</h3>
              <p className="text-[#00aaff] font-bold mb-2">{t.role}</p>
              <p className="italic text-gray-700">&quot;{t.quote}&quot;</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-8 py-6 border-t border-gray-200 bg-white rounded-t-2xl text-center">
        <div className="mb-2">
          <a 
            href="https://facebook.com/meaieeesb" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="mx-4 text-[#0057b7] font-semibold hover:underline"
          >
            Facebook
          </a>
          <a 
            href="https://instagram.com/ieeemeasb" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="mx-4 text-[#0057b7] font-semibold hover:underline"
          >
            Instagram
          </a>
          <a href="https://linkedin.com/company/ieeemeasb" target="_blank" rel="noopener noreferrer" style={{ margin: '0 1rem', color: '#0057b7', fontWeight: 600 }}>LinkedIn</a>
        </div>
        &copy; 2025 IEEE RSET SB
      </footer>
    </div>
  );
}

export default HomePage;
