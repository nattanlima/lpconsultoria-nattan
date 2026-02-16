"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { AvatarCircles } from "@/components/ui/AvatarCircles";
import { Marquee } from "@/components/ui/Marquee";

const TestimonialCard = ({ name, role, content, result, delay }: { name: string, role: string, content: string, result: string, delay: number }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className="p-10 rounded-[2rem] border border-white/8 hover:border-primary/30 transition-all duration-500 flex flex-col group relative overflow-hidden bg-background-alt"
    >
        <div className="absolute top-4 right-4 text-primary/10 group-hover:text-primary/20 transition-colors">
            <Quote className="h-12 w-12" />
        </div>

        <div className="flex items-center gap-4 mb-8">
            <div className="h-14 w-14 rounded-2xl border border-primary/20 shrink-0 bg-primary/10 overflow-hidden flex items-center justify-center">
                <span className="text-sm text-primary font-m-black uppercase">
                    {name.split(' ').map(n => n[0]).join('')}
                </span>
            </div>
            <div>
                <div className="text-text-primary font-m-bold text-lg leading-tight">{name}</div>
                <div className="text-text-secondary text-xs uppercase tracking-widest font-medium opacity-70">{role}</div>
            </div>
        </div>

        <div className="flex gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3 w-3 fill-primary text-primary" />
            ))}
        </div>

        <p className="text-text-description font-medium leading-[1.7] mb-8 flex-1 text-lg">
            &ldquo;{content}&rdquo;
        </p>

        <div className="relative pt-6 border-t border-white/5">
            <div className="text-xs uppercase tracking-[0.2em] text-text-secondary mb-2 font-m-black opacity-50">Resultado Real</div>
            <div className="text-primary font-m-black text-xl tracking-tight">
                {result}
            </div>
        </div>
    </motion.div>
);

export const SocialProof = () => {
    const testimonials = [
        {
            name: "Marcos Silva",
            role: "Empresário",
            content: "Eu achava que sabia usar o WhatsApp Business. Depois de 1h com o Nattan, percebi que estava perdendo venda todo dia. Ele me mostrou exatamente onde estava o furo e como tapar.",
            result: "+40% de vendas em 30 dias"
        },
        {
            name: "Ana Oliveira",
            role: "E-commerce",
            content: "Gastava R$ 2.000/mês em tráfego pago sem saber o que estava fazendo. O Nattan reorganizou minha estratégia em uma call e meu custo por lead caiu pela metade.",
            result: "CPA reduzido em 50%"
        },
        {
            name: "Ricardo Mendes",
            role: "Infoprodutor",
            content: "Melhor investimento que fiz no meu negócio. Em 1 hora saí com um plano claro do que fazer nos próximos 30 dias. Sem enrolação.",
            result: "ROI imediato"
        },
        {
            name: "Juliana Costa",
            role: "Loja Virtual",
            content: "Estava usando chatbot errado e perdendo clientes. Nattan me mostrou como configurar direito e agora meu atendimento é 24/7 sem perder qualidade.",
            result: "Conversão +35%"
        },
        {
            name: "Felipe Santos",
            role: "Consultoria",
            content: "Pensava que precisava de API do WhatsApp. Descobri que coexistência resolve 100% do meu caso e economizei muito.",
            result: "Economia de R$ 800/mês"
        },
        {
            name: "Carla Dias",
            role: "Serviços",
            content: "Não sabia por onde começar com Meta Ads. Saí da call com estratégia clara e nos primeiros 15 dias já recuperei o investimento.",
            result: "ROAS 4.2x"
        }
    ];

    return (
        <section className="py-32 section-dark relative overflow-hidden">
            {/* Ambient glow */}
            <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 blur-[100px] rounded-full -translate-x-1/2" />

            <div className="container px-6 mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-m-black text-text-primary mb-6 tracking-tight">
                            Histórias de quem <span className="heading-gradient italic">destravou</span>
                        </h2>
                        <div className="h-1.5 w-24 bg-primary mx-auto rounded-full opacity-50 mb-8" />

                        {/* Avatar Circles */}
                        <div className="flex flex-col items-center gap-4">
                            <AvatarCircles
                                numPeople={297}
                                avatarUrls={[
                                    "https://i.pravatar.cc/150?img=1",
                                    "https://i.pravatar.cc/150?img=2",
                                    "https://i.pravatar.cc/150?img=3",
                                    "https://i.pravatar.cc/150?img=4"
                                ]}
                            />
                            <p className="text-text-secondary text-sm font-medium">
                                Mais de <span className="text-primary font-bold">300 empresários</span> já destravaram suas vendas
                            </p>
                        </div>
                    </motion.div>
                </div>

                <Marquee pauseOnHover className="mb-24" speed="slow">
                    {testimonials.map((t, i) => (
                        <div key={i} className="w-[400px]">
                            <TestimonialCard {...t} delay={0} />
                        </div>
                    ))}
                </Marquee>

                {/* Community evidence */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <p className="text-text-secondary text-[10px] font-m-black uppercase tracking-[0.4em] mb-12 opacity-50">Evidências da Comunidade</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                        {[1, 2, 3, 4].map(i => (
                            <div key={i} className="aspect-[3/4] rounded-2xl border border-white/5 flex flex-col items-center justify-center p-6 grayscale hover:grayscale-0 transition-all duration-700 opacity-30 hover:opacity-100 bg-background-alt">
                                <div className="h-12 w-12 rounded-full border border-primary/20 flex items-center justify-center mb-4">
                                    <div className="h-2 w-2 rounded-full bg-primary" />
                                </div>
                                <span className="text-[10px] text-text-secondary font-m-black uppercase tracking-widest text-center">Feedback Real</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
