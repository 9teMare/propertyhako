"use client";

import { Login } from "@/components/login";
import { authSubscribe, type User } from "@junobuild/core-peer";
import { createContext, useEffect, useState, type ReactNode } from "react";

export const AuthContext = createContext<{ user: User | undefined | null }>({ user: undefined });

interface AuthProps {
    children: ReactNode;
}

export default function AuthProvider({ children }: AuthProps) {
    const [user, setUser] = useState<User | undefined | null>(undefined);

    useEffect(() => {
        const sub = authSubscribe((user) => {
            setUser(user);
        });

        return () => sub();
    }, []);

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
