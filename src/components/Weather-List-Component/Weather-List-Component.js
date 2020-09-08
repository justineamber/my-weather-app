import React from "react";
import { Box, makeStyles } from "@material-ui/core";
import WeatherSingleComponent from "../Weather-Single-Component/Weather-Single-Component";

const useStyles = makeStyles(theme => ({
  weatherList: {
    backgroundColor: "#fff",
    display: "flex",
    justifyContent: "space-around",
    padding: "1.5rem 0",
    marginTop: theme.spacing.unit * 4,
    overflowX: "auto",
    width: "100%"
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
