export const getDayName = dayNumber => {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  return daysOfWeek[dayNumber];
};
export const getMonthName = monthNumber => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  return months[monthNumber];
};

export const temperatureFormat = temperature =>
  temperature < 0
    ? Math.floor(temperature)
    : `${Math.floor(temperature)}\u00B0`;
