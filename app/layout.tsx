import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
