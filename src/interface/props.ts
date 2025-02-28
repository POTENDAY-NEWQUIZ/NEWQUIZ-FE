import { MouseEventHandler, ReactNode } from "react";

/* 공통 인터페이스 */
export interface IHeader {
  title?: string;
  leftChild?: ReactNode;
  rightChild?: ReactNode;
}

export interface INavItem {
  icon: string;
  activeIcon: string;
  text: string;
  link: string;
}

export interface IModal {
  icon: string; // 아이콘으로 변경되어야 함
  text: string;
  description?: string;
  leftChild?: ReactNode;
  centerChild?: ReactNode;
  rightChild?: ReactNode;
}

export interface ILottie {
  image: any;
}

/* 버튼 인터페이스 */
export interface IButton {
  icon?: string;
  text: string;
  type: "kakao" | "start" | "active" | "inactive" | "next";
  link?: string;
  onClick?: () => void;
}

export interface IEventButton {
  icon: string;
  command: string;
}

export interface ISmallButton {
  text: string;
  type: "inactive" | "active" | "negative" | "positive";
  link?: string;
  onClick?: () => void;
}

export interface ICheckButton {
  text: string;
  type: "uncheck" | "check";
  onClick: MouseEventHandler;
}

/* 홈 인터페이스 */
export interface IStudyDuration {
  icon: string;
  duration: number;
  text: string;
}

/* 사용자 인터페이스 */

/* 기사 인터페이스 */
export interface ICategory {
  onCategorySelect: (category: string) => void;
}

export interface IArticleItemList {
  articles: IArticleItem[];
}

export interface IArticleItem {
  id: number;
  newsId: number;
  title: string;
  date: string;
  source: string;
}

export interface IArticle {
  category: string;
  date: string;
  newsId: number;
  paragraphs: IParagraph[];
  source: string;
  title: string;
}

export interface IParagraph {
  paragraphId: number;
  order: number;
  content: string;
}

/* 퀴즈 인터페이스 */
export interface IQuizModal {
  text: string;
  answer?: string;
  description?: string;
  button: ReactNode;
}

export interface IProgressiveBar {
  total: number;
  current: number;
}

export interface IQuizSelect {
  text: string;
  type: "click" | "unclick";
  onClick: () => void;
}

export interface IOXSelect {
  text: boolean;
  iconSelect: string;
  iconUnselect: string;
  isActive: boolean;
  onSelect: () => void;
}

export interface IQuiz {
  contentQuiz: [];
  contentQuizCount: number;
  meaningQuiz: [];
  meaningQuizCount: number;
  synonymQuiz: [];
  synonymQuizCount: number;
  quizIdList: number[];
  totalQuizCount: number;
}

export interface IContentQuiz {
  type: string;
  quizId: number;
  paragraphId: 82;
  sourceSentence: string;
  word: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  answer: number;
  explanation: string;
}

export interface IMeaningQuiz {
  type: string;
  quizId: number;
  paragraphId: 82;
  sourceSentence: string;
  word: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  answer: number;
  explanation: string;
}

export interface ISynonymQuiz {
  type: string;
  quizId: number;
  paragraphId: 82;
  question: string;
  answer: number;
  explanation: string;
}

export interface IQuizAnswer {
  type: "correct" | "incorrect";
  answer?: string;
  explanation?: string;
  onClick: () => void;
}

export interface ISummaryLoading {
  onStartQuiz: () => void;
}

/* 요약 인터페이스 */
