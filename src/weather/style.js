import styled from "styled-components";
import { weatherStateColor } from "../utils/constants";

export const Wrapper = styled.div`
  background-color: ${props => weatherStateColor[props.weatherStateName]};
`;
export const ContainerWeatherRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const WeatherDateGroup = styled.div`
  margin-left: 15px;
`;

export const WeekDayName = styled.span``;

export const MonthName = styled.span``;

export const MonthDateNumber = styled.span``;

export const WeatherInfoGroup = styled.div`
  margin-right: 15px;
  display: flex;
  align-items: center;
`;

export const WeatherTemperature = styled.div``;
