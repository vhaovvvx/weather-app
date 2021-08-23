import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { formatAMPM, getDate, getDay, getWindKmPerSec } from '../GetDateAmPm';
import classes from './WeatherWeek.module.css';

function WeatherWeek() {
  const dataTesting = useSelector((state) => state.weather.data);

  const data = true;

  const [clickedId, setClickedId] = useState(0);
  const [actived, setActived] = useState(0);

  const handleClick = (id) => {
    setClickedId(id);
    if (actived === 0) {
      setActived('');
    }
  };

  return (
    <>
      <div className='row'>
        {data !== undefined
          ? dataTesting.daily.map((res, i) => (
              <div
                key={i}
                name={getDay(res.sunrise)}
                className={`col c-3 l-3 m-6 ${classes.bgWhite} ${
                  i === actived
                    ? `${classes.weatherActive}`
                    : ' ' && i === clickedId
                    ? `${classes.weatherActive}`
                    : ' '
                }`}
                onClick={() => handleClick(i)}
              >
                <div className={classes.bgInfo}>
                  <div className={classes.bgInfoDate}>{getDate(res.dt)}</div>
                  <img
                    src={`http://openweathermap.org/img/wn/${res.weather[0].icon}.png`}
                    alt='weatherLogo'
                  />
                  <div className={`fwBold ${classes.tempWeek}`}>{`${Math.floor(
                    res.temp.min
                  )} ° - ${Math.floor(res.temp.max)} °`}</div>
                </div>
              </div>
            ))
          : null}
      </div>

      {data !== undefined ? (
        <div className={`${classes.content} row`}>
          <div className={`${classes.contentBox} col c-12 l-12 m-12`}>
            <div className={classes.contentDate}>
              {getDate(dataTesting.daily[clickedId].dt)}
            </div>
            <div className={classes.boxItems}>
              <div className={`${classes.boxBg} col c-6 l-6 m-12`}>
                <div
                  className={classes.item}
                >{`Temp current: ${dataTesting.daily[clickedId].temp.day} °C`}</div>
                <div
                  className={classes.item}
                >{`Temp: ${dataTesting.daily[clickedId].temp.min} °C - ${dataTesting.daily[clickedId].temp.max} °C`}</div>

                <div
                  className={classes.item}
                >{`Humidity:${dataTesting.daily[clickedId].humidity} %`}</div>
                <div className={classes.item}>{`Wind speed: ${getWindKmPerSec(
                  dataTesting.daily[clickedId].wind_speed
                )}`}</div>
              </div>
              <div className={`${classes.boxBg} col c-6 l-6 m-12`}>
                <div className={classes.item}>{`Sunrise: ${formatAMPM(
                  dataTesting.daily[clickedId].sunrise
                )}`}</div>
                <div className={classes.item}>{`Sunset: ${formatAMPM(
                  dataTesting.daily[clickedId].sunset
                )}`}</div>
                <div
                  className={classes.item}
                >{`Description: ${dataTesting.daily[clickedId].weather[0].description}`}</div>
                <div
                  className={classes.item}
                >{`Atmospheric pressure: ${dataTesting.daily[clickedId].pressure} hPa`}</div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default WeatherWeek;
