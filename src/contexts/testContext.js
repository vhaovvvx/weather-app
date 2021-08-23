import React, { createContext, useEffect, useState } from 'react';

export const TestContext = createContext();

const api = {
  key: '90d689951f066eafb8634a169911a8db',
  baseUrl: 'https://api.openweathermap.org/data/2.5/',
};

const TestContextProvider = (props) => {
  const [testData, setTestData] = useState(undefined);

  useEffect(() => {
    async function fetchApi() {
      try {
        const requestUrl = `${api.baseUrl}weather?q=hanoi&units=metric&appid=${api.key}`;
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        setTestData(responseJSON);
      } catch (error) {
        console.log(error);
      }
    }
    fetchApi();
  }, []);

  const [data2, setData2] = useState(undefined);

  useEffect(() => {
    if (testData !== undefined) {
      async function fetchApiList() {
        try {
          const requestUrl = `${api.baseUrl}onecall?lat=${testData.coord.lat}&lon=${testData.coord.lon}&exclude={part}&units=metric&appid=${api.key}`;
          const response = await fetch(requestUrl);
          const reponseJSON = await response.json();
          setData2(reponseJSON);
        } catch (error) {
          console.log(error);
        }
      }
      fetchApiList();
    }
  }, [testData]);
  const value = { dataOneDay: testData, dataFull: data2 };

  return (
    <TestContext.Provider value={{ value }}>
      {props.children}
    </TestContext.Provider>
  );
};

export default TestContextProvider;
