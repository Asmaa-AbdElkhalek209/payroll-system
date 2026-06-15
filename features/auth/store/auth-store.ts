import { create } from "zustand";
import { User } from "@/shared/types/user.types";

type AuthStore = {
  user: User | null;
  isAuthenticated: boolean;
  initialized: boolean;

  setUser: (user: User | null) => void;
  logout: () => void;
  setInitialized: (v: boolean) => void;
};
export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  isAuthenticated: false,
  initialized: false,

  setUser: (user) =>
    set({
      user,
      isAuthenticated: !!user,
      initialized: true,
    }),

  logout: () =>
    set({
      user: null,
      isAuthenticated: false,
      initialized: true,
    }),

  setInitialized: (v) => set({ initialized: v }),
}));
