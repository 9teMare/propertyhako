import { defineConfig } from "@junobuild/config";

export default defineConfig({
    satellite: {
        id: process.env.NEXT_PUBLIC_JUNO_SATELLITE_ID as string,
        source: "out",
    },
});
