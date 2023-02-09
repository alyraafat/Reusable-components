import { useState } from "react";
import Dropdown from "../Components/Dropdown";


function DropdownPage() {
    const [selection,setSelection] = useState(null)

    const handleSelect = (val) => {
        setSelection(val)
    }
    const options = [
        { label: 'Red', value: 'red' },
        { label: 'Green', value: 'green' },
        { label: 'Blue', value: 'blue' },
    ];
    return (
        <div className="flex">
            <Dropdown options={options} value={selection} onChange={handleSelect}/>
            {/* <Dropdown options={options} value={selection} onChange={handleSelect}/> */}
        </div>
    )
}

export default DropdownPage
