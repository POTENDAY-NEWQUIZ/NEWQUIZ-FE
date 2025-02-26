"use client";

import Image from "next/image";
import { useState } from "react";
import Calendar from "react-calendar";

import prev from "@assets/svg/month-prev.svg";
import next from "@assets/svg/month-next.svg";

// 날짜 관련 부분은 백에서 정해지면 수정 필요
type SelectDate = Date;

const MyCalendar = () => {
  const [selectDate, setSelectDate] = useState<SelectDate>(new Date());

  const onClickPrev = () => {
    setSelectDate(
      new Date(selectDate.getFullYear(), selectDate.getMonth() - 1, 1)
    );
  };

  const onClickNext = () => {
    setSelectDate(
      new Date(selectDate.getFullYear(), selectDate.getMonth() + 1, 1)
    );
  };

  return (
    <>
      <div className="bg-white mx-5 p-6 rounded-[10px] shadow-default relative">
        <Calendar
          className="custom-calendar"
          value={selectDate}
          calendarType="hebrew"
          locale="en-US"
          prevLabel={null}
          nextLabel={null}
          prev2Label={null}
          next2Label={null}
          showNeighboringMonth={false}
          formatMonthYear={(locale, date) =>
            `${date.getFullYear()}년 ${date.getMonth() + 1}월`
          }
        />
        <button
          className="flex gap-1 absolute top-7 left-8"
          onClick={onClickPrev}
        >
          <Image src={prev} width={20} height={20} alt="이전" />
        </button>
        <button
          className="flex gap-1 absolute top-7 right-8"
          onClick={onClickNext}
        >
          <Image src={next} width={20} height={20} alt="다음" />
        </button>
      </div>
      <p className="text-xs text-[#909090] text-center my-3">
        퀴즈부터 요약까지 모두 완료한 경우 연속 학습으로 인정됩니다
      </p>
    </>
  );
};

export default MyCalendar;
