import React, { useContext } from 'react';
import THead from '../componentes/THead';
import TBody from '../componentes/TBody';
import IssContext from '../context/IssContext';

function Table() {
  const option = ['population', 'orbital_period',
    'diameter', 'rotation_period', 'surface_water'];
  const {
    nameFilter,
    filteredName,
    columnFilter,
    setColumnFilter,
    comparationFilter,
    setComparationFilter,
    numberFilter,
    setNumberFilter,
    handleClick,
  } = useContext(IssContext);

  return (
    <div>
      <h1>Projeto Star Wars - Trybe</h1>
      <label
        htmlFor="nameFilter"
      >
        <input
          id="nameFilter"
          type="text"
          name="name"
          data-testid="name-filter"
          value={ nameFilter }
          onChange={ (event) => filteredName(event.target.value) }
        />
      </label>

      <label
        htmlFor="columnFilter "
      >
        <select
          id="columnFilter "
          value={ columnFilter }
          data-testid="column-filter"
          onChange={ (event) => setColumnFilter(event.target.value) }
        >
          {option.map((element, index) => (
            <option key={ index } value={ element }>{ element }</option>
          ))}
        </select>
      </label>
      <label
        htmlFor="comparationFilter"
      >
        <select
          id="comparationFilter"
          data-testid="comparison-filter"
          value={ comparationFilter }
          onChange={ (event) => setComparationFilter(event.target.value) }
        >
          <option>maior que</option>
          <option>menor que</option>
          <option>igual a</option>
        </select>
      </label>
      <label
        htmlFor="valueFilter"
      >
        <input
          id="valueFilter"
          data-testid="value-filter"
          type="number"
          value={ numberFilter }
          onChange={ (event) => setNumberFilter(event.target.value) }
        />
      </label>

      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        Filtrar
      </button>
      <table>
        <thead>
          <THead />
        </thead>
        <thbody>
          <TBody />
        </thbody>
      </table>
    </div>
  );
}

export default Table;
