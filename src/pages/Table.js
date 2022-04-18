import React, { useContext } from 'react';
import THead from '../componentes/THead';
import IssContext from '../context/IssContext';

function Table() {
  const { data, nameFilter, setName } = useContext(IssContext);
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
