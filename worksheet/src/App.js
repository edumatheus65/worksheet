import React, {useState, useEffect} from 'react';

import './App.css';
import Table from './Table/Table';
// import { useFetch } from './fetchApi/useFetch';


function App() { 

  const [dados, setDados] = useState([])

  const data = async () => {
    const res = await fetch('http://localhost:7000/data')
    const data = await res.json()
    // console.log(data.wordList)
    setDados(data.wordList)
    return data.wordList    
  }

  const columns = {
    Municipio_Ano_Tipo: 'ANO & TIPO DA AÇÃO',
    JAN: 'Janeiro',
    FEV: 'Fevereiro',
    MAR: 'Março',
    ABR: 'Abril',
    MAI: 'Maio',
    JUN: 'Junho' 
  }

  useEffect(() => {
    data()
}, []) 
  
  
    return (
      <div className="App">
        
        <Table columns={columns} data={data} />
        
      </div>
    );
  
}

export default App;
