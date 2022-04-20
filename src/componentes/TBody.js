import React, { useContext } from 'react';
import IssContext from '../context/IssContext';

function TBody() {
  const { filterPlanets } = useContext(IssContext);
  return (
    <div>
      {filterPlanets.map((element) => (
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
    </div>
  );
}

export default TBody;
