import { useState } from "react";

function useSort(data, config){
    const [sortOrder,setSortOrder] = useState(null)
    const [sortBy,setSortBy] = useState(null)
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
    return {
        sortBy,
        sortOrder,
        setSortOrderColumn,
        newData
    }
}

export default useSort;