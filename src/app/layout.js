import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
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
  metadataBase: new URL("https://hospital-colonia.vercel.app"),
  title: "Hospital Colonia ASSE - Dr. Samuel Bertón",
  description:
    "Atención médica de emergencia y especialidades las 24 horas en Colonia del Sacramento, Uruguay. Hospital moderno con tecnología de vanguardia y equipo humano.",
  keywords: ["Hospital Colonia", "ASSE", "Colonia del Sacramento", "Salud Uruguay", "Emergencias 24h", "Dr. Samuel Bertón"],
  authors: [{ name: "Hospital Colonia ASSE" }],
  openGraph: {
    title: "Hospital Colonia ASSE - Dr. Samuel Bertón",
    description: "Atención médica de emergencia y especialidades las 24 horas en Colonia del Sacramento, Uruguay.",
    url: "https://hospital-colonia.vercel.app",
    siteName: "Hospital Colonia ASSE",
    images: [
      {
        url: "/hospital-colonia.jpg",
        width: 1200,
        height: 630,
        alt: "Hospital Colonia ASSE - Dr. Samuel Bertón",
      },
    ],
    locale: "es_UY",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hospital Colonia ASSE - Dr. Samuel Bertón",
    description: "Atención médica de emergencia y especialidades las 24 horas en Colonia del Sacramento, Uruguay.",
    images: ["/hospital-colonia.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
