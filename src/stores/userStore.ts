import { type User } from "@junobuild/core-peer";
import { create } from "zustand";

type State = {
    user: User | undefined | null;
    role: string | null;
};

type Action = {
    updateUser: (user: State["user"]) => void;
    updateRole: (role: State["role"]) => void;
};

export const useUserStore = create<State & Action>((set) => ({
    user: null,
    role: "",
    updateUser: (user) => set(() => ({ user: user })),
    updateRole: (role) => set(() => ({ role: role })),
}));
