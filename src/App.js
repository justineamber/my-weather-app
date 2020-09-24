import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import WeatherDasboard from "./components/Weather-Dashboard/Weather-Dashboard";
import "./App.css";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    height: "100vh"
  },
});

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <div className={classes.root}>
          <WeatherDasboard  />
      </div>
    </div>
  );
}

export default App;