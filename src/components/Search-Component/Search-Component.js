import React from "react";
import TextField from "@material-ui/core/TextField";
import Search from "@material-ui/icons/Search";
import { Box, makeStyles, InputAdornment, Icon } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  search: {
    position: "relative",
    backgroundColor: "#fff",
    marginLeft: 0,
    width: "100%",

    "&:hover": {
      backgroundColor: "#fff"
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
              <Icon>
                <Search />
              </Icon>
            </InputAdornment>
          )
        }}
        value={searchCity}
      />
    </Box>
  );
}

export default SearchComponent;
