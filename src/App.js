import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Image from "../src/static/mainBackgroundCoverImageOvercastWeather.jpg";
import MyWeatherMainMenu from "./Components/My-Weather-Main-Menu/My-Weather-Main-Menu";
import "./App.css";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    height: "100vh"
  },
  paper: {
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.5)",
    backgroundBlendMode: "multiply",
    backgroundImage: `url(${Image})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center"
  }
}));

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <div className={classes.root}>
        <Paper className={classes.paper} square="true">
          <MyWeatherMainMenu />
        </Paper>
      </div>
    </div>
  );
}

export default App;
