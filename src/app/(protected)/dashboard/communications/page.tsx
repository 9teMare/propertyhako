"use client";
import { useToast } from "@/components/ui/use-toast";
import { AuthContext } from "@/providers/AuthProvider";
import { PropertyProps } from "@/types/property";
import { listDocs } from "@junobuild/core-peer";
import { useCallback, useContext, useEffect, useState } from "react";

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
    }, [user, fetchProperties]);

    return (
        <main className="flex flex-1 flex-col gap-6 p-6 text-black dark:text-white">
            <div role="tablist" className="tabs tabs-lifted">
                {propertiesNames.map((property, index) => (
                    <>
                        <a
                            role="tab"
                            onClick={() => setCurrActive(index)}
                            key={index}
                            className={currActive === index ? "tab tab-active [--tab-bg:white] dark:[--tab-bg:#1d232a]" : "tab"}
                        >
                            {property}
                        </a>
                        <div role="tabpanel" className="tab-content dark:bg-base-100 border-base-300 rounded-box p-6 min-h-[400px]">
                            {properties[currActive].address}
                        </div>
                    </>
                ))}
            </div>
        </main>
    );
}
