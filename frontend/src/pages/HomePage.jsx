import React from "react";
import { motion } from "framer-motion";
import { FaRocket, FaLightbulb, FaUsers, FaCalendarAlt } from "react-icons/fa";

const announcements = [
  {
    title: "IEEE RSET SB Wins Regional Award",
    date: "Aug 2025",
    img: "https://ieeemeasb.org/wp-content/uploads/2023/12/3fd3f88c-bf2e-4536-ba84-2c290e1e64e3-600x600.jpg",
    description:
      "Our SB was recognized for outstanding membership development.",
  },
  {
    title: "AI Bootcamp Success",
    date: "July 2025",
    img: "https://ieeemeasb.org/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-16-at-21.16.12_ea2457c7-600x600.jpg",
    description:
      "Students excelled in the AI Bootcamp, showcasing innovative projects.",
  },
];

const events = [
  {
    title: "TechTalk 2025",
    date: "Sept 15, 2025",
    description: "A seminar on emerging technologies and innovation.",
  },
  {
    title: "Robotics Workshop",
    date: "Oct 10, 2025",
    description: "Hands-on workshop on robotics and automation.",
  },
];

const testimonials = [
  {
    name: "Dr. Ajmal KT",
    role: "Ex-Counselor",
    img: "https://ieeemeasb.org/wp-content/uploads/2023/12/ajmal.jpeg",
    quote:
      "My journey with IEEE started when I was doing my M Tech at RIT Kottayam. Those memorable experiences I gained during my M Tech days made me part of the IEEE family at RSET.",
  },
  {
    name: "Mr. Ameen Shahid N",
    role: "Chairman (2020-21)",
    img: "https://ieeemeasb.org/wp-content/uploads/2023/12/ameen.jpg",
    quote:
      "IEEE helped me throughout my college life and continues to inspire my career. Organizing and participating in national-level events boosted our confidence tremendously.",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const features = [
  {
    icon: <FaRocket className="text-4xl text-[#00aaff]" />,
    title: "Innovation",
    description: "Fostering cutting-edge technological advancements",
  },
  {
    icon: <FaLightbulb className="text-4xl text-[#00aaff]" />,
    title: "Knowledge",
    description: "Promoting continuous learning and skill development",
  },
  {
    icon: <FaUsers className="text-4xl text-[#00aaff]" />,
    title: "Community",
    description: "Building a strong network of tech enthusiasts",
  },
  {
    icon: <FaCalendarAlt className="text-4xl text-[#00aaff]" />,
    title: "Events",
    description: "Organizing workshops and technical events",
  },
];

function HomePage() {
  return (
    <div className="max-w-[1200px] mx-auto bg-[#f4f8fb] min-h-screen font-sans px-4 sm:px-6 lg:px-8 py-6 pb-0">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden bg-gradient-to-r from-[#0057b7] via-[#0077cc] to-[#00aaff] text-white rounded-3xl p-6 sm:p-8 md:p-12 mb-8 sm:mb-12 text-center shadow-2xl"
      >
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute inset-0 bg-grid-pattern"></div>
        </div>
        <div className="relative z-10">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block p-3 mb-6 bg-white rounded-full backdrop-blur-sm"
          >
            <img
              src="./src/assets/ieee-logo.png"
              alt="IEEE RSET SB Logo"
              className="w-10 h-20 md:w-24 md:h-24 mx-auto animate-float"
            />
          </motion.div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100"
          >
            IEEE RSET SB
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-8 text-blue-100"
          >
            Empowering Innovation & Technology at Rajagiri School of Engineering
            & Technology
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <button className="px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base bg-white text-[#0057b7] font-semibold rounded-full hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-1 shadow-lg whitespace-nowrap">
              Join Us
            </button>
            <button className="px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 whitespace-nowrap">
              Learn More
            </button>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Grid */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1"
          >
            <div className="w-16 h-16 flex items-center justify-center bg-blue-50 rounded-full mb-4 mx-auto">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold text-center text-gray-800 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-center">{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* About Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        id="about"
        className="relative my-16 bg-gradient-to-br from-white to-blue-50 rounded-3xl p-8 md:p-12 shadow-xl overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full -mr-32 -mt-32 opacity-50"></div>
        <div className="relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1 mb-4 text-sm font-semibold text-blue-800 bg-blue-100 rounded-full">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Empowering the{" "}
              <span className="text-[#0057b7]">Next Generation</span> of
              Engineers
            </h2>
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                IEEE RSET SB is a vibrant community of passionate students
                dedicated to fostering technical excellence and professional
                growth. As part of the world's largest technical professional
                organization, we provide a platform for students to explore,
                learn, and innovate.
              </p>
              <p>
                Through workshops, seminars, hackathons, and networking events,
                we empower future engineers and innovators to develop their
                skills, collaborate on projects, and make meaningful
                contributions to the field of technology.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-[#0057b7] text-white font-semibold rounded-lg hover:bg-[#004494] transition-all duration-300 flex items-center">
                <FaUsers className="mr-2" /> Meet Our Team
              </button>
              <button className="px-6 py-3 border-2 border-[#0057b7] text-[#0057b7] font-semibold rounded-lg hover:bg-blue-50 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Announcements Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="my-12 sm:my-16 lg:my-20 relative"
      >
        <div className="absolute -top-10 left-0 w-full flex justify-center">
          <div className="bg-white px-6 py-2 rounded-full shadow-lg inline-flex items-center">
            <span className="w-3 h-3 bg-[#00aaff] rounded-full mr-2 animate-pulse"></span>
            <span className="text-sm font-medium text-gray-700">
              LATEST UPDATES
            </span>
          </div>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 relative">
          <span className="relative inline-block">
            Announcements
            <span className="absolute bottom-0 left-0 w-full h-2 bg-blue-100 -z-10 -mb-1"></span>
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {announcements.map((a, index) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-md sm:shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={a.img}
                  alt={a.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <span className="absolute top-4 right-4 bg-[#0057b7] text-white text-xs font-bold px-3 py-1 rounded-full">
                  {a.date}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#0057b7] transition-colors">
                  {a.title}
                </h3>
                <p className="text-gray-600 mb-4">{a.description}</p>
                <button className="text-[#0057b7] font-medium flex items-center group-hover:translate-x-1 transition-transform">
                  Read More
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Events Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        id="events"
        className="relative py-12 sm:py-16 my-12 sm:my-16 lg:my-20 bg-gradient-to-br from-[#f0f8ff] to-[#e6f2ff] rounded-2xl sm:rounded-3xl overflow-hidden mx-2 sm:mx-4 lg:mx-0"
      >
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute inset-0 bg-grid-pattern"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 mb-4 text-sm font-semibold text-blue-800 bg-blue-100 rounded-full">
              Our Events
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Upcoming & Recent <span className="text-[#0057b7]">Events</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join us for exciting workshops, seminars, and competitions
              designed to enhance your technical skills.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {events.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-blue-50 p-3 rounded-lg">
                      <FaCalendarAlt className="h-6 w-6 text-[#0057b7]" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {event.title}
                      </h3>
                      <p className="text-[#00aaff] font-semibold mb-3">
                        {event.date}
                      </p>
                      <p className="text-gray-600 mb-4">{event.description}</p>
                      <button className="inline-flex items-center text-[#0057b7] font-medium hover:text-[#003d82] transition-colors">
                        View Details
                        <svg
                          className="w-4 h-4 ml-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button className="px-6 py-3 bg-white text-[#0057b7] font-semibold rounded-lg border-2 border-[#0057b7] hover:bg-blue-50 transition-all duration-300 flex items-center mx-auto">
              <FaCalendarAlt className="mr-2" /> View All Events
            </button>
          </div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-16 my-20 relative"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0057b7] to-[#00aaff] opacity-5 -skew-y-2 -z-10"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 mb-4 text-sm font-semibold text-blue-800 bg-blue-100 rounded-full">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What People <span className="text-[#0057b7]">Say</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from our members and alumni about their experiences with IEEE
              RSET SB.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, index) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-blue-100"
                  />
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-gray-900">
                      {t.name}
                    </h3>
                    <p className="text-[#00aaff] font-semibold">{t.role}</p>
                  </div>
                </div>
                <div className="relative">
                  <svg
                    className="absolute -top-8 -left-2 w-8 h-8 text-blue-100"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-gray-700 italic pl-8">
                    &quot;{t.quote}&quot;
                  </p>
                </div>
                <div className="flex mt-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-20 pt-12 pb-8 bg-white border-t border-gray-200 rounded-t-3xl"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                About Us
              </h3>
              <p className="text-gray-600">
                Empowering the next generation of engineers and innovators
                through technical excellence and professional development.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/"
                    className="text-gray-600 hover:text-[#0057b7] transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/execom"
                    className="text-gray-600 hover:text-[#0057b7] transition-colors"
                  >
                    Execom
                  </a>
                </li>
                <li>
                  <a
                    href="/events"
                    className="text-gray-600 hover:text-[#0057b7] transition-colors"
                  >
                    Events
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="text-gray-600 hover:text-[#0057b7] transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Contact Info
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 mr-2 text-[#0057b7] mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>
                    Rajagiri School of Engineering & Technology, Kakkanad,
                    Kerala, India
                  </span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2 text-[#0057b7]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <a href="mailto:ieee@rset.edu.in" className="hover:underline">
                    ieee@rset.edu.in
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Follow Us
              </h3>
              <div className="flex space-x-4">
                <a
                  href="https://facebook.com/meaieeesb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-[#0057b7] hover:bg-[#0057b7] hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com/ieeemeasb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 hover:bg-pink-600 hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com/company/ieeemeasb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-700 hover:bg-blue-700 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="https://youtube.com/ieeemeasb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-600 hover:bg-red-600 hover:text-white transition-colors"
                  aria-label="YouTube"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} IEEE RSET SB. All rights
              reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-500 hover:text-gray-700 text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700 text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}

export default HomePage;
