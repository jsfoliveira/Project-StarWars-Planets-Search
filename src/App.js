import React from 'react';
import IssProvider from './context/IssProvider';
import Table from './pages/Table';
import './App.css';

function App() {
  return (
    <IssProvider>
      <Table />
    </IssProvider>
  );
}

export default App;
