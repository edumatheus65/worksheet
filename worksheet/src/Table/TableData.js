import React from 'react'



const TableData = ({ data }) => {
    const keys = Object.keys(data || {});     

    return (
        <tbody>
            {/* {
                data.map(value => */}

                    <tr>
                        {
                            keys.map(key => <td key={key}>{data[key]}</td>)
                        }
                    </tr>
                {/* )
            } */}

        </tbody>



    )
}

export default TableData