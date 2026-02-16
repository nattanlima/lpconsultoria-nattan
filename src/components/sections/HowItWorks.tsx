"use client";

import { motion } from "framer-motion";
import { CreditCard, CalendarCheck, Video } from "lucide-react";

const Step = ({ number, icon: Icon, title, description, delay, isLast }: { number: string, icon: React.ElementType, title: string, description: string, delay: number, isLast?: boolean }) => (
    <div className="relative flex-1 group">
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center text-center px-10 relative z-10"
        >
            <div className="relative mb-12">
                {/* Large Background Number */}
                <div className="text-[8rem] font-m-black text-primary/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] leading-none select-none transition-transform duration-1000 group-hover:scale-110 group-hover:text-primary/10">
                    {number}
                </div>

                {/* Icon Container */}
                <div className="h-24 w-24 rounded-[1.5rem] bg-background-alt flex items-center justify-center text-primary relative z-10 border border-primary/20 shadow-premium group-hover:bg-primary group-hover:text-white group-hover:-translate-y-2 transition-all duration-700 overflow-hidden">
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <Icon className="h-10 w-10 relative z-10" />
                </div>
            </div>

            <h3 className="text-2xl font-m-black mb-4 text-text-primary tracking-tight leading-tight uppercase">{title}</h3>
            <p className="text-text-description font-medium leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-700">{description}</p>
        </motion.div>

        {!isLast && (
            <div className="hidden lg:block absolute top-[4.5rem] left-[calc(50%+6rem)] w-[calc(100%-12rem)] h-[1px]">
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: delay + 0.5, ease: "easeInOut" }}
                    className="h-full w-full bg-gradient-to-r from-primary/60 via-primary/20 to-transparent origin-left"
                />
                {/* Small indicator dot that travels */}
                <motion.div
                    initial={{ left: 0, opacity: 0 }}
                    whileInView={{ left: "100%", opacity: [0, 1, 0] }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, delay: delay + 0.8, repeat: Infinity, repeatDelay: 3 }}
                    className="absolute top-1/2 -translate-y-1/2 h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_10px_#FACC15]"
                />
            </div>
        )}
    </div>
);

export const HowItWorks = () => {
    return (
        <section id="como-funciona" className="py-32 bg-background-alt relative overflow-hidden">
            {/* Subtitle / Background text */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 opacity-[0.02] font-m-black text-[12vw] whitespace-nowrap select-none pointer-events-none uppercase">
                PROCESS EXECUTION
            </div>

            <div className="container px-6 mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-28"
                >
                    <span className="text-[10px] font-m-black uppercase tracking-[0.5em] text-primary mb-6 block">Fluxo de Trabalho</span>
                    <h2 className="text-4xl md:text-5xl font-m-black text-text-primary mb-8 tracking-tighter">
                        Simples assim: <br className="md:hidden" />
                        <span className="text-primary italic">3 degraus</span> para o topo
                    </h2>
                    <div className="h-1.5 w-24 bg-primary mx-auto rounded-full opacity-50" />
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-20 lg:gap-0 relative max-w-[90rem] mx-auto">
                    <Step
                        number="01"
                        icon={CreditCard}
                        title="Vaga Garantida"
                        description="Clique no botão, realize o aporte via Stripe e receba a confirmação imediata. Sem fricção, 100% seguro."
                        delay={0.1}
                    />
                    <Step
                        number="02"
                        icon={CalendarCheck}
                        title="Timing Perfeito"
                        description="Você terá acesso direto à minha agenda pessoal. Escolha o slot que melhor encaixa na sua operação."
                        delay={0.3}
                    />
                    <Step
                        number="03"
                        icon={Video}
                        title="Consultoria"
                        description="Encontro em alta definição via Meet. 60 minutos de pura estratégia focada em destravar seu ROI."
                        delay={0.5}
                        isLast
                    />
                </div>
            </div>
        </section>
    );
};

