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
  icon: string;
  text: string;
  description?: string | ReactNode;
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
  type: "kakao" | "active" | "inactive" | "prev" | "next";
  link?: string;
  onClick?: () => void;
  className?: string;
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

export interface IGraphData {
  date: string;
  dayOfWeek: string;
  count: number;
}

export interface IGraph {
  graph?: IGraphData[];
}

/* 사용자 인터페이스 */
export interface IUserStudy {
  nickName: string;
  startDate: string;
  endDate: string;
  learningDays: number;
  maxLearningDays: number;
  totalCount: number;
  graph: {
    date: string;
    dayOfWeek: string;
    count: number;
  }[];
}

/* 랭킹 인터페이스 */
export interface IRank {
  userId: number;
  rank: number;
  nickname: string;
  score: number;
  profileImageUrl: string;
}

/* 기사 인터페이스 */
export interface ICategory {
  currentCategory: string;
  onCategorySelect: (category: string) => void;
}

export interface IFilter {
  onFilterSelect: (filter: string) => void;
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
  title: string;
  date: string;
  source: string;
  category: string;
  newsId: number;
  totalSummary: string;
  order: number;
  paragraphs: IParagraph[];
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
  onClick: () => void;
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

export interface ISynonymQuiz {
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

export interface IContentQuiz {
  type: string;
  quizId: number;
  paragraphId: 82;
  question: string;
  answer: boolean;
  explanation: string;
}

export interface IQuizAnswer {
  type: "correct" | "incorrect";
  answer?: string;
  explanation?: string;
  buttonText?: string;
  onClick: () => void;
}

/* 요약 인터페이스 */
export interface ISummaryLoading {
  onStartQuiz: () => void;
}

export interface ISummaryUser {
  paragraphId: number;
  userSummary: string;
}

export interface ISummary {
  code: number;
  data: {
    totalScore: number;
    generalFeedback: string;
    paragraphs: {
      paragraphId: number;
      aiSummary: string;
      strengths: string;
      improvements: string;
    }[];
  };
  isSuccess: boolean;
  message: string;
}

export interface ISummaryInput {
  paragraph: IParagraph;
  userSummary: string;
  isFirst: boolean;
  isLast: boolean;
  onChangeSummary: (index: number, value: string) => void;
  onClickPrev: () => void;
  onClickNext: () => void;
  onSubmit: () => void;
  loading: boolean;
}

export interface IDispleasure {
  newsId: number;
  paragraphId: number;
  content: string;
  userSummary: string;
  aiSummary: string;
  strength: string;
  improvement: string;
}

/* 오답노트 인터페이스 */
export interface IReview {
  quizResultId: number;
  category: string;
  title: string;
  date: string;
  type: string;
  isChecked: boolean;
}

export interface IReviewDetail {
  quizResultId: number;
  news: IArticle;
  synonymQuiz: ISynonymQuiz | null;
  meaningQuiz: IMeaningQuiz | null;
  contentQuiz: IContentQuiz | null;
}
