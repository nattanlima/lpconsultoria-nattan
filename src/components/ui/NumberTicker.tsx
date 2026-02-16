"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface NumberTickerProps {
    value: number;
    direction?: "up" | "down";
    delay?: number;
    className?: string;
    decimalPlaces?: number;
}

export function NumberTicker({
    value,
    direction = "up",
    delay = 0,
    className,
    decimalPlaces = 0,
}: NumberTickerProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: "0px" });
    const [displayValue, setDisplayValue] = useState(direction === "down" ? value : 0);

    useEffect(() => {
        if (!isInView) return;

        const startValue = direction === "down" ? value : 0;
        const endValue = direction === "down" ? 0 : value;
        const duration = 2000; // 2 seconds
        const steps = 60;
        const stepValue = (endValue - startValue) / steps;
        const stepDuration = duration / steps;

        let currentStep = 0;

        const timer = setTimeout(() => {
            const interval = setInterval(() => {
                currentStep++;
                const newValue = startValue + stepValue * currentStep;

                if (currentStep >= steps) {
                    setDisplayValue(endValue);
                    clearInterval(interval);
                } else {
                    setDisplayValue(newValue);
                }
            }, stepDuration);

            return () => clearInterval(interval);
        }, delay);

        return () => clearTimeout(timer);
    }, [value, direction, delay, isInView]);

    return (
        <span ref={ref} className={cn("tabular-nums", className)}>
            {Intl.NumberFormat("pt-BR", {
                minimumFractionDigits: decimalPlaces,
                maximumFractionDigits: decimalPlaces,
            }).format(displayValue)}
        </span>
    );
}
