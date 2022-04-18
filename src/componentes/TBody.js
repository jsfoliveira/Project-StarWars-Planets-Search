import React, { useContext } from 'react';
import IssContext from '../context/IssContext';
import './TBody.css';

function TBody() {
  const { data } = useContext(IssContext);
  console.log(data);

  return (
    <div className="tbody">
      {data.map((element) => (
        <tr key={ element.name }>
          <td className="tbody">{element.name}</td>
          <td className="tbody">{element.rotation_period}</td>
          <td className="tbody">{element.orbital_period}</td>
          <td className="tbody">{element.diameter}</td>
          <td className="tbody">{element.climate}</td>
          <td className="tbody">{element.gravity}</td>
          <td className="tbody">{element.terrain}</td>
          <td className="tbody">{element.surface_water}</td>
          <td className="tbody">{element.population}</td>
          <td className="tbody">{element.films}</td>
          <td className="tbody">{element.created}</td>
          <td className="tbody">{element.edited}</td>
          <td className="tbody">{element.url}</td>
        </tr>))}
    </div>
  );
}

export default TBody;
