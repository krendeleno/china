import React, { memo, useEffect, useState } from "react";

import styles from "src/components/Categories/Categories.module.css";
import { getCategories } from "src/api";
import { colors } from "src/global/colors";
import { Category } from "src/global/types";

const all: Category = { title: "Все", id: -1, color: "black" };

export const Categories = ({ setCategory, currentCategory }: any) => {
  const [categories, setCategories] = useState<Category[]>([all]);

  useEffect(async () => {
    const res = await getCategories();
    console.log(res);
    setCategories([...res, all]);
  }, []);

  return (
    <div className={styles["Categories-Container"]}>
      {categories.map(({ title, id, color }) => (
        <div
          style={
            currentCategory === id ? { backgroundColor: colors[color] } : {}
          }
          onClick={() => setCategory(id)}
          key={id}
          className={
            currentCategory === id
              ? [
                  styles["Categories-Current"],
                  styles["Categories-Category"],
                ].join(" ")
              : styles["Categories-Category"]
          }
        >
          <span>{title}</span>
        </div>
      ))}
    </div>
  );
};
