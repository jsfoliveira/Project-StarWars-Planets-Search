import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import IssContext from './IssContext';

function IssProvider({ children }) {
  // É toda a informação da requisição.
  const [data, setData] = useState([]);

  // O requisito pediu dessa forma.
  const [nameFilter, setName] = useState(
    {
      filterByName: {
        name: '',
      },
    },
  );

  const [filteredName, setFilteredName] = useState([]);

  const requestApi = async () => {
    const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
    const request = await fetch(endpoint);
    const response = await request.json();
    return response.results;
  };

  useEffect(() => {
    requestApi().then(setData);
    // requestApi().then(setName);
  }, []);

  const values = {
    data,
    setData,
    nameFilter,
    setName,
    filteredName,
    setFilteredName,
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
