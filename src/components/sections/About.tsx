"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Youtube, MessageCircle, PlayCircle, Cpu } from "lucide-react";
import { AnimatedShinyText } from "@/components/ui/AnimatedShinyText";

const CredibilityBadge = ({ icon: Icon, text, delay }: { icon: React.ElementType, text: string, delay: number }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay }}
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary/10 border border-primary/20 text-primary-on-light text-[10px] font-m-black uppercase tracking-widest whitespace-nowrap"
    >
        <Icon className="h-4 w-4 text-primary" />
        {text}
    </motion.div>
);

const PlatformLogo = ({ name, delay }: { name: string, delay: number }) => (
    <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.3 }}
        viewport={{ once: true }}
        whileHover={{ opacity: 1, scale: 1.1 }}
        transition={{ duration: 0.3, delay }}
        className="px-8 grayscale hover:grayscale-0 transition-all cursor-default text-text-dark-secondary font-m-black text-xl tracking-tighter"
    >
        {name}
    </motion.div>
);

export const About = () => {
    return (
        <section id="sobre" className="section-light py-32 overflow-hidden relative">
            <div className="container px-6 mx-auto relative z-10">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    {/* Photo Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className="relative"
                    >
                        <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden relative flex items-center justify-center group shadow-light-hover border border-border-light bg-white">
                            <div className="absolute inset-0 bg-gradient-to-t from-surface-light via-transparent to-transparent z-10 opacity-60" />

                            {/* Real Photo */}
                            <div className="relative z-0 h-full w-full">
                                <Image
                                    src="/about.png"
                                    alt="Nattan Lima - Estrategista"
                                    fill
                                    className="object-cover object-center transition-transform duration-1000 group-hover:scale-105"
                                />
                            </div>

                            <div className="absolute bottom-8 left-8 right-8 z-20">
                                <div className="h-1 w-12 bg-primary mb-4 rounded-full" />
                                <div className="text-sm font-m-black uppercase tracking-[0.3em] text-text-dark">Estrategista de Vendas</div>
                            </div>
                        </div>

                        {/* Float badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="absolute -bottom-8 -right-8 card-light p-6 rounded-[2rem] border-2 border-primary/30 z-30"
                        >
                            <div className="flex items-center gap-4">
                                <div className="h-14 w-14 rounded-2xl bg-primary flex items-center justify-center text-white shadow-primary-strong">
                                    <Youtube className="h-7 w-7" />
                                </div>
                                <div>
                                    <div className="text-2xl font-m-black text-text-dark leading-tight tracking-tight">+22.7K</div>
                                    <div className="text-[10px] uppercase text-text-dark-secondary tracking-[0.2em] font-m-bold opacity-70">Inscritos Fiéis</div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Content Column */}
                    <div className="flex flex-col">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="inline-flex items-center gap-2 text-primary font-m-black uppercase tracking-[0.3em] text-xs mb-6 px-4 py-2 rounded-lg bg-primary/5 border border-primary/10">
                                <div className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                                <AnimatedShinyText className="!text-primary">
                                    Especialista por trás do método
                                </AnimatedShinyText>
                            </span>

                            <h2 className="text-5xl md:text-7xl font-m-black text-text-dark mb-6 tracking-tighter leading-none">
                                Nattan <span className="text-primary italic">Lima</span>
                            </h2>

                            <p className="text-xl md:text-2xl text-text-dark font-m-bold mb-10 leading-tight">
                                Fundador da Prisme Sales e <br className="hidden md:block" />
                                <span className="text-primary opacity-90">Estrategista de Negócios Digitais.</span>
                            </p>

                            <div className="space-y-8 text-text-dark-description text-lg md:text-xl leading-relaxed mb-12 font-medium">
                                <p>
                                    Há mais de 5 anos, ajudo pequenos e médios empresários a <span className="text-text-dark font-m-bold italic underline decoration-primary/40">destravarem o lucro</span> através da internet.
                                </p>
                                <p>
                                    Fundei a <span className="text-text-dark font-m-black">Prisme Sales</span> — uma consultoria focada em escala real via WhatsApp Business, automações avançadas e inteligência artificial.
                                </p>
                                <p className="p-8 rounded-[2rem] bg-white border-l-4 border-primary italic text-text-dark font-medium text-lg relative group shadow-light">
                                    <span className="absolute -top-4 -left-2 text-6xl text-primary/20 font-m-black group-hover:text-primary/30 transition-colors">&ldquo;</span>
                                    Minha abordagem é pragmática: elimino a teoria, identifico o gargalo principal e entrego um plano de execução imediato. Se não vende, não serve.
                                </p>
                            </div>

                            {/* Credibility Badges */}
                            <div className="flex flex-wrap gap-4 mb-16">
                                <CredibilityBadge icon={Youtube} text="22.7K+ inscritos" delay={0.4} />
                                <CredibilityBadge icon={MessageCircle} text="1.000+ no WhatsApp" delay={0.5} />
                                <CredibilityBadge icon={PlayCircle} text="118+ aulas práticas" delay={0.6} />
                                <CredibilityBadge icon={Cpu} text="Especialista N8N + IA" delay={0.7} />
                            </div>

                            {/* Platform Logos */}
                            <div className="flex flex-wrap items-center gap-x-12 gap-y-6 pt-10 border-t border-black/5 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
                                <PlatformLogo name="Meta" delay={0.8} />
                                <PlatformLogo name="Google" delay={0.9} />
                                <PlatformLogo name="N8N" delay={1.0} />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};
