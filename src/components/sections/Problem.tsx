"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform, useReducedMotion, MotionValue } from "framer-motion";
import { TrendingDown, MessageSquareX, Bot, BookOpen, AlertCircle } from "lucide-react";
import { AnimatedShinyText } from "@/components/ui/AnimatedShinyText";

// Cada card voa sozinho, um de cada vez: janelas de scroll quase sem sobreposição,
// partindo de bem alto na página. Valores fixos por card
// (Math.random() de verdade quebraria a hidratação server/client)
const FLIGHT_DURATION = 0.32;
const FLIGHT_PATHS = [
    { y: -900, x: -70, rotate: -12, start: 0 },
    { y: -1050, x: 90, rotate: 9, start: 0.22 },
    { y: -850, x: -110, rotate: 15, start: 0.44 },
    { y: -980, x: 60, rotate: -9, start: 0.66 },
];

const ProblemCard = ({ icon: Icon, title, description, index, progress }: { icon: React.ElementType, title: string, description: string, index: number, progress: MotionValue<number> }) => {
    const path = FLIGHT_PATHS[index % FLIGHT_PATHS.length];
    const start = path.start;
    const end = Math.min(start + FLIGHT_DURATION, 1);
    const reduceMotion = useReducedMotion();

    const x = useTransform(progress, [start, end], [path.x, 0]);
    const y = useTransform(progress, [start, end], [path.y, 0]);
    const rotate = useTransform(progress, [start, end], [path.rotate, 0]);
    const scale = useTransform(progress, [start, end], [0.9, 1]);
    const opacity = useTransform(progress, [start, start + FLIGHT_DURATION * 0.4], [0, 1]);

    return (
        <motion.div
            style={reduceMotion ? undefined : { x, y, rotate, scale, opacity }}
            className="will-change-transform"
        >
            <div className="card-light h-full p-10 rounded-[2rem] hover:border-error/30 group relative overflow-hidden hover:-translate-y-2 transition-all duration-500">
                <div className="absolute top-0 right-0 p-4 opacity-[0.04] group-hover:opacity-[0.08] transition-opacity">
                    <Icon className="h-24 w-24 text-text-dark" />
                </div>

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-error-light mb-8 group-hover:scale-110 transition-all duration-500">
                    <Icon className="h-7 w-7 text-error" />
                </div>

                <h3 className="text-xl font-m-black mb-4 text-text-dark leading-tight tracking-tight uppercase group-hover:text-error transition-colors">
                    {title}
                </h3>

                <p className="text-text-dark-description leading-relaxed font-medium">
                    {description}
                </p>

                {/* Card Accent */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-error group-hover:w-full transition-all duration-700 rounded-full" />
            </div>
        </motion.div>
    );
};

export const Problem = () => {
    const gridRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: gridRef,
        offset: ["start end", "end 0.7"],
    });

    const smoothProgress = useSpring(scrollYProgress, { stiffness: 90, damping: 22, mass: 0.5 });

    const problems = [
        {
            icon: TrendingDown,
            title: "Dreno Financeiro no Tráfego",
            description: "Suas campanhas no Meta Ads ou Google Ads parecem um buraco negro. Sem ROAS claro e sem clareza de onde ajustar o leme."
        },
        {
            icon: MessageSquareX,
            title: "Caos no WhatsApp Business",
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
        <section id="problemas" className="section-light py-32 relative overflow-hidden">
            <div className="container px-6 mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-4xl mx-auto mb-24"
                >
                    <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-error-light border border-error/20 text-error text-[10px] font-m-black uppercase tracking-[0.3em] mb-10">
                        <AlertCircle className="h-4 w-4" />
                        <AnimatedShinyText className="!text-error">
                            Situação Crítica
                        </AnimatedShinyText>
                    </div>

                    <h2 className="text-5xl md:text-7xl font-m-black text-text-dark mb-8 tracking-tighter leading-none">
                        O Negócio <span className="text-error italic">Sangra</span> onde você não vê?
                    </h2>

                    <p className="text-xl text-text-dark-secondary font-medium max-w-2xl mx-auto">
                        Se você se identifica com mais de dois itens abaixo, seu lucro está sendo destruído por falta de processos técnicos.
                    </p>
                </motion.div>

                <div ref={gridRef} className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {problems.map((p, i) => (
                        <ProblemCard key={i} {...p} index={i} progress={smoothProgress} />
                    ))}
                </div>
            </div>
        </section>
    );
};
