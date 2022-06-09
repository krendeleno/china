import React from "react";

import styles from "src/components/SideBar/components/Review/Review.module.css";

export const Review = ({ id, author, text }: any) => {
  return (
    <div className={styles["Review"]}>
      <span>{text}</span>
      <span className={styles["Review-Author"]}>{author}</span>
    </div>
  );
};
