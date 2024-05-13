import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PropertyProps } from "@/types/property";
import { Button } from "@/components/button";
import DetailSheet from "./detail-sheet";

export default function PropertyCard({ property }: { property: PropertyProps }) {
    return (
        <Card className="flex justify-between flex-col">
            {/* <img src={property.imageUrl} alt={property.name} className="object-cover h-[60%] w-full rounded-t-xl" /> */}

            <Carousel className="relative rounded-t-xl">
                <CarouselContent>
                    {property.imageUrls.map((image, index) => (
                        <CarouselItem key={index}>
                            {/*eslint-disable-next-line @next/next/no-img-element*/}
                            <img src={image} alt={property.name} className="object-cover h-[25vh] 2xl:h-[33vh] w-full rounded-t-xl" />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>

            <div className="p-4 space-y-2">
                <CardHeader className="p-0 space-y-1">
                    <CardTitle className="flex flex-row justify-between">
                        <div className="flex items-center">{property.name}</div>
                        {/* <Badge variant="outline" className="ml-auto">
                            {property.isPublished ? "Published" : "Unpublished"}
                        </Badge> */}
                        <DetailSheet property={property}>
                            <Button variant="secondary" className="rounded-full h-full">
                                View
                            </Button>
                        </DetailSheet>
                    </CardTitle>
                    <CardDescription>{property.address}</CardDescription>
                </CardHeader>

                <CardContent className="p-0 grid grid-cols-2 grid-rows-2 body-2">
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
                </CardContent>
            </div>
        </Card>
    );
}
