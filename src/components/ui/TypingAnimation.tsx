"use client";

import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";

interface TypingAnimationProps {
    words?: string[];
    children?: string;
    className?: string;
    typeSpeed?: number;
    deleteSpeed?: number;
    pauseDelay?: number;
    loop?: boolean;
    showCursor?: boolean;
    startOnView?: boolean;
}

export const TypingAnimation = ({
    words,
    children,
    className,
    typeSpeed = 100,
    deleteSpeed = 50,
    pauseDelay = 1000,
    loop = false,
    showCursor = true,
    startOnView = true,
}: TypingAnimationProps) => {
    const [displayText, setDisplayText] = useState("");
    const [wordIndex, setWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [isStarted, setIsStarted] = useState(!startOnView);
    const ref = useRef<HTMLSpanElement>(null);

    const textArray = words || (children ? [children] : [""]);

    useEffect(() => {
        if (!startOnView) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsStarted(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [startOnView]);

    useEffect(() => {
        if (!isStarted) return;

        const currentWord = textArray[wordIndex];
        const currentSpeed = isDeleting ? deleteSpeed : typeSpeed;

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                if (displayText.length < currentWord.length) {
                    setDisplayText(currentWord.slice(0, displayText.length + 1));
                } else {
                    if (!loop && wordIndex === textArray.length - 1) return;
                    setTimeout(() => setIsDeleting(true), pauseDelay);
                }
            } else {
                if (displayText.length > 0) {
                    setDisplayText(currentWord.slice(0, displayText.length - 1));
                } else {
                    setIsDeleting(false);
                    setWordIndex((prev) => (prev + 1) % textArray.length);
                }
            }
        }, currentSpeed);

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, wordIndex, isStarted, textArray, typeSpeed, deleteSpeed, pauseDelay, loop]);

    return (
        <span ref={ref} className={cn("relative inline-block", className)}>
            {displayText}
            {showCursor && (
                <span className="animate-pulse ml-1 border-r-2 border-current" />
            )}
        </span>
    );
};
