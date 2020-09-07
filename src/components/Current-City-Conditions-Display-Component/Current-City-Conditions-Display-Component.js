import React from "react";
import { Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  currentConditionsList: {},
  tempratureDisplayBox: { marginTop: "50px", marginLeft: "68px" },
  weatherDescriptionStyle: {
    float: "left",
    clear: "left",
    fontSize: "1.5rem",
    fontWeight: 700,
    letterSpacing: "0.02857em",
    color: "#fff"
  },
  tempratureStyle: {
    fontSize: "4.25rem",
    marginLeft: "-6px",
    marginTop: "4px",
    float: "left",
    clear: "left",
    fontFamily: "Nova Slim",
    color: "#fff"
  },
  degreeStyle: {
    fontSize: "2.5rem",
    verticalAlign: "text-top"
  }
}));

function CurrentCityConditionsDisplayComponent(props) {
  const classes = useStyles();
  const { mainTemp, weatherDescription } = props;

  return (
    <Box className={classes.currentConditionsList}>
      <div className={classes.tempratureDisplayBox}>
        <p className={classes.weatherDescriptionStyle}>{weatherDescription}</p>
        <p className={classes.tempratureStyle}>{Math.round(mainTemp)}°</p>
      </div>
    </Box>
  );
}

export default CurrentCityConditionsDisplayComponent;
