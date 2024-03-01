"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

type ModalContextType = {
  setModalContent: Dispatch<SetStateAction<ReactNode | undefined>>;
  handleCloseModal: () => void;
};

const ModalContext = createContext<ModalContextType>({
  setModalContent: () => {
    console.error("No modal context provided");
  },
  handleCloseModal: () => {},
});

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [modalContent, setModalContent] = useState<ReactNode>();

  const handleCloseModal = () => {
    setModalContent(undefined);
  };

  return (
    <ModalContext.Provider value={{ setModalContent, handleCloseModal }}>
      {modalContent && (
        <div
          className="fixed inset-0 z-50 flex h-screen w-screen items-center justify-center bg-black bg-opacity-70"
          onClick={handleCloseModal}
        >
          <div onClick={(e) => e.stopPropagation()}>{modalContent}</div>
        </div>
      )}
      {children}
    </ModalContext.Provider>
  );
};

const useModal = () => useContext(ModalContext);
export default useModal;
