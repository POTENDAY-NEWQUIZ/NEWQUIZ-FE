import { ReactNode } from "react";

/* 공통 인터페이스 */
export interface IHeader {
  title: string;
  leftChild?: ReactNode;
  rightChild?: ReactNode;
}

export interface INavItem {
  icon: string; // 아이콘으로 변경되어야 함
  text: string;
}

/* 버튼 인터페이스 */
export interface IButton {
  text: string;
  type?: string;
  onClick: () => void;
}

export interface IEventButton {
  text: string; // 아이콘으로 변경되어야 함
  onClick: () => void;
}

/* 사용자 인터페이스 */

/* 기사 인터페이스 */

/* 퀴즈 인터페이스 */

/* 요약 인터페이스 */
