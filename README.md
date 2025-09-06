# IEEE RSET SB Website

🚀 Official website of **IEEE Student Branch, Rajagiri School of Engineering & Technology (RSET)**.
This project is a modern, responsive React-based website that highlights announcements, events, testimonials, and contact details of IEEE RSET SB.

---

## 🌟 Features

* **Homepage**

  * Hero banner with IEEE theme
  * About section with SB details
  * Announcements (cards with image, date, and description)
  * Events section with upcoming & past events
  * Testimonials from alumni and past Execom members
  * Footer with social media links

* **Navigation Bar**

  * Sticky top navbar with IEEE branding
  * Navigation links: Home, Execom, Events, Contact
  * Active link highlighting

* **Contact Page**

  * Clean form with Name, Email, Message fields
  * Thank-you state after submission
  * IEEE RSET SB official contact info

* **Execom Page (Planned)**

  * Showcase current executive committee members

---

## 🛠️ Tech Stack

* **Frontend**: React (Vite setup)
* **Routing**: React Router DOM
* **Styling**: Inline CSS (IEEE theme colors)
* **Deployment**: GitHub Pages / Vercel / Netlify

> **IEEE Theme Colors:**
>
> * Primary Blue: `#0057b7`
> * Accent Blue: `#00aaff`
> * Neutral Background: `#f4f8fb`

---

## 📂 Folder Structure

```bash
ieeersetsb25/
├── public/              # Static assets
│   └── vite.svg         # IEEE SB logo placeholder
├── src/
│   ├── components/
│   │   ├── Navbar.jsx   # Top navigation bar
│   ├── pages/
│   │   ├── HomePage.jsx # Homepage (announcements, events, testimonials)
│   │   ├── ContactPage.jsx # Contact form + details
│   │   ├── Execom.jsx   # Executive committee (TBD)
│   │   └── Events.jsx   # Events list (TBD)
│   ├── App.jsx          # Main app router
│   └── main.jsx         # React DOM entry point
├── package.json
├── vite.config.js
└── README.md
```

---

## ⚡ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/ieeersetsb25/ieeersetsb.git
cd ieeersetsb
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

App will be available at: **[http://localhost:5173/](http://localhost:5173/)**

### 4. Build for Production

```bash
npm run build
```

### 5. Preview Production Build

```bash
npm run preview
```

---

## 🤝 Contributing

We welcome contributions from IEEE RSET SB members!

1. Fork the repo
2. Create a new branch (`feature/new-section`)
3. Commit changes
4. Push branch and open a Pull Request

👉 **Note:** `main` branch is protected. Only the repository owner can merge PRs.

---

## 📌 Future Enhancements

* Dynamic **Execom Page** with profile cards
* **Events Page** with filtering & registration links
* **Newsletter integration** for announcements
* Deploy to **GitHub Pages / Vercel**

---

## 📄 License

This project is licensed under the **MIT License**.
You’re free to use, modify, and distribute with proper attribution to **IEEE RSET SB**.
