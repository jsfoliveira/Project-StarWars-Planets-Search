import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import IssContext from './IssContext';

function IssProvider({ children }) {
  const [data, setData] = useState([]);

  const requestApi = async () => {
    const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
    const request = await fetch(endpoint);
    const response = await request.json();
    return response.results;
  };

  useEffect(() => {
    requestApi().then(setData);
  }, []);

  const values = {
    data,
    setData,
  };

  return (
    <div>
      <IssContext.Provider value={ values }>
        { children }
      </IssContext.Provider>
    </div>
  );
}

IssProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default IssProvider;
