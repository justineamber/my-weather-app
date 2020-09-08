import React from "react";
import { Box, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  weatherSingleContainer: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center"
  },
  daySingle: {
    fontSize: "1.25rem",
    fontWeight: 500,
    padding: "1rem"
  },
  weatherSingle: {
    padding: "1rem",
    width: "5rem",
    height: "5rem",
    viewBox: "0 0 80 80"
  },
  tempSingle: {
    fontSize: "1.25rem",
    fontWeight: 500,
    padding: "1rem"
  }
}));

function WeatherSingleComponent(props) {
  const classes = useStyles();
  const { day, iconID, mainTemp } = props;

  return (
    <Box className={classes.weatherSingleContainer}>
      <Typography variant="h5" className={classes.daySingle}>
        {day}
      </Typography>

      <img
        className={classes.weatherSingle}
        src={`http://openweathermap.org/img/w/${iconID}.png`}
        alt="weather condition"
      />

      <Typography variant="h5" className={classes.tempSingle}>{`${Math.floor(
        mainTemp
      )}°`}</Typography>
    </Box>
  );
}

export default WeatherSingleComponent;
