"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, MessageCircle, ArrowRight, Zap } from "lucide-react";
import { AnimatedShinyText } from "@/components/ui/AnimatedShinyText";

export const Offer = () => {
    const calendarUrl = "https://calendar.google.com/calendar/appointments/schedules/AcZssZ1H_5YESH9mLLmN0ZhO-1AThU6SEvjfONvH334mV3UY2YKX7dYtgnUcaFNqlwD8c0VnWXHzEAg7?gv=true";

    useEffect(() => {
        const initCalendar = () => {
            const win = window as any;
            if (win.calendar && win.calendar.schedulingButton) {
                const containerId = 'google-calendar-official-container';
                let container = document.getElementById(containerId);

                if (!container) {
                    container = document.createElement('div');
                    container.id = containerId;
                    container.style.display = 'none';
                    document.body.appendChild(container);

                    win.calendar.schedulingButton.load({
                        url: calendarUrl,
                        color: '#F59E0B',
                        label: 'Agendar',
                        target: container,
                    });
                }
            } else {
                setTimeout(initCalendar, 500);
            }
        };

        initCalendar();
    }, []);

    const handleScheduling = () => {
        const container = document.getElementById('google-calendar-official-container');
        const googleBtn = container?.querySelector('button');

        if (googleBtn) {
            (googleBtn as HTMLElement).click();
        } else {
            window.open(calendarUrl, '_blank');
        }
    };

    return (
        <section id="oferta" className="py-32 relative overflow-hidden section-dark">
            {/* Golden spotlight */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

            <div className="absolute top-1/2 left-1/2 -z-10 h-full w-full -translate-x-1/2 -translate-y-1/2">
                <div className="absolute top-1/2 left-1/2 h-[700px] w-[700px] bg-primary/8 blur-[150px] rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse" />
            </div>

            <div className="container px-6 mx-auto">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="p-10 md:p-20 rounded-[3rem] border border-primary/15 relative overflow-hidden text-center bg-background-alt"
                    >
                        {/* Scarcity Badge */}
                        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-m-black uppercase tracking-[0.2em] mb-12">
                            <Zap className="h-4 w-4 fill-primary animate-pulse" />
                            <AnimatedShinyText className="!text-primary">
                                Apenas 5 vagas por semana
                            </AnimatedShinyText>
                        </div>

                        <h2 className="text-4xl md:text-6xl font-m-black text-text-primary mb-8 leading-[1.1] tracking-tight text-balance">
                            Seu Próximo Nível <br /> Está a <span className="heading-gradient italic">1 Hora</span> de Distância
                        </h2>

                        <p className="text-xl text-text-secondary mb-14 max-w-2xl mx-auto font-medium">
                            Garanta agora o seu diagnóstico e plano de ação personalizado. O investimento se paga no primeiro gargalo que a gente tapar.
                        </p>

                        <div className="flex flex-col items-center justify-center mb-16">
                            <div className="text-text-secondary line-through text-2xl font-medium mb-3 opacity-40">
                                De R$ 297
                            </div>
                            <div className="flex items-start gap-1">
                                <span className="text-3xl font-bold text-primary mt-6">R$</span>
                                <span className="text-[7rem] md:text-[10rem] font-m-black heading-gradient leading-none tracking-tighter">
                                    247,90
                                </span>
                            </div>
                            <div className="px-6 py-2 rounded-lg bg-primary/10 text-primary text-xs font-m-black uppercase tracking-[0.3em] mt-6">
                                Pagamento único • Sem mensalidades
                            </div>
                        </div>

                        <div className="flex flex-col gap-8 items-center">
                            <button
                                id="cta-offer"
                                onClick={handleScheduling}
                                className="h-24 w-full max-w-md px-12 rounded-2xl bg-primary text-background font-m-black text-xl md:text-2xl uppercase tracking-[0.1em] shadow-primary-strong hover:shadow-[0_0_80px_rgba(245,158,11,0.4)] hover:-translate-y-2 transition-all duration-500 flex items-center justify-center gap-4 active:scale-95 group relative overflow-hidden"
                            >
                                <span className="relative z-10">Reservar Minha Vaga</span>
                                <ArrowRight className="h-8 w-8 relative z-10 group-hover:translate-x-2 transition-transform duration-500" />
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                            </button>

                            <div className="flex flex-wrap items-center gap-8 pt-10 border-t border-white/5 w-full justify-center">
                                <div className="flex items-center gap-2 text-text-secondary text-sm font-semibold">
                                    <ShieldCheck className="h-5 w-5 text-primary" />
                                    Pagamento 100% Seguro
                                </div>
                                <div className="flex items-center gap-2 text-text-secondary text-sm font-semibold">
                                    <MessageCircle className="h-5 w-5 text-primary" />
                                    Suporte via WhatsApp
                                </div>
                            </div>
                        </div>

                        {/* Corner dot pattern */}
                        <div className="absolute -bottom-10 -right-10 grid grid-cols-5 gap-3 opacity-10">
                            {[...Array(25)].map((_, i) => (
                                <div key={i} className="h-2 w-2 rounded-full bg-primary" />
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
