import { Suspense } from "react";

import ArticleContainer from "@container/article-container";

const Article = async () => {
  return (
    <Suspense>
      <ArticleContainer />
    </Suspense>
  );
};

export default Article;
