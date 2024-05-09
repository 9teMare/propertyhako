import ThemeToggle from "@/components/theme-toggle";
import { Input } from "@/components/ui/input";
import { CalendarIcon, HomeIcon, LayoutGridIcon, SettingsIcon, UsersIcon } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <div className="grid min-h-screen w-full grid-cols-[280px_1fr]">
            <div className="flex h-full max-h-screen flex-col gap-6 border-r bg-gray-100/40 p-6 dark:bg-gray-800/40">
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold">Dashboard</h2>
                    <ThemeToggle className="h-[1.5rem] w-[1.5rem]" />
                </div>
                <div className="flex-1 space-y-2 overflow-auto">
                    <nav className="grid gap-1">
                        <Link
                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                            href="#"
                        >
                            <HomeIcon className="h-4 w-4" />
                            Home
                        </Link>
                        <Link
                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                            href="#"
                        >
                            <CalendarIcon className="h-4 w-4" />
                            Calendar
                        </Link>
                        <Link
                            className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900 transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
                            href="#"
                        >
                            <LayoutGridIcon className="h-4 w-4" />
                            Projects
                        </Link>
                        <Link
                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                            href="#"
                        >
                            <UsersIcon className="h-4 w-4" />
                            Team
                        </Link>
                        <Link
                            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                            href="#"
                        >
                            <SettingsIcon className="h-4 w-4" />
                            Settings
                        </Link>
                    </nav>
                </div>
                <div className="space-y-2">
                    <Input
                        className="w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm shadow-sm transition-colors focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50 dark:focus:border-gray-50 dark:focus:ring-gray-50"
                        placeholder="Search..."
                        type="search"
                    />
                </div>
            </div>
            {children}
        </div>
    );
}
