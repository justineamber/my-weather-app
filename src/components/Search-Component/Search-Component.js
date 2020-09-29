import React from "react";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const useStyles = makeStyles(() => ({
autoCompleteWrapper: {
    marginTop: "1rem",
    marginLeft: "1rem"
  }
}));

function SearchComponent (props) {
const {cityName, onChange, inputValue, onInputChange, topInnovativeCityOptions } = props;

 const classes = useStyles();

 return (
    <>
      <Box className={classes.autoCompleteWrapper}>
      <Autocomplete
        value={cityName}
        onChange={onChange}
        inputValue={inputValue}
        onInputChange={onInputChange}
        id="Search city"
        options={topInnovativeCityOptions}
        style={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Search city" variant="outlined" />}
      />
      </Box>
    </>
 )
}

export default SearchComponent;

