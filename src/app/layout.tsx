import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: "Faz Que Vende | Consultoria Individual",
  description: "Tenha 1 Hora Exclusiva Comigo Para Destravar as Vendas do Seu Negócio. Estratégias personalizadas de WhatsApp, Chatbots, Tráfego Pago e Automação.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link href="https://calendar.google.com/calendar/scheduling-button-script.css" rel="stylesheet" />
      </head>
      <body
        className={`${montserrat.variable} ${openSans.variable} font-open-sans antialiased bg-background text-text-primary`}
      >
        {children}
        <Script src="https://calendar.google.com/calendar/scheduling-button-script.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
