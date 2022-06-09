import React, { useState } from "react";
import ReactTooltip from "react-tooltip";

import { GeoMap } from "src/components/GeoMap";
import { SideBar } from "src/components/SideBar";
import { Categories } from "src/components/Categories";

import "./App.css";

const App = () => {
  const [isOpen, setOpen] = useState(false);
  const [currentPoint, setCurrentPoint] = useState({ name: "" });
  const [currentCategory, setCategory] = useState(4);
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
          backgroundColor="rgba(0,0,0,0.45)"
          border={false}
          clickable={true}
        />
      </div>
    </div>
  );
};

export default App;
