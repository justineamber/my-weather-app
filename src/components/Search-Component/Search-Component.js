import React from "react";
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import {
  Box,
  makeStyles,
  fade,
} from "@material-ui/core";


const useStyles = makeStyles(theme => ({
  search: {
    "& > *": {
      margin: theme.spacing(0)
    },
    position: "absolute",
    left: "5.625rem",
    bottom: "1.375rem",
    backgroundColor: fade(theme.palette.common.white, 1.0)
  }, 
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

function SearchComponent(props) {
  const classes = useStyles();
  const { cityName, handleChange, handleSubmit} = props;
 
  return (
    <Box className={classes.search}>
        <form onSubmit={handleSubmit}>
        <IconButton type="submit" className={classes.searchIcon}>
              <SearchIcon />
        </IconButton>  

        <InputBase
              type="text"
              value={cityName}
              onChange={handleChange}
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </form>
    </Box>
  );
}

export default SearchComponent;