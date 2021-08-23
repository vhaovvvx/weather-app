import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Main from './component/Main';
import TestContextProvider from './contexts/testContext';
import { getData } from './redux/actions';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData(21.0245, 105.8412)); //Hanoi
  }, [dispatch]);

  return (
    <div className='app'>
      <TestContextProvider>
        <Main />
      </TestContextProvider>
    </div>
  );
}

export default App;
