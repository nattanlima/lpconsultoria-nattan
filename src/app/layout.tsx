import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import Script from "next/script";
import { FlyingMoney } from "@/components/effects/FlyingMoney";
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
  title: "Faz Que Vende | Consultoria com Nattan Lima",
  description: "1 Hora Exclusiva Para Destravar as Vendas do Seu Negócio. Estratégias personalizadas de WhatsApp, Chatbots, Tráfego Pago e Automação.",

  // Open Graph (WhatsApp, Facebook, LinkedIn)
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://fazquevende.com",
    siteName: "Faz Que Vende",
    title: "Consultoria Estratégica com Nattan Lima | Destravar Vendas",
    description: "Tenha 1 hora exclusiva para resolver gargalos no WhatsApp, tráfego pago e automação. Diagnóstico + plano de ação personalizado.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Faz Que Vende - Consultoria Individual",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Consultoria Estratégica com Nattan Lima",
    description: "1 Hora Para Destravar as Vendas do Seu Negócio",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${montserrat.variable} ${openSans.variable} font-open-sans antialiased bg-background text-text-primary`}
      >
        <FlyingMoney />
        {children}
      </body>
    </html>
  );
}
