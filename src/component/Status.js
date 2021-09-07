import React, { useState } from 'react';
import avatar from '../assets/avatar.jpg';
import ButtonGroup from './ButtonGr/ButtonGroup';
import classes from './Status.module.css';
import WeatherHour from './Status/WeatherHour';
import WeatherOneDay from './Status/WeatherOneDay';
import WeatherWeek from './Status/WeatherWeek';
import { connect } from 'redux-zero/react';

function Status({ data, error }) {
  const [page, setPage] = useState('');

  const printButtonLabel = (event) => {
    setPage(event.target.name);
    //do some stuff here
  };

  const dataDayWeekHour = ['Today', 'Week', 'Hour'];

  return (
    <div className='container grid'>
      {error !== '' ? <div className={classes.danger}>{error}</div> : null}

      <div className={classes.navigation}>
        <div className={classes.navigationBtnGroup}>
          <ButtonGroup buttons={dataDayWeekHour} shows={printButtonLabel} />
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

const mapToProps = ({ data, error }) => ({ data, error });

const connected = connect(mapToProps);

export default connected(Status);
