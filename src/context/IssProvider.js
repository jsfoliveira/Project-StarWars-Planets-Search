import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import IssContext from './IssContext';

function IssProvider({ children }) {
  // É toda a informação da requisição.
  const [data, setData] = useState([]);
  // Requisito 3
  const [columnFilter, setColumnFilter] = useState('');
  const [comparationFilter, setComparationFilter] = useState('');
  const [numberFilter, setNumberFilter] = useState(0);

  // O requisito pediu dessa forma.
  const [nameFilter, setName] = useState(
    {
      filterByName: {
        name: '',
      },
    },
  );

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
    nameFilter,
    setName,
    columnFilter,
    setColumnFilter,
    comparationFilter,
    setComparationFilter,
    numberFilter,
    setNumberFilter,
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
