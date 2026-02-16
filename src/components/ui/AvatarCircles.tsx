"use client";

import { cn } from "@/lib/utils";

interface AvatarCirclesProps {
    className?: string;
    numPeople?: number;
    avatarUrls: string[];
}

export const AvatarCircles = ({
    numPeople,
    className,
    avatarUrls,
}: AvatarCirclesProps) => {
    return (
        <div className={cn("z-10 flex -space-x-4 rtl:space-x-reverse", className)}>
            {avatarUrls.map((url, index) => (
                <div
                    key={index}
                    className="relative inline-block h-10 w-10 rounded-full border-2 border-background overflow-hidden"
                >
                    <img
                        className="h-full w-full object-cover"
                        src={url}
                        alt={`Avatar ${index + 1}`}
                    />
                </div>
            ))}
            {numPeople && (
                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-background bg-primary text-center text-xs font-m-black text-background">
                    +{numPeople}
                </div>
            )}
        </div>
    );
};
