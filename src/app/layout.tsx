import type { Metadata } from "next";
import "../styles/globals.css";

import { Inter as FontSans, Arimo, Libre_Franklin } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";

// const arimo = Arimo({
//     subsets: ["latin"],
//     display: "swap",
// });

// const libre_franklin = Libre_Franklin({
//     subsets: ["latin"],
//     display: "swap",
// });
const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
});

export const metadata: Metadata = {
    title: "Chain of Thoughts",
    description: "Your Chain of Thoughts start here!",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
