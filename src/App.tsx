import React, { useEffect, useState } from "react";
import ReactTooltip from "react-tooltip";

import { GeoMap } from "src/components/GeoMap";
import { SideBar } from "src/components/SideBar";
import { Categories } from "src/components/Categories";

import "./App.css";
import { getCategories, getPointById } from "src/api";

const App = () => {
  const [isOpen, setOpen] = useState(false);
  const [currentPoint, setCurrentPoint] = useState({});
  const [currentCategory, setCategory] = useState(-1);
  const stateChangeHandler = (newState) => setOpen(newState.isOpen);

  return (
    <div id="outer-container">
      <SideBar
        isOpen={isOpen}
        stateChangeHandler={stateChangeHandler}
        currentPoint={currentPoint}
      />
      <div id="page-wrap">
        <Categories
          setCategory={setCategory}
          currentCategory={currentCategory}
        />
        <GeoMap
          setOpen={setOpen}
          setCurrentPoint={setCurrentPoint}
          currentCategory={currentCategory}
        />
        <ReactTooltip
          effect="solid"
          bodyMode
          className="Tooltip"
          backgroundColor="rgba(0,0,0,0.7)"
          border={false}
          clickable={true}
        />
      </div>
    </div>
  );
};

export default App;
