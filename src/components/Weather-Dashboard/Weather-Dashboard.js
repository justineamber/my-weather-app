import React, { useState, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import WeatherListComponent from "../Weather-List-Component/Weather-List-Component";
import MonthDateBoxComponent from "../Month-Date-Box-Component/Month-Date-Box-Component";
import SearchComponent from "../Search-Component/Search-Component";
import CurrentCityConditionsDisplayComponent from "../Current-City-Conditions-Display-Component/Current-City-Conditions-Display-Component";
import ForecastTabsComponent from "../Forecast-Tabs-Component/Forecast-Tabs-Component";
import { Box } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  topBar: {
    display: "flex",
    position: "relative"
  }
}));

function WeatherDashboard(props) {
  const classes = useStyles();
  const [forecastDuration, setForecastDuration] = useState("Today");
  const [dailyData, setDailyData] = useState([]);
  const [weeklyData, setWeeklyData] = useState([]);

  const handleDurationChange = duration => {
    setForecastDuration(duration);
  };

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?id=${6453366}&units=metric&appid=${process.env.REACT_APP_API_KEY}`)  
   .then(response => response.json())
      .then(response => {
       
        const firstFive = response.list.slice(0, 5).map(listItem => {
          return {
            title: listItem.dt_txt,
            iconID: listItem.weather[0].icon,
            mainTemp: listItem.main.temp,
            weatherDescription: listItem.weather[0].description
          };
        });
        setDailyData(firstFive);

        const firstFiveDays = response.list.filter(listItem => listItem.dt_txt.includes("18:00:00")).map(listItem => {
          return {
            title: listItem.dt_txt,
            iconID: listItem.weather[0].icon,
            mainTemp: listItem.main.temp,
            weatherDescription: listItem.weather[0].description
          };
        });
        setWeeklyData(firstFiveDays);
        console.log(firstFiveDays);
      });
  }, []);

  const day = new Date();
  const dayOptions = {day: "numeric" }

  const month = new Date();
  const monthOptions = {month: "short"}

  return (
    <>
      <Box className={classes.topBar}>
        <MonthDateBoxComponent day={day.toLocaleDateString(undefined,dayOptions)} month={month.toLocaleDateString(undefined,monthOptions)} />
        <SearchComponent searchCity="" />
      </Box>
      {dailyData.slice(0,1).map(currentTempAndWeatherDescription => (
      <CurrentCityConditionsDisplayComponent
       key={currentTempAndWeatherDescription.mainTemp}
        mainTemp={currentTempAndWeatherDescription.mainTemp}
        weatherDescription={currentTempAndWeatherDescription.weatherDescription}
      />
       ))}
      <ForecastTabsComponent
        forecastDuration={forecastDuration}
        handleDurationChange={handleDurationChange}
      />
      <WeatherListComponent
        data={forecastDuration === "Today" ? dailyData : weeklyData}
      
      />
    </>
  );
}

export default WeatherDashboard;
