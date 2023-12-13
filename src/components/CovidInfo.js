import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCovidData } from '../store';

const CovidInfo = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchCovidData());
  }, [dispatch]);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && (
        <div>
          <h2>Covid Data for Nigeria</h2>
          <p>Total Cases: {data.totalCases}</p>
          <p>Total Deaths: {data.totalDeaths}</p>
          <p>Total Recovered: {data.totalRecovered}</p>
        </div>
      )}
    </div>
  );
};

export default CovidInfo;