import { Button } from "@/components/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

import { usePanelSizeStore } from "@/stores/usePanelSizeStore";
import { PropertyProps } from "@/types/property";
import { ReactNode } from "react";

export default function DetailSheet({ children, property }: { children: ReactNode; property: PropertyProps }) {
    const panelSize = usePanelSizeStore((state) => state.panelSize);

    return (
        <Sheet>
            <SheetTrigger>{children}</SheetTrigger>
            <SheetContent
                className="p-8 flex flex-col justify-between"
                style={{
                    width: `${panelSize}%`,
                }}
            >
                <SheetHeader className="flex flex-row w-full justify-between items-center">
                    <div className="flex flex-col space-y-4">
                        <SheetTitle className="line-clamp-1">{property.name}</SheetTitle>
                        <SheetDescription className="line-clamp-2">{property.address}</SheetDescription>
                    </div>
                    <p className="header-3">${property.price} / mo</p>
                </SheetHeader>

                <Carousel className="relative rounded-t-xl">
                    <CarouselContent>
                        {property.imageUrls.map((image, index) => (
                            <CarouselItem key={index}>
                                {/*eslint-disable-next-line @next/next/no-img-element*/}
                                <img src={image} alt={property.name} className="object-cover h-[40vh] 2xl:h-[50vh] w-full rounded-lg" />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>

                <div className="p-2 grid grid-cols-2 grid-rows-2 body-2">
                    <span className="flex space-x-2 dark:text-gray-100">
                        <p className="font-semibold">Price</p>
                        <p>{property.price}</p>
                    </span>
                    <span className="flex space-x-2 dark:text-gray-100">
                        <p className="font-semibold">Bedrooms</p>
                        <p>{property.bedrooms}</p>
                    </span>
                    <span className="flex space-x-2 dark:text-gray-100">
                        <p className="font-semibold">Bathrooms</p>
                        <p>{property.bathrooms}</p>
                    </span>
                    <span className="flex space-x-2 dark:text-gray-100">
                        <p className="font-semibold">Area</p>
                        <p>{property.area}</p>
                    </span>
                </div>

                <SheetFooter className="flex flex-row w-full justify-between space-x-8">
                    <SheetClose className="w-[40%]">
                        <Button variant="outline" className="w-full">
                            Cancel
                        </Button>
                    </SheetClose>
                    <Button className="w-[60%]">Make an Offer</Button>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    );
}
