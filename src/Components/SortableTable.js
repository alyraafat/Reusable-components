import React, { useState } from 'react'
import Table from './Table'
import { GoArrowSmallDown, GoArrowSmallUp } from 'react-icons/go';
import useSort from '../hooks/use-sort';

function SortableTable(props) {
    const { data, config } = props

    const {
        sortBy,
        sortOrder,
        setSortOrderColumn,
        newData
    } = useSort(data,config)
    
    
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
