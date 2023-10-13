import React from 'react'
import PanelItem from './PanelItem'
import Checkbox from './CheckBox';
import "./dropdown.css";

type Record = {
    option: string;
    index: number;
};

interface PanelProps {
    fontSize: string;
    panelMaxHeight: string;
    displayDropdown: boolean;
    isSingleSelect: boolean;
    selectAll: boolean;
    processedData: Array<Record>;
    checkedStates: Array<boolean>;
    handleSelectAllClick: () => void;
    handlePanelClick: (option: string, index: number) => void;
}

const Panel = ({ fontSize, panelMaxHeight, displayDropdown, isSingleSelect, selectAll, processedData, checkedStates, handleSelectAllClick, handlePanelClick }: PanelProps) => {
    return (
        <ul className={displayDropdown ? "panel panel-fade-in" : "panel"} style={{ maxHeight: panelMaxHeight }}>
            {!isSingleSelect &&
                <li className={selectAll ? "panel-item-selected panel-item-top" : "panel-item panel-item-top"} onClick={handleSelectAllClick}>
                    <Checkbox fontSize={fontSize} isSelected={selectAll} option="select-all" />
                    <span>Select All</span>
                </li>
            }
            {!isSingleSelect && <hr className="panel-divider" />}
            {processedData.map((item) => (
                <PanelItem
                    fontSize={fontSize}
                    key={item.index}
                    isSingleSelect={isSingleSelect}
                    isSelected={checkedStates[item.index]}
                    item={item}
                    handlePanelClick={handlePanelClick} />
            ))}
        </ul>
    );
}

export default Panel;