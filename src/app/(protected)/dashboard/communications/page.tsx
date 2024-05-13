'use client';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/components/ui/use-toast";
import { AuthContext } from "@/providers/AuthProvider";
import { PropertyProps, dummyProperties } from "@/types/property";
import { listDocs } from "@junobuild/core-peer";
import { useCallback, useContext, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

export default function Page() {
    const [properties, setProperties] = useState<PropertyProps[]>([]);
    const { user } = useContext(AuthContext);
    const { toast } = useToast();

    const propertiesNames = properties?.map((property) => property.name);
    const [currActive, setCurrActive] = useState(0);
    const fetchProperties = useCallback(async () => {
        const { items } = await listDocs<PropertyProps>({
            collection: "property",
            filter: {
                owner: user?.owner,
            },
        });

        const currProperties = items.map((item) => {
            return {
                ...item.data,
            };
        });

        setProperties(currProperties);
    }, [user?.owner]);

    useEffect(() => {
        if (user) {
            // fetch properties
            fetchProperties();
        }
    }, [user, fetchProperties])

    return (
        <main className="flex flex-1 flex-col gap-6 p-6 text-black dark:text-white">
            {propertiesNames && propertiesNames.length > 0 && <Tabs defaultValue={propertiesNames[0]}>
                <TabsList className="justify-start overflow-x-scroll max-w-full">
                    {propertiesNames.map((property, index) => (
                        <TabsTrigger key={index} value={property}>{property}</TabsTrigger>
                    ))}
                </TabsList>
                {propertiesNames.map((property, index) => (
                    <TabsContent key={index} value={property} className="dark:bg-base-100 border-base-300 rounded-box p-6 min-h-[400px]">
                        {property}
                    </TabsContent>
                ))}
            </Tabs>}
        </main>
    );
}
