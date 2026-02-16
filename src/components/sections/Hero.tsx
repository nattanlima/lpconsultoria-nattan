"use client";

import { motion } from "framer-motion";
import { Youtube, Users, PlayCircle, ArrowRight, ChevronDown } from "lucide-react";
import { useTypewriter } from "@/hooks/use-typewriter";

const StatItem = ({ icon: Icon, value, label, delay }: { icon: React.ElementType, value: string, label: string, delay: number }) => (
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
            <div className="text-2xl font-m-bold text-text-primary leading-tight">{value}</div>
            <div className="text-[10px] font-m-black uppercase tracking-[0.2em] text-text-secondary opacity-70">{label}</div>
        </div>
    </motion.div>
);

export const Hero = () => {
    const typedText = useTypewriter("Destravar as Vendas", 50, 1500);

    return (
        <section className="relative overflow-hidden pt-32 pb-24 lg:pt-48 lg:pb-40 bg-background">
            {/* High-End Background Decor */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(250,204,21,0.08),transparent_50%)]" />

            <div className="absolute top-0 left-0 -z-10 h-full w-full opacity-30">
                <div className="absolute top-0 left-[-10%] h-[700px] w-[700px] bg-primary/20 blur-[150px] rounded-full" />
                <div className="absolute bottom-0 right-[-10%] h-[600px] w-[600px] bg-primary/10 blur-[120px] rounded-full" />
            </div>

            {/* Grid Pattern overlay */}
            <div className="absolute inset-0 -z-10 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #FACC15 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

            <div className="container px-6 mx-auto">
                <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
                    {/* Left Content */}
                    <div className="lg:col-span-12 xl:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass border-primary/20 text-primary text-[10px] font-m-black uppercase tracking-[0.3em] mb-10"
                        >
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
                            </span>
                            Consultoria Individual • 1 Hora • Via Google Meet
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                            className="text-5xl md:text-7xl lg:text-[5.5rem] font-m-black tracking-tight leading-[0.95] mb-8 text-text-primary text-balance"
                        >
                            Tenha 1 Hora Exclusiva Para <span className="text-primary italic">{typedText}<span className="animate-pulse">|</span></span>
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
                                className="h-16 px-10 rounded-2xl bg-primary text-white font-m-black uppercase tracking-wider transition-all hover:bg-primary-hover hover:-translate-y-2 shadow-primary-strong hover:shadow-primary-strong flex items-center justify-center gap-3 active:scale-95 group relative overflow-hidden"
                                onClick={() => {
                                    const element = document.getElementById("oferta");
                                    element?.scrollIntoView({ behavior: "smooth" });
                                }}
                            >
                                <span className="relative z-10">Agendar Agora</span>
                                <ArrowRight className="h-6 w-6 relative z-10 group-hover:translate-x-2 transition-transform duration-500" />
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                            </button>
                            <button
                                className="h-16 px-10 rounded-2xl border border-primary/30 text-primary font-m-black uppercase tracking-wider transition-all hover:bg-primary/10 flex items-center justify-center gap-3 backdrop-blur-sm"
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
                            <StatItem icon={Youtube} value="22.7K+" label="no YouTube" delay={0.8} />
                            <StatItem icon={Users} value="1.000+" label="membros" delay={0.9} />
                            <StatItem icon={PlayCircle} value="118" label="aulas" delay={1.0} />
                        </div>
                    </div>

                    {/* Right Content - Modern Card Stack */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="lg:col-span-12 xl:col-span-5 relative"
                    >
                        <div className="relative z-10 w-full aspect-[4/5] max-w-[480px] mx-auto overflow-hidden rounded-[2.5rem] border border-white/10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] glass flex items-center justify-center group">
                            {/* Photo Placeholder with better style */}
                            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-20" />
                            <div className="flex flex-col items-center gap-4 text-primary/30 font-m-black text-xs uppercase tracking-[0.5em] select-none group-hover:scale-110 transition-transform duration-700">
                                <div className="w-20 h-[2px] bg-primary/20 mb-4" />
                                Foto do Nattan
                                <div className="w-20 h-[2px] bg-primary/20 mt-4" />
                            </div>

                            {/* Floating Card UI Mockup */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -right-6 top-1/4 glass px-6 py-4 rounded-2xl border-primary/20 z-30 hidden md:block"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="h-2 w-2 rounded-full bg-primary" />
                                    <span className="text-xs font-m-black uppercase tracking-wider">Vendas Destravadas</span>
                                </div>
                            </motion.div>
                        </div>

                        {/* Decorative organic shapes */}
                        <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -z-10" />
                        <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-primary/10 rounded-full blur-[80px] -z-10" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

