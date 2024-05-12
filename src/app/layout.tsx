import type { Metadata } from "next";
import "../styles/globals.css";

import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { Poppins, DM_Sans } from "next/font/google";
import JunoProvider from "@/providers/JunoProvider";

const poppins = Poppins({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-poppins",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const dmSans = DM_Sans({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-dm-sans",
    weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
    title: "PropertyHako",
    description: "Your Property journey start here!",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={cn("min-h-screen bg-background font-sans antialiased", poppins.variable, dmSans.variable)} suppressHydrationWarning>
                <JunoProvider>
                    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
                        {children}
                    </ThemeProvider>
                </JunoProvider>
                <Toaster />
            </body>
        </html>
    );
}
