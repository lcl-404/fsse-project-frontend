import { create } from 'zustand';
import { UserData } from '../data/user.type.ts';
import * as FirebaseAuthService from '../authService/FirebaseAuthService.ts'

interface AuthState {
  loginUser: UserData | null;
  setLoginUser: (user: UserData | null) => void;
  signOut: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  loginUser: null,
  setLoginUser: (user) => set({ loginUser: user }),
  signOut: async () => {
    await FirebaseAuthService.signOut();
    set({ loginUser: null });
  },
}));