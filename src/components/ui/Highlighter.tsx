"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface HighlighterProps {
    children: React.ReactNode;
    className?: string;
    color?: string;
    action?: "highlight" | "underline" | "circle" | "box" | "strike-through";
    strokeWidth?: number;
    animationDuration?: number;
    iterations?: number;
    padding?: number;
}

export function Highlighter({
    children,
    className,
    color = "#f59e0b",
    action = "highlight",
    strokeWidth = 1.5,
    animationDuration = 500,
    iterations = 2,
    padding = 2,
}: HighlighterProps) {
    const [isInView, setIsInView] = useState(false);
    const ref = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <span
            ref={ref}
            className={cn("relative inline-block", className)}
            style={{
                padding: action === "highlight" ? `${padding}px` : undefined,
            }}
        >
            {children}
            <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                style={{
                    left: action === "highlight" ? 0 : "-4px",
                    top: action === "highlight" ? 0 : "-4px",
                    width: action === "highlight" ? "100%" : "calc(100% + 8px)",
                    height: action === "highlight" ? "100%" : "calc(100% + 8px)",
                }}
            >
                {action === "highlight" && (
                    <rect
                        x="0"
                        y="0"
                        width="100%"
                        height="100%"
                        fill={color}
                        opacity="0.25"
                        rx="4"
                        style={{
                            strokeDasharray: isInView ? "1000" : "0 1000",
                            strokeDashoffset: 0,
                            animation: isInView
                                ? `drawHighlight ${animationDuration}ms ease-in-out ${iterations}`
                                : "none",
                        }}
                    />
                )}
                {action === "underline" && (
                    <line
                        x1="0"
                        y1="100%"
                        x2="100%"
                        y2="100%"
                        stroke={color}
                        strokeWidth={strokeWidth}
                        strokeLinecap="round"
                        style={{
                            strokeDasharray: isInView ? "1000" : "0 1000",
                            strokeDashoffset: 0,
                            animation: isInView
                                ? `drawLine ${animationDuration}ms ease-in-out ${iterations}`
                                : "none",
                        }}
                    />
                )}
                {action === "circle" && (
                    <ellipse
                        cx="50%"
                        cy="50%"
                        rx="50%"
                        ry="50%"
                        fill="none"
                        stroke={color}
                        strokeWidth={strokeWidth}
                        style={{
                            strokeDasharray: isInView ? "1000" : "0 1000",
                            strokeDashoffset: 0,
                            animation: isInView
                                ? `drawCircle ${animationDuration}ms ease-in-out ${iterations}`
                                : "none",
                        }}
                    />
                )}
            </svg>
        </span>
    );
}
