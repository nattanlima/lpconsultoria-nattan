"use client";

import { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps {
    children: ReactNode;
    className?: string;
    reverse?: boolean;
    pauseOnHover?: boolean;
    vertical?: boolean;
    repeat?: number;
    speed?: "fast" | "normal" | "slow";
}

export function Marquee({
    children,
    className,
    reverse = false,
    pauseOnHover = false,
    vertical = false,
    repeat = 2,
    speed = "normal",
}: MarqueeProps) {
    const speedValues = {
        fast: "20s",
        normal: "40s",
        slow: "80s",
    };

    const duration = speedValues[speed];

    return (
        <div
            className={cn(
                "group flex overflow-hidden",
                vertical ? "flex-col" : "flex-row",
                className
            )}
        >
            {Array.from({ length: repeat }).map((_, index) => (
                <div
                    key={index}
                    className={cn(
                        "flex shrink-0 justify-around gap-4",
                        vertical ? "animate-marquee-vertical flex-col" : "animate-marquee flex-row",
                        pauseOnHover && "group-hover:[animation-play-state:paused]",
                        reverse && (vertical ? "animate-marquee-vertical-reverse" : "animate-marquee-reverse")
                    )}
                    style={
                        {
                            "--marquee-duration": duration,
                        } as CSSProperties
                    }
                >
                    {children}
                </div>
            ))}
        </div>
    );
}
