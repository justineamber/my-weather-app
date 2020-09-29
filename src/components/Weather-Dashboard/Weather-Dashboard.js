import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import WeatherListComponent from "../Weather-List-Component/Weather-List-Component";
import MonthDateBoxComponent from "../Month-Date-Box-Component/Month-Date-Box-Component";
import CurrentCityConditionsDisplayComponent from "../Current-City-Conditions-Display-Component/Current-City-Conditions-Display-Component";
import ForecastTabsComponent from "../Forecast-Tabs-Component/Forecast-Tabs-Component";
import SearchComponent from "../Search-Component/Search-Component";
import { Box } from "@material-ui/core";
import Image from "../../../src/static/overcastCloudy.jpg";
import Unsplash, { toJson }  from 'unsplash-js';

const useStyles = makeStyles(() => ({
  weatherDashboardWrapper: {
    width: "100%",
    height: "100%",
    backgroundImage: (image => `url(${image.url})`),
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center"
  },
  topBar: {
    display: "flex",
    position: "relative"
  }, 
}));

function WeatherDashboard({props}) {
  const [forecastDuration, setForecastDuration] = useState("Today");
  const [dailyData, setDailyData] = useState([]);
  const [weeklyData, setWeeklyData] = useState([]);
  const [cityName, setCityName] = useState(topInnovativeCityOptions[53]);
  const [inputValue, setInputValue] = useState("");
  const [image, setImage] = useState({
    alt: 'A cloudy rainforest.',
    url: Image,
  })

  const classes = useStyles(image);

  const handleDurationChange = duration => {
    setForecastDuration(duration);
  };

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&appid=${process.env.REACT_APP_API_KEY}`)
    .then(response => response.json())
        .then(response => {
          if(!response || !response.list) return
          const firstFive = response.list.slice(0, 5).map(listItem => {
            return {
              title: listItem.dt_txt,
              iconID: listItem.weather[0].icon,
              mainTemp: listItem.main.temp,
              weatherDescription: listItem.weather[0].description
            };
          });
          setDailyData(firstFive);

          const firstFiveDays = response.list.filter(listItem => listItem.dt_txt.includes("18:00:00")).map(listItem => {
            return {
              title: listItem.dt_txt,
              iconID: listItem.weather[0].icon,
              mainTemp: listItem.main.temp,
              weatherDescription: listItem.weather[0].description
            };
          });
          setWeeklyData(firstFiveDays);
        });

      const unsplash = new Unsplash({
        accessKey: `${process.env.REACT_APP_UNSPLASH_API_KEY}`
      });

      if (cityName) {
        unsplash.search.photos(cityName,  1, 1,)
          .then(toJson)
          .then(json => {
            const results = json.results
            const imageUrl = results.length > 0 ? results[0].urls.full : Image

            setImage({
              alt: cityName,
              url: imageUrl,
            })
          })
      }
    }, [cityName]);

  const day = new Date();
  const dayOptions = {day: "numeric" }

  const month = new Date();
  const monthOptions = {month: "short"}

  return (
    <>
    <Box className={classes.weatherDashboardWrapper}>
      <Box className={classes.topBar}>
        <MonthDateBoxComponent day={day.toLocaleDateString(undefined,dayOptions)} month={month.toLocaleDateString(undefined,monthOptions)} />
      <SearchComponent
        value={cityName}
        onChange={(event, newValue) => {
          setCityName(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        topInnovativeCityOptions={topInnovativeCityOptions}
      />
      </Box>

      {dailyData.slice(0,1).map(currentTempAndWeatherDescription => (
      <CurrentCityConditionsDisplayComponent
        key={currentTempAndWeatherDescription.mainTemp}
        mainTemp={currentTempAndWeatherDescription.mainTemp}
        weatherDescription={currentTempAndWeatherDescription.weatherDescription}
      />
       ))}

      <ForecastTabsComponent
        forecastDuration={forecastDuration}
        handleDurationChange={handleDurationChange}
      />
      <WeatherListComponent
        data={forecastDuration === "Today" ? dailyData : weeklyData}
      />
  </Box>
    </>
  );
  }

export default WeatherDashboard;

const topInnovativeCityOptions = ["Abu Dhabi","Amsterdam", "Athens", "Atlanta", "Bangkok", "Barcelona", "Beijing", "Berlin", "Boston", "Brisbane", "Brussels",  "Budapest", "Buenos Aires",  "Busan", "Calgary", "Cape Town", "Charlotte", "Chicago", "Cologne", "Copenhagen",  "Denver", "Detroit",  "Dubai", "Dublin", "Düsseldorf", "Edinburgh",  "Fort Lauderdale", "Frankfurt", "Guangzhou", "Hamburg", "Helsinki", "Hong Kong", "Honolulu", "Houston", "Istanbul", "Kuala Lumpur",  "Kyoto", "Lisbon", "London", "	Los Angeles", "Lyon", "Madrid", "Manchester", "Melbourne", "Mexico City", "Miami", "Milan", "Montréal", "Moscow", "Mumbai", "Munich", "Nashville", "New York", "Osaka", "Oslo",  "Paris",  "Portland", "Prague", "Providence", "Québec", "Rome", "Rotterdam", "Seattle",  "Seoul", "Shanghai", "Shenzhen", "Singapore", "St Louis", "Stockholm", "Sydney", "São Paulo", "Taipei", "Tel Aviv", "The Hague", "Tokyo", "Toronto", "Vancouver", "Vienna", "Washington DC", "Zürich" ];

