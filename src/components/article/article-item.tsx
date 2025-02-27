import { IArticleItem } from "@interface/props";
import { useRouter } from "next/navigation";

const ArticleItem = ({
  id,
  newsId,
  title,
  date,
  source,
}: IArticleItem) => {
  const router = useRouter();

  const onClickArticle = () => {
    router.push(`article/${newsId}`);
  };

  return (
    <div
      className="flex py-4 border-b-[1px] border-[#F2F2F2] cursor-pointer"
      onClick={onClickArticle}
    >
      {/* 기사 번호 */}
      <div className="text-lavender font-semibold mr-2">{id}</div>

      {/* 기사 정보 */}
      <div className="flex flex-col gap-1 w-full">
        <div className="w-[calc(100%-20px)] font-semibold truncate">
          {title}
        </div>
        <div className="text-xs text-[#B6B6B6]">
          {date} | {source}
        </div>
      </div>
    </div>
  );
};

export default ArticleItem;
