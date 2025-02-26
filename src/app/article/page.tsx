"use client"; // 리액트 훅 부분 컴포넌트 분리 or 서버 액션 사용해서 SSR 적용 필요

import { useEffect, useState } from "react";

import ArticleLoading from "@container/article-loading";
import Header from "@components/header";
import BackButton from "@components/button/back-button";
import Blank from "@components/button/blank";
import Category from "@components/category";

const ArticleList = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main>
      {isLoading ? (
        <ArticleLoading />
      ) : (
        <>
          <Header
            title="분야 선택하기"
            leftChild={<BackButton />}
            rightChild={<Blank />}
          />
          <section className="pt-16">
            <Category />
          </section>
        </>
      )}
    </main>
  );
};

export default ArticleList;
