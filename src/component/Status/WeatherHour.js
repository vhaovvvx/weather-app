import React from 'react';
import { Line } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { formatAMPM } from '../GetDateAmPm';

function WeatherHour() {
  const dataTesting = useSelector((state) => state.weather.data);
  const dataTemp = [];
  const dataFeelsLike = [];
  const currentTime = [];

  if (dataTesting.hourly !== undefined) {
    dataTesting.hourly.forEach((res, i) => {
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

export default WeatherHour;
