import axiosInstance from "@api/axios-instance";

// 랭킹 조회
export const readRank = async () => {
  const response = await axiosInstance.get(`/ranking`);
  return response.data;
};
