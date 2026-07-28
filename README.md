# Ashif Akram — Personal Portfolio

A modern, responsive, and accessible personal portfolio website built with **React 19**, **Vite**, **Tailwind CSS v4**, **Framer Motion**, and **Lenis** smooth scrolling.

Designed to showcase professional experience as a **Java Full Stack Developer**, specializing in core **backend engineering** (Spring Boot, REST APIs, Spring Security, Redis, MySQL) and building web applications with **React**.

---

## ⚡ Features

- **Modern Glassmorphic Dark UI**: Sleek dark aesthetic (`#09090b`) built with curated HSL color tokens and Google-inspired accent highlights (`#6750a4`, `#cfbcff`, `#e7c365`).
- **WebGL Shader Background**: Custom WebGL fragment shader canvas creating organic background color movement.
- **Smooth Navigation & Scroll**: Configured with Lenis inertia scrolling and dynamic section indicator navigation.
- **Accessibility & Focus States**: Semantic HTML5 document outline, keyboard focus-visible rings (`:focus-visible`), and screen-reader ARIA attributes.
- **Interactive Contact Form**: Client-side validated form powered by `react-hook-form` that submits directly to a Google Forms endpoint.
- **Responsive Layout**: Fluid layouts across desktop, tablet, and mobile breakpoints without scroll overflow.

---

## 🛠️ Tech Stack

| Domain | Technology |
| :--- | :--- |
| **Framework** | [React 19](https://react.dev/) + [Vite](https://vitejs.dev/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) |
| **Smooth Scroll** | [Lenis](https://lenis.darkroom.engineering/) |
| **Form Management** | [React Hook Form](https://react-hook-form.com/) |
| **SEO & Head** | [React Helmet Async](https://github.com/stayunbroken/react-helmet-async) |
| **Icons** | [React Icons](https://react-icons.github.io/react-icons/) & Material Symbols |

---

## 📂 Project Structure

```
portfolio/
├── public/                # Favicon and static assets
├── src/
│   ├── assets/            # Static image assets
│   ├── components/        # React UI components
│   │   ├── About/         # Bio and stats section
│   │   ├── Achievements/  # Core technical highlights
│   │   ├── Background/    # WebGL Shader background canvas
│   │   ├── Certifications/# Professional training & roadmap
│   │   ├── Contact/       # Interactive contact form
│   │   ├── Education/     # Academic degree details
│   │   ├── Experience/    # Experience timeline & case study
│   │   ├── Footer/        # Page footer and social links
│   │   ├── Hero/          # Hero banner and quick stack cards
│   │   ├── Navbar/        # Fixed top navigation bar
│   │   ├── Philosophy/    # Engineering values & core strengths
│   │   ├── Projects/      # Flagship & enterprise project cards
│   │   └── Skills/        # Tech stack grid
│   ├── data/              # Projects, experience, and skills data
│   ├── hooks/             # Custom React hooks
│   ├── App.css            # Custom application utilities
│   ├── App.jsx            # Main App container & section order
│   ├── index.css          # Design tokens & Tailwind imports
│   └── main.jsx           # Application entry point
├── package.json           # Dependencies and build scripts
└── vite.config.js         # Vite configuration
```

---

## 🚀 Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

Ensure you have the following installed on your machine:
- **Node.js**: `v18.0.0` or higher
- **npm**: `v9.0.0` or higher

### Local Installation & Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/ashifakram/portfolio.git
   cd portfolio
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173` to view the site.

---

## 📜 Available Scripts

In the project directory, you can run:

| Command | Action |
| :--- | :--- |
| `npm run dev` | Launches the local dev server with Hot Module Replacement (HMR) |
| `npm run build` | Compiles and optimizes production assets into the `dist/` directory |
| `npm run preview` | Serves the production build locally for verification |
| `npm run lint` | Runs `oxlint` for rapid linting and code inspection |

---

## 👤 Developer Profile

- **Name**: Ashif Akram
- **Role**: Java Full Stack Developer / Junior Software Engineer
- **Company**: Esquare(E2) Software India Pvt Ltd.
- **Location**: Bengaluru, KA, India
- **GitHub**: [@ashifakram](https://github.com/ashifakram)
- **LinkedIn**: [Ashif Akram](https://www.linkedin.com/in/ashif-akram-893996227)
