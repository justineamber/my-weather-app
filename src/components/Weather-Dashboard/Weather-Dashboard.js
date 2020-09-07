import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import WeatherListComponent from "../Weather-List-Component/Weather-List-Component";
import MonthDateBoxComponent from "../Month-Date-Box-Component/Month-Date-Box-Component";
import SearchComponent from "../Search-Component/Search-Component";
import CurrentCityConditionsDisplayComponent from "../Current-City-Conditions-Display-Component/Current-City-Conditions-Display-Component";
import ForecastTabsComponent from "../Forecast-Tabs-Component/Forecast-Tabs-Component";
import { Box } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  topBar: {
    // Style the top bar here...
  }
}));

function WeatherDashboard() {
  const classes = useStyles();
  const [forecastDuration, setForecastDuration] = useState("Today");

  const handleDurationChange = duration => {
    setForecastDuration(duration);
  };

  return (
    <>
      <Box className={classes.topBar}>
        <MonthDateBoxComponent day={6} month="sep" />
        <SearchComponent searchCity="" />
      </Box>

      <CurrentCityConditionsDisplayComponent
        mainTemp={12}
        weatherDescription="Cloudy"
      />

      <ForecastTabsComponent
        forecastDuration={forecastDuration}
        handleDurationChange={handleDurationChange}
      />

      <WeatherListComponent
        data={[
          { day: "Monday", iconID: "02d", mainTemp: 1 },
          { day: "Tuesday", iconID: "02d", mainTemp: 2 },
          { day: "Wednesday", iconID: "02d", mainTemp: 3 },
          { day: "Thursday", iconID: "02d", mainTemp: 4 },
          { day: "Friday", iconID: "02d", mainTemp: 5 }
        ]}
      />
    </>
  );
}
export default WeatherDashboard;
