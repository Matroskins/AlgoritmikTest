import React from "react";
import ReactSVG from "react-svg";
import svgTest from "../assets/c.svg";

const iconsNames = {
  Snow: "sn",
  Sleet: "sl",
  Hail: "h",
  Thunderstorm: "t",
  "Heavy Rain": "hr",
  "Light Rain": "lr",
  Showers: "s",
  "Heavy Cloud": "hc",
  "Light Cloud": "lc",
  Clear: "c"
};
export const WeatherIcon = ({ svgName, style }) => (
  <img
    src={require(`../assets/${iconsNames[svgName]}.svg`)}
    alt="weather pic"
    style={style}
  />
);

export default WeatherIcon;
