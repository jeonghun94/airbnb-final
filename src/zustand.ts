import { create } from "zustand";

type State = {
  path: string;
  setPath: (path: string) => void;
};

export const useStore = create<State>((set) => ({
  path: "",
  setPath: (path: string) => set({ path }),
}));
