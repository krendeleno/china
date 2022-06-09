import React, { memo, useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
  Marker,
} from "react-simple-maps";
import { ChinaData } from "china-map-geojson";
import ReactDOMServer from "react-dom/server";
import { Tooltip } from "src/components/shared/Tooltip";

const markers = [
  {
    name: "Тест",
    coordinates: [32.436624, 113.790093],
    offset: -10,
    category: 1,
  },
  {
    name: "Тест 1",
    coordinates: [35.70076987466967, 93.86151077192345],
    offset: -10,
    category: 1,
  },
  {
    name: "Тест 2",
    coordinates: [25.35267852769176, 110.34100172677681],
    offset: -10,
    category: 2,
  },
  {
    name: "Тест 3",
    coordinates: [39.62121301077225, 111.92303285844274],
    offset: -10,
    category: 2,
  },
  {
    name: "Тест 4",
    coordinates: [36.437497076669096, 93.29022175215516],
    offset: -10,
    category: 1,
  },
  {
    name: "Тест 5",
    coordinates: [40.160692431513624, 103.83709596326133],
    offset: -10,
    category: 3,
  },
  {
    name: "Тест 6",
    coordinates: [24.024734624188653, 105.77068956863079],
    offset: -10,
    category: 3,
  },
];

export const GeoMap = memo(
  ({ setOpen, setCurrentPoint, currentCategory }: any) => {
    const [isActive, setActive] = useState("");

    return (
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{ center: [107, 25], scale: 400 }}
      >
        <ZoomableGroup zoom={1}>
          <Geographies geography={ChinaData}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  stroke="#FFF"
                  geography={geo}
                  fill="#DDD"
                />
              ))
            }
          </Geographies>
          {markers
            .filter(({ category }) =>
              currentCategory !== 4 ? category === currentCategory : true
            )
            .map(({ name, coordinates, offset }) => (
              <Marker
                key={name}
                coordinates={[...coordinates].reverse()}
                onClick={() => {
                  setOpen(true);
                  setCurrentPoint({ name });
                }}
                onMouseLeave={() => setActive("")}
                onMouseEnter={() => setActive(name)}
              >
                {isActive === name && (
                  <circle r={12} fill-opacity="37%" fill="#FFD542" />
                )}
                <circle
                  r={5}
                  fill="#FFD542"
                  stroke="#fff"
                  data-tip={ReactDOMServer.renderToString(
                    <Tooltip name={name} category={currentCategory} />
                  )}
                  stroke-width="1px"
                  style={{ cursor: "pointer" }}
                  data-html={true}
                />
              </Marker>
            ))}
          ;
        </ZoomableGroup>
      </ComposableMap>
    );
  }
);
