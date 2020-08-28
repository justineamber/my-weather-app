import React, { useState } from "react";
import { makeStyles, fade } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Toolbar from "@material-ui/core/Toolbar";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import { ReactComponent as CloudySun } from "../../static/SVG/Cloudy-Sun.svg";
import { ReactComponent as Sun } from "../../static/SVG/Sun.svg";
import { ReactComponent as Cloud } from "../../static/SVG/Cloud.svg";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  mainMenuSquareDateBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "80px",
    width: "80px",
    backgroundColor: "black"
  },
  currentDate: {
    color: "white",
    fontWeight: "900",
    fontSize: "1rem"
  },
  tempratureDisplayBox: { marginTop: "50px", marginLeft: "68px" },
  weatherDescriptionStyle: {
    float: "left",
    clear: "left",
    fontSize: "1rem",
    fontWeight: "700",
    color: "white"
  },
  tempratureStyle: {
    fontSize: "3rem",
    marginLeft: "-6px",
    marginTop: "4px",
    float: "left",
    clear: "left",
    fontFamily: "Nova Slim",
    color: "white"
  },
  degreeStyle: {
    fontSize: "2rem",
    verticalAlign: "text-top"
  },
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.transparent
  },
  tabPanel: {
    marginTop: "25px"
  },
  indicator: {
    backgroundColor: "white"
  },
  table: {
    minWidth: 650
  },
  flexContainer: {
    justifyContent: "flex-end"
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto"
    }
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch"
      }
    }
  },
  MuiTableCell: {
    borderBottom: "none",
    fontWeight: "500"
  },
  gutters: {
    paddingLeft: 0
  },
  svgStyle: { width: "54px", height: "54px", viewBox: "0 0 54 54" }
}));

export default function MyWeatherMainMenu() {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className={classes.root}>
        <Toolbar classes={{ gutters: classes.gutters }}>
          <div className={classes.mainMenuSquareDateBox}>
            <span className={classes.currentDate}>
              OCT <br /> 21
            </span>
          </div>

          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
        </Toolbar>
      </div>

      <div className={classes.tempratureDisplayBox}>
        <span className={classes.weatherDescriptionStyle}>Cloudy</span>
        <span className={classes.tempratureStyle}>
          69<span className={classes.degreeStyle}>&#176;</span>
        </span>
      </div>

      <div className={classes.root}>
        <AppBar position="static" color="transparent" elevation={0}>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
            classes={{
              flexContainer: classes.flexContainer,
              indicator: classes.indicator
            }}
          >
            <Tab
              label={
                <span
                  style={{
                    color: "white",
                    fontWeight: "700",
                    textTransform: "none"
                  }}
                >
                  Today
                </span>
              }
              {...a11yProps(0)}
            />
            <Tab
              label={
                <span
                  style={{
                    color: "white",
                    fontWeight: "700",
                    textTransform: "none"
                  }}
                >
                  Week
                </span>
              }
              {...a11yProps(1)}
            />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0} className={classes.tabPanel}>
          <TableContainer component={Paper} elevation={0}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell
                    align="center"
                    classes={{ root: classes.MuiTableCell }}
                  >
                    Now
                  </TableCell>
                  <TableCell
                    align="center"
                    classes={{ root: classes.MuiTableCell }}
                  >
                    2pm
                  </TableCell>
                  <TableCell
                    align="center"
                    classes={{ root: classes.MuiTableCell }}
                  >
                    3pm
                  </TableCell>
                  <TableCell
                    align="center"
                    classes={{ root: classes.MuiTableCell }}
                  >
                    4pm
                  </TableCell>
                  <TableCell
                    align="center"
                    classes={{ root: classes.MuiTableCell }}
                  >
                    5pm
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell
                    align="center"
                    classes={{ root: classes.MuiTableCell }}
                  >
                    <CloudySun className={classes.svgStyle} />
                  </TableCell>
                  <TableCell
                    align="center"
                    classes={{ root: classes.MuiTableCell }}
                  >
                    <Sun className={classes.svgStyle} />
                  </TableCell>
                  <TableCell
                    align="center"
                    classes={{ root: classes.MuiTableCell }}
                  >
                    <CloudySun className={classes.svgStyle} />
                  </TableCell>
                  <TableCell
                    align="center"
                    classes={{ root: classes.MuiTableCell }}
                  >
                    <CloudySun className={classes.svgStyle} />
                  </TableCell>
                  <TableCell
                    align="center"
                    classes={{ root: classes.MuiTableCell }}
                  >
                    <Cloud className={classes.svgStyle} />
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell
                    align="center"
                    classes={{ root: classes.MuiTableCell }}
                  >
                    69&#176;
                  </TableCell>
                  <TableCell
                    align="center"
                    classes={{ root: classes.MuiTableCell }}
                  >
                    70&#176;
                  </TableCell>
                  <TableCell
                    align="center"
                    classes={{ root: classes.MuiTableCell }}
                  >
                    69&#176;
                  </TableCell>
                  <TableCell
                    align="center"
                    classes={{ root: classes.MuiTableCell }}
                  >
                    69&#176;
                  </TableCell>
                  <TableCell
                    align="center"
                    classes={{ root: classes.MuiTableCell }}
                  >
                    68&#176;
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </TabPanel>

        <TabPanel value={value} index={1} className={classes.tabPanel}>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell
                    align="center"
                    classes={{ root: classes.MuiTableCell }}
                  >
                    Today
                  </TableCell>
                  <TableCell
                    align="center"
                    classes={{ root: classes.MuiTableCell }}
                  >
                    Tuesday
                  </TableCell>
                  <TableCell
                    align="center"
                    classes={{ root: classes.MuiTableCell }}
                  >
                    Wednesday
                  </TableCell>
                  <TableCell
                    align="center"
                    classes={{ root: classes.MuiTableCell }}
                  >
                    Thursday
                  </TableCell>
                  <TableCell
                    align="center"
                    classes={{ root: classes.MuiTableCell }}
                  >
                    Friday
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell
                    align="center"
                    classes={{ root: classes.MuiTableCell }}
                  >
                    <CloudySun className={classes.svgStyle} />
                  </TableCell>
                  <TableCell
                    align="center"
                    classes={{ root: classes.MuiTableCell }}
                  >
                    <Sun className={classes.svgStyle} />
                  </TableCell>
                  <TableCell
                    align="center"
                    classes={{ root: classes.MuiTableCell }}
                  >
                    <CloudySun className={classes.svgStyle} />
                  </TableCell>
                  <TableCell
                    align="center"
                    classes={{ root: classes.MuiTableCell }}
                  >
                    <CloudySun className={classes.svgStyle} />
                  </TableCell>
                  <TableCell
                    align="center"
                    classes={{ root: classes.MuiTableCell }}
                  >
                    <Cloud className={classes.svgStyle} />
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell
                    align="center"
                    classes={{ root: classes.MuiTableCell }}
                  >
                    69&#176;
                  </TableCell>
                  <TableCell
                    align="center"
                    classes={{ root: classes.MuiTableCell }}
                  >
                    70&#176;
                  </TableCell>
                  <TableCell
                    align="center"
                    classes={{ root: classes.MuiTableCell }}
                  >
                    69&#176;
                  </TableCell>
                  <TableCell
                    align="center"
                    classes={{ root: classes.MuiTableCell }}
                  >
                    69&#176;
                  </TableCell>
                  <TableCell
                    align="center"
                    classes={{ root: classes.MuiTableCell }}
                  >
                    68&#176;
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </TabPanel>
      </div>
    </>
  );
}
