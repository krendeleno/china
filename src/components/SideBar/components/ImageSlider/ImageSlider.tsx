import React, { useState } from "react";

import { Button } from "src/components/shared/Button";

import styles from "src/components/SideBar/components/ImageSlider/ImageSlider.module.css";
import { Photo } from "src/global/types";
import { backAPI } from "src/api";

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
};

export const ImageSlider = ({ photos }: { photos: Photo[] }) => {
  return (
    <div className={styles["ImageSlider"]}>
      {photos.map(({ url, id }) => (
        <div
          key={id}
          className={styles["ImageSlider-Photo"]}
          style={{ backgroundImage: `url(${backAPI}/${url})` }}
        />
      ))}
    </div>
  );
};
