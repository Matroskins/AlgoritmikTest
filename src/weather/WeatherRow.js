import React from "react";
import {
  ContainerWeatherRow as Container,
  WeatherDateGroup,
  Wrapper,
  MonthDateNumber,
  MonthName,
  WeekDayName,
  WeatherInfoGroup,
  WeatherTemperature
} from "./style";
import { WeatherIcon } from "../utils/WeatherIcon";
import { getDayName, getMonthName, temperatureFormat } from "../utils/utils";

const WeatherRow = ({ weather }) => {
  const { weather_state_name, max_temp, min_temp, applicable_date } = weather;
  const temperatureString = `${temperatureFormat(max_temp)}/${temperatureFormat(
    min_temp
  )}`;
  const weatherDate = new Date(applicable_date);
  return (
    <Wrapper weatherStateName={weather_state_name}>
      <Container>
        <WeatherDateGroup>
          <div>
            <WeekDayName>{getDayName(weatherDate.getDay())}</WeekDayName>
          </div>
          <div>
            <MonthDateNumber>{weatherDate.getDate()}</MonthDateNumber>
            <MonthName>{getMonthName(weatherDate.getMonth())}</MonthName>
          </div>
        </WeatherDateGroup>
        <WeatherInfoGroup>
          <WeatherTemperature>
            <span>{temperatureString}</span>
          </WeatherTemperature>
          <WeatherIcon
            svgName={weather_state_name}
            style={{ width: 50, height: 50 }}
          />
        </WeatherInfoGroup>
      </Container>
    </Wrapper>
  );
};

export default WeatherRow;
