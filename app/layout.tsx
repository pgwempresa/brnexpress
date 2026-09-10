import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "BRN Express | Transporte e Logística em Palmas - TO",
  description:
    "BRN Express: transporte de produtos farmacêuticos, e-commerce e cargas refrigeradas em Tocantins, Brasília e Goiânia.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
  },
  openGraph: {
    title: "BRN Express | Transporte & Logística",
    description:
      "Logística expressa para empresas que precisam de prazo, cuidado e controle.",
    images: ["/og.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "BRN Express | Transporte & Logística",
    description:
      "Transporte farmacêutico, e-commerce e refrigerado em Tocantins, Brasília e Goiânia.",
    images: ["/og.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-K4JFTC4X');`}
        </Script>
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K4JFTC4X"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
