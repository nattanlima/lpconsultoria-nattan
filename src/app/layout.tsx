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
  metadataBase: new URL('https://mentoria.prismeapp.com.br'),
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
        url: "/logo_canal.png",
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
    images: ["/logo_canal.png"],
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
        {/* Meta Pixel Code */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '996380206611800');
fbq('track', 'PageView');`}
        </Script>
        {/* End Meta Pixel Code */}
      </head>
      <body
        className={`${montserrat.variable} ${openSans.variable} font-open-sans antialiased bg-background text-text-primary`}
      >
        {/* Meta Pixel noscript fallback */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=996380206611800&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <FlyingMoney />
        {children}
      </body>
    </html>
  );
}
