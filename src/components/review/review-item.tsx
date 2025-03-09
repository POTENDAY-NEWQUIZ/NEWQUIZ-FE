import Image from "next/image";
import Link from "next/link";

import { IReview } from "@interface/props";

import unsolve from "@assets/svg/unsolve.svg";
import solve from "@assets/svg/solve.svg";

const categoryMap: Record<string, string> = {
  ECONOMY: "경제",
  POLITICS: "정치",
  SOCIETY: "사회",
  GLOBAL: "국제",
};

const ReviewItem = (review: IReview) => {
  return (
    <>
      {!review.isChecked ? (
        <Link href={`/review/${review.quizResultId}`}>
          <div className="p-4 mb-3 rounded-xl bg-[#F3F0FF] border-[1px] border-[#CABBFF]">
            <div className="flex justify-between mb-1">
              <p className="font-medium w-[calc(100%-24px)] truncate">
                {review.title}
              </p>
              <Image
                src={unsolve}
                width={20}
                height={20}
                alt="unsolve"
              />
            </div>
            <p className="text-xs text-[#909090]">
              {review.date} | {categoryMap[review.category]}
            </p>
          </div>
        </Link>
      ) : (
        <div className="p-4 mb-3 rounded-xl bg-[#EEEEEE]">
          <div className="flex justify-between mb-1">
            <p className="font-medium w-[calc(100%-24px)] text-[#575757] truncate">
              {review.title}
            </p>
            <Image src={solve} width={20} height={20} alt="solve" />
          </div>
          <p className="text-xs text-[#909090]">
            {review.date} | {categoryMap[review.category]}
          </p>
        </div>
      )}
    </>
  );
};

export default ReviewItem;
