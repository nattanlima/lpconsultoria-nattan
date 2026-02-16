"use client";

import { motion } from "framer-motion";
import { TrendingDown, MessageSquareX, Bot, BookOpen, AlertCircle } from "lucide-react";

const ProblemCard = ({ icon: Icon, title, description, delay }: { icon: React.ElementType, title: string, description: string, delay: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
        className="glass p-10 rounded-[2.5rem] border-primary/10 hover:border-primary/40 transition-all duration-500 group relative overflow-hidden bg-background/40 hover:-translate-y-2"
    >
        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
            <Icon className="h-20 w-20 text-text-primary" />
        </div>

        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-error/10 mb-8 group-hover:scale-110 group-hover:bg-error/20 transition-all duration-500 shadow-primary-strong/5">
            <Icon className="h-8 w-8 text-error" />
        </div>

        <h3 className="text-2xl font-m-black mb-5 text-text-primary leading-tight tracking-tight uppercase group-hover:text-primary transition-colors">
            {title}
        </h3>

        <p className="text-text-description leading-relaxed font-medium opacity-80 group-hover:opacity-100 transition-opacity">
            {description}
        </p>

        {/* Card Accent */}
        <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary group-hover:w-full transition-all duration-700" />
    </motion.div>
);

export const Problem = () => {
    const problems = [
        {
            icon: TrendingDown,
            title: "Dreno Financeiro no Tráfego",
            description: "Suas campanhas no Meta Ads ou Google Ads parecem um buraco negro. Sem ROAS claro e sem clareza de onde ajustar o leme."
        },
        {
            icon: MessageSquareX,
            title: "Caos no WhatsApp Sales",
            description: "Os leads chegam, mas o silêncio é mortal. O atendimento é lerdo, desorganizado e o dinheiro morre no 'vou ver e te falo'."
        },
        {
            icon: Bot,
            title: "Automação 'Frankenstein'",
            description: "Tentou ferramentas de IA, robôs e fluxos complexos, mas no final tudo que conseguiu foi um sistema travado que afasta o cliente."
        },
        {
            icon: BookOpen,
            title: "Overdose de Teoria",
            description: "Você já comprou cursos, mentorias e segue gurus, mas falta quem pegue na sua mão e diga: 'faça exatamente ISSO aqui'."
        }
    ];

    return (
        <section id="problemas" className="py-32 bg-background-alt relative overflow-hidden">
            {/* Background Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.03] -z-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

            <div className="container px-6 mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-4xl mx-auto mb-24"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-error/10 border border-error/20 text-error text-[10px] font-m-black uppercase tracking-[0.3em] mb-10">
                        <AlertCircle className="h-4 w-4" />
                        Situação Crítica
                    </div>

                    <h2 className="text-5xl md:text-7xl font-m-black text-text-primary mb-8 tracking-tighter leading-none">
                        O Negócio <span className="text-primary italic">Sangra</span> onde você não vê?
                    </h2>

                    <p className="text-xl text-text-secondary font-medium max-w-2xl mx-auto">
                        Se você se identifica com mais de dois itens abaixo, seu lucro está sendo destruído por falta de processos técnicos.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {problems.map((p, i) => (
                        <ProblemCard key={i} {...p} delay={i * 0.15} />
                    ))}
                </div>
            </div>
        </section>
    );
};

