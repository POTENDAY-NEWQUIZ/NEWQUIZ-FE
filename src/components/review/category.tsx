"use client";

import { useState } from "react";

import { ICategory } from "@interface/props";

const Category = ({ currentCategory, onCategorySelect }: ICategory) => {
  const categories = ["유의어", "단어뜻", "내용일치"];
  const defaultIndex = categories.indexOf(currentCategory);
  const [select, setSelect] = useState(defaultIndex);

  const onClickCategory = (index: number) => {
    setSelect(index);
    onCategorySelect(categories[index]);
  };

  return (
    <nav>
      <ul className="flex justify-around mx-5 rounded-[20px] bg-[#F2F2F2]">
        {categories.map((category, index) => (
          <li
            key={index}
            onClick={() => onClickCategory(index)}
            className={`${
              select === index
                ? "text-white bg-lavender rounded-[20px]"
                : ""
            } font-medium text-sm cursor-pointer w-[calc(100%/3)] py-2 text-center`}
          >
            {category}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Category;
