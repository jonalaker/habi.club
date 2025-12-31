import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "HABI Token | Eco-Friendly Rewards",
  description: "HABI Token - Making it profitable to be eco-friendly. Earn HABI tokens for your good deeds and access eco-friendly goods and services on the Polygon network.",
  keywords: "HABI Token, eco-friendly, cryptocurrency, blockchain, sustainability, green token, polygon, rewards",
  authors: [{ name: "HABI Token Team" }],
  openGraph: {
    title: "HABI Token | Eco-Friendly Rewards",
    description: "Now it's profitable to be eco-friendly. Earn HABI tokens for your good deeds.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={outfit.variable}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
