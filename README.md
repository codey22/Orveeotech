# Orveeotech Website

A vintage-themed, retro-styled corporate website for Orveeotech, a brand of MD Infotech Systems. Built with Next.js 14, this project features a unique "scrapbook" aesthetic with paper textures, doodles, and coffee stains, while delivering modern performance and responsiveness.

## 🌟 Features

- **Unique Retro Design**: Custom CSS modules implementing a vintage scrapbook look.
- **Responsive Layout**: Fully optimized for Desktop, Tablet, and Mobile devices.
- **Contact Form**: Integrated with Email notifications (Nodemailer) and MongoDB storage.
- **Automated Reporting**: Weekly and Monthly Excel reports generated via Cron jobs.
- **Bot Protection**: Honeypot and simple arithmetic CAPTCHA.
- **Animations**: Subtle Framer Motion animations for enhanced interactivity.

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Database**: [MongoDB](https://www.mongodb.com/) (Mongoose)
- **Styling**: CSS Modules, Google Fonts (Rye, Special Elite, Outfit)
- **Email**: Nodemailer (Gmail SMTP)
- **Scheduling**: Vercel Cron
- **Excel**: XLSX (SheetJS)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- MongoDB Atlas Account
- Gmail Account (with App Password)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/orveeotech.git
    cd orveeotech
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up Environment Variables:**
    Create a `.env.local` file in the root directory. Use the example below as a guide:

    ```env
    # Database Connection
    MONGODB_URI="mongodb+srv://<username>:<password>@cluster.mongodb.net/visitors?retryWrites=true&w=majority"

    # Email Configuration (for Contact Form)
    EMAIL_USER="your-email@gmail.com"
    EMAIL_PASS="your-gmail-app-password"
    ADMIN_EMAIL="contact@orveeotech.com"

    # Security
    CRON_SECRET="your_secure_random_string_for_cron_jobs"
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

```
Orveeotech/
├── app/
│   ├── api/             # Backend API Routes
│   │   ├── contact/     # Form submission handler
│   │   └── cron/        # Scheduled tasks (reports)
│   ├── contact/         # Contact Page
│   ├── services/        # Services Page
│   ├── globals.css      # Global styles & variables
│   ├── layout.js        # Root layout
│   └── page.js          # Homepage
├── components/          # Reusable UI Components
│   ├── Navbar.js        # Responsive Navigation
│   ├── Footer.js        # Site Footer
│   ├── Doodle.js        # Decorative SVG elements
│   ├── CoffeeStain.js   # Decorative overlays
│   └── ...
├── lib/                 # Utility functions
│   ├── mongodb.js       # DB Connection helper
│   └── notifications.js # Email sending logic
├── models/              # Mongoose Schemas
│   └── Contact.js       # Contact form data model
└── public/              # Static assets
```

## ⏰ Cron Jobs (Automated Reports)

The project is configured with `vercel.json` to run automated tasks:

*   **Weekly Report**: Every Sunday at 7:00 AM.
*   **Monthly Report**: 1st of every month at 7:00 AM.

These jobs hit the `/api/cron/report` endpoint, generating an Excel file of all contact submissions and emailing it to the Admin.

## 📱 Responsiveness

The design adapts to all screen sizes:
*   **Desktop**: Full layout with floating elements and grid structures.
*   **Tablet**: Adjusted padding and font sizes.
*   **Mobile**: Stacked layouts, simplified navigation, and touch-friendly touchpoints.

## 📄 License

This project is proprietary software of MD Infotech Systems.
