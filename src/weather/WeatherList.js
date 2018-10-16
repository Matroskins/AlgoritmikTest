// @flow

import React from "react";
import WeatherRow from "./WeatherRow";
const WeatherList = ({ weatherList }) => (
  <div>
    {weatherList.map(weather => (
      <WeatherRow key={weather.id} weather={weather} />
    ))}
  </div>
);

export default WeatherList;
