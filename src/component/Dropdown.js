import { React, useState } from 'react';
 import Select from 'react-select';
import './Dropdown.css';
function Dropdown ()
{
    const colors = [
        {
            id: 1,
            label: "Red",
        },
        {
            id: 2,
            label: "Lavender",
        },
        {
            id: 3,
            label: "Crimson",
        },
        {
            id: 4,
            label: "Darkblue",
        },
        {
            id: 5,
            label: "Green",
        },
        {
            id: 6,
            label: "Grey",
        },
        {
            id: 7,
            label: "Black",
        },
        {
            id: 8,
            label: "Aquamarine",
        },
        {
            id: 9,
            label: "Brown",
        },
    ]

    const [color, setColor] = useState("");

    const click = (event) => {
        setColor(event.label);
    }
    return (
        <div className='dropdownWrapper'>
            <style>
            {
                `.button 
                {
                 background-color:` + color + ';'
                }
            </style>

            <center>
            <h1><u>Color Changer</u></h1>
            </center>
            
            <div className="dropdownContainer">
                <Select options={colors} onChange={click} className='select' placeholder="Select Color"></Select>
            </div>
            <div className="block">
                <center>
                    <button className='button'></button>
                </center>
            </div>
        </div>

    );
}
export default Dropdown;