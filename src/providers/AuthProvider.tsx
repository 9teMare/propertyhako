"use client";

import { Login } from "@/components/login";

import { useUserStore } from "@/stores/userStore";
import { UserRoleData } from "@/types/user";
import { authSubscribe, listDocs, type User } from "@junobuild/core-peer";
import { createContext, useCallback, useEffect, useState, type ReactNode } from "react";

export const AuthContext = createContext<{ user: User | undefined | null }>({ user: undefined });

interface AuthProps {
    children: ReactNode;
}

export default function AuthProvider({ children }: AuthProps) {
    const [user, setUser] = useState<User | undefined | null>(undefined);

    const getUserRole = useCallback(async () => {
        const { items } = await listDocs<UserRoleData>({
            collection: "user",
            filter: {
                owner: user?.owner,
            },
        });
        return items;
    }, [user?.owner]);

    const updateUser = useUserStore((state) => state.updateUser);
    const updateRole = useUserStore((state) => state.updateRole);

    useEffect(() => {
        const sub = authSubscribe((user) => {
            setUser(user);
            updateUser(user);
        });

        return () => sub();
    }, [updateUser]);

    useEffect(() => {
        const checkOnboard = async () => {
            const role = await getUserRole();
            updateRole(role[0]?.data?.data?.role);
        };

        if (user !== undefined && user !== null) {
            checkOnboard();
        }
    }, [getUserRole, updateRole, user]);

    return (
        <AuthContext.Provider value={{ user }}>
            {user !== undefined && user !== null ? (
                <div className="text-black">{children}</div>
            ) : (
                <main className="w-screen h-screen justify-center items-center flex">
                    <div className="flex flex-col p-10 min-h-[400px] border-gradient rounded-lg justify-between shadow-xl">
                        <span className="header-4 text-center gap-2 flex flex-col">
                            <h1>Sign in</h1>
                            <h1>to continue</h1>
                            <h1>with your</h1>
                            <h1 className="brand mt-4">Chain of Thoughts</h1>
                        </span>
                        <Login />
                    </div>
                </main>
            )}
        </AuthContext.Provider>
    );
}
