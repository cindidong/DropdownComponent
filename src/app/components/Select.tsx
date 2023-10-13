import React, { MouseEvent } from 'react'
import DropDownIcon from './DropDownIcon';
import "./dropdown.css";

interface SelectProps {
    fontSize: string;
    isSingleSelect: boolean;
    displayDropdown: boolean;
    selectedStates: Array<String>;
    handleClick: () => void;
    handleRemoveAllClick: (e: MouseEvent) => void;
}

const Select = ({ fontSize, isSingleSelect, displayDropdown, selectedStates, handleClick, handleRemoveAllClick }: SelectProps) => {
    const listOfSelectedOptions = selectedStates.join(', ')
    return (
        <div className="dropdown" onClick={handleClick} style={displayDropdown ? { borderColor: "#1770c6" } : {}}>
            <button className="dropdown-button" value={listOfSelectedOptions}>
                <p style={{ fontSize: fontSize }}>{listOfSelectedOptions}</p>
            </button>
            {!isSingleSelect &&
                <div className="deselect-items" onClick={handleRemoveAllClick}>
                    <img src='/x.svg' alt="x" />
                </div>
            }
            {!isSingleSelect && <hr />}
            <div className="last-item">
                <DropDownIcon displayDropdown={displayDropdown} />
            </div>
        </div>
    );
}

export default Select;