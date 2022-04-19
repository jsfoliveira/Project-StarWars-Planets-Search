import React, { useContext } from 'react';
import IssContext from '../context/IssContext';

function Search() {
  const {
    columnFilter,
    setColumnFilter,
    // comparationFilter,
    // setComparationFilter,
    // numberFilter,
    // setNumberFilter,
  } = useContext(IssContext);

  const option = ['population', 'orbital_period',
    'diameter', 'rotation_period', 'surface_water'];
  return (
    <div>
      <select
        name="column"
        data-testid="column-filter"
        // onChange={ (event) => handleColumn(event.target.value) }
      >
        {option.map((element, index) => (
          <option key={ index } value={ element }>{ element }</option>
        ))}
      </select>
      <select
        name="valor"
        data-testid="comparison-filter"
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <label
        htmlFor="valueFilter"
      >
        <input
          id="valueFilter"
          type="number"
          data-testid="value-filter"
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
      >
        Filtrar
      </button>
    </div>
  );
}

export default Search;
