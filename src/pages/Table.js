import React, { useContext } from 'react';
// import Search from '../componentes/Search';
import THead from '../componentes/THead';
import IssContext from '../context/IssContext';

function Table() {
  const option = ['population', 'orbital_period',
    'diameter', 'rotation_period', 'surface_water'];
  const {
    data,
    nameFilter,
    setName,
    // columnFilter,
    // setColumnFilter,
    // comparationFilter,
    // setComparationFilter,
    // numberFilter,
    // setNumberFilter,
    columnFilter,
    setColumnFilter,
    comparationFilter,
    setComparationFilter,
    numberFilter,
    setNumberFilter,
  } = useContext(IssContext);
  console.log(data);
  // Desconstruir o name que contém o texto digitado no input.
  const { filterByName: { name } } = nameFilter;
  // Controlar o texto digitado no input.
  const handleChange = (event) => {
    setName({
      filterByName: {
        name: event.target.value,
      },
    });
  };
  return (
    <div>
      <h1>Projeto Star Wars - Trybe</h1>
      <label htmlFor="nameFilter">
        Qual planeta você procura?
        <input
          id="nameFilter"
          name="nameFilter"
          data-testid="name-filter"
          onChange={ handleChange }
        />
      </label>
      <div>
        <select
          value={ columnFilter }
          name="column"
          data-testid="column-filter"
          // Outra forma de controlar o valor do input
          onChange={ (event) => setColumnFilter(event.target.value) }
        >
          {option.map((element, index) => (
            <option key={ index } value={ element }>{ element }</option>
          ))}
        </select>
        <select
          value={ comparationFilter }
          name="valor"
          data-testid="comparison-filter"
          onChange={ (event) => setComparationFilter(event.target.value) }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        <label
          htmlFor="valueFilter"
        >
          <input
            value={ numberFilter }
            id="valueFilter"
            type="number"
            data-testid="value-filter"
            onChange={ (event) => setNumberFilter(event.target.value) }
          />
        </label>
        <button
          type="button"
          data-testid="button-filter"
          // onClick={ handleClick }
        >
          Filtrar
        </button>
      </div>

      <table>
        <thead>
          <THead />
        </thead>
        <tbody>
          {data.filter((el) => el.name.includes(name))
            .map((element) => (
              <tr key={ element.name }>
                <td>{element.name}</td>
                <td>{element.rotation_period}</td>
                <td>{element.orbital_period}</td>
                <td>{element.diameter}</td>
                <td>{element.climate}</td>
                <td>{element.gravity}</td>
                <td>{element.terrain}</td>
                <td>{element.surface_water}</td>
                <td>{element.population}</td>
                <td>{element.films}</td>
                <td>{element.created}</td>
                <td>{element.edited}</td>
                <td>{element.url}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
export default Table;
