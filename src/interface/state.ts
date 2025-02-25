// 사용자 store state
export interface IAuthStore {
  refreshToken: string | null;
  setRefreshToken: (token: string) => void;
  clearRefreshToken: () => void;
  accessToken: string | null;
  setAccessToken: (token: string) => void;
  clearAccessToken: () => void;
}
