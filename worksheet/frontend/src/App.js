import React, { useState, useEffect } from 'react';
import './App.css';
import Table from './components/Table/Table';

function App() {
  const [data, setData] = useState([])
  const [columns, setColumns] = useState([])

  const loadingData = async () => {
    const url = 'http://localhost:8000/data/'
    const res = await fetch(url)
    const data = await res.json()
    setColumns(data.columns)
    setData(data.data)
  }
  
  useEffect(() => {
    loadingData()   
  }, [])

  return (
    <div className="App">
      <Table columns={columns} data={data} />
    </div>
  );
}
export default App;