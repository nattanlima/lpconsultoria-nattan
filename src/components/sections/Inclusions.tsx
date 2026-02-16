"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Gift, ShieldCheck } from "lucide-react";
import { AnimatedList } from "@/components/ui/AnimatedList";

const InclosureItem = ({ text }: { text: string }) => (
    <li className="flex items-start gap-4">
        <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
        <span className="text-text-description text-lg">{text}</span>
    </li>
);

const BonusCard = ({ icon: Icon, title, description }: { icon: React.ElementType, title: string, description: string }) => (
    <div className="p-6 rounded-2xl bg-background border border-primary/10 hover:border-primary/30 transition-colors group">
        <div className="flex items-center gap-3 mb-3 text-primary">
            <Icon className="h-6 w-6" />
            <span className="font-montserrat font-bold text-sm uppercase tracking-wider">{title}</span>
        </div>
        <p className="text-text-secondary text-sm">{description}</p>
    </div>
);

export const Inclusions = () => {
    const items = [
        "Análise completa do cenário atual do seu negócio digital",
        "Diagnóstico dos gargalos de vendas, atendimento e conversão",
        "Plano de ação personalizado com próximos passos claros",
        "Orientação sobre WhatsApp Business, API Oficial ou Coexistência",
        "Estratégias de tráfego pago (Meta Ads / Google Ads) para seu nicho",
        "Recomendações de chatbot e automação com IA para seu volume"
    ];

    return (
        <section className="section-dark-alt py-24">
            <div className="container px-6 mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-4xl font-bold font-montserrat text-text-primary mb-8"
                        >
                            Tudo isso em 1 hora de consultoria:
                        </motion.h2>

                        <AnimatedList delay={200}>
                            {items.map((item, i) => (
                                <InclosureItem key={i} text={item} />
                            ))}
                        </AnimatedList>
                    </div>

                    <div className="space-y-6">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-radius-card border border-primary/15 relative overflow-hidden bg-background"
                        >
                            <div className="absolute top-0 right-0 p-6 opacity-10">
                                <ShieldCheck className="h-24 w-24 text-primary" />
                            </div>

                            <h3 className="text-xl font-bold font-montserrat text-text-primary mb-8 flex items-center gap-2">
                                Bônus Inclusos <span className="text-primary text-sm">(Aumentam o Valor)</span>
                            </h3>

                            <div className="space-y-4">
                                <BonusCard
                                    icon={Gift}
                                    title="BÔNUS 1: Gravação"
                                    description="Gravação completa da sessão — Reveja quantas vezes quiser."
                                />
                                <BonusCard
                                    icon={Gift}
                                    title="BÔNUS 2: Checklist"
                                    description="Checklist de Implementação em PDF — Passo a passo do que fazer após a call."
                                />
                                <BonusCard
                                    icon={Gift}
                                    title="BÔNUS 3: Grupo VIP"
                                    description="Acesso ao grupo VIP no WhatsApp por 7 dias — Para dúvidas rápidas pós-consultoria."
                                />
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-4 p-6 rounded-2xl bg-primary/5 border border-primary/10"
                        >
                            <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                                <ShieldCheck className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <p className="text-text-primary font-bold text-sm">Garantia Relevante</p>
                                <p className="text-text-secondary text-xs leading-relaxed">Sua satisfação é nossa prioridade absoluta ou seu investimento de volta.</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};
