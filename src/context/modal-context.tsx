"use client";

import { createContext, ReactNode, useState } from "react";

type ModalType =
  | "answer-modal"
  | "back-modal"
  | "hint-modal"
  | "logout-modal"
  | "withdraw-modal";

interface IModalContext {
  activeModal: ModalType | null;
  openModal: (modalType: ModalType) => void;
  closeModal: (modalType: ModalType) => void;
}

const ModalContext = createContext<IModalContext>({
  activeModal: null,
  openModal: () => {},
  closeModal: () => {},
});

const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [activeModal, setActiveModal] = useState<ModalType | null>(
    null
  );

  const openModal = (modalType: ModalType) => {
    setActiveModal(modalType);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <ModalContext.Provider
      value={{ activeModal, openModal, closeModal }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export { ModalContext, ModalProvider };
