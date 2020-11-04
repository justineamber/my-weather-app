import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  flexContainer: {
    justifyContent: "flex-end"
  },
  indicator: {
    backgroundColor: "#fff"
  },
  tab: {
    color: "#eaeaea",
    fontSize: "1rem",
    fontWeight: 700,
    textTransform: "none",
    minWidth: 62,
    marginRight: theme.spacing(1)
  }
}));

function ForecastTabsComponent(props) {
  const classes = useStyles();
  const { forecastDuration, handleDurationChange } = props;

  return (
    <Tabs
      onChange={(event, value) => handleDurationChange(value)}
      value={forecastDuration}
      variant="scrollable"
      scrollButtons="auto"
      classes={{
        flexContainer: classes.flexContainer,
        indicator: classes.indicator
      }}
    >
      <Tab
        className={classes.tab}
        disableRipple
        label="Today"
        id="scrollable-auto-tab-0"
        aria-controls="scrollable-auto-tabpanel-0"
        value="Today"
      />

      <Tab
        className={classes.tab}
        disableRipple
        label="Week"
        id="scrollable-auto-tab-1"
        aria-controls="scrollable-auto-tabpanel-1"
        value="Week"
      />
    </Tabs>
  );
}

export default ForecastTabsComponent;
