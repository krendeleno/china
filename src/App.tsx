import React, {useState} from 'react';

import ReactTooltip from "react-tooltip";

import './App.css';
import GeoMap from "src/components/GeoMap/GeoMap";
import SideBar from "src/components/SideBar/SideBar";

const App = () => {
    const [isOpen, setOpen] = useState(false);
    const [currentPoint, setCurrentPoint] = useState({name: ""})
    const stateChangeHandler = (newState) => setOpen(newState.isOpen)
  return (
      <div id="outer-container">
         <SideBar isOpen={isOpen} stateChangeHandler={stateChangeHandler} currentPoint={currentPoint}/>
          <div id="page-wrap">
              <GeoMap setOpen={setOpen} setCurrentPoint={setCurrentPoint}/>
              <ReactTooltip effect="solid" />
          </div>

      </div>
  );
}

export default App;
