import React from "react";
import AlertDialogExample from "./AlertDialog";
import MenuExample from "./Menu";
import ModalExample from  "./Modal";
import PopoverExample from "./Popover";
import TooltipExample from "./Tooltip";

// Start editing here, save and see your changes.
export default function App() {
  return (
    <div>
      <center>
      <h1>Alert Dialog Example</h1>
      <AlertDialogExample/>
      <h1>Menu Example</h1>
      <MenuExample/>
      <h1>Modal Example</h1>
      <ModalExample/>
      <h1>Popover Example</h1>
      <PopoverExample/>
      <h1>Tooltip Example</h1>
      <TooltipExample/>
      </center>
    </div>
    
  );
}