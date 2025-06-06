// ❌ DO NOT add 'use client' here!

import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AOSInitializer from '../components/AOSInitializer'; // New

export const metadata = {
  title: "Arumin",
  description:
    "Arumin is a global supplier of ethically sourced Ceylon sapphires, offering direct access to Sri Lanka’s finest through a transparent and responsible supply chain.",
  keywords: "Arumin, Rare, Luxury, Exclusive, Jewelry, Premium",
  authors: [{ name: "Arumin Team" }],
  creator: "Arumin",
  openGraph: {
    title: "Arumin",
    description:
      "Arumin is a global supplier of ethically sourced Ceylon sapphires, offering direct access to Sri Lanka’s finest through a transparent and responsible supply chain.",
    url: "https://arumin.com",
    siteName: "Arumin",
    images: [
      {
        url: "https://arumin.com/favimg.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    description:
      "Arumin is a global supplier of ethically sourced Ceylon sapphires, offering direct access to Sri Lanka’s finest through a transparent and responsible supply chain.",
    creator: "@arumin",
    images: ["https://arumin.com/favimg.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className="relative bg-white text-black font-serif min-h-screen">
        <AOSInitializer /> {/* This is where we initialize AOS */}
        <Header />
        <main className="flex flex-col items-center justify-center min-h-screen relative">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
