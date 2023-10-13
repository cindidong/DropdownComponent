"use client";

import React, { useState, useEffect, useRef, forwardRef, useImperativeHandle, MouseEvent } from "react";
import Select from "./Select";
import Panel from "./Panel";
import "./dropdown.css";

interface DropdownProps {
  data: Array<string>;
  isSingleSelect: boolean;
  panelMaxHeight?: string;
  fontSize?: string;
}

const Dropdown = forwardRef(function Dropdown({ data, isSingleSelect, panelMaxHeight = "20rem", fontSize = "18px" }: DropdownProps, ref) {
  // Process the data so the index is stored in an object along with the option
  const processedData = data.map((option, index) => ({ option, index }));
  const [displayDropdown, setDisplayDropdown] = useState<boolean>(false);
  // State for if all options are selected
  const [selectAll, setSelectAll] = useState<boolean>(false);
  const [selectedStates, setSelectedStates] = useState<string[]>([]);
  /*
  Stores the status of the selected options so we don't have to check 
  selectedStates against all the data to determine which options are selected
  */
  const [checkedStates, setCheckedStates] = useState<boolean[]>(
    new Array(data.length).fill(false)
  );
  const dropdownRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => {
    return selectedStates.join(', ');
  }, [selectedStates]);

  // Handles opening and closing of the panel
  function handleClick(): void {
    setDisplayDropdown(!displayDropdown);
  }

  const handlePanelClick = (option: string, index: number): void => {
    // if item not already selected
    if (!selectedStates.includes(option)) {
      // if single select, replace selection and update checkedStates for the blue background
      if (isSingleSelect) {
        setSelectedStates([option])
        // need to do this, as 2 operations are performed: removal of old option + addition of new option
        let newArray = new Array(data.length).fill(false);
        newArray[index] = true;
        setCheckedStates(newArray);
      }
      // if multiselect, add it to the array
      else {
        setSelectedStates(oldArray => [...oldArray, option]);
      }
    }
    // if item selected already
    else {
      // remove item from array in multi select
      if (!isSingleSelect) {
        setSelectedStates(oldArray => oldArray.filter((data) => data != option));
      }
    }
    // update checkStates
    if (!isSingleSelect) {
      const updatedCheckedState = checkedStates.map((item, i) =>
        i === index ? !item : item
      );
      setCheckedStates(updatedCheckedState);
    }
  };

  // Helper to remove all items from the selectedStates and checkedStates arrays
  // Sets selectAll to false as well
  const removeAllItemsHelper = (): void => {
    setSelectedStates([]);
    setCheckedStates(new Array(data.length).fill(false));
    setSelectAll(false);
  }

  // Called when user pressed the x button in multiselect
  const handleRemoveAllClick = (e: MouseEvent): void => {
    e.stopPropagation();
    removeAllItemsHelper();
  }

  // Called when user presses the select all button
  const handleSelectAllClick = (): void => {
    if (selectedStates.length !== data.length) {
      setSelectedStates(data);
      setCheckedStates(new Array(data.length).fill(true));
      setSelectAll(true);
    }
    else {
      removeAllItemsHelper();
    }
  }

  // Updates the select all button to be pressed when all the options are selected
  useEffect(() => {
    if (!isSingleSelect && selectedStates.length === data.length) {
      setSelectAll(true);
    }
    else {
      setSelectAll(false);
    }
  }, [selectedStates]);

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setDisplayDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);


  return (
    <div className="container" ref={dropdownRef} style={{ fontSize: fontSize }}>
      <Select
        fontSize={fontSize}
        isSingleSelect={isSingleSelect}
        displayDropdown={displayDropdown}
        selectedStates={selectedStates}
        handleClick={handleClick}
        handleRemoveAllClick={handleRemoveAllClick} />
      {displayDropdown &&
        <Panel
          fontSize={fontSize}
          panelMaxHeight={panelMaxHeight}
          displayDropdown={displayDropdown}
          isSingleSelect={isSingleSelect}
          selectAll={selectAll}
          processedData={processedData}
          checkedStates={checkedStates}
          handleSelectAllClick={handleSelectAllClick}
          handlePanelClick={handlePanelClick} />
      }
    </div>
  );
});

export default Dropdown