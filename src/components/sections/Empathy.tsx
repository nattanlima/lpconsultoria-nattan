"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const Empathy = () => {
    return (
        <section className="py-32 relative overflow-hidden section-dark">
            {/* Warm bottom glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(245,158,11,0.08),transparent_50%)]" />

            {/* Decorative Large Quotes */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 text-[30rem] font-m-black text-primary opacity-[0.02] select-none pointer-events-none leading-none tracking-tighter">
                &ldquo;&rdquo;
            </div>

            <div className="container px-6 mx-auto relative z-10">
                <div className="max-w-5xl mx-auto flex flex-col items-center text-center lg:flex-row lg:text-left lg:items-center gap-16 lg:gap-24">
                    <div className="flex-1">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <span className="text-[10px] font-m-black uppercase tracking-[0.4em] text-primary mb-8 block opacity-60">
                                Honestidade Brutal
                            </span>

                            <p className="text-3xl md:text-5xl font-m-bold text-text-primary leading-[1.15] mb-10 tracking-tight text-balance">
                                Eu sei exatamente como é isso. Já atendi centenas de empresários no <span className="heading-gradient italic">olho do furacão</span>.
                            </p>

                            <div className="h-1 w-20 bg-primary/40 mb-10 hidden lg:block rounded-full" />

                            <p className="text-xl text-text-description leading-relaxed font-medium">
                                A real é: não falta informação. Falta um <span className="text-text-primary font-m-black px-2 py-1 bg-primary/10 rounded-lg border border-primary/15">PLANO DE ATAQUE</span> personalizado, feito por quem vive a trincheira todos os dias e sabe onde o dinheiro está sendo jogado fora.
                            </p>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="relative"
                    >
                        <div className="h-44 w-44 md:h-64 md:w-64 rounded-full overflow-hidden border-4 border-primary/20 p-2 group shadow-premium bg-background-alt relative">
                            <div className="h-full w-full rounded-full overflow-hidden flex items-center justify-center relative bg-background-alt">
                                <Image
                                    src="/logo_canal.png"
                                    alt="Nattan Lima Avatar"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>
                        </div>

                        {/* Pulse rings */}
                        <div className="absolute inset-0 rounded-full border border-primary/30 animate-ping opacity-10" />
                        <div className="absolute inset-0 -z-10 bg-primary/15 blur-[60px] rounded-full scale-110 animate-pulse" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
