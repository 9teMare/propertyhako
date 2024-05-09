"use client";

import { signOut } from "@junobuild/core-peer";
import { Button } from "./button";
import { LogOutIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export const Logout = () => {
    const router = useRouter();

    return (
        <Button
            variant="ghost"
            className="w-fit space-x-2"
            onClick={() => {
                signOut();
                router.replace("/dashboard");
            }}
        >
            <LogOutIcon className="size-4" />

            <small>Logout</small>
        </Button>
    );
};
