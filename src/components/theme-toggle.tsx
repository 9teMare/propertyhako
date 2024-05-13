"use client";

import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { LightbulbIcon, LightbulbOffIcon } from "lucide-react";
import { twMerge } from "tailwind-merge";
import Day from "./icon/day";
import Night from "./icon/night";

export default function ThemeToggle({ className }: { className?: string }) {
    const { theme, setTheme } = useTheme();

    return (
        <Button
            variant="link"
            size="icon"
            className="focus-visible:ring-0 flex items-center justify-center relative"
            onClick={() => {
                if (theme === "dark") {
                    setTheme("light");
                } else {
                    setTheme("dark");
                }
            }}
        >
            {/* <LightbulbOffIcon
                className={twMerge("h-[2.5rem] w-[2.5rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0", className)}
            /> */}
            <Night className={twMerge("h-[36px] w-[36px] scale-0 transition-all dark:scale-100", "rounded-lg", className)} />
            {/* <LightbulbIcon
                className={twMerge("absolute h-[2.5rem] w-[2.5rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100", className)}
            /> */}
            <Day className={twMerge("absolute h-[36px] w-[36px] scale-100 transition-all dark:scale-0", "rounded-lg", className)} />
            <span className="sr-only">Toggle theme</span>
        </Button>
    );
}
