import React from 'react';
import { Line } from 'react-chartjs-2';
import { connect } from 'redux-zero/react';
import { formatAMPM } from '../GetDateAmPm';

function WeatherHour({ data }) {
  const dataTemp = [];
  const dataFeelsLike = [];
  const currentTime = [];

  if (data !== undefined) {
    data.hourly.forEach((res, i) => {
      if (i % 2 !== 0) {
        dataTemp.push(res.temp);
        dataFeelsLike.push(res.feels_like);
        currentTime.push(formatAMPM(res.dt));
      }
    });
  }

  return (
    <>
      <Line
        data={{
          labels: currentTime,
          datasets: [
            {
              data: dataTemp,
              label: 'Temp °C',
              borderColor: '#3e95cd',
              fill: false,
            },
            {
              data: dataFeelsLike,
              label: 'Feel like °C',
              borderColor: '#8e5ea2',
              fill: false,
            },
          ],
        }}
      />
    </>
  );
}

const mapToProps = ({ data }) => ({ data });

const connected = connect(mapToProps);

export default connected(WeatherHour);
