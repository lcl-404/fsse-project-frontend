import { create } from "zustand";

type CartStore = {
  cartUpdateTrigger: number; // Just a counter to force re-fetch
  triggerCartUpdate: () => void;
  resetCart: () => void; // Clear on logout
};

export const useCartStore = create<CartStore>((set) => ({
  cartUpdateTrigger: 0,
  triggerCartUpdate: () => set((state) => ({
    cartUpdateTrigger: state.cartUpdateTrigger + 1
  })),
  resetCart: () => set({ cartUpdateTrigger: 0 }), // Reset on logout
}));