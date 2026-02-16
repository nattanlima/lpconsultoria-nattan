"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Youtube, Users, PlayCircle, ArrowRight, ChevronDown, TrendingUp, Globe } from "lucide-react";
import { TypingAnimation } from "@/components/ui/TypingAnimation";
import { NumberTicker } from "@/components/ui/NumberTicker";
import { AnimatedShinyText } from "@/components/ui/AnimatedShinyText";

const StatItem = ({ icon: Icon, value, suffix = "", label, delay }: { icon: React.ElementType, value: number, suffix?: string, label: string, delay: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className="flex items-center gap-4 group"
    >
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors duration-300">
            <Icon className="h-6 w-6 text-primary" />
        </div>
        <div>
            <div className="text-2xl font-m-bold text-text-primary leading-tight">
                <NumberTicker value={value} />{suffix}
            </div>
            <div className="text-[10px] font-m-black uppercase tracking-[0.2em] text-text-secondary opacity-70">{label}</div>
        </div>
    </motion.div>
);

export const Hero = () => {

    return (
        <section className="relative overflow-hidden pt-32 pb-24 lg:pt-48 lg:pb-40 section-dark">
            {/* Refined golden radial — warmer, more focused */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_-10%,rgba(245,158,11,0.12),transparent_60%)]" />

            {/* Subtle ambient glow orbs */}
            <div className="absolute top-0 left-0 -z-10 h-full w-full opacity-20">
                <div className="absolute top-[-5%] left-[-5%] h-[600px] w-[600px] bg-primary/15 blur-[140px] rounded-full" />
                <div className="absolute bottom-[-10%] right-[-5%] h-[500px] w-[500px] bg-primary/8 blur-[120px] rounded-full" />
            </div>

            {/* Dot grid pattern */}
            <div className="absolute inset-0 -z-10 opacity-[0.025]" style={{ backgroundImage: 'radial-gradient(circle, #F59E0B 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

            <div className="container px-6 mx-auto">
                <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
                    {/* Left Content */}
                    <div className="lg:col-span-12 xl:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-primary/5 border border-primary/15 text-primary text-[10px] font-m-black uppercase tracking-[0.3em] mb-10"
                        >
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
                            </span>
                            <AnimatedShinyText className="text-xs uppercase tracking-widest font-m-black text-primary">
                                Consultoria Individual • 1 Hora • Via Google Meet
                            </AnimatedShinyText>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                            className="text-5xl md:text-7xl lg:text-[5.5rem] font-m-black tracking-tight leading-[0.95] mb-8 text-text-primary text-balance"
                        >
                            Tenha 1 Hora Exclusiva Para <TypingAnimation
                                words={["Destravar as Vendas", "Dominar o WhatsApp", "Escalar Resultados"]}
                                className="heading-gradient italic"
                                typeSpeed={80}
                                deleteSpeed={50}
                                pauseDelay={2000}
                                loop={false}
                            />
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-xl md:text-2xl text-text-secondary max-w-2xl mb-12 leading-relaxed font-medium"
                        >
                            Estratégias personalizadas de WhatsApp, Chatbots e Automação — direto ao ponto para o SEU negócio.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="flex flex-col sm:flex-row gap-6 mb-20 w-full sm:w-auto"
                        >
                            <button
                                className="h-16 px-10 rounded-2xl bg-primary text-background font-m-black uppercase tracking-wider transition-all hover:bg-primary-hover hover:-translate-y-2 shadow-primary-strong hover:shadow-[0_0_80px_rgba(245,158,11,0.4)] flex items-center justify-center gap-3 active:scale-95 group relative overflow-hidden"
                                onClick={() => {
                                    const element = document.getElementById("oferta");
                                    element?.scrollIntoView({ behavior: "smooth" });
                                }}
                            >
                                <span className="relative z-10">Agendar Agora</span>
                                <ArrowRight className="h-6 w-6 relative z-10 group-hover:translate-x-2 transition-transform duration-500" />
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                            </button>
                            <button
                                className="h-16 px-10 rounded-2xl border border-primary/30 text-primary font-m-black uppercase tracking-wider transition-all hover:bg-primary/10 flex items-center justify-center gap-3"
                                onClick={() => {
                                    const element = document.getElementById("como-funciona");
                                    element?.scrollIntoView({ behavior: "smooth" });
                                }}
                            >
                                Ver Método <ChevronDown className="h-6 w-6" />
                            </button>
                        </motion.div>

                        {/* Stats Bar */}
                        <div className="flex flex-wrap justify-center lg:justify-start gap-10 lg:gap-16 py-8 border-t border-white/5 w-full">
                            <StatItem icon={Youtube} value={22700} suffix="+" label="no YouTube" delay={0.8} />
                            <StatItem icon={Users} value={1000} suffix="+" label="membros" delay={0.9} />
                            <StatItem icon={PlayCircle} value={118} label="aulas" delay={1.0} />
                            <StatItem icon={TrendingUp} value={15} suffix="+ anos" label="de vendas" delay={1.1} />
                            <StatItem icon={Globe} value={6} suffix="+ países" label="atendidos" delay={1.2} />
                        </div>
                    </div>

                    {/* Right Content - Photo */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="lg:col-span-12 xl:col-span-5 relative"
                    >
                        <div className="relative z-10 w-full aspect-[4/5] max-w-[480px] mx-auto overflow-hidden rounded-[2.5rem] border border-white/10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.6)] flex items-center justify-center group bg-background-alt">
                            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-20 pointer-events-none" />

                            <Image
                                src="/principal.png"
                                alt="Nattan Lima"
                                fill
                                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                                priority
                            />

                            {/* Floating tag */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -right-6 bottom-1/4 px-6 py-4 rounded-2xl border border-primary/20 z-30 hidden md:block bg-background/90 shadow-premium"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                                    <span className="text-xs font-m-black uppercase tracking-wider text-text-primary">Vendas Destravadas</span>
                                </div>
                            </motion.div>
                        </div>

                        {/* Glow effects */}
                        <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary/8 rounded-full blur-[100px] -z-10" />
                        <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-primary/6 rounded-full blur-[80px] -z-10" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
