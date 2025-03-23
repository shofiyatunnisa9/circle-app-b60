import { SuhuCounterStore } from "@/types/suhu";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useSuhuCounterStore = create<SuhuCounterStore>()(
  persist(
    (set) => ({
      counter: 20,
      increment: () => {
        set((state) => ({ counter: state.counter + 1 }));
      },
      decrement: () => {
        set((state) => ({ counter: state.counter + 1 }));
      },
      incrementByAmount: (amount: number) => {
        set((state) => ({ counter: state.counter + 1 }));
      },
      decrementByAmount: () => {},
      reset: () => {},
    }),
    { name: "suhu-counter-store" }
  )
);
