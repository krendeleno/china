import React, { useEffect, useState } from "react";
import { pushRotate as Menu } from "react-burger-menu";
import { Review } from "src/components/SideBar/components/Review/Review";

import styles from "src/components/SideBar/SideBar.module.css";
import { Button } from "src/components/shared/Button";
import { Modal } from "src/components/SideBar/components/Modal";
import { backAPI, dislikePoint, getPointById, likePoint } from "src/api";
import { PointInfo } from "src/global/types";
import { ImageSlider } from "src/components/SideBar/components/ImageSlider";
import { Like, Dislike } from "src/assets";
import { AnimatePresence } from "framer-motion";
import { TailSpin } from "react-loader-spinner";

export const SideBar = ({ stateChangeHandler, isOpen, currentPoint }: any) => {
  const [info, setInfo] = useState<PointInfo>();

  useEffect(async () => {
    setInfo(null);
    const res = await getPointById(currentPoint.id);
    setInfo(res);
  }, [currentPoint]);

  const [isVisible, setVisible] = useState(false);

  const like = async () => {
    await likePoint(currentPoint.id);
    const res = await getPointById(currentPoint.id);
    setInfo(res);
  };

  const dislike = async () => {
    await dislikePoint(currentPoint.id);
    const res = await getPointById(currentPoint.id);
    setInfo(res);
  };

  return (
    <Menu
      customBurgerIcon={false}
      pageWrapId={"page-wrap"}
      outerContainerId={"outer-container"}
      isOpen={isOpen}
      onStateChange={stateChangeHandler}
      width={550}
    >
      {!info && (
        <TailSpin
          color="#00BFFF"
          height={80}
          width={80}
        />
      )}
      {info && (
        <>
          <div
            className={styles["SideBar-Cover"]}
            style={{
              backgroundImage: `url(${backAPI}/${info.main_photo[0].url})`,
            }}
          >
            <span className={styles["SideBar-Name"]}>{currentPoint.name}</span>
            <div className={styles["SideBar-Controls"]}>
              <span className={styles["SideBar-Rating"]}>{info.rating}</span>
              <Like onClick={like} className={styles["SideBar-Icon"]} />
              <Dislike onClick={dislike} className={styles["SideBar-Icon"]} />
            </div>
          </div>
          <div className={styles["SideBar-Content"]}>
            <span className={styles["SideBar-Description"]}>
              {info.description}
            </span>
            {info.photos && info.photos.length > 0 && (
              <ImageSlider photos={info.photos} />
            )}

            <div className={styles["SideBar-ReviewsBlock"]}>
              <div className={styles["SideBar-ReviewsBlockTitle"]}>
                <span className={styles["SideBar-ReviewsTitle"]}>Отзывы</span>
                <Button type="action" onClick={() => setVisible(true)}>
                  <span className={styles["SideBar-ButtonText"]}>
                    Написать отзыв
                  </span>
                </Button>
              </div>
              {info.comments.map(({ id, author, text }) => (
                <Review key={id} id={id} author={author} text={text} />
              ))}
              {info.comments.length === 0 && (
                <span className={styles["SideBar-Empty"]}>
                  Пока что тут нет отзывов(
                </span>
              )}
            </div>
          </div>
        </>
      )}
      <AnimatePresence>
        {isVisible && (
          <Modal
            hideModal={() => setVisible(false)}
            currentPoint={currentPoint}
            setInfo={setInfo}
          />
        )}
      </AnimatePresence>
    </Menu>
  );
};
