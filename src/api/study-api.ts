import axiosInstance from "@api/axios-instance";

// 학습 내용 조회
export const readStudy = async () => {
  const response = await axiosInstance.get(`/users/study`);
  return response.data;
};
