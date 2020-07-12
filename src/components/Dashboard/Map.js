import React from "react";
import { VectorMap } from "react-jvectormap";

const mapData = {
  CN: 2000,
  SA: 86,
  EG: 70,
  SE: 10000,
  FI: 10000,
  FR: 10000,
  US: 2000,
  PL: 10000,
  AU: 1000,
  DE: 10000,
};

const Map = () => {
  return (
    <div>
      <div
        style={{
          textAlign: "center",
          padding: "4rem",
        }}
      >
        <p>ZdrowEat jest dostępny na całym świecie!</p>
        <p>Zobacz, skąd pochodzą nasi użytkownicy.</p>
      </div>
      <hr />
      <VectorMap
        map={"world_mill"}
        backgroundColor="transparent"
        zoomOnScroll={true}
        containerStyle={{
          width: "100%",
          height: "300px",
          marginBottom: "2rem",
        }}
        containerClassName="map"
        regionStyle={{
          initial: {
            fill: "#e4e4e4",
            "fill-opacity": 0.9,
            stroke: "none",
            "stroke-width": 0,
            "stroke-opacity": 0,
          },
          hover: {
            "fill-opacity": 0.8,
            cursor: "pointer",
          },
        }}
        regionsSelectable={false}
        series={{
          regions: [
            {
              values: mapData,
              scale: ["#A2D18D", "#3E9914"],
              normalizeFunction: "polynomial",
            },
          ],
        }}
      />
      <hr />
    </div>
  );
};
export default Map;