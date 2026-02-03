import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["400", "500", "700", "800"], // Regular to Bold
});

export const metadata = {
  title: "ORVEEOTECH | Creative IT Solutions",
  description: "Modern IT Technology Company. Building the future with retro soul.",
  icons: {
    icon: '/favicon.ico', // We'll handle this later or let Next.js fallback
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfit.variable}>
        <div className="grain-overlay"></div>
        {children}
      </body>
    </html>
  );
}
