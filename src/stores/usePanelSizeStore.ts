import { create } from "zustand";

type State = {
    panelSize: number;
};

type Action = {
    updatePanelSize: (user: State["panelSize"]) => void;
};

export const usePanelSizeStore = create<State & Action>((set) => ({
    panelSize: 80,
    updatePanelSize: (user) => set(() => ({ panelSize: user })),
}));
