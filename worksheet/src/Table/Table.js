import React, {useEffect, useState} from 'react'
// import DataTable from 'react-data-table-component'
import TableHeader from './TableHeader';
import TableData from './TableData';
import "./table.css"


const Table = ({ columns, data }) => {    

    return (

        <div>
            <table class="table table-bordered" id="contacts_table">

                <TableHeader columns={columns} />
                <TableData data={data()} />
                
               
            </table>
            <br />
            <button className='button' >Atualizar</button>
                
        </div>
    )  
   
    
}

export default Table