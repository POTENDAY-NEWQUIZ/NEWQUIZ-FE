import axiosInstance from "./axios-instance";

// 분야별 기사 조회
export const readNewsAll = async (category: string) => {
  const response = await axiosInstance.get(
    `/news?category=${category}`
  );

  return response.data;
};

// 뉴스 상세 조회 (원문 보기, 요약 조회 때도 사용)
export const readNewsDetail = async (newsId: string) => {
  console.log(newsId);
  const response = await axiosInstance.get(`/news/${newsId}`);
  return response.data;
};
