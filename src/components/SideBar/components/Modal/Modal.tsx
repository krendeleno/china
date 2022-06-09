import React, { useState } from "react";
import { createPortal } from "react-dom";
import TextareaAutosize from "react-textarea-autosize";

import { Button } from "src/components/shared/Button";

import styles from "src/components/SideBar/components/Modal/Modal.module.css";

export const Modal = ({ hideModal }: any) => {
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  return createPortal(
    <div className={styles["Modal"]} onClick={hideModal}>
      <div
        className={styles["Modal-Form"]}
        onClick={(e) => e.stopPropagation()}
      >
        <input
          type="text"
          value={name}
          placeholder="Ваше имя"
          onChange={(event) => setName(event.target.value)}
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
          <Button type="action" onClick={() => console.log("f")}>
            <span>Отправить</span>
          </Button>
        </div>
      </div>
    </div>,
    document.getElementsByClassName("bm-overlay")[0] ||
      document.getElementById("root")!
  );
};
