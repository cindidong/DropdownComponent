import React from 'react'
import "./dropdown.css";

interface CheckBoxProps {
    fontSize: string;
    isSelected: boolean;
    option: string;
}

const Checkbox = ({ fontSize, isSelected, option }: CheckBoxProps) => {
    return (
        <input style={{ fontSize: fontSize }} type="checkbox" name={option} id={option} value={option} checked={isSelected} onChange={(e) => e.stopPropagation()} />
    );
}

export default Checkbox