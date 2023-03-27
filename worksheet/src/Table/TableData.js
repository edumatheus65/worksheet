import React from 'react'

// const TableData = ( { data } ) => {

//     const keys = Object.keys(data[0])    
//     return (
//         <tbody>
//             {
//                 data.map(value =>            
//             <tr>
//                 {keys.map(key => <td key={key}>{value[key]}</td>)}
//             </tr>
//             )
//         }
//         </tbody>
//     )
// }

const TableData = ( { data } ) => {

    const keys = Object.keys(data.length?data[0]:{});
    return (

        <tbody>
                {
                    console.log(data)
                }
        </tbody>

    )
}

export default TableData