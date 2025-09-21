import React from 'react';

const pastEvents = [
  {
    category: 'SPS',
    events: [
      {
        title: 'Intro to FL Studio Event',
        date: 'November 13, 2024',
        description:
          'Arjun Dinukumar conducted an engaging session on music creation using FL Studio. Participants were introduced to the fundamentals of the software, creative techniques, and industry-relevant tips.',
        image: '/images/introflstudio.png',
      },
      {
        title: 'Triathlon of Minds Event',
        description:
          'An introductory event held by IEEE SPS RSET exclusively for first years. The event consisted of 3 rounds: Case Study using AI tools, Typing speed contest, and Quiz.',
        image: '/images/triathlonofminds.jpeg',
      },
    ],
  },
  {
    category: 'CS',
    events: [
      {
        title: 'AMONG US Event',
        date: 'October 26, 2024',
        description:
          'AMONG US challenged teams in a tech-themed treasure hunt with strategic puzzles and imposter-led misdirections. The event consisted of multiple rounds including QR Code Hunt, Photo Scavenger Hunt, Quick Code Cracker, and Technical Trivia Relay.',
        image: '/images/amongus.jpeg',
      },
      {
        title: 'Minute to Win It Event',
        date: 'October 3, 2024',
        description:
          'The Minute to Win It non-tech event featured engaging rounds like Tilt a Cup, This Blows, Cup Stack, and Ring Throw. With 57 participants, the event encouraged teamwork and quick decision-making.',
        image: '/images/minutetowinit.jpeg',
      },
    ],
  },
  {
    category: 'IAS',
    events: [
      {
        title: 'Maze Runner Event',
        date: 'October 26, 2024',
        description:
          'Maze Runner, held at Techkshethra, captivated participants with its challenging maze setup. 13 teams of three navigated a maze filled with tasks and hidden clues.',
        image: '/images/mazerunner.jpeg',
      },
      {
        title: 'DLP Event',
        description:
          'Dr. Rajesh Kumar\'s lecture on "From Nature to Engineering Optimization" explored nature-inspired optimization algorithms and their applications in solving complex engineering problems.',
        image: '/images/dlp.jpg',
      },
    ],
  },
  {
    category: 'PES',
    events: [
      {
        title: 'Solar Visit Event',
        date: 'October 4, 2024',
        description:
          'The Solar Visit event began with an informative session at the EEE seminar hall. Fr. Dr. Joel George Pullolil provided insights into Rajagiri\'s solar energy system. Students visited the Solar PV control room and the rooftop of the KE building.',
        image: '/images/solarvisit.jpg',
      },
    ],
  },
  {
    category: 'WIE ASCENDIA',
    events: [
      {
        title: 'ASCENDIA Event',
        date: 'October 18-19, 2024',
        description:
          'The IEEE Women in Engineering (WIE) Kerala Section held the "ASCENDIA" - The girls upskilling camp. The event had 38 participants and featured workshops on various professional skills.',
        image: '/images/ascendia.jpg',
      },
      {
        title: 'Redefining Success Event',
        description:
          'RSET IEEE Women in Engineering (WiE) conducted an alumni talk session to inspire students on becoming successful. Ms. Nivetha KM, alumni of RSET and IIM Rohtak, focused on "Women Entrepreneurship in Engineering".',
        image: '/images/redefiningsuccess.jpg',
      },
    ],
  },
  {
    category: 'SB',
    events: [
      {
        title: 'Learn from Scratch Event',
        description:
          'The "Learn from Scratch" event successfully engaged 36 participants, introducing them to the fundamentals of programming using Scratch. Participants created games and participated in a quiz. Interactive and educational experience.',
        image: '/images/learnfromscratch.jpg',
      },
      {
        title: 'GAME JAM Event',
        date: 'October 29 - November 1, 2024',
        description:
          'IEEE Student Branch organized an online game development competition on the platform Scratch. The event challenged participants to create innovative puzzle games. First Place: Muhammed Jaasim and Joseph Chacko.',
        image: '/images/gamejam.jpg',
      },
    ],
  },
  {
    category: 'RAS',
    events: [
      {
        title: 'RoboRazz Event',
        description:
          'The IEEE RoboRazz event was a multi-phase robotics competition centered around the development of trash-collecting bots. The event comprised workshops, a documentation phase, and a final prototype demonstration.',
      },
    ],
  },
];

function PastEvents() {
  return (
    <section
      style={{
        background: '#fff',
        borderRadius: '16px',
        padding: '2rem',
        boxShadow: '0 2px 12px #0057b71a',
        marginBottom: '2rem',
      }}
    >
      <h1
        style={{
          textAlign: 'center',
          color: '#0057b7',
          fontWeight: 700,
          marginBottom: '2rem',
          fontSize: '2.2rem',
        }}
      >
        Past Events
      </h1>

      {pastEvents.map((category) => (
        <div key={category.category} style={{ marginBottom: '2rem' }}>
          <h2
            style={{
              textAlign: 'center',
              color: '#00aaff',
              fontWeight: 600,
              marginBottom: '1.5rem',
              fontSize: '1.8rem',
            }}
          >
            {category.category}
          </h2>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '2.5rem',
              justifyContent: 'center',
            }}
          >
            {category.events.map((event) => (
              <div
                key={event.title}
                style={{
                  background: '#f4f8fb',
                  borderRadius: '12px',
                  padding: '1.5rem',
                  width: '300px',
                  boxShadow: '0 2px 8px #0057b71a',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                {event.image && (
                  <img
                    src={event.image}
                    alt={event.title}
                    style={{
                      width: '100%',
                      height: '180px',
                      objectFit: 'cover',
                      borderRadius: '10px',
                      marginBottom: '1rem',
                      boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
                      transition: 'transform 0.3s ease',
                    }}
                    onMouseOver={(e) =>
                      (e.currentTarget.style.transform = 'scale(1.05)')
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.transform = 'scale(1)')
                    }
                  />
                )}
                <h3
                  style={{
                    marginBottom: '0.5rem',
                    color: '#0057b7',
                    fontWeight: 600,
                    textAlign: 'center',
                  }}
                >
                  {event.title}
                </h3>
                {event.date && (
                  <p
                    style={{
                      fontWeight: 'bold',
                      marginBottom: '0.5rem',
                      color: '#00aaff',
                    }}
                  >
                    {event.date}
                  </p>
                )}
                <p style={{ color: '#222', textAlign: 'center' }}>
                  {event.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default PastEvents;
