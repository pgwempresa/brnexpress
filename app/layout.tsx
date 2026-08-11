import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "BRN Express | Transporte e Logística em Palmas - TO",
  description:
    "BRN Express: transporte de produtos farmacêuticos, e-commerce e cargas refrigeradas em Tocantins, Brasília e Goiânia.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "BRN Express | Transporte & Logística",
    description:
      "Logística expressa para empresas que precisam de prazo, cuidado e controle.",
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "BRN Express | Transporte & Logística",
    description:
      "Transporte farmacêutico, e-commerce e refrigerado em Tocantins, Brasília e Goiânia.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${manrope.variable}`}>{children}</body>
    </html>
  );
}
