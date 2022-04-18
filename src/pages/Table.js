import React, { useContext, useState } from 'react';
import THead from '../componentes/THead';
import TBody from '../componentes/TBody';
import IssContext from '../context/IssContext';

function Table() {
  const { data } = useContext(IssContext);
  console.log(data);
  const [nameFilter, setName] = useState(' ');

  return (
    <div>
      <h1>Projeto Star Wars - Trybe</h1>
      <label htmlFor="nameFilter">
        Qual planeta você procura?
        <input
          id="nameFilter"
          name="nameFilter"
          data-testid="name-filter"
          value={ nameFilter }
          onChange={ (event) => setName(event.target.value) }
        />
      </label>
      <table>
        <thead>
          <THead />
        </thead>
        <tbody>
          <TBody />
          {/* { nameFilter.length === 0 && (
            <TBody />
          )} */}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
