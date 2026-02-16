import { Youtube, Instagram, Linkedin, MessageCircle } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="py-20 bg-background border-t border-primary/10 relative overflow-hidden">
            {/* Decor */}
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 blur-[150px] rounded-full translate-x-1/3 translate-y-1/3" />

            <div className="container px-6 mx-auto relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-center gap-12">
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <div className="font-m-black text-2xl tracking-tighter mb-4 flex items-center gap-3">
                            <div className="h-10 w-10 bg-primary rounded-xl flex items-center justify-center font-m-black text-white text-2xl shadow-primary-strong">F</div>
                            FAZ QUE <span className="text-primary italic">VENDE</span>
                        </div>
                        <p className="text-text-secondary font-medium tracking-wide">Consultoria Individual Estratégica</p>
                        <p className="text-text-secondary/60 text-sm mt-1">Desenvolvido por Nattan Lima</p>
                    </div>

                    <div className="flex items-center gap-4">
                        {[
                            { icon: Youtube, href: "https://youtube.com/@fazquevende" },
                            { icon: Instagram, href: "#" },
                            { icon: Linkedin, href: "#" },
                            { icon: MessageCircle, href: "#" }
                        ].map((social, i) => (
                            <a
                                key={i}
                                href={social.href}
                                target="_blank"
                                className="h-12 w-12 rounded-xl glass border-primary/10 flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary/30 transition-all duration-500 group"
                            >
                                <social.icon className="h-5 w-5 group-hover:scale-110 transition-transform" />
                            </a>
                        ))}
                    </div>
                </div>

                <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] text-text-secondary font-m-black uppercase tracking-[0.4em] opacity-40">
                    <p>© 2026 PRISME SALES LTD. TODOS OS DIREITOS RESERVADOS.</p>
                    <div className="flex items-center gap-12">
                        <a href="#" className="hover:text-primary transition-colors">Termos de Uso</a>
                        <a href="#" className="hover:text-primary transition-colors">Privacidade</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

