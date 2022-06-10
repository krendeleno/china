import React from "react";

import styles from "src/components/shared/Tooltip/Tooltip.module.css";
import { colors } from "src/global/colors";

export const Tooltip = ({ name, categoryTitle, color }: any) => {
  return (
    <>
      <span className={styles["Tooltip-Name"]}>{name}</span>
      <span
        className={styles["Tooltip-Category"]}
        style={{ color: colors[color] }}
      >
        {categoryTitle}
      </span>
    </>
  );
};
