import React, {useEffect, useState} from 'react'
import DataTable from 'react-data-table-component'

const [dados, setDados] = useState([])

const fetchData = async () => {        
    const url = 'http://localhost:7000/data/'
    const res =  await fetch(url)
    const data = await res.json()
    // console.log(data.wordList);
    setDados(data.wordList)
}


const columns = [
  {
    name: "Municipios",
    selector: (row) => row.Municipio_Ano_Tipo,        
  },
  {
    name: "Janeiro",
    selector: (row) => row.JAN,
  },
  {
    name: "Fevereiro",
    selector: (row) => row.FEV,
  },
  {
    name: "Março",
    selector: (row) => row.MAR,
  },
  {
    name: "Abril",
    selector: (row) => row.ABR,
  },
  {
    name: "Maio",
    selector: (row) => row.MAI,
  },
  {
    name: "Junho",
    selector: (row) => row.JUN,
  },
]    

const data = [
  
]

useEffect(() => {
  fetchData()
}, [])

return (

    <div>
        <table class="table table-bordered" id="contacts_table">
            
            <DataTable columns={columns} data={dados} />

        </table>
        <br />
        <button className='button'>Atualizar</button>