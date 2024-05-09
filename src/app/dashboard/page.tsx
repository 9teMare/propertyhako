import ThemeToggle from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card";
import { SearchIcon, HomeIcon, CalendarIcon, LayoutGridIcon, UsersIcon, SettingsIcon } from "lucide-react";

export default function Page() {
    return (
        <div className="grid min-h-screen w-full grid-cols-[280px_1fr]">
            <div className="flex h-full max-h-screen flex-col gap-6 border-r bg-gray-100/40 p-6 dark:bg-gray-800/40">
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold">Dashboard</h2>
                    <Button size="icon" variant="ghost">
                        <ThemeToggle className="h-[1.5rem] w-[1.5rem]" />
                        <span className="sr-only">Search</span>
                    </Button>
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
            <main className="flex flex-1 flex-col gap-6 p-6">
                <div className="space-y-2">
                    <h1 className="text-2xl font-bold">Projects</h1>
                    <p className="text-gray-500 dark:text-gray-400">View and manage your projects here.</p>
                </div>
                <div className="grid gap-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Project A</CardTitle>
                            <CardDescription>
                                This is a description of Project A. It includes details about the project and its status.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt lacinia, nisl nisl aliquam
                                nisl, eget aliquam nisl nisl vel nisl.
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Project B</CardTitle>
                            <CardDescription>
                                This is a description of Project B. It includes details about the project and its status.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt lacinia, nisl nisl aliquam
                                nisl, eget aliquam nisl nisl vel nisl.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    );
}
