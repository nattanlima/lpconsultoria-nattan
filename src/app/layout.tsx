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
  alternates: { canonical: "/" },

  // Open Graph (WhatsApp, Facebook, LinkedIn)
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://mentoria.prismeapp.com.br",
    siteName: "Faz Que Vende",
    title: "Faz Que Vende | Consultoria com Nattan Lima",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@graph": [{"@type": "Product", "name": "Consultoria Faz Que Vende: 1 hora com Nattan Lima", "description": "1 hora individual via Google Meet para destravar as vendas do seu negócio: diagnóstico de WhatsApp, chatbots, tráfego pago e automação. Inclui gravação, plano de ação e 7 dias de suporte.", "url": "https://mentoria.prismeapp.com.br/", "brand": {"@type": "Brand", "name": "Prisme Sales"}}, {"@type": "Person", "@id": "https://mentoria.prismeapp.com.br/#nattan", "name": "Nattan Lima", "jobTitle": "Fundador da Prisme Sales e criador do canal Faz que Vende", "worksFor": {"@type": "Organization", "name": "Prisme Sales", "url": "https://www.prismesales.com.br/"}, "sameAs": ["https://www.youtube.com/@fazqvende", "https://www.instagram.com/nattan.prisme", "https://www.linkedin.com/in/nattanlima/"]}, {"@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Como funciona o agendamento?", "acceptedAnswer": {"@type": "Answer", "text": "Imediatamente após a confirmação do seu interesse, você terá acesso ao calendário exclusivo do Nattan Lima via Google Calendar. Lá você escolhe o melhor dia e horário disponível no fuso horário local."}}, {"@type": "Question", "name": "A consultoria é gravada?", "acceptedAnswer": {"@type": "Answer", "text": "Sim! Todas as sessões são gravadas em Full HD e enviadas para você logo após o término da call, junto com todos os links e materiais citados, para que você possa revisar as estratégias quando quiser."}}, {"@type": "Question", "name": "E se eu precisar desmarcar?", "acceptedAnswer": {"@type": "Answer", "text": "Você pode reagendar sua consultoria com até 24 horas de antecedência através do link de confirmação que receberá por e-mail, sem custo adicional, respeitando a agenda semanal."}}, {"@type": "Question", "name": "Tenho suporte pós-consultoria?", "acceptedAnswer": {"@type": "Answer", "text": "Sim! Você terá acesso a um canal direto no WhatsApp por 7 dias úteis para tirar dúvidas rápidas sobre a execução do plano de ação que definimos juntos na call."}}, {"@type": "Question", "name": "Para quem é indicado?", "acceptedAnswer": {"@type": "Answer", "text": "Para empresários, gestores ou infoprodutores que queiram faturar mais usando WhatsApp, tráfego pago e automação. Se você sente que seu processo de vendas está travado ou o lead está caro, essa consultoria é o seu próximo passo."}}, {"@type": "Question", "name": "Quais ferramentas são analisadas?", "acceptedAnswer": {"@type": "Answer", "text": "Analisamos estrategicamente sua conta de anúncios, seu funil de atendimento no WhatsApp e suas automações (N8N, Zapier, Make, etc). O foco é eficiência e ROI."}}]}]}) }}
        />
        {/* End JSON-LD */}
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
