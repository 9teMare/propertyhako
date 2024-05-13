export interface TenantProfile {
    age: number;
    gender: "male" | "female";
    occupation: string;
    pass: string;
    budget: number[];
    pax: number;
    relationshipBetweenTenants?: string;
    smoking: boolean;
    pet: boolean;
    startFrom: string;
    duration: number;
    note?: string;
}
