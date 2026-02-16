"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedListProps {
    children: ReactNode;
    className?: string;
    delay?: number;
}

export function AnimatedList({ children, className, delay = 200 }: AnimatedListProps) {
    const [visibleItems, setVisibleItems] = useState<number>(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const childrenArray = Array.isArray(children) ? children : [children];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Start animation when in view
                        childrenArray.forEach((_, index) => {
                            setTimeout(() => {
                                setVisibleItems((prev) => Math.max(prev, index + 1));
                            }, index * delay);
                        });
                        observer.disconnect();
                    }
                });
            },
            { threshold: 0.2 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, [childrenArray.length, delay]);

    return (
        <div ref={containerRef} className={cn("space-y-4", className)}>
            {childrenArray.map((item, index) => (
                <AnimatePresence key={index}>
                    {index < visibleItems && (
                        <motion.div
                            initial={{ opacity: 0, x: -20, filter: "blur(4px)" }}
                            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                        >
                            {item}
                        </motion.div>
                    )}
                </AnimatePresence>
            ))}
        </div>
    );
}
