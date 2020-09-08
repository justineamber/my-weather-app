import React from "react";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import {
  Box,
  makeStyles,
  fade,
  InputAdornment,
  IconButton
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  search: {
    "& > *": {
      margin: theme.spacing(1)
    },
    position: "absolute",
    left: "5.625rem",
    bottom: "1rem",
    backgroundColor: fade(theme.palette.common.white, 0.9),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 1.0)
    },
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto"
    }
  }
}));

function SearchComponent(props) {
  const classes = useStyles();
  const { searchCity } = props;

  return (
    <Box className={classes.search}>
      <TextField
        placeholder="Search…"
        type="text"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <IconButton type="submit" aria-label="search">
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          )
        }}
        value={searchCity}
      />
    </Box>
  );
}

export default SearchComponent;
