import { create } from "zustand";

const useStore = create((set) => ({
  quantity: 0,
  setQuantity: (quantity) => set({ quantity }),
}));

export default useStore;
