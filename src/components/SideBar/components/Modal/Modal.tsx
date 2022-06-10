import React, { useState } from "react";
import { createPortal } from "react-dom";
import TextareaAutosize from "react-textarea-autosize";

import { Button } from "src/components/shared/Button";

import styles from "src/components/SideBar/components/Modal/Modal.module.css";
import { getPointById, reviewPoint } from "src/api";

export const Modal = ({ hideModal, currentPoint, setInfo }: any) => {
  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");

  const sendReview = async () => {
    await reviewPoint(currentPoint.id, { author, text });
    const res = await getPointById(currentPoint.id);
    setInfo(res);
    hideModal();
  };

  return createPortal(
    <div className={styles["Modal"]} onClick={hideModal}>
      <div
        className={styles["Modal-Form"]}
        onClick={(e) => e.stopPropagation()}
      >
        <input
          type="text"
          value={author}
          placeholder="Ваше имя"
          onChange={(event) => setAuthor(event.target.value)}
          className={styles["Modal-Input"]}
        />
        <TextareaAutosize
          value={text}
          placeholder="Текст отзыва"
          onChange={(event) => setText(event.target.value)}
          minRows={6}
          maxRows={10}
          className={styles["Modal-Textarea"]}
        />
        <div className={styles["Modal-Actions"]}>
          <Button type="clear" onClick={hideModal}>
            <span>Отмена</span>
          </Button>
          <Button type="action" onClick={sendReview}>
            <span>Отправить</span>
          </Button>
        </div>
      </div>
    </div>,
    document.getElementsByClassName("bm-overlay")[0] ||
      document.getElementById("root")!
  );
};
