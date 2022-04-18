import React, { useContext } from 'react';
import THead from './THead';
import TBody from './TBody';
import IssContext from '../context/IssContext';

function Table() {
  const { data } = useContext(IssContext);
  console.log(data);

  return (
    <table>
      <thead>
        <THead />
      </thead>

      <tbody>
        <TBody />
      </tbody>
    </table>
  );
}

export default Table;
