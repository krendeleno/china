import React, {memo} from "react";
import {
    ComposableMap,
    Geographies,
    Geography,
    ZoomableGroup,
    Marker,
    Annotation
} from "react-simple-maps";
import {geoMercator} from "d3-geo"

const geoUrl = "https://raw.githubusercontent.com/longwosion/geojson-map-china/master/china.json"
const markers = [
    { name: "Тест", coordinates: [32.436624, 113.790093], offset: -10 }
]
const projection = (width: number, height: number) => geoMercator()
    .center([107, 31])
    .scale(400)
    .translate([width/2, height/2]);

const GeoMap = memo(({setOpen, setCurrentPoint}) => {
    return (
        <ComposableMap projection={projection(850, 500)}>
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
                {markers.map(({ name, coordinates, offset }) => (
                    <Marker key={name} coordinates={[...coordinates].reverse()}
                            onClick={() => {
                                setOpen(true);
                                setCurrentPoint({name})
                            }}
                            onMouseLeave={() => {

                            }}
                    >
                        <circle r={5} fill="#F00" stroke="#fff" data-tip={name}/>
                    </Marker>
                ))};
            </ZoomableGroup>
        </ComposableMap>
    )
})

export default GeoMap;