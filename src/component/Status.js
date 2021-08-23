import React, { useState } from 'react';
import ButtonGroup from './ButtonGr/ButtonGroup';
import avatar from '../assets/avatar.jpg';
import WeatherOneDay from './Status/WeatherOneDay';
import WeatherHour from './Status/WeatherHour';
import WeatherWeek from './Status/WeatherWeek';
import classes from './Status.module.css';
import { useSelector } from 'react-redux';

function Status() {
  const error = useSelector((state) => state.weather.error);

  const [page, setPage] = useState('');

  const printButtonLabel = (event) => {
    setPage(event.target.name);
    //do some stuff here
  };

  const data = ['Today', 'Week', 'Hour'];

  return (
    <div className='container grid'>
      {error !== '' ? <div className={classes.danger}>{error}</div> : null}

      <div className={classes.navigation}>
        <div className={classes.navigationBtnGroup}>
          <ButtonGroup buttons={data} shows={printButtonLabel} />
        </div>
        <div className=''>
          <img src={avatar} className={classes.navigationImg} alt='Avatar' />
        </div>
      </div>

      <div className='main'>
        {page === 'Today' || page === '' ? (
          <div className='content'>
            <WeatherOneDay />
          </div>
        ) : null}
        {page === 'Week' ? (
          <div className='content'>
            <WeatherWeek />
          </div>
        ) : null}
        {page === 'Hour' ? (
          <div className='content'>
            <WeatherHour />
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Status;
