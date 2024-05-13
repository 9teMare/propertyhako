import { Button } from "@/components/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
import { usePanelSizeStore } from "@/stores/usePanelSizeStore";
import { PropertyProps } from "@/types/property";
import { ReactNode } from "react";

export default function DetailDrawer({ children, property }: { children: ReactNode; property: PropertyProps }) {
    const panelSize = usePanelSizeStore((state) => state.panelSize);

    return (
        <Drawer direction="right">
            <DrawerTrigger>{children}</DrawerTrigger>
            <DrawerContent
                className="p-4"
                style={{
                    width: `${panelSize}%`,
                }}
            >
                <DrawerHeader className="flex w-full justify-between items-center">
                    <div className="flex flex-col space-y-4">
                        <DrawerTitle className="line-clamp-1">{property.name}</DrawerTitle>
                        <DrawerDescription className="line-clamp-2">{property.address}</DrawerDescription>
                    </div>
                    <p className="header-3">${property.price} / mo</p>
                </DrawerHeader>

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

                <DrawerFooter className="flex flex-row w-full justify-between space-x-4">
                    <DrawerClose className="w-[40%]">
                        <Button variant="outline" className="w-full">
                            Cancel
                        </Button>
                    </DrawerClose>
                    <Button className="w-[60%]">Make an Offer</Button>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
}
