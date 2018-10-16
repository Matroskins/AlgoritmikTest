import { woeid } from "./constants";

const getSevenWeekDay = () => {
  const date = new Date();
  date.setDate(date.getDate() + 6);
  return date
    .toISOString()
    .split("T")[0]
    .split("-")
    .join("/");
};
const sixDaysWeather = async () => {
  try {
    const url = `location/${woeid}/`;
    const response = await fetch(url);
    const { consolidated_weather } = await response.json();
    return {
      weatherList: consolidated_weather,
      error: null
    };
  } catch (error) {
    return { weatherList: [], error };
  }
};

const sevenDayWeather = async () => {
  try {
    const url = `location/${woeid}/${getSevenWeekDay()}/`;
    const response = await fetch(url);
    const sevenDayWeather = await response.json();
    return { weatherDate: sevenDayWeather[0], error: null };
  } catch (error) {
    return { weatherDate: [], error };
  }
};

export const getWeather = async () => {
  const sixDays = await sixDaysWeather();
  const sevenDay = await sevenDayWeather();
  const error = sixDays.error || sevenDay.error || null;
  return {
    weatherList: [...sixDays.weatherList, sevenDay.weatherDate],
    isFetching: false,
    error
  };
};
