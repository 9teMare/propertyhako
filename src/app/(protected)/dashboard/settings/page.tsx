"use client";

import { Logout } from "@/components/logout";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AuthContext } from "@/providers/AuthProvider";
import { useUserStore } from "@/stores/userStore";
import dayjs from "dayjs";
import { useContext } from "react";

export default function Page() {
    const { user } = useContext(AuthContext);
    const role = useUserStore((state) => state.role);

    return (
        <main className="flex flex-1 flex-col gap-6 p-6 text-black dark:text-white h-screen overflow-y-auto">
            <div className="justify-between flex w-full">
                <h1 className="text-2xl font-bold">Settings</h1>

                <Logout />
            </div>
            <div className="grid gap-6">
                {Object.entries(user!).map(([key, value], index) => {
                    return (
                        <Card key={index} className={!value ? "hidden" : "block"}>
                            <CardHeader>
                                <CardTitle>{typeof value === "object" ? Object.keys(value)[0] : key}</CardTitle>
                                <CardDescription>
                                    {typeof value === "object"
                                        ? value?.provider
                                        : typeof value === "bigint"
                                        ? dayjs(value?.toString()).toISOString()
                                        : value?.toString()}
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    );
                })}

                <Card>
                    <CardHeader>
                        <CardTitle>Role</CardTitle>
                        <CardDescription>{role}</CardDescription>
                    </CardHeader>
                </Card>
            </div>
        </main>
    );
}
