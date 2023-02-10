import React, { useState } from 'react'
import Table from './Table'
import { GoArrowSmallDown, GoArrowSmallUp } from 'react-icons/go';

function SortableTable(props) {
    const [sortOrder,setSortOrder] = useState(null)
    const [sortBy,setSortBy] = useState(null)

    const { data, config } = props

    const setSortOrderColumn = (label)=>{
        if(sortBy && label!==sortBy){
            setSortOrder('asc');
            setSortBy(label);
            return;
        }
        if(sortOrder===null) {
            setSortOrder('asc');
            setSortBy(label);
        } else if(sortOrder==='asc'){
            setSortOrder('desc');
            setSortBy(label);
        }else {
            setSortOrder(null);
            setSortBy(null);
        }
    }

    
    const updatedConfig = config.map((column)=>{
        if(column.sortValue){
            return {
                ...column, 
                header: 
                <th 
                    className="cursor-pointer hover:bg-gray-100"
                    onClick={()=>setSortOrderColumn(column.label)}
                >
                    <div className="flex items-center">
                        {getIcons(column.label, sortBy, sortOrder)}
                        {column.label}
                    </div>
                </th>
            }
        }
        return column
    })

    let newData = [...data];
    if(sortBy && sortOrder){
        newData.sort((a,b)=>{
            const { sortValue } = config.find((column) => column.label === sortBy);
            const valueA = sortValue(a);
            const valueB = sortValue(b);

            const reverseOrder = sortOrder==='asc'?1:-1

            if(typeof valueA === 'string'){
                return valueA.localeCompare(valueB) * reverseOrder
            }else {
                return (valueA - valueB) * reverseOrder
            }
        })
    }
    
    return (
        <div>
            {/* {sortBy}-{sortOrder} */}
            <Table {...props} data={newData} config={updatedConfig}/>
        </div>
    )
}
function getIcons(label,sortBy,sortOrder) {
    if(label!==sortBy || sortOrder===null){
        return (
            <div>
                <GoArrowSmallUp/>
                <GoArrowSmallDown/>
            </div>
        )
    }else {
        if(sortOrder==='asc'){
            return (
                <div>
                    <GoArrowSmallUp/>
                </div>
            )
        }else if(sortOrder==='desc'){
            return (
                <div>
                    <GoArrowSmallDown/>
                </div>
            )
        }
    }
}
export default SortableTable
