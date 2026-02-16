"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const FAQItem = ({ question, answer, i }: { question: string, answer: string, i: number }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="mb-4"
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`w-full text-left p-8 rounded-2xl card-light flex items-center justify-between transition-all duration-500 group relative overflow-hidden ${isOpen ? 'border-2 border-primary/30 shadow-light-hover' : ''}`}
            >
                <span className="font-m-bold text-text-dark pr-8 text-lg relative z-10">{question}</span>
                <ChevronDown className={`h-6 w-6 text-primary transition-transform duration-500 relative z-10 shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                    >
                        <div className="p-8 text-text-dark-description leading-relaxed border-x border-b border-primary/10 rounded-b-2xl bg-white text-lg">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export const FAQ = () => {
    const faqs = [
        {
            question: "Como funciona o agendamento?",
            answer: "Imediatamente após a confirmação do seu interesse, você terá acesso ao calendário exclusivo do Nattan Lima via Google Calendar. Lá você escolhe o melhor dia e horário disponível no fuso horário local."
        },
        {
            question: "A consultoria é gravada?",
            answer: "Sim! Todas as sessões são gravadas em Full HD e enviadas para você logo após o término da call, junto com todos os links e materiais citados, para que você possa revisar as estratégias quando quiser."
        },
        {
            question: "E se eu precisar desmarcar?",
            answer: "Você pode reagendar sua consultoria com até 24 horas de antecedência através do link de confirmação que receberá por e-mail, sem custo adicional, respeitando a agenda semanal."
        },
        {
            question: "Tenho suporte pós-consultoria?",
            answer: "Sim! Você terá acesso a um canal direto no WhatsApp por 7 dias úteis para tirar dúvidas rápidas sobre a execução do plano de ação que definimos juntos na call."
        },
        {
            question: "Para quem é indicado?",
            answer: "Para empresários, gestores ou infoprodutores que queiram faturar mais usando WhatsApp, tráfego pago e automação. Se você sente que seu processo de vendas está travado ou o lead está caro, essa consultoria é o seu próximo passo."
        },
        {
            question: "Quais ferramentas são analisadas?",
            answer: "Analisamos estrategicamente sua conta de anúncios, seu funil de atendimento no WhatsApp e suas automações (N8N, Zapier, Make, etc). O foco é eficiência e ROI."
        }
    ];

    return (
        <section className="section-light py-32 relative overflow-hidden">
            <div className="container px-6 mx-auto relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-primary/10 text-primary border border-primary/20 mb-8"
                    >
                        <HelpCircle className="h-8 w-8" />
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-m-black text-text-dark mb-6 tracking-tight">
                        Ficou alguma <span className="text-primary italic">dúvida?</span>
                    </h2>
                    <p className="text-xl text-text-dark-secondary font-medium">Tudo o que você precisa saber antes de reservar sua vaga.</p>
                </div>

                <div className="max-w-4xl mx-auto">
                    {faqs.map((faq, i) => (
                        <FAQItem key={i} {...faq} i={i} />
                    ))}
                </div>
            </div>
        </section>
    );
};
