import React from "react";

import styles from "src/components/shared/Tooltip/Tooltip.module.css";

export const Tooltip = ({ name, category }: any) => {
  return (
    <>
      <span className={styles["Tooltip-Name"]}>{name}</span>
      <span className={styles["Tooltip-Category"]}>{category}</span>
    </>
  );
};
