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

export const WeekDayName = styled.span`
  font-size: 28px;
`;

export const MonthName = styled.span`
  margin-left: 5px;
`;

export const MonthDateNumber = styled.span`
  margin-left: 5px;
`;

export const WeatherInfoGroup = styled.div`
  margin-right: 15px;
  display: flex;
  align-items: center;
`;

export const WeatherTemperature = styled.div`
  margin-right: 5px;
`;
