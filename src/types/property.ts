export interface PropertyProps {
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

export const dummyProperties: PropertyProps[] = [
    {
        name: "Cozy Apartment",
        address: "123 Main St, Anytown, USA",
        price: 1200,
        imageUrls: [
            "https://example.com/image1.jpg",
            "https://example.com/image2.jpg"
        ],
        id: "property1",
        bedrooms: 2,
        bathrooms: 1,
        area: 800,
        publishedAt: "2022-01-01T00:00:00Z",
        isPublished: true,
        isDeleted: false,
        criteria: {
            ageGroups: "20-30",
            occupations: "Software Engineer,Designer",
            nationalities: "American,Canadian",
            numberOfTenants: 2
        },
        user_id: "user1"
    },
    {
        name: "Luxury Villa",
        address: "456 High St, Anytown, USA",
        price: 3500,
        imageUrls: [
            "https://example.com/image3.jpg",
            "https://example.com/image4.jpg"
        ],
        id: "property2",
        bedrooms: 4,
        bathrooms: 3,
        area: 2100,
        publishedAt: "2022-02-01T00:00:00Z",
        isPublished: true,
        isDeleted: false,
        criteria: {
            ageGroups: "30-40",
            occupations: "Doctor,Lawyer",
            nationalities: "British,Australian",
            numberOfTenants: 4
        },
        user_id: "user2"
    },
    // Add more properties here
];