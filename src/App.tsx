import React from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
  Marker,
  Annotation
} from "react-simple-maps";
import {geoMercator} from "d3-geo"

import './App.css';
const geoUrl = "https://raw.githubusercontent.com/longwosion/geojson-map-china/master/china.json"
const projection = (width: number, height: number) => geoMercator()
    .center([107, 31])
    .scale(400)
    .translate([width/2, height/2]);


const App = () => {
  return ( <ComposableMap projection={projection(850, 500)}>
      <ZoomableGroup zoom={1}>
        <Geographies geography={geoUrl} >
          {({ geographies }) => (
              geographies.map(geo => (
                  <Geography
                      key={geo.rsmKey}
                      stroke="#FFF"
                      geography={geo}
                      fill="#DDD"
                  />
                ))
              )}
        </Geographies>
      </ZoomableGroup>
      </ComposableMap>
  );
}

export default App;
