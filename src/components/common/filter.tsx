import { useState } from "react";

import { IFilter } from "@interface/props";

const Filter = ({ onFilterSelect }: IFilter) => {
  const [select, setSelect] = useState(0);
  const filters = ["전체", "상", "하"];

  const onClickFilter = (index: number) => {
    setSelect(index);
    onFilterSelect(filters[index]);
  };

  return (
    <section className="my-3 mx-4">
      <ul className="flex gap-2">
        {filters.map((filter, index) => (
          <li
            key={index}
            onClick={() => onClickFilter(index)}
            className={`${
              select === index
                ? "bg-lavender text-white"
                : "border-[1px] border-[#D8D8D8] text-[#797979]"
            } font-medium text-[13px] w-20 h-8 flex justify-center items-center rounded-2xl cursor-pointer`}
          >
            {filter === "상"
              ? "어려움"
              : filter === "하"
              ? "쉬움"
              : filter}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Filter;
