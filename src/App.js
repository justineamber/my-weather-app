import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Image from "../src/static/cloudyWeather.jpg";
import WeatherDasboard from "./components/Weather-Dashboard/Weather-Dashboard";
import "./App.css";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    height: "100vh"
  },
  paper: {
    width: "100%",
    height: "100%",
    backgroundImage: `url(${Image})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center"
  }
});

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <div className={classes.root}>
        <Paper className={classes.paper} square={true}>
          <WeatherDasboard  />
        </Paper>
      </div>
    </div>
  );
}

export default App;
