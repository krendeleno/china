import React, { ReactNode } from "react";

import styles from "src/components/shared/Button/Button.module.css";

export type ButtonProps = {
  onClick: () => void;
  children: ReactNode;
  classname?: string;
  type: "action" | "clear";
};

export const Button = ({ onClick, children, classname, type }: ButtonProps) => {
  return (
    <button
      className={[styles["Button"], styles[`Button_${type}`], classname].join(
        " "
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
