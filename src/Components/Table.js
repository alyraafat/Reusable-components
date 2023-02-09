import React from 'react'

function Table({ data, config, keyFn }) {
    const renderedHeaders = config.map((column)=>{
        return <th key={column.label}>{column.label}</th>
    });

    const renderedData = data.map((val)=>{
        const renderedCells = config.map((column)=>{
            return <td className="p-2" key={column.label}>{column.render(val)}</td>
        })
        return <tr className="border-b" key={keyFn(val)}>{renderedCells}</tr>
    })
    return (
        <table className="table-auto border-spacing-2">
            <thead>
                <tr className="border-b-2">{renderedHeaders}</tr>
            </thead>
            <tbody>
                {renderedData}
            </tbody>
        </table>
    )
}

export default Table
