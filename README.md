<div align="center">

<img src="https://pixgen-wheat.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.0unh_.2ut0bqs.png&w=64&q=75" alt="PixGen Logo" width="72" />

# PixGen

**Turn Ideas into Stunning AI Art**

Generate high-quality images from simple text prompts — built for speed, scale, and creativity.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-pixgen--wheat.vercel.app-black?style=for-the-badge&logo=vercel)](https://pixgen-wheat.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/atlas)

</div>

---

## ✨ Overview

**PixGen** is a full-stack AI image gallery web application where users can browse, explore, and generate production-ready AI visuals. With dynamic category filtering, authenticated user profiles, and a clean gallery experience, PixGen brings creative AI art to everyone — from curious beginners to professional designers.

---

## 🖼️ Screenshots

| Home | Gallery | Pricing |
|------|---------|---------|
| Hero section with top AI generations | Browse all photos by category | Free, Pro & Enterprise plans |

> Live at 👉 [pixgen-wheat.vercel.app](https://pixgen-wheat.vercel.app/)

---

## 🚀 Features

- 🎨 **AI Image Gallery** — Browse curated AI-generated images across categories like Sci-Fi, Fantasy, Cyberpunk, Vaporwave, Surreal and more
- 🔍 **Category Filtering** — Dynamically filter images by style/genre via URL-based query params
- 📄 **Dynamic Routing** — Each image has its own dedicated detail page (`/all-photos/[id]`)
- 🔐 **Authentication** — Secure sign-up/login with **Better Auth** including Google Social Login
- 👤 **User Profiles** — Authenticated profile pages for managing your account
- 💰 **Pricing Plans** — Free, Pro ($12/mo), and Enterprise (Custom) tiers with FAQ
- 🌐 **Remote Image Proxy** — Next.js image optimization for external image URLs
- ⚠️ **Error Handling** — Graceful error states and loading indicators throughout the app
- 📱 **Responsive Design** — Mobile-first layout using Tailwind CSS + HeroUI components

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|---|---|
| **Next.js** | Full-stack React framework (App Router) |
| **HTML5** | Semantic markup |
| **Tailwind CSS** | Utility-first styling |
| **HeroUI** | Pre-built accessible UI components |
| **Gravity Icons** | Icon set |
| **React Icons** | Additional icon library |
| **Google Fonts** | Custom typography |

### Backend & Database
| Technology | Purpose |
|---|---|
| **MongoDB** | NoSQL database for storing users & images |
| **MongoDB Atlas** | Cloud-hosted database cluster |
| **MongoDB Adapter** | Better Auth database adapter |
| **Better Auth** | Authentication framework |
| **Social Login** | Google OAuth sign-in |

---

## 🔧 Topics & Concepts Covered

- ✅ **Google Fonts** — Custom typeface integration via `next/font`
- ✅ **Remote Images** — Configured `next.config.js` with `remotePatterns` for external image domains
- ✅ **Error Handling** — `error.jsx` and loading states for graceful UX
- ✅ **Dynamic Routing** — `/all-photos/[id]` for per-image detail pages
- ✅ **Proxy** — Next.js acts as an image proxy to optimize and serve remote images

---

## ⚙️ Getting Started

### Prerequisites

- Node.js `v18+`
- A MongoDB Atlas cluster
- Google OAuth credentials (for social login)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/nihalxofficial/PixGen-Ai-Image-Gallery
cd pixgen

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env.local
```

### Environment Variables

Create a `.env.local` file in the root of the project:

```env
# MongoDB
MONGODB_URI=your_mongodb_atlas_connection_string

# Better Auth
BETTER_AUTH_SECRET=your_auth_secret
BETTER_AUTH_URL=http://localhost:3000

# Google OAuth
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

### Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 💳 Pricing Plans

| Plan | Price | Generations | Resolution |
|------|-------|-------------|------------|
| **Free** | $0/month | 10/day | 512×512 |
| **Pro** | $12/month | 500/month | 1024×1024 (HD) |
| **Enterprise** | Custom | Unlimited | 4K + Batch |

---

## 🚢 Deployment

This project is deployed on **Vercel**.

```bash
# Build for production
npm run build

# Deploy with Vercel CLI
vercel --prod
```

Make sure to add all environment variables to your Vercel project settings.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

Made with ❤️ using **Next.js** & **MongoDB**

[🌐 Live Demo](https://pixgen-wheat.vercel.app/) • [📸 Gallery](https://pixgen-wheat.vercel.app/all-photos) • [💰 Pricing](https://pixgen-wheat.vercel.app/pricing)

</div>