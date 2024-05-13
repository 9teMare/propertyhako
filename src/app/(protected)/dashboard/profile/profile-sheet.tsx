import { Button } from "@/components/button";
import { Sheet, SheetClose, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { usePanelSizeStore } from "@/stores/usePanelSizeStore";

import { ReactNode } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import ProfileForm from "./profile-form";

export default function ProfileSheet({ children }: { children: ReactNode }) {
    const panelSize = usePanelSizeStore((state) => state.panelSize);

    return (
        <Sheet>
            <SheetTrigger>{children}</SheetTrigger>
            <SheetContent
                className="p-8 flex flex-col"
                style={{
                    width: `${panelSize}%`,
                }}
            >
                <SheetHeader className="flex flex-row w-full justify-between items-center">
                    <SheetTitle className="line-clamp-1">Create Tenancy Profile</SheetTitle>
                </SheetHeader>

                <ProfileForm />
            </SheetContent>
        </Sheet>
    );
}
