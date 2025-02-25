import { ReactNode } from "react";

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

/* 버튼 인터페이스 */
export interface IButton {
  icon?: string;
  text: string;
  type: "kakao" | "active" | "inactive";
  link: string;
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
  onClick: () => void;
}

/* 사용자 인터페이스 */

/* 기사 인터페이스 */

/* 퀴즈 인터페이스 */
export interface IQuizModal {
  text: string;
  answer?: string;
  description?: string;
  button: ReactNode;
}

/* 요약 인터페이스 */
