import { Doc, User } from "@junobuild/core-peer";

export interface UserData {
    user: User;
    role: "tenant" | "landlord" | null;
}

export type UserRoleData = UserData;
