import React from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  currentConditionsList: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "center",
    padding: "4rem",
    position: "relative"
  },
  weatherDescriptionStyle: {
    color: "#fff",
    display: "flex",
    fontWeight: 700,
    fontSize: "1rem",
    letterSpacing: "0.0625rem",
    position: "absolute"
  },
  tempratureStyle: {
    color: "#fff",
    display: "flex",
    fontWeight: 700,
    fontFamily: "Nova Slim",
    marginTop: "6rem",
    position: "absolute"
  },
  degreeStyle: {
    color: "#fff",
    display: "flex",
    fontWeight: 700,
    fontFamily: "Nova Slim",
    left: "8.75rem",
    position: "absolute",
    top: "4.6875rem"
  }
}));

function CurrentCityConditionsDisplayComponent(props) {
  const classes = useStyles();
  const { mainTemp, weatherDescription } = props;

  return (
    <Box className={classes.currentConditionsList}>
      <Typography variant="h5" className={classes.weatherDescriptionStyle}>
        {weatherDescription}
      </Typography>
      <Typography variant="h2" className={classes.tempratureStyle}>
        {Math.round(mainTemp)}
      </Typography>
      <Typography variant="h3" className={classes.degreeStyle}>
        °
      </Typography>
    </Box>
  );
}

export default CurrentCityConditionsDisplayComponent;
