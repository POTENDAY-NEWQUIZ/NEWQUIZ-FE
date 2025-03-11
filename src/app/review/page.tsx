"use client";

import { useEffect, useState } from "react";

import Header from "@components/common/header";
import BackButton from "@components/button/back-button";
import Blank from "@components/button/blank";
import Category from "@components/review/category";
import ReviewItem from "@components/review/review-item";
import { readReviewAll } from "@api/review-api";
import { IReview } from "@interface/props";

const Review = () => {
  const [reviews, setReviews] = useState<IReview[]>([]);
  const [category, setCategory] = useState("유의어");

  useEffect(() => {
    getQuizzes(category);
  }, [category]);

  const getQuizzes = async (category: string) => {
    const response = await readReviewAll(category);
    setReviews(response.data.notes);
  };

  const onCategorySelect = (category: string) => {
    setCategory(category);
  };

  return (
    <>
      {/* 헤더 구역 */}
      <Header
        title="오답노트"
        leftChild={<BackButton />}
        rightChild={<Blank />}
      />

      {/* 문제 카테고리 구역 */}
      <section className="pt-16 mb-5">
        <Category
          currentCategory={category}
          onCategorySelect={onCategorySelect}
        />
      </section>

      {/* 문제 리스트 구역 */}
      <section className="mx-5">
        {reviews.length > 0 ? (
          reviews.map((review, index) => (
            <ReviewItem key={index} {...review} />
          ))
        ) : (
          <p className="mt-[40vh] text-center text-sm font">
            해당 유형에 존재하는 오답이 없습니다.
            <br />
            다른 유형을 선택해주세요
          </p>
        )}
      </section>
    </>
  );
};

export default Review;
