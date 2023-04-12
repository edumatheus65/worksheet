import React from 'react'

function TableHeader({ columns }) {
    const keys = Object.keys(columns.length?columns[0]:{});  
    return (
        <thead>
            <tr key={columns}>
                {
                    keys.map(key => <th key={key}>{columns[key] || key}</th>)
                }
            </tr>
        </thead>
    )
}
export default TableHeader