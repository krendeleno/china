import React, { memo, useEffect, useState } from "react";
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
import { getPoints } from "src/api";
import { colors } from "src/global/colors";
import { Point } from "src/global/types";
import { motion, AnimatePresence } from "framer-motion";

export const GeoMap = memo(
  ({ setOpen, setCurrentPoint, currentCategory }: any) => {
    const [isActive, setActive] = useState("");
    const [markers, setMarkers] = useState<Point[]>([]);

    useEffect(async () => {
      const res = await getPoints();
      console.log(res);
      setMarkers(res);
    }, []);

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
              currentCategory !== -1 ? category.id === currentCategory : true
            )
            .map(({ name, coordinates, offset, category, id }) => (
              <AnimatePresence>
                <Marker
                  key={name}
                  coordinates={[...coordinates].reverse()}
                  onClick={() => {
                    setOpen(true);
                    setCurrentPoint({ name, id });
                  }}
                  onMouseLeave={() => setActive("")}
                  onMouseEnter={() => setActive(name)}
                >
                  <AnimatePresence>
                    {isActive === name && (
                      <motion.circle
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        r={12}
                        fillOpacity="37%"
                        fill={colors[category.color]}
                      />
                    )}
                  </AnimatePresence>
                  <motion.circle
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    r={5}
                    fill={colors[category.color]}
                    stroke="#fff"
                    data-tip={ReactDOMServer.renderToString(
                      <Tooltip
                        name={name}
                        categoryTitle={category.title}
                        color={category.color}
                      />
                    )}
                    strokeWidth="1px"
                    style={{ cursor: "pointer" }}
                    data-html={true}
                  />
                </Marker>
              </AnimatePresence>
            ))}
          ;
        </ZoomableGroup>
      </ComposableMap>
    );
  }
);
