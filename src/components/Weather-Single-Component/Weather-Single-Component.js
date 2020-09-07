import React from "react";
import { Box, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  weatherSingle: {}
}));

function WeatherSingleComponent(props) {
  const classes = useStyles();
  const { day, iconID, mainTemp } = props;

  return (
    <Box className={classes.weatherSingle}>
      <Typography>{day}</Typography>

      <img
        src={`http://openweathermap.org/img/w/${iconID}.png`}
        alt="weather condition"
      />

      <Typography>{`${Math.floor(mainTemp)}°`}</Typography>
    </Box>
  );
}

export default WeatherSingleComponent;
