"use client"; // 리액트 훅 부분 컴포넌트 분리 or 서버 액션 사용해서 SSR 적용 필요

import { useEffect, useState } from "react";

import Header from "@components/common/header";
import BackButton from "@components/button/back-button";
import Blank from "@components/button/blank";
import Category from "@components/common/category";
import ArticleList from "@container/article/article-list";
import { readNewsAll } from "@api/news-api";
import Filter from "@components/common/filter";
import { useSearchParams } from "next/navigation";

// 기사 카테고리별 api 연결 필요
const Article = () => {
  const searchParams = useSearchParams();
  const defaultCategory = searchParams.get("category");
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState(defaultCategory!);
  const [filter, setFilter] = useState("전체");

  useEffect(() => {
    getArticles(category, filter);
  }, [category, filter]);

  const getArticles = async (category: string, filter: string) => {
    const response = await readNewsAll(category, filter);
    setArticles(response.data.news);
  };

  const onCategorySelect = (category: string) => {
    setCategory(category);
  };

  const onFilterSelect = (filter: string) => {
    setFilter(filter);
  };

  return (
    <main>
      {/* 헤더 구역 */}
      <Header
        title="분야 선택하기"
        leftChild={<BackButton />}
        rightChild={<Blank />}
      />

      {/* 카테고리 & 기사 리스트 구역 */}
      <section className="pt-16">
        <Category
          currentCategory={category}
          onCategorySelect={onCategorySelect}
        />
        <Filter onFilterSelect={onFilterSelect} />
        <ArticleList articles={articles} />
      </section>
    </main>
  );
};

export default Article;
