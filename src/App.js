import React, { useEffect } from 'react';
import { connect } from 'redux-zero/react';
import Main from './component/Main';
import { getDataWeek, findCityName } from './reduxZero/actions';

function App({ data, getDataWeek }) {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getData(21.0245, 105.8412)); //Hanoi
  // }, [dispatch]);

  useEffect(() => {
    getDataWeek(21.0245, 105.8412);
  }, []);

  return (
    <div className='app'>
      <Main />
    </div>
  );
}

const actions = {
  getDataWeek,
};
const mapToProps = ({ data }) => ({ data });

const connected = connect(mapToProps, actions);

export default connected(App);
