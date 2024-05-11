import { ReactNode } from "react";
import AuthProvider from "@/providers/AuthProvider";

export default function Layout({ children }: { children: ReactNode }) {
    return <AuthProvider>{children}</AuthProvider>;
}
