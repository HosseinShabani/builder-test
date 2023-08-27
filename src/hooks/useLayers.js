import { create } from "zustand";

const useLayers = create((set) => ({
  selected: null,
  setSelected: (el) => set({ selected: el }),
}));

export { useLayers };
