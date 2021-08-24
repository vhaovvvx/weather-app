import React from 'react';
import Status from './Status';
import Weather from './Weather';

function Main() {
  return (
    <div className='container grid wide'>
      <div className='row overFlowHidden'>
        <div className='item weather-wrap col c-3 l-3 m-12 '>
          <Weather />
        </div>
        <div className='item status-wrap col c-9 l-9 m-12 '>
          <Status></Status>
        </div>
      </div>
    </div>
  );
}

export default Main;
