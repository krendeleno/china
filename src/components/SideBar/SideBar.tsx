import React, { useState } from "react";
import { pushRotate as Menu } from "react-burger-menu";
import { Review } from "src/components/SideBar/components/Review/Review";

import styles from "src/components/SideBar/SideBar.module.css";
import { Button } from "src/components/shared/Button";
import { Modal } from "src/components/SideBar/components/Modal";

export const SideBar = ({ stateChangeHandler, isOpen, currentPoint }: any) => {
  const point = {
    id: 1,
    name: "Тест",
    description:
      "Тестовая точка Тестовая точка Тестовая точка Тестовая точка Тестовая точка Тестовая точка ",
    reviews: [],
  };

  const images = [];

  const [isVisible, setVisible] = useState(false);

  return (
    <Menu
      customBurgerIcon={false}
      pageWrapId={"page-wrap"}
      outerContainerId={"outer-container"}
      isOpen={isOpen}
      onStateChange={stateChangeHandler}
      width={550}
    >
      <div
        className={styles["SideBar-Cover"]}
        style={{
          backgroundImage:
            "url(https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300)",
        }}
      >
        {currentPoint && (
          <span className={styles["SideBar-Name"]}>{currentPoint.name}</span>
        )}
      </div>
      <div className={styles["SideBar-Content"]}>
        {point && (
          <span className={styles["SideBar-Description"]}>
            {point.description}
          </span>
        )}
        {images && images.length > 0 && (
          <div className={styles["SideBar-Gallery"]}></div>
        )}

        {point && (
          <div className={styles["SideBar-ReviewsBlock"]}>
            <div className={styles["SideBar-ReviewsBlockTitle"]}>
              <span className={styles["SideBar-ReviewsTitle"]}>Отзывы</span>
              <Button type="action" onClick={() => setVisible(true)}>
                <span className={styles["SideBar-ButtonText"]}>
                  Написать отзыв
                </span>
              </Button>
            </div>
            {point.reviews.map(({ id, author, text }) => (
              <Review key={id} id={id} author={author} text={text} />
            ))}
            {point.reviews.length === 0 && (
              <span className={styles["SideBar-Empty"]}>
                Пока что тут нет отзывов(
              </span>
            )}
          </div>
        )}
      </div>
      {isVisible && <Modal hideModal={() => setVisible(false)} />}
    </Menu>
  );
};
