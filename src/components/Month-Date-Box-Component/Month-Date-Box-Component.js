import React from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  monthDateBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "80px",
    width: "80px",
    backgroundColor: "#000",
    flexDirection: "column"
  },
  currentMonth: {
    color: "#fff",
    fontWeight: 700,
    textTransform: "uppercase"
  },
  currentDate: {
    color: "#fff",
    fontSize: "1.25rem",
    fontWeight: 700
  }
}));

function MonthDateBoxComponent(props) {
  const classes = useStyles();
  const { day, month } = props;

  return (
    <Box className={classes.monthDateBox}>
      <Typography className={classes.currentMonth}>{month}</Typography>
      <Typography className={classes.currentDate}>{day}</Typography>
    </Box>
  );
}

export default MonthDateBoxComponent;
