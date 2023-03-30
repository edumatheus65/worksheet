import React, { useState, useEffect } from 'react';
import './App.css';
import Table from './Table/Table';

function App() {

  const [data, setData] = useState([])
  const [columns, setColumns] = useState([])

  const loadingData = () => {
    setColumns({
      Municipio_Ano_Tipo: 'ANO & TIPO DA AÇÃO',
      JAN: 'Janeiro',
      FEV: 'Fevereiro',
      MAR: 'Março',
      ABR: 'Abril',
      MAI: 'Maio',
      JUN: 'Junho'
    })
    return setColumns
  }

  const loadingData_2 = () => {
    setData({
      Municipio_Ano_Tipo: 'ANO & TIPO DA AÇÃO',
      JAN: 'Janeiro',
      FEV: 'Fevereiro',
      MAR: 'Março',
      ABR: 'Abril',
      MAI: 'Maio',
      JUN: 'Junho'
    })
    return setData
  }

  useEffect(() => {
    loadingData(),
      loadingData_2()
  }, [])

  return (
    <div className="App">
      <Table columns={columns} data={data} />
    </div>
  );

}

export default App;