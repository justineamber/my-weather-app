import React from "react";
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';
import {
  Box,
  makeStyles,
  fade,
  MenuItem
} from "@material-ui/core";


const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  search: {
    "& > *": {
      margin: theme.spacing(1)
    },
    position: "absolute",
    left: "5.625rem",
    bottom: "1rem",
    backgroundColor: fade(theme.palette.common.white, 1.0)
  }, 
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function SearchComponent(props) {
  const classes = useStyles();
  const { cityID, handleChange } = props;
 
  return (
    <Box className={classes.search}>
      <FormControl className={classes.formControl}>
        <Select
          value={cityID}
          onChange={handleChange}
          displayEmpty
          className={classes.selectEmpty}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="" disabled>
           Select city
          </MenuItem>
          <MenuItem value={3369157}>Cape Town</MenuItem>
          <MenuItem value={5128581}>New York</MenuItem>
          <MenuItem value={6453366}>Oslo</MenuItem>
          <MenuItem value={6619279}>Sydney</MenuItem>
        </Select>
        <FormHelperText>Select city</FormHelperText>
      </FormControl>
    </Box>
  );
}

export default SearchComponent;
