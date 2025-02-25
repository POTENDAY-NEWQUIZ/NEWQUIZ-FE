import { create } from "zustand";

import { IAuthStore } from "@interface/state";

// 사용자 토큰 저장
export const useAuthStore = create<IAuthStore>((set) => ({
  refreshToken: null,
  setRefreshToken: (token) => set({ refreshToken: token }),
  clearRefreshToken: () => set({ refreshToken: null }),
  accessToken: null,
  setAccessToken: (token) => set({ accessToken: token }),
  clearAccessToken: () => set({ accessToken: null }),
}));

// 사용자 정보 저장
