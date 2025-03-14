"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";

import Header from "@components/common/header";
import BackButton from "@components/button/back-button";
import Blank from "@components/button/blank";
import Button from "@components/button/button";
import QuizLoading from "@container/quiz/quiz-loading";
import { useNewsStore } from "@store/news-store";
import { IArticle } from "@interface/props";
import { readNewsDetail } from "@api/news-api";

import caution from "@assets/svg/caution-lavender.svg";
import pin from "@assets/svg/seciton_pin.svg";

const Article = () => {
  const params = useParams();
  const [loading, setLoading] = useState(false);
  const [article, setArticle] = useState<IArticle>({
    title: "",
    date: "",
    source: "",
    category: "",
    newsId: 0,
    totalSummary: "",
    order: 0,
    paragraphs: [],
  });

  useEffect(() => {
    const newsId = params.id;
    getArticleDetail(String(newsId));
  }, []);

  const getArticleDetail = async (newsId: string) => {
    const response = await readNewsDetail(newsId);
    setArticle(response.data);

    const { setNews } = useNewsStore.getState();
    setNews(response.data);
  };

  if (loading) return <QuizLoading newsId={params.id as string} />;

  return (
    <main className="bg-mist-lavender">
      {/* 헤더 영역 */}
      <Header
        title=" "
        leftChild={<BackButton />}
        rightChild={<Blank />}
      />

      {/* 안내 문구 영역 */}
      <section className="pt-16 mx-5 mb-7">
        <div className="py-3 flex justify-center items-center gap-1 text-xs bg-home-lavender rounded-[10px]">
          <Image src={caution} width={18} height={18} alt="경고" />
          <p>해당 사설은 뉴퀴즈와는 무관합니다.</p>
        </div>
      </section>

      {/* 기사 내용 영역 */}
      <section className="mx-5">
        {/* 기사 제목 */}
        <div className="mb-[22px]">
          <p className="font-semibold text-xl break-keep leading-6 mb-2">
            {article.title}
          </p>
          <p className="text-xs text-[#484848]">
            {article.date} | {article.source} | {article.category}
          </p>
        </div>

        {/* 기사 요약 */}
        <div className="bg-white border-2 border-[#DFD8FF] rounded-lg py-4 px-5 mb-6">
          <div className="flex mb-2">
            <Image src={pin} width={20} height={20} alt="핀" />
            <p className="font-semibold text-sm">
              이런 내용이에요! 기사 짧게 보기
            </p>
          </div>
          <ul>
            {article.totalSummary.includes("\n") ? (
              article.totalSummary.split("\n").map((line, index) => (
                <li
                  key={index}
                  className="list-disc list-inside pl-2 text-[13px] leading-6"
                >
                  {line}
                </li>
              ))
            ) : (
              <li className="list-disc list-inside pl-2 text-[13px] leading-6">
                {article.totalSummary}
              </li>
            )}
          </ul>
        </div>

        {/* 기사 내용 */}
        <div className="leading-7 mb-16">
          {article.paragraphs.map((paragraph) => (
            <div key={paragraph.order}>
              <p>{paragraph.content}</p>
              <br />
            </div>
          ))}
        </div>
      </section>

      {/* 버튼 영역 */}
      <section className="max-w-[480px] w-full fixed bottom-5">
        <Button
          text="해당 사설로 퀴즈 시작할래요!"
          type="active"
          onClick={() => setLoading(true)}
        />
      </section>
    </main>
  );
};

export default Article;
