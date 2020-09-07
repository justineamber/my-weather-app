import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  flexContainer: {
    justifyContent: "flex-end"
  },
  tab: {
    color: "#eaeaea",
    fontSize: "1rem",
    textTransform: "none",
    minWidth: 62,
    fontWeight: theme.typography.fontWeightRegular,
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
      className={classes.flexContainer}
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
