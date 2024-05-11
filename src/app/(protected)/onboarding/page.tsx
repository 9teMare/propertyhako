"use client";

import { Button } from "@/components/button";
import { AuthContext } from "@/providers/AuthProvider";
import { setDoc } from "@junobuild/core-peer";
import { ArrowRightIcon, LoaderCircle } from "lucide-react";
import { nanoid } from "nanoid";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";

export default function Page() {
    const [role, setRole] = useState<"tenant" | "landlord" | null>(null);
    const [loading, setLoading] = useState(false);

    const router = useRouter();
    const { user } = useContext(AuthContext);

    const add = async () => {
        if (user === undefined || user === null || !role) {
            return;
        }
        setLoading(true);

        const key = nanoid();

        await setDoc({
            collection: "user",
            doc: {
                key,
                data: {
                    user: user,
                    role: role,
                },
            },
        })
            .then((res) => {
                if (res) {
                    router.push("/dashboard");
                }
            })
            .finally(() => {
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
            });
    };

    return (
        <main className="w-screen h-screen flex items-center flex-col pt-[40vh] dark:text-white">
            <div className="flex-col p-6 space-y-10 flex justify-between">
                <h1 className="header-2 text-center font-bold">Are you a </h1>

                <div className="flex justify-center items-center w-full space-x-4">
                    <Button onClick={() => setRole("tenant")} variant={role === "tenant" ? "default" : "ghost"}>
                        Tenant
                    </Button>
                    <span>/</span>
                    <Button onClick={() => setRole("landlord")} variant={role === "landlord" ? "default" : "ghost"}>
                        Landlord
                    </Button>
                </div>
            </div>

            {role && user && (
                <Button className="mt-10 rounded-full" variant="secondary" size="icon" disabled={loading} onClick={add}>
                    {loading ? <LoaderCircle className="h-5 w-5 animate-spin" /> : <ArrowRightIcon className="h-5 w-5" />}
                </Button>
            )}
        </main>
    );
}
