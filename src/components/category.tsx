"use client";

import { useState } from "react";

import { ICategory } from "@interface/props";

const Category = ({ onCategorySelect }: ICategory) => {
  const [select, setSelect] = useState(0);
  const categories = ["정치", "경제", "사회", "기타"];

  const onClickCategory = (index: number) => {
    setSelect(index);
    onCategorySelect(categories[index]);
  };

  return (
    <nav>
      <ul className="flex justify-around bg-[#F7F5FF] rounded-[20px] mx-5 text-sm">
        {categories.map((category, index) => (
          <li
            key={index}
            onClick={() => onClickCategory(index)}
            className={`${
              select === index
                ? "bg-lavender rounded-[20px] text-white font-semibold"
                : "font-medium"
            } cursor-pointer w-[calc(100%/4)] py-2 text-center`}
          >
            {category}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Category;
