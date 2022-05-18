import React from "react";
import { pushRotate as Menu } from 'react-burger-menu'

const SideBar = ({stateChangeHandler, isOpen, currentPoint}) => {
    return (
        <Menu customBurgerIcon={false}
              pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } noOverlay isOpen={ isOpen }
              onStateChange={stateChangeHandler}>
            <span>Текущая точка</span>
            {currentPoint && <span>{currentPoint.name}</span>}
        </Menu>
    )
}

export default SideBar;