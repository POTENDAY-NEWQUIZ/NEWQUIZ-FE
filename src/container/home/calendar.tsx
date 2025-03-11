"use client";

import Image from "next/image";
import { useState } from "react";
import Calendar from "react-calendar";

import prev from "@assets/svg/month-prev.svg";
import next from "@assets/svg/month-next.svg";

type SelectDate = Date;

type CalendarProps = {
  start: string;
  end: string;
};

const MyCalendar = ({ start, end }: CalendarProps) => {
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

  const isSameDay = (date1: Date, date2: Date) => {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  };

  const insertColorToDate = ({ date }: { date: Date }) => {
    const normalizeDate = (date: Date) => {
      return new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate()
      );
    };

    if (
      normalizeDate(date) >= normalizeDate(new Date(start)) &&
      normalizeDate(date) <= normalizeDate(new Date(end))
    ) {
      return "highlight-color";
    }

    return "";
  };

  const insertImageToDate = ({ date }: { date: Date }) => {
    if (isSameDay(new Date(start), new Date(end))) {
      if (isSameDay(date, new Date(start))) {
        return "highlight-image-same";
      }
    }

    if (isSameDay(date, new Date(start))) {
      return "highlight-image-start";
    }

    if (isSameDay(date, new Date(end))) {
      return "highlight-image-end";
    }

    return "";
  };

  return (
    <>
      <div className="bg-white mx-5 p-6 rounded-[10px] shadow-light relative">
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
          tileClassName={(props) => {
            return `${insertColorToDate(props)} ${insertImageToDate(
              props
            )}`;
          }}
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
      <p className="text-xs text-[#909090] text-center my-5">
        퀴즈부터 요약까지 모두 완료한 경우 연속 학습으로 인정됩니다
      </p>
    </>
  );
};

export default MyCalendar;
