import ArticleItem from "@components/article/article-item";

import { IArticleItemList } from "@interface/props";

const ArticleList = ({ articles }: IArticleItemList) => {
  return (
    <main className="mx-8">
      {articles.length > 0 ? (
        articles.map((article, index) => (
          <ArticleItem
            key={index + 1}
            id={index + 1}
            newsId={article.newsId}
            title={article.title}
            date={article.date}
            source={article.source}
          />
        ))
      ) : (
        <p className="mt-[35vh] text-center text-sm font">
          해당 분야에 존재하는 기사가 없습니다.
          <br />
          다른 분야를 선택해주세요
        </p>
      )}
    </main>
  );
};

export default ArticleList;
