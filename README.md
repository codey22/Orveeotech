# ORVEEOTECH Website

A modern, high-performance brand website with a 1990s graphic design inspired retro feel. Built with Next.js (App Router), JavaScript, and CSS Modules.

## Features

- **Retro Aesthetic**: Custom CSS variables for a 90s Memphis/Pop design style.
- **Animations**: GSAP for hero sequences, Framer Motion for UI interactions, and minimal Three.js for background effects.
- **Backend**: Next.js API Routes integrated with MongoDB for contact form submissions.
- **Performance**: Server Components by default, optimized fonts (Outfit).

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: JavaScript
- **Styling**: CSS Modules, Global CSS Variables
- **Animations**: GSAP, Framer Motion, Three.js (@react-three/fiber)
- **Database**: MongoDB (via Mongoose)

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd orveeotech_website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   - Copy `.env.local.example` to `.env.local`
   - Add your MongoDB connection string:
     ```
     MONGODB_URI=your_mongodb_connection_string
     ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open http://localhost:3000** to view the site.

## Deployment

### Vercel (Recommended)

1. Push your code to a Git repository (GitHub, GitLab, Bitbucket).
2. Import the project into Vercel.
3. Add the `MONGODB_URI` environment variable in the Vercel dashboard.
4. Deploy.

### Render

1. Create a new Web Service on Render.
2. Connect your repository.
3. Set the build command to `npm run build`.
4. Set the start command to `npm start`.
5. Add the `MONGODB_URI` environment variable.

## Project Structure

- `app/`: App Router pages and API routes.
  - `page.js`: Home page.
  - `about/`: About page.
  - `services/`: Services & Works page.
  - `contact/`: Contact page.
  - `api/contact/`: Contact form API endpoint.
  - `globals.css`: Global styles and design tokens.
- `components/`: Reusable UI components (Navbar, Footer, Hero, etc.).
- `lib/`: Utility functions (MongoDB connection).
- `models/`: Mongoose models (Contact schema).
