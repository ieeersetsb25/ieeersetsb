import React, { useState } from "react";

// Main component, must be named 'App' for the preview to work correctly.
function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would typically send the form data to a backend server
  };

  return (
    // Main container
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-8 lg:p-12">
      {/* Card container */}
      <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-xl overflow-hidden max-w-5xl w-full lg:h-[600px]">
        {/* Left: Social sidebar */}
        <div
          className="hidden lg:flex flex-col text-gray-300 w-20 items-center justify-center space-y-8 py-8"
          style={{ backgroundColor: "#2c7fd8ff" }} // custom sidebar background
        >
          <a href="#" className="hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
          </a>
          <a href="#" className="hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
          <a href="#" className="hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
          </a>
          <a href="#" className="hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>
          </a>
        </div>

        {/* Middle: Contact Form */}
        <div
          className="text-white w-full md:w-1/2 p-8 lg:p-12 flex flex-col justify-between relative z-10"
          style={{ backgroundColor: "#0057B7" }} // custom form background
        >
          <div>
            <h2 className="text-2xl font-semibold mb-2">Get in touch</h2>
            <p className="text-gray-200 text-sm mb-6">
              Call or Email us regarding questions or issues
            </p>

            {submitted ? (
              <div className="text-center text-green-200 py-20">
                <h3 className="text-lg font-semibold">Thank you!</h3>
                <p>We will get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Name"
                  required
                  className="w-full p-3 rounded-md border text-white placeholder-gray-300 focus:outline-none focus:ring-1 focus:ring-white"
                  style={{ backgroundColor: "#2c7fd8ff" }}
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone no"
                  className="w-full p-3 rounded-md border text-white placeholder-gray-300 focus:outline-none focus:ring-1 focus:ring-white"
                  style={{ backgroundColor: "#2c7fd8ff" }}
                />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="E-mail address"
                  required
                  className="w-full p-3 rounded-md border text-white placeholder-gray-300 focus:outline-none focus:ring-1 focus:ring-white"
                  style={{ backgroundColor: "#2c7fd8ff" }}
                />
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Message"
                  rows="4"
                  required
                  className="w-full p-3 rounded-md border text-white placeholder-gray-300 resize-none focus:outline-none focus:ring-1 focus:ring-white"
                  style={{ backgroundColor: "#2c7fd8ff" }}
                />
                
                <button
                  type="submit"
                    className="w-full p-3 rounded-md border text-white placeholder-gray-300 resize-none focus:outline-none focus:ring-1 focus:ring-white hover:bg-[#0057B7] hover:border-[#0057B7]"
                  style={{ backgroundColor: "#2c7fd8ff" }}
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Right: Map */}
        <div className="w-full md:w-1/2 h-[400px] md:h-full">
          <div className="h-full w-full bg-gray-200 relative overflow-hidden">
            <div className="absolute inset-0 bg-gray-900 bg-opacity-25 z-10"></div>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.256247754394!2d-73.98785648459423!3d40.7484405793279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2596be168a2f3%3A0x6b7a59e9c7e0f2f5!2sEmpire%20State%20Building!5e0!3m2!1sen!2sin!4v1628173491913!5m2!1sen!2sin" 
              className="w-full h-full border-0" 
              allowFullScreen="" 
              loading="lazy" 
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
