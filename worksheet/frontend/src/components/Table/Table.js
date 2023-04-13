import React from 'react'
import TableHeader from './TableHeader';
import TableData from './TableData';
import "./Table.css"

const Table = ({ columns, data }) => {       
    return (
        <div>
            <table className="table table-bordered" id="contacts_table">
                <TableHeader columns={columns} />
                <TableData data={data} />
            </table>
            <br />            
            <button className='button'>Atualizar</button>
        </div>
    )
}
export default Table