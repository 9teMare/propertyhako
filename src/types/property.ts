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