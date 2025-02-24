import Header from "@components/header";
import BackButton from "@components/button/back-button";
import Blank from "@components/button/blank";

const ArticleList = () => {
  return (
    <div>
      <Header
        title="분야 선택하기"
        leftChild={<BackButton />}
        rightChild={<Blank />}
      />
    </div>
  );
};

export default ArticleList;
