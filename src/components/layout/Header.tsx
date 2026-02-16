"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Como Funciona", href: "#como-funciona" },
        { name: "Sobre", href: "#sobre" },
        { name: "FAQ", href: "#faq" },
    ];

    return (
        <header
            className={cn(
                "fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6",
                isScrolled ? "py-4" : "py-8"
            )}
        >
            <div className={cn(
                "container mx-auto max-w-7xl rounded-2xl transition-all duration-500 py-3 px-6 md:px-10 flex items-center justify-between",
                isScrolled ? "glass border-primary/20 shadow-premium px-6" : "bg-transparent"
            )}>
                {/* Logo */}
                <div
                    className="flex items-center gap-3 cursor-pointer group"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                    <div className="h-10 w-10 bg-primary rounded-xl flex items-center justify-center font-m-black text-white text-2xl shadow-primary-strong group-hover:scale-110 transition-transform duration-500">F</div>
                    <div className="font-m-black text-xl tracking-tighter hidden sm:block">
                        FAZ QUE <span className="text-primary italic">VENDE</span>
                    </div>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-[11px] font-m-black text-text-secondary hover:text-primary transition-all uppercase tracking-[0.2em] opacity-80 hover:opacity-100"
                        >
                            {link.name}
                        </a>
                    ))}
                    <button
                        className="h-12 px-8 rounded-xl bg-primary text-white text-xs font-m-black uppercase tracking-widest hover:bg-primary-hover transition-all flex items-center gap-2 shadow-primary-strong hover:-translate-y-1"
                        onClick={() => {
                            const element = document.getElementById("oferta");
                            element?.scrollIntoView({ behavior: "smooth" });
                        }}
                    >
                        Agendar <ArrowRight className="h-4 w-4" />
                    </button>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-text-primary p-2 h-12 w-12 rounded-xl glass border-primary/10 flex items-center justify-center"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        className="md:hidden absolute top-24 left-6 right-6 glass p-10 rounded-[2.5rem] border-primary/20 shadow-premium z-40"
                    >
                        <nav className="flex flex-col gap-8 items-center">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-xl font-m-black uppercase tracking-widest text-text-primary hover:text-primary transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <button
                                className="h-16 w-full rounded-2xl bg-primary text-white font-m-black uppercase tracking-[0.2em] mt-6 shadow-primary-strong"
                                onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    const element = document.getElementById("oferta");
                                    element?.scrollIntoView({ behavior: "smooth" });
                                }}
                            >
                                Reservar Vaga
                            </button>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

