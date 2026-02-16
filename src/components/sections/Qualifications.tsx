"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

export const Qualifications = () => {
    const isFor = [
        "Empresários que vendem pelo WhatsApp",
        "Gestores de tráfego que querem otimizar lances",
        "Expert ou Infoprodutores em fase de escala",
        "Negócios locais que buscam automação",
        "Quem já fatura e quer profissionalizar o funil"
    ];

    const isntFor = [
        "Quem busca fórmula mágica para ficar rico",
        "Quem não está disposto a investir em ferramentas",
        "Quem não tem um produto ou serviço validado",
        "Quem quer que eu faça todo o trabalho operacional",
        "Curiosos que não vão aplicar o conhecimento"
    ];

    return (
        <section className="py-24 bg-background-alt overflow-hidden">
            <div className="container px-6 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-text-primary mb-6">
                        Para quem é (e para quem NÃO é) esta consultoria
                    </h2>
                    <div className="h-1.5 w-20 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {/* Positivo */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass p-8 md:p-12 rounded-radius-card border-primary/20 bg-primary/[0.02]"
                    >
                        <h3 className="text-2xl font-extrabold font-montserrat text-primary mb-8 flex items-center gap-3">
                            <Check className="h-8 w-8" />
                            É PARA VOCÊ SE:
                        </h3>
                        <ul className="space-y-6">
                            {isFor.map((item, i) => (
                                <li key={i} className="flex items-start gap-4">
                                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                                        <Check className="h-4 w-4 text-primary" />
                                    </div>
                                    <span className="text-text-description text-lg">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Negativo */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass p-8 md:p-12 rounded-radius-card border-white/5 opacity-80"
                    >
                        <h3 className="text-2xl font-extrabold font-montserrat text-text-secondary mb-8 flex items-center gap-3">
                            <X className="h-8 w-8" />
                            NÃO É PARA VOCÊ SE:
                        </h3>
                        <ul className="space-y-6">
                            {isntFor.map((item, i) => (
                                <li key={i} className="flex items-start gap-4">
                                    <div className="h-6 w-6 rounded-full bg-white/5 flex items-center justify-center shrink-0 mt-0.5">
                                        <X className="h-4 w-4 text-text-secondary" />
                                    </div>
                                    <span className="text-text-secondary text-lg">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
