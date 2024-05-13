"use client";

import PropertyCard from "@/app/(protected)/dashboard/plaza/property-card";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import { AuthContext } from "@/providers/AuthProvider";
import { PropertyProps } from "@/types/property";
import { listDocs } from "@junobuild/core-peer";
import { LoaderCircleIcon } from "lucide-react";
import { useCallback, useContext, useEffect, useState } from "react";

export default function Page() {
    const [properties, setProperties] = useState<PropertyProps[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const { user } = useContext(AuthContext);

    const fetchProperties = useCallback(async () => {
        setIsLoading(true);
        const { items } = await listDocs<PropertyProps>({
            collection: "property",
        });

        const currProperties = items.map((item) => {
            return {
                ...item.data,
            };
        });

        setProperties(currProperties);
        setIsLoading(false);
    }, []);

    useEffect(() => {
        if (user) {
            fetchProperties();
        }
    }, [user, fetchProperties]);

    return (
        <div className="p-4 overflow-hidden h-screen w-full dark:text-white justify-between flex flex-col space-y-2">
            {isLoading ? (
                <div className="w-full h-screen">
                    <LoaderCircleIcon className="h-16 w-16 animate-spin mx-auto mt-[40vh] dark:stroke-white" />
                </div>
            ) : (
                <>
                    <div className="grid grid-cols-3 grid-rows-2 gap-2 h-full">
                        {properties?.map((property, index) => (
                            <PropertyCard key={index} property={property} />
                        ))}
                    </div>

                    <div className="w-full justify-end flex">
                        <Pagination>
                            <PaginationContent>
                                <PaginationItem>
                                    <PaginationPrevious href="#" />
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink href="#">1</PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationEllipsis />
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationNext href="#" />
                                </PaginationItem>
                            </PaginationContent>
                        </Pagination>
                    </div>
                </>
            )}
        </div>
    );
}
