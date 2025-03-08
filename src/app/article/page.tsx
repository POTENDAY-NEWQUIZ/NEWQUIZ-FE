import { Suspense } from "react";

import ArticleContainer from "@container/article/article-container";

const Article = async () => {
  return (
    <Suspense>
      <ArticleContainer />
    </Suspense>
  );
};

export default Article;
