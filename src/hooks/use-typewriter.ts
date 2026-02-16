"use client";

import { useEffect, useState } from "react";

export const useTypewriter = (text: string, speed: number = 50, delay: number = 1000) => {
    const [displayText, setDisplayText] = useState("");
    const [isStarted, setIsStarted] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsStarted(true);
        }, delay);

        return () => clearTimeout(timeout);
    }, [delay]);

    useEffect(() => {
        if (!isStarted) return;

        if (displayText.length < text.length) {
            const timeout = setTimeout(() => {
                setDisplayText(text.slice(0, displayText.length + 1));
            }, speed);
            return () => clearTimeout(timeout);
        }
    }, [displayText, text, speed, isStarted]);

    return displayText;
};
