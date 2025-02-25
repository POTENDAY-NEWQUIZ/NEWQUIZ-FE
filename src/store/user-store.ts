import create from "zustand";
import { persist } from "zustand/middleware";

import { IAuthStore } from "@interface/state";

// 사용자 토큰 저장
export const useAuthStore = create<IAuthStore>(
  persist(
    (set) => ({
      refreshToken: null,
      setRefreshToken: (token: string) => set({ refreshToken: token }),
      clearRefreshToken: () => set({ refreshToken: null }),
      accessToken: null,
      setAccessToken: (token: string) => set({ accessToken: token }),
      clearAccessToken: () => set({ accessToken: null }),
    }),
    {
      name: "auth-storage",
    }
  ) as any
);

// 사용자 정보 저장
