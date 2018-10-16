import React, { Component } from "react";
import Tabs from "./tabs/Tabs";
import WeatherList from "./weather/WeatherList";
import { getWeather } from "./utils/api";
import { tabs } from "./utils/constants";

class App extends Component {
  state = {
    weatherList: [],
    isFetching: false,
    error: null
  };
  async componentDidMount() {
    this.setState({ isFetching: true });
    const { weatherList, isFetching, error } = await getWeather();
    this.setState({ weatherList, isFetching, error });
  }
  render() {
    const { weatherList, error, isFetching } = this.state;
    if (error !== null) {
      return <div>{error.text}</div>;
    }
    if (isFetching) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <Tabs tabs={tabs} />
        <WeatherList weatherList={weatherList} />
      </div>
    );
  }
}

export default App;
