"use client";

import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import PropertyCard from "@/app/(protected)/dashboard/plaza/property-card";
import { PropertyProps } from "@/types/property";
import { useState } from "react";

const dummyProperties: PropertyProps[] = [
    {
        id: "1",
        name: "Luxury Villa",
        address: "1234 Fancy Ave, Los Angeles, CA",
        price: 4500,
        imageUrls: ["https://i.imgur.com/Xfm655K.jpeg", "https://i.imgur.com/Xfm655K.jpeg", "https://i.imgur.com/Xfm655K.jpeg"],
        bedrooms: 4,
        bathrooms: 3,
        area: 3500,
        criteria: {
            ageGroups: ["25-35", "35-45"],
            occupations: ["Software Engineer", "Designer"],
            nationalities: ["American", "Canadian"],
            numberOfTenants: 2,
        },
    },
    {
        id: "2",
        name: "Modern Apartment",
        address: "5678 Modern St, New York, NY",
        price: 8000,
        imageUrls: ["https://i.imgur.com/CwfJLWO.jpeg", "https://i.imgur.com/CwfJLWO.jpeg", "https://i.imgur.com/CwfJLWO.jpeg"],
        bedrooms: 2,
        bathrooms: 2,
        area: 1500,
        criteria: {
            ageGroups: ["25-35", "35-45"],
            occupations: ["Doctor", "Lawyer"],
            nationalities: ["American", "British"],
            numberOfTenants: 1,
        },
    },
    {
        id: "2",
        name: "Modern Apartment",
        address: "5678 Modern St, New York, NY",
        price: 8000,
        imageUrls: ["https://i.imgur.com/CwfJLWO.jpeg"],
        bedrooms: 2,
        bathrooms: 2,
        area: 1500,
        criteria: {
            ageGroups: ["25-35", "35-45"],
            occupations: ["Doctor", "Lawyer"],
            nationalities: ["American", "British"],
            numberOfTenants: 1,
        },
    },
    {
        id: "2",
        name: "Modern Apartment",
        address: "5678 Modern St, New York, NY",
        price: 8000,
        imageUrls: ["https://i.imgur.com/CwfJLWO.jpeg"],
        bedrooms: 2,
        bathrooms: 2,
        area: 1500,
        criteria: {
            ageGroups: ["25-35", "35-45"],
            occupations: ["Doctor", "Lawyer"],
            nationalities: ["American", "British"],
            numberOfTenants: 1,
        },
    },
    {
        id: "2",
        name: "Modern Apartment",
        address: "5678 Modern St, New York, NY",
        price: 8000,
        imageUrls: ["https://i.imgur.com/CwfJLWO.jpeg"],
        bedrooms: 2,
        bathrooms: 2,
        area: 1500,
        criteria: {
            ageGroups: ["25-35", "35-45"],
            occupations: ["Doctor", "Lawyer"],
            nationalities: ["American", "British"],
            numberOfTenants: 1,
        },
    },
    {
        id: "2",
        name: "Modern Apartment",
        address: "5678 Modern St, New York, NY",
        price: 8000,
        imageUrls: ["https://i.imgur.com/CwfJLWO.jpeg"],
        bedrooms: 2,
        bathrooms: 2,
        area: 1500,
        criteria: {
            ageGroups: ["25-35", "35-45"],
            occupations: ["Doctor", "Lawyer"],
            nationalities: ["American", "British"],
            numberOfTenants: 1,
        },
    },
    // {
    //     id: "2",
    //     name: "Modern Apartment",
    //     address: "5678 Modern St, New York, NY",
    //     price: 8000,
    //     imageUrls: ["https://i.imgur.com/CwfJLWO.jpeg"],
    //     bedrooms: 2,
    //     bathrooms: 2,
    //     area: 1500,
    //     criteria: {
    //         ageGroups: ["25-35", "35-45"],
    //         occupations: ["Doctor", "Lawyer"],
    //         nationalities: ["American", "British"],
    //         numberOfTenants: 1,
    //     },
    // },
    // {
    //     id: "2",
    //     name: "Modern Apartment",
    //     address: "5678 Modern St, New York, NY",
    //     price: 8000,
    //     imageUrls: ["https://i.imgur.com/CwfJLWO.jpeg"],
    //     bedrooms: 2,
    //     bathrooms: 2,
    //     area: 1500,
    //     criteria: {
    //         ageGroups: ["25-35", "35-45"],
    //         occupations: ["Doctor", "Lawyer"],
    //         nationalities: ["American", "British"],
    //         numberOfTenants: 1,
    //     },
    // },
    // {
    //     id: "2",
    //     name: "Modern Apartment",
    //     address: "5678 Modern St, New York, NY",
    //     price: 8000,
    //     imageUrls: ["https://i.imgur.com/CwfJLWO.jpeg"],
    //     bedrooms: 2,
    //     bathrooms: 2,
    //     area: 1500,
    //     criteria: {
    //         ageGroups: ["25-35", "35-45"],
    //         occupations: ["Doctor", "Lawyer"],
    //         nationalities: ["American", "British"],
    //         numberOfTenants: 1,
    //     },
    // },
];

export default function Page() {
    const [properties, setProperties] = useState<PropertyProps[]>(dummyProperties);

    return (
        <div className="p-4 overflow-hidden h-screen w-full dark:text-white justify-between flex flex-col space-y-2">
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
        </div>
    );
}
