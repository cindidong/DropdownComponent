# Dropdown Component

React dropdown component built from scratch with no external libraries. Component is located in [Dropdown.tsx](https://github.com/cindidong/DropdownComponent/blob/main/src/app/components/Dropdown.tsx). Starting page is a simple example on how you would use the component. Once you press the button, it prints all the selected options to the console. 

## How to Run
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
Open http://localhost:3000/.

## Props
### data
An array of strings that are the options for the select
### isSingleSelect
Set to true if you want a single select, and false if you want a multi select.
### panelMaxHeight
Optional, defaults to 20rem. Controls the horizontal height of the select/option panel. Takes in any form of sizing (px, %, em, rem, etc). 
### fontSize
Optional, defaults to 18px. Changes the font size for the container. This changes the select bar size as well to accommodate. Takes in any form of sizing (px, %, em, rem, etc), but most reliable with px. The sub components are dependent on this size for their own sizes (mostly used em in the CSS styling).
