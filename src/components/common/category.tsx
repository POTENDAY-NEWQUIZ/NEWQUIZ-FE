"use client";

import { useState } from "react";

import { ICategory } from "@interface/props";

const Category = ({ onCategorySelect }: ICategory) => {
  const [select, setSelect] = useState(0);
  const categories = ["정치", "경제", "사회", "글로벌"];

  const onClickCategory = (index: number) => {
    setSelect(index);
    onCategorySelect(categories[index]);
  };

  return (
    <nav>
      <ul className="flex justify-around mx-5">
        {categories.map((category, index) => (
          <li
            key={index}
            onClick={() => onClickCategory(index)}
            className={`${
              select === index
                ? "font-bold text-lavender border-b-2 border-lavender"
                : "font-medium text-[#727272] border-b-2 border-[#F2F2F2]"
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
