import React from "react";
import styles from "./Modal.module.scss";
import { IoCloseSharp } from "react-icons/io5";
interface props {
  children: string | JSX.Element;
  onCloseModal: any;
}

const Modal: React.FC<props> = ({ children, onCloseModal }) => {
  return (
    <>
      {" "}
      <div
        className={styles.backdrop}
        onClick={() => {
          onCloseModal();
        }}
      >
        <div className={styles.modal}>{children}</div>
        <div
          className={styles.closeModal}
          onClick={() => {
            onCloseModal();
          }}
        >
          <IoCloseSharp size={30} />
        </div>
      </div>
    </>
  );
};

export default Modal;
