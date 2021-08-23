import React, { useState } from 'react';
import { getDateFullText, getHourAndMunite } from './GetDateAmPm';
import classes from './Weather.module.css';
import logo from '../img/backgroundHeavyRain.jpg';
import { useSelector, useDispatch } from 'react-redux';
import { findCityByName } from '../redux/actions/index';
<<<<<<< HEAD
=======
import { Spin } from 'antd';
>>>>>>> 8d0eee4 (add spin antd)

function Weather(props) {
  const data = useSelector((state) => state.weather.data);
  const nameCity = useSelector((state) => state.weather.nameCity);

  const dispatch = useDispatch();

  const [textInput, setTextInput] = useState('');

  const Search = (event) => {
    if (event.key === 'Enter') {
      dispatch(findCityByName(textInput));
      setTextInput('');
      event.preventDefault();
      event.stopPropagation();
    }
  };

  const handleTextChange = (e) => {
    setTextInput(e.target.value);
  };

  return (
    <>
      {data.current === undefined ? (
<<<<<<< HEAD
        <div>Loading...</div>
=======
        <Spin className={classes.spin} size='large' />
>>>>>>> 8d0eee4 (add spin antd)
      ) : (
        <div className={classes.weatherInput}>
          <div className='form-input'>
            <input
              type='text'
              placeholder='Search...'
              onChange={handleTextChange}
              value={textInput}
              onKeyDown={Search}
            />
          </div>
          <img
            src={`http://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`}
            alt='imgWeather'
          />
          <div className={classes.country}>{nameCity}</div>
          <div className={classes.temp}>{data.current.temp}°C</div>
          <div className={classes.date}>
            {getDateFullText(new Date())}, {getHourAndMunite(new Date())}
          </div>
          <div className={classes.weatherBox}>
            <div className={classes.weather}>
              {data.current.weather[0].description}
            </div>
            <div
              className={classes.clouds}
            >{`clouds ${data.current.clouds} %`}</div>
          </div>
          <div className={classes.imgBox}>
            <img src={logo} alt='logoCountry' />
            <div className={classes.textCenterImg}>{nameCity}</div>
          </div>
        </div>
      )}
    </>
  );
}

export default Weather;
