"use client";

import React, { useRef } from "react";
import Dropdown from "./components/Dropdown"


export default function Home() {
  const data: string[] = ['option 1', 'option 2', 'option 3', 'option 4', 'option 5', 'option 6', 'option 7', 'option 8', 'option 9', 'option 10', 'option 11', 'option 12'];
  const isSingleSelect = false;
  const panelHeight = "20rem"
  const fontSize = "18px"
  const ref = useRef(null);

  function handleClick() {
    console.log(ref.current);
  }

  return (
    <div>
      <div style={{ width: "100%" }}>
        <Dropdown
          ref={ref}
          data={data}
          isSingleSelect={isSingleSelect}
          panelMaxHeight={panelHeight}
          fontSize={fontSize}
        />
      </div>
      <button style={{ marginTop: "30px", padding: "10px", width: "100%", fontSize: "20px"}} type="button" onClick={handleClick}>
        Submit Choices
      </button>
    </div>
  );
}
