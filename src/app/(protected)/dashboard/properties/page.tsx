'use client'

import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label";

interface PropertyProps {
    name: string;
    address: string;
    price: number;
    imageUrl: string;
    id: string;
    bedrooms: number;
    bathrooms: number;
    area: number;
    publishedAt?: string;
    criteria: {
        ageGroups: string[];
        occupations: string[];
        nationalities: string[];
        numberOfTenants: number;
    };
}

const dummyProperties: PropertyProps[] = [
    {
        id: '1',
        name: 'Luxury Villa',
        address: '1234 Fancy Ave, Los Angeles, CA',
        price: 4500,
        imageUrl: 'https://i.imgur.com/Xfm655K.jpeg',
        bedrooms: 4,
        bathrooms: 3,
        area: 3500,
        criteria: {
            ageGroups: ['25-35', '35-45'],
            occupations: ['Software Engineer', 'Designer'],
            nationalities: ['American', 'Canadian'],
            numberOfTenants: 2
        }
    },
    {
        id: '2',
        name: 'Modern Apartment',
        address: '5678 Modern St, New York, NY',
        price: 8000,
        imageUrl: 'https://i.imgur.com/CwfJLWO.jpeg',
        bedrooms: 2,
        bathrooms: 2,
        area: 1500,
        criteria: {
            ageGroups: ['25-35', '35-45'],
            occupations: ['Doctor', 'Lawyer'],
            nationalities: ['American', 'British'],
            numberOfTenants: 1
        }
    },
];

export default function PropertiesPage() {
    const [properties, setProperties] = useState<PropertyProps[]>(dummyProperties);

    const handleAddProperty = () => {
        console.log('Add property');
    }

    const renderPropertyCard = (property: PropertyProps) => {
        return (
            <Card>
                <CardHeader>
                    <CardTitle className="flex flex-row mb-2">
                        <div className="flex items-center">
                            {property.name}
                        </div>
                        <Badge variant="outline" className="ml-auto">{property.publishedAt ? 'Published' : 'Unpublished'}</Badge>
                    </CardTitle>
                    <CardDescription>{property.address}</CardDescription>
                </CardHeader>

                <CardContent>
                    {/*eslint-disable-next-line @next/next/no-img-element*/}
                    {/* <img src={property.imageUrl} alt={property.name} /> */}
                    <div>
                        <p>Price: {property.price}</p>
                        <p>Bedrooms: {property.bedrooms}</p>
                        <p>Bathrooms: {property.bathrooms}</p>
                        <p>Area: {property.area}</p>
                    </div>
                </CardContent>
                {!property.publishedAt && <CardFooter>
                    <Button variant="default">
                        Publish to market
                    </Button>
                </CardFooter>}
            </Card>
        )
    }

    const renderAddPropertyCard = () => {
        return (
            <Card className="border border-dotted">
                <CardHeader className="flex items-center justify-center h-full">
                    <CardTitle>
                        {/* <Button variant="ghost" onClick={handleAddProperty}>
                            + Add a new property
                        </Button> */}
                        {renderEditModal()}
                    </CardTitle>
                </CardHeader>
            </Card>
        )
    }

    const renderEditModal = () => {
        return (
            <Dialog>
                <DialogTrigger asChild>
                    <Button variant="outline">+ Add a new Property</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Add New Property</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                                Name
                            </Label>
                            <Input
                                id="name"
                                className="col-span-3"
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="username" className="text-right">
                                Address
                            </Label>
                            <Input
                                id="username"
                                defaultValue="@peduarte"
                                className="col-span-3"
                            />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="submit">Save changes</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        )
    }

    return <div className="grid grid-cols-3 grid-rows-3 gap-2 p-4">
        {properties?.map((property) => renderPropertyCard(property))}
        {renderAddPropertyCard()}
    </div>

}