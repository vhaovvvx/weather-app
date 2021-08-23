function formatAMPM(date) {
  let d = new Date(date * 1000);
  let hours = d.getHours();
  let minutes = d.getMinutes();
  let ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0' + minutes : minutes;
  let strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}

function getHourAndMunite(d) {
  let hours = d.getHours();
  let minutes = d.getMinutes();
  let ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0' + minutes : minutes;
  let strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}

const getDate = (d) => {
  let date = new Date(d * 1000);
  let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  let day = days[date.getDay()];
  let getDate = date.getDate();
  let getMonth = date.getMonth() + 1;

  return `${day}, ${getDate}/${getMonth}`;
};

const getDateFullText = (d) => {
  let days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  let day = days[d.getDay()];

  return ` ${day} `;
};

const getDay = (d) => {
  let date = new Date(d * 1000);
  let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  let day = days[date.getDay()];
  return `${day}`;
};

const getWindKmPerSec = (m) => {
  const dive = m * 3.6;
  return `${dive.toFixed(2)} Km/h`;
};

const getKm = (m) => {
  const dive = m / 1000;
  return `${dive} Km`;
};

export {
  formatAMPM,
  getHourAndMunite,
  getDate,
  getDay,
  getKm,
  getDateFullText,
  getWindKmPerSec,
};
