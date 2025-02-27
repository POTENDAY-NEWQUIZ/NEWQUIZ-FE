import axiosInstance from "./axios-instance";

// 분야별 기사 조회
export const readNewsAll = async (category: string) => {
  const response = await axiosInstance.get(
    `/news?category=${category}`
  );

  return response.data;
};
