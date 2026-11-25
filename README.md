# Arfatul Islam — Personal Portfolio Website

Modern, accessible, responsive, and performance-optimized personal portfolio for **Arfatul Islam** (Assistant Officer of ERP, Business & Data Analyst, Finance & FinTech Researcher).

Built with **React**, **Vite**, **Tailwind CSS**, and **Lucide Icons** following modern UI/UX principles with a sleek dark-first developer & analyst aesthetic (Slate/Zinc with Indigo & Cyan accents).

---

## 🚀 Live Dev Server

The development server runs locally:
- **Local URL**: [http://localhost:5173/](http://localhost:5173/)
- **Network URL**: Visible in your terminal output (e.g. `http://192.168.x.x:5173/`)

---

## 🛠️ Project Structure

```text
arfatul-portfolio/
├── src/
│   ├── data/
│   │   └── portfolioData.js       # ⭐ Single source of truth for all content
│   ├── components/
│   │   ├── Navbar.jsx             # Sticky glassmorphism nav with dark/light mode toggle
│   │   ├── Hero.jsx               # Hero banner with roles, bio, CTAs & status card
│   │   ├── AboutEducation.jsx     # Bio, geographical context, languages & education timeline
│   │   ├── Experience.jsx         # Enterprise ERP, analytics, and banking experience
│   │   ├── ProjectsResearch.jsx   # Filterable papers/projects with abstract reader modal
│   │   ├── HonorsLeadership.jsx   # Aspire Leaders Program 2026 & university distinctions
│   │   ├── SkillsCertifications.jsx # Core domain, technical tools & accredited certifications
│   │   ├── ReferencesContact.jsx  # Academic & industry references with contact form
│   │   ├── SocialIcons.jsx        # Crisp SVG icons for LinkedIn & GitHub
│   │   └── Footer.jsx             # Footer with copyright & smooth back-to-top button
│   ├── App.jsx                    # Root app state & theme controller
│   ├── index.css                  # Tailwind CSS v4 styling & scrollbar
│   └── main.jsx                   # React DOM entry point
├── index.html                     # HTML head, metadata, and custom SVG favicon
├── vite.config.js                 # Vite + Tailwind CSS plugin config
└── package.json                   # Dependencies & npm scripts
```

---

## ✏️ How to Update Portfolio Content

All personal data, achievements, publications, certifications, and contact channels are stored in:
👉 `src/data/portfolioData.js`

To update your portfolio:
1. Open [`src/data/portfolioData.js`](file:///C:/Users/Arfatul%20Islam/.gemini/antigravity/scratch/arfatul-portfolio/src/data/portfolioData.js).
2. Modify or add any project, paper link, experience role, certification, or contact number.
3. Save the file — Vite will update the page instantly via Hot Module Replacement (HMR).

---

## 💻 Commands

```bash
# Start local development server
npm run dev

# Run production build
npm run build

# Preview production build locally
npm run preview
```

---

## 🌐 Deployment Ready

The project builds standard static HTML/JS/CSS assets into `dist/`. You can effortlessly deploy to:
- **GitHub Pages** (via GitHub Actions or `gh-pages`)
- **Vercel** (`vercel deploy`)
- **Netlify** (`netlify deploy`)
