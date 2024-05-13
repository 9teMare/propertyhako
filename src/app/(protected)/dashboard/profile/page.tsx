"use client";

import { Button } from "@/components/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AuthContext } from "@/providers/AuthProvider";
import { TenantProfile } from "@/types/profile";
import { listDocs } from "@junobuild/core-peer";
import { Edit2Icon, Edit3Icon, EditIcon } from "lucide-react";
import { useCallback, useContext, useEffect, useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import ProfileSheet from "./profile-sheet";

const mockProfile: TenantProfile = {
    age: 25,
    gender: "male",
    occupation: "Software Engineer",
    pass: "Employment Pass",
    budget: [1300, 1400],
    pax: 1,
    relationshipBetweenTenants: undefined,
    smoking: false,
    pet: false,
    startFrom: "2024-06-01",
    duration: 2,
};

export default function Page() {
    const [profile, setProfile] = useState<TenantProfile>();
    const [isLoading, setIsLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { user } = useContext(AuthContext);

    // const fetchProperties = useCallback(async () => {
    //     setIsLoading(true);
    //     const { items } = await listDocs<TenantProfile>({
    //         collection: "tenantProfile",
    //         filter: {
    //             owner: user?.owner,
    //         },
    //     });

    //     const currProfile = items.map((item) => {
    //         return {
    //             ...item.data,
    //         };
    //     });

    //     setProfile(currProfile[0]);

    //     setIsLoading(false);
    // }, [user?.owner]);

    // useEffect(() => {
    //     if (user) {
    //         fetchProperties();
    //     }
    // }, [user, fetchProperties]);

    return (
        <main className="flex overflow-y-auto h-screen w-full flex-1 flex-col gap-6 p-6 text-black dark:text-white">
            <div className="flex w-full justify-between items-center">
                <div className="space-y-2 flex flex-col">
                    <h1 className="text-2xl font-bold">My Profile</h1>
                    <p className="text-gray-500 dark:text-gray-400">View and manage your tenancy profile here.</p>
                </div>

                <Button variant="ghost" className="flex space-x-2">
                    <Edit3Icon className="size-4" />
                    <p>Edit</p>
                </Button>
            </div>

            {!profile ? (
                <div className="w-full h-full justify-center items-center flex flex-col space-y-6">
                    <p className="header-5">Seems like you have yet to create your tenancy profile</p>

                    <ProfileSheet>
                        <Button variant="secondary">Create Profile</Button>
                    </ProfileSheet>
                </div>
            ) : (
                <div className="grid grid-cols-3 gap-6">
                    {Object.entries(profile).map(([key, value], index) => (
                        <Card key={index}>
                            <CardHeader>
                                <CardTitle>{key.substring(0, 1).toUpperCase() + key.substring(1)}</CardTitle>
                                <CardDescription>
                                    {/* This is a description of Project A. It includes details about the project and its status. */}
                                    {value !== undefined
                                        ? typeof value === "boolean"
                                            ? value
                                                ? "Yes"
                                                : "No"
                                            : typeof value === "string"
                                            ? value.substring(0, 1).toUpperCase() + value.substring(1)
                                            : value
                                        : "N/A"}
                                </CardDescription>
                            </CardHeader>
                            {/* <CardContent>
                            <p>{value}</p>
                        </CardContent> */}
                        </Card>
                    ))}
                </div>
            )}
        </main>
    );
}
