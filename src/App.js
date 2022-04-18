import React from 'react';
import IssProvider from './context/IssProvider';
import Table from './componentes/Table';
import './App.css';

function App() {
  return (
    <IssProvider>
      <Table />
    </IssProvider>
  );
}

export default App;
