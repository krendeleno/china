import React from "react";
import { pushRotate as Menu } from 'react-burger-menu'
import {Review} from "src/components/SideBar/components/Review/Review";

import styles from "src/components/SideBar/SideBar.module.css"

export const SideBar = ({stateChangeHandler, isOpen, currentPoint}: any) => {
    const point = {
        id: 1,
        name: 'Тест',
        description: 'Тестовая точка Тестовая точка Тестовая точка Тестовая точка Тестовая точка Тестовая точка ',
        reviews: [
            {
                id: 1,
                author: "krendeleno",
                text: "Отличный стереотип!"
            },
            {
                id: 2,
                author: "konnovk",
                text: "Отличный стереотип!"
            }
        ]
    }

    return (
        <Menu customBurgerIcon={false}
              pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } isOpen={ isOpen }
              onStateChange={stateChangeHandler}
        >
                {currentPoint && <span className={styles['SideBar-Name']}>{currentPoint.name}</span>}
                {point && <span className={styles['SideBar-Description']}>{point.description}</span>}
                {point && Boolean(point.reviews.length) && <div className={styles['SideBar-ReviewsBlock']}>
                    {point.reviews.map(({id, author, text}) =>
                        <Review key={id} id={id} author={author} text={text}/>
                    )}
                </div>}
        </Menu>
    )
}