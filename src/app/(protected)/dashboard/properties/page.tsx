"use client";

import { useCallback, useContext, useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/components/ui/use-toast"
import { Switch } from "@/components/ui/switch";
import { nanoid } from "nanoid";
import { listDocs, setDoc } from "@junobuild/core-peer";
import { AuthContext } from "@/providers/AuthProvider";
import { LoaderCircle } from "lucide-react";

interface PropertyProps {
    name: string;
    address: string;
    price: number;
    imageUrls: string[];
    id: string;
    bedrooms: number;
    bathrooms: number;
    area: number;
    publishedAt?: string;
    isPublished?: boolean;
    isDeleted?: boolean;
    criteria: {
        ageGroups: string;
        occupations: string;
        nationalities: string;
        numberOfTenants: number;
    };
    user_id?: string;
}

export default function PropertiesPage() {
    const [properties, setProperties] = useState<PropertyProps[]>();
    const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);
    const [currName, setCurrName] = useState<string>('');
    const [currAddress, setCurrAddress] = useState<string>('');
    const [currPrice, setCurrPrice] = useState<number>(0);
    const [currImageUrls, setCurrImageUrls] = useState<string[]>([]);
    const [currBedrooms, setCurrBedrooms] = useState<number>(0);
    const [currBathrooms, setCurrBathrooms] = useState<number>(0);
    const [currArea, setCurrArea] = useState<number>(0);
    const [currStep, setCurrStep] = useState<number>(0);
    const [currCriteria, setCurrCriteria] = useState<PropertyProps['criteria']>({
        ageGroups: '',
        occupations: '',
        nationalities: '',
        numberOfTenants: 1
    });
    const [isPublished, setIsPublished] = useState<boolean>(false);
    const [isLoading, setLoading] = useState<boolean>(false);
    const { user } = useContext(AuthContext);
    const { toast } = useToast();

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

    const handleCancel = () => {
        setCurrStep(0);
        setIsEditModalOpen(false);
        setCurrName('');
        setCurrAddress('');
        setCurrPrice(0);
        // setCurrImageUrl('');
        setCurrBedrooms(0);
        setCurrBathrooms(0);
        setCurrArea(0);
        setCurrCriteria({
            ageGroups: '',
            occupations: '',
            nationalities: '',
            numberOfTenants: 1
        });
        setIsPublished(false);
    }

    const handleAddProperty = async () => {
        setLoading(true);

        const key = nanoid();

        await setDoc({
            collection: "property",
            doc: {
                key,
                data: {
                    user_id: user?.owner,
                    name: currName,
                    address: currAddress,
                    price: currPrice,
                    imageUrls: currImageUrls,
                    bedrooms: currBedrooms,
                    bathrooms: currBathrooms,
                    area: currArea,
                    criteria: currCriteria,
                    isPublished: isPublished,
                    isDeleted: false
                },
            },
        })
            .then((res) => {
                if (res) {
                    setProperties([...(properties ?? []), {
                        id: key,
                        name: currName,
                        address: currAddress,
                        price: currPrice,
                        imageUrls: currImageUrls,
                        bedrooms: currBedrooms,
                        bathrooms: currBathrooms,
                        area: currArea,
                        criteria: currCriteria,
                        isPublished: isPublished,
                        isDeleted: false
                    }]);
                    toast({
                        title: "Property added successfully",
                        description: "Your property has been added to the list",
                        duration: 2000,
                    })
                }
            })
            .finally(() => {
                setLoading(false);
                handleCancel();
            })
            .catch((err) => {
                console.error(err);
            });
    };

    const renderPropertyCard = (property: PropertyProps) => {
        return (
            <Card key={property.id}>
                <CardHeader>
                    <CardTitle className="flex flex-row mb-2">
                        <div className="flex items-center">{property.name}</div>
                        <Badge variant="outline" className="ml-auto">
                            {property.isPublished ? "Published" : "Unpublished"}
                        </Badge>
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
                {!property.isPublished && (
                    <CardFooter>
                        <Button variant="default">Publish to market</Button>
                    </CardFooter>
                )}
            </Card>
        );
    };

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
        );
    };

    const renderEditModal = () => {
        const handleOnClick = () => {
            if (currStep == 2) {
                handleAddProperty();
            } else {
                if ((!currName || currName == '') || (!currAddress || currAddress == '') || currPrice == 0 || currArea == 0 || currBedrooms == 0 || currBathrooms == 0) {
                    let description = "";
                    if (!currName || currName == '') {
                        description += "Property Name, ";
                    }
                    if (!currAddress || currAddress == '') {
                        description += "Address, ";
                    }
                    if (currPrice == 0) {
                        description += "Price, ";
                    }
                    if (currArea == 0) {
                        description += "Area, ";
                    }
                    if (currBedrooms == 0) {
                        description += "Bedrooms, ";
                    }
                    if (currBathrooms == 0) {
                        description += "Bathrooms, ";
                    }

                    description = description.slice(0, -2) + " are required";
                    toast({
                        title: "Please fill in all the fields before continue",
                        description: description,
                        duration: 2000,
                    })
                    return;
                }

                if (currStep == 1 && (!currCriteria.ageGroups || currCriteria.ageGroups == ''
                    || !currCriteria.occupations || currCriteria.occupations == ''
                    || !currCriteria.nationalities || currCriteria.nationalities == ''
                    || currCriteria.numberOfTenants == 0)
                ) {
                    let description = "";
                    if (!currCriteria.ageGroups || currCriteria.ageGroups == '') {
                        description += "Age Groups, ";
                    }
                    if (!currCriteria.occupations || currCriteria.occupations == '') {
                        description += "Occupations, ";
                    }
                    if (!currCriteria.nationalities || currCriteria.nationalities == '') {
                        description += "Nationalities, ";
                    }
                    if (currCriteria.numberOfTenants == 0) {
                        description += "Number of Tenants, ";
                    }
                    description = description.slice(0, -2) + " are required";
                    toast({
                        title: "Please fill in all the fields before continue",
                        description: description,
                        duration: 2000,
                    })
                    return;
                }

                setCurrStep(currStep + 1);
            }
        }

        const renderInput = (label: string, value: string | number, onChange: (e: any) => void, placeholder?: string) => {
            return (
                <div className="grid grid-cols-3 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                        {label}
                    </Label>
                    <Input
                        id="name"
                        className="col-span-2"
                        value={value}
                        onChange={onChange}
                        placeholder={placeholder}
                    />
                </div>
            )
        }

        const renderStepOne = () => {
            return <div className="grid gap-4 py-4">
                {renderInput('Property Name', currName, (e) => setCurrName(e.target.value))}
                {renderInput('Address', currAddress, (e) => setCurrAddress(e.target.value))}
                {renderInput('Price', currPrice, (e) => setCurrPrice(e.target.value ? parseInt(e.target.value) : 0))}
                {renderInput('Area', currArea, (e) => setCurrArea(e.target.value ? parseInt(e.target.value) : 0))}
                {renderInput('Bedrooms', currBedrooms, (e) => setCurrBedrooms(e.target.value ? parseInt(e.target.value) : 0))}
                {renderInput('Bathrooms', currBathrooms, (e) => setCurrBathrooms(e.target.value ? parseInt(e.target.value) : 0))}
                {renderInput('Image URLs (separate by comma)', currImageUrls?.join(','), (e) => setCurrImageUrls(e.target.value.split(',')))}
            </div>
        }

        const renderStepTwo = () => {
            return (
                <div className="grid gap-4 py-4">
                    <div>Write some short desciptions for your rental criteria</div>
                    {renderInput('Age Groups', currCriteria.ageGroups,
                        (e) => setCurrCriteria({ ...currCriteria, ageGroups: e.target.value }), 'e.g. I want 25-35, 35-45')}
                    {renderInput('Occupations', currCriteria.occupations,
                        (e) => setCurrCriteria({ ...currCriteria, occupations: e.target.value }), 'e.g. I do not want students')}
                    {renderInput('Nationalities', currCriteria.nationalities,
                        (e) => setCurrCriteria({ ...currCriteria, nationalities: e.target.value }), 'e.g. I am okay with All')}
                    {renderInput('Number of Tenants', currCriteria.numberOfTenants,
                        (e) => setCurrCriteria({ ...currCriteria, numberOfTenants: e.target.value ? parseInt(e.target.value) : 0 }))}
                    <div className="flex flex-row items-center justify-center gap-4">
                        List this property to the market?
                        <Switch
                            id="isPublished"
                            checked={isPublished}
                            onCheckedChange={() => setIsPublished(!isPublished)}
                        />
                    </div>

                </div>
            );
        };

        return (
            <Dialog open={isEditModalOpen} onOpenChange={setIsEditModalOpen}>
                <DialogTrigger asChild>
                    <Button variant="outline" onClick={() => setIsEditModalOpen(true)}>+ Add a new Property</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[600px]">
                    <DialogHeader className="flex flex-row">
                        <DialogTitle>Add New Property</DialogTitle>
                        <Progress className="w-[40%] ml-10" value={currStep * 33} />
                    </DialogHeader>
                    <div className="w-full h-[400px] flex items-center justify-center">
                        {currStep == 0 && renderStepOne()}
                        {currStep == 1 && renderStepTwo()}
                        {currStep == 2 && <DialogDescription className="text-xl">Review your property details before submitting</DialogDescription>}
                    </div>
                    <DialogFooter>
                        {!isLoading && <Button variant="destructive" onClick={handleCancel}>Cancel</Button>}
                        {currStep > 0 && !isLoading && <Button variant="outline" onClick={() => setCurrStep(currStep - 1)}>Back</Button>}
                        <Button type="submit" onClick={handleOnClick}>
                            {currStep == 2 ? 'Submit' : 'Next'}
                            {isLoading && <LoaderCircle className="h-5 w-5 animate-spin ml-2" />}
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog >
        )
    }

    return (
        <div className="grid grid-cols-3 grid-rows-3 gap-2 p-4">
            {properties?.map((property) => renderPropertyCard(property))}
            {renderAddPropertyCard()}
        </div>
    );
}
