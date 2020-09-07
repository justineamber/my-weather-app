import React from "react";
import { Box, makeStyles } from "@material-ui/core";
import WeatherSingleComponent from "../Weather-Single-Component/Weather-Single-Component";

const useStyles = makeStyles(() => ({
  weatherList: {
    backgroundColor: "#fff",
    display: "flex",
    justifyContent: "space-around",
    padding: "4rem 0"
  }
}));

function WeatherListComponent(props) {
  const classes = useStyles();
  const { data } = props;

  return (
    <Box className={classes.weatherList}>
      {data.map(forecast => (
        <WeatherSingleComponent
          day={forecast.day}
          iconID={forecast.iconID}
          mainTemp={forecast.mainTemp}
        />
      ))}
    </Box>
  );
}

export default WeatherListComponent;
