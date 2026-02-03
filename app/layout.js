import { Outfit, Rye, Special_Elite } from "next/font/google";
import "./globals.css";
import Airplane from "@/components/Airplane";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["400", "500", "700", "800"], // Regular to Bold
});

const rye = Rye({
  subsets: ["latin"],
  variable: "--font-rye",
  weight: "400",
});

const specialElite = Special_Elite({
  subsets: ["latin"],
  variable: "--font-special-elite",
  weight: "400",
});

export const metadata = {
  title: "ORVEEOTECH | Creative IT Solutions",
  description: "Modern IT Technology Company. Building the future with retro soul.",
  icons: {
    icon: '/favicon.ico', 
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${rye.variable} ${specialElite.variable}`}>
        <div className="grain-overlay"></div>
        <Airplane />
        {children}
      </body>
    </html>
  );
}
