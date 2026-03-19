import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Alma Zen Spa | Massagem e Bem-estar em São Paulo",
  description: "Descubra o Spa Alma Zen em São Paulo. Oferecemos Massagem Anti-estresse, Shiatsu, Acupuntura e Drenagem Linfática. Agende sua sessão e sinta o equilíbrio total.",
  keywords: ["Spa São Paulo", "Massagem Relaxante", "Shiatsu SP", "Acupuntura São Paulo", "Drenagem Linfática", "Bem-estar", "Relaxamento", "Alma Zen Spa"],
  authors: [{ name: "Alma Zen Spa" }],
  creator: "Alma Zen Spa",
  publisher: "Alma Zen Spa",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "https://almazenbemestar.com.br",
  },
  openGraph: {
    title: "Alma Zen Spa | Massagem e Bem-estar em São Paulo",
    description: "Sinta o toque do equilíbrio e bem-estar total no Alma Zen Spa. Massagens, Acupuntura e Planos Exclusivos.",
    url: "https://almazenbemestar.com.br",
    siteName: "Alma Zen Spa",
    images: [
      {
        url: "/hero.png",
        width: 1200,
        height: 630,
        alt: "Alma Zen Spa - Ambiente de Relaxamento",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alma Zen Spa | Massagem e Bem-estar em São Paulo",
    description: "Massagens Relaxantes e Terapias em São Paulo. Encontre sua paz no Alma Zen.",
    images: ["/hero.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DaySpa",
    "name": "Alma Zen Spa",
    "image": "https://almazenbemestar.com.br/hero.png",
    "@id": "https://almazenbemestar.com.br",
    "url": "https://almazenbemestar.com.br",
    "telephone": "+5511944015835",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Rua Barata Ribeiro, 380 salas 11 – 1º andar",
      "addressLocality": "São Paulo",
      "addressRegion": "SP",
      "postalCode": "01308-000",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -23.5558, // Approximation for Barata Ribeiro
      "longitude": -46.6534
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "20:00"
    },
    "sameAs": [
      "https://www.instagram.com/almazen.massagem/"
    ],
    "priceRange": "$$"
  };

  return (
    <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable}`}>
       <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
