import React from 'react'
import "./dropdown.css";

interface DropDownProps {
    displayDropdown: boolean;
}

const DropDownIcon = ({ displayDropdown }: DropDownProps) => {
    return (
        displayDropdown ?
            <img src='/dropup.svg' alt="upArrow" />
            : <img src='/dropdown.svg' alt="downArrow" />
    )
}

export default DropDownIcon;