"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MorphingTextProps {
    texts: string[];
    className?: string;
}

export function MorphingText({ texts, className }: MorphingTextProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [texts.length]);

    return (
        <AnimatePresence mode="wait">
            <motion.span
                key={currentIndex}
                initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className={cn("inline-block", className)}
            >
                {texts[currentIndex]}
            </motion.span>
        </AnimatePresence>
    );
}
