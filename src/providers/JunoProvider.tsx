"use client";

import { initJuno } from "@junobuild/core-peer";
import { ReactNode, useEffect } from "react";

export default function JunoProvider({ children }: { children: ReactNode }) {
    useEffect(() => {
        (async () =>
            await initJuno({
                satelliteId: process.env.NEXT_PUBLIC_JUNO_SATELLITE_ID as string,
                workers: {
                    auth: true,
                },
            }))();
    }, []);

    return <>{children}</>;
}
