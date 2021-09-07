import { Spin } from 'antd';
import React, { useState } from 'react';
import logo from '../img/backgroundHeavyRain.jpg';
import { getDateFullText, getHourAndMunite } from './GetDateAmPm';
import classes from './Weather.module.css';
import { getDataWeek, findCityName } from '../reduxZero/actions';
import { connect } from 'redux-zero/react';
function Weather({ data, nameCity, findCityName }) {
  const [textInput, setTextInput] = useState('');

  const Search = (event) => {
    if (event.key === 'Enter') {
      findCityName(textInput);
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
      {data === undefined ? (
        <Spin className={classes.spin} size='large' />
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

const mapToProps = ({ data, nameCity }) => ({ data, nameCity });
const actions = {
  getDataWeek,
  findCityName,
};

const connected = connect(mapToProps, actions);

export default connected(Weather);
