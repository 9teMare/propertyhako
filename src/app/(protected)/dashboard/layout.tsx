"use client";

import { Button } from "@/components/button";
import ThemeToggle from "@/components/theme-toggle";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { AuthContext } from "@/providers/AuthProvider";
import { UserRoleData } from "@/types/user";
import { listDocs } from "@junobuild/core-peer";
import dayjs from "dayjs";
import { BitcoinIcon, BookIcon, ChevronLeftIcon, LayoutDashboardIcon, LoaderCircleIcon, SearchIcon, SettingsIcon, User2Icon } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode, useCallback, useContext, useEffect, useLayoutEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

export default function Layout({ children }: { children: ReactNode }) {
    const pathname = usePathname();
    const [selected, setSelected] = useState(pathname.split("/")[2] || "");
    const [remainedSession, setRemainedSession] = useState(0);

    const [isOnboard, setIsOnboard] = useState(false);

    const { user } = useContext(AuthContext);

    const router = useRouter();

    const getIsOnboard = useCallback(async () => {
        const { items } = await listDocs<UserRoleData>({
            collection: "user",
            filter: {
                owner: user?.owner,
            },
        });
        return items.length === 1;
    }, [user?.owner]);

    const fetchRemainedSession = useCallback(({ detail: remainingTime }: { detail: number }) => {
        setRemainedSession(remainingTime);
    }, []);

    useEffect(() => {
        setSelected(pathname.split("/")[2] || "");
    }, [pathname]);

    useEffect(() => {
        // @ts-ignore
        document.addEventListener(
            "junoDelegationRemainingTime",
            // @ts-ignore
            fetchRemainedSession,
            { passive: true }
        );

        return () => {
            // @ts-ignore
            document.removeEventListener("junoDelegationRemainingTime", fetchRemainedSession);
        };
    }, [fetchRemainedSession]);

    useLayoutEffect(() => {
        const checkOnboard = async () => {
            const isOnboard = await getIsOnboard();
            setIsOnboard(isOnboard);

            if (!isOnboard) {
                router.replace("/onboarding");
            }
        };

        checkOnboard();
    }, [getIsOnboard, router]);

    const selectedClassName = useCallback(
        (path: string) => {
            return twMerge(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-gray-900 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50",
                selected === path && "bg-gray-200 dark:bg-gray-800 dark:text-gray-50"
            );
        },
        [selected]
    );

    return (
        <>
            {!isOnboard ? (
                <div className="w-screen h-screen">
                    <LoaderCircleIcon className="h-16 w-16 animate-spin mx-auto mt-[40vh] dark:stroke-white" />
                </div>
            ) : (
                <ResizablePanelGroup direction="horizontal" className="h-screen">
                    <ResizablePanel
                        className="flex h-screen flex-col gap-6 border-r bg-gray-100/40 p-6 dark:bg-gray-800/40"
                        defaultSize={18}
                        collapsible
                    >
                        <div className="flex justify-between w-full items-center">
                            <div className="flex space-x-2 items-center">
                                <Link href="/">
                                    <Button size="icon" variant="ghost">
                                        <ChevronLeftIcon className="h-6 w-6 stroke-white" />
                                    </Button>
                                </Link>

                                <div className="flex justify-center items-center">
                                    <h2 className="text-lg font-bold brand animate-gradient-x line-clamp-1">Chain of Thoughts</h2>
                                    <ThemeToggle className="h-[1.5rem] w-[1.5rem] stroke-pink-500" />
                                </div>
                            </div>

                            <Button size="icon" variant="ghost">
                                <SearchIcon className="h-5 w-5 dark:stroke-white" />
                            </Button>
                        </div>

                        <div className="flex-1 space-y-2 overflow-auto">
                            <nav className="grid gap-1">
                                <Link className={selectedClassName("")} href="/dashboard">
                                    <LayoutDashboardIcon className="h-4 w-4" />
                                    Dashboard
                                </Link>
                                <Link className={selectedClassName("plaza")} href="/dashboard/plaza">
                                    <BookIcon className="h-4 w-4" />
                                    Note Plaza
                                </Link>
                                <Link className={selectedClassName("my")} href="/dashboard/my">
                                    <User2Icon className="h-4 w-4" />
                                    My
                                </Link>
                                <Link className={selectedClassName("earn")} href="/dashboard/earn">
                                    <BitcoinIcon className="h-4 w-4" />
                                    Earn
                                </Link>
                                <Link className={selectedClassName("settings")} href="/dashboard/settings">
                                    <SettingsIcon className="h-4 w-4" />
                                    Settings
                                </Link>
                            </nav>
                        </div>
                        <div className="text-gray-300 dark:text-gray-600 text-sm text-center">
                            Session expires in {dayjs(remainedSession).format("m:ss")} minutes
                        </div>
                    </ResizablePanel>
                    <ResizableHandle withHandle />
                    <ResizablePanel>{children}</ResizablePanel>
                </ResizablePanelGroup>
            )}
        </>
    );
}
