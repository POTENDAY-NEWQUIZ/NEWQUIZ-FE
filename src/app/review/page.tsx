"use client";

import { useState } from "react";

import Header from "@components/common/header";
import BackButton from "@components/button/back-button";
import Blank from "@components/button/blank";
import Category from "@components/review/category";
import ReviewItem from "@components/review/review-item";

const Review = () => {
  const [category, setCategory] = useState("유의어");

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
        <ReviewItem />
      </section>
    </>
  );
};

export default Review;
