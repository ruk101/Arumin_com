import './globals.css'

export const metadata = {
  title: "Arumin — Rarity, Responsibly Yours",
  description: "Arumin unveils a private world of sapphires shaped by provenance and purpose, featuring a curated selection of Sri Lanka’s finest. Coming soon.",
  keywords: "Arumin, Rare, Luxury, Exclusive, Jewelry, Premium",
  authors: [{ name: "Arumin Team" }],
  creator: "Arumin",
  openGraph: {
    title: "Arumin — Rarity, Responsibly Yours",
    description: "Arumin unveils a private world of sapphires shaped by provenance and purpose, featuring a curated selection of Sri Lanka’s finest. Coming soon.",
    url: "https://arumin.com",
    siteName: "Arumin",
    images: [
      {
        url: "https://arumin.com/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arumin — Rarity, Responsibly Yours",
    description: "Arumin unveils a private world of sapphires shaped by provenance and purpose, featuring a curated selection of Sri Lanka’s finest. Coming soon.",
    creator: "@arumin",
    images: ["https://arumin.com/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
