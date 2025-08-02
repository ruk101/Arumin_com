import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AOSInitializer from '../components/AOSInitializer';

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
        url: "https://arumin.com/favimg.png", // ✅ correct file used
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
  icons: {
    icon: '/favimg.ico', // ✅ update this from favicon.ico
    apple: '/favimg.png', // ✅ optional but fine as fallback
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <link rel="canonical" href="https://arumin.com" />
        <link rel="icon" href="/favimg.ico" />
  <link rel="apple-touch-icon" href="/favimg.png" />
  <link rel="icon" type="image/png" sizes="32x32" href="/favimg.png" />
<link rel="apple-touch-icon" sizes="180x180" href="/favimg.png" />

      </head>
      <body className="relative bg-white text-black font-serif min-h-screen">
        <AOSInitializer />
        <Header />
        <main className="flex flex-col items-center justify-center min-h-screen relative">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
