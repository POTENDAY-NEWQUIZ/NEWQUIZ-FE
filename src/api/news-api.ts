import axiosInstance from "./axios-instance";

// 분야별 기사 조회
export const readNewsAll = async (category: string) => {
  return axiosInstance.get(`/news?category=${category}`);
};
