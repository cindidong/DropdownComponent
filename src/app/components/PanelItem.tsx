import React from 'react'
import Checkbox from './CheckBox';
import "./dropdown.css";

type Record = {
    option: string;
    index: number;
};

interface PanelItemProps {
    fontSize: string;
    isSingleSelect: boolean;
    isSelected: boolean;
    item: Record;
    handlePanelClick: (option: string, index: number) => void;
}

const PanelItem = ({ fontSize, isSingleSelect, isSelected, item, handlePanelClick }: PanelItemProps) => {
    return (
        <li className={isSelected ? "panel-item-selected" : "panel-item"} onClick={() => handlePanelClick(item.option, item.index)}>
            {!isSingleSelect && <Checkbox fontSize={fontSize} isSelected={isSelected} option={item.option} />}
            <span>{item.option}</span>
        </li>
    )
}

export default PanelItem