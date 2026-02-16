"use client";

import { cn } from "@/lib/utils";

interface LightRaysProps {
    className?: string;
    color?: string;
    opacity?: number;
    count?: number;
}

export function LightRays({
    className,
    color = "#f59e0b",
    opacity = 0.15,
    count = 8,
}: LightRaysProps) {
    const rays = Array.from({ length: count }, (_, i) => i);
    // Fixed durations to avoid hydration mismatch
    const fixedDurations = [4.2, 5.1, 4.8, 5.5, 4.5, 5.3, 4.7, 5.0];

    return (
        <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
            {rays.map((index) => (
                <div
                    key={index}
                    className="absolute top-0 h-full w-[1px] animate-light-ray"
                    style={{
                        left: `${(index / count) * 100}%`,
                        background: `linear-gradient(to bottom, transparent, ${color}, transparent)`,
                        opacity,
                        animationDelay: `${index * 0.2}s`,
                        animationDuration: `${fixedDurations[index % fixedDurations.length]}s`,
                    }}
                />
            ))}
        </div>
    );
}
