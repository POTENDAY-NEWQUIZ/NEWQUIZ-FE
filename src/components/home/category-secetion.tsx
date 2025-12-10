import { IHomeCategory } from "@interface/props";
import Image from "next/image";
import { useRouter } from "next/router";

const CategorySection = ({ image, category }: IHomeCategory) => {
  const router = useRouter();

  return (
    <div
      className="w-[calc(50%-8px)] bg-white rounded-xl py-4 flex flex-col items-center shadow-light cursor-pointer"
      onClick={() => router.push(`/article?category=${category}`)}
    >
      <Image src={image} width={96} height={96} alt={category} />
      <p className="text-sm font-semibold">{category}</p>
    </div>
  );
};

export default CategorySection;
