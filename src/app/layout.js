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
  title: "Alma Zen Spa - Relaxamento e Bem-estar em São Paulo",
  description: "Spa Alma Zen: Massagem Anti-estresse, Shiatsu, Acupuntura, Drenagem Linfática e Planos Exclusivos. Sinta o toque do equilíbrio e bem-estar total.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
