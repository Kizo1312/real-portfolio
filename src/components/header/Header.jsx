import React from "react";
import "./header.css";
import { useState } from "react";
import Button from "../Button";
import Sidebar from "../sidebar/sidebar";
const Top = () => {
  const [open, setOpen] = useState(false);
  const handleOpenSidebar = () => {
    setOpen(!open);
  };
  return (
    <div id="top">
      <Button children={"Toma"} />
      <Button onClick={handleOpenSidebar} children={"click"} />
      {open && <Sidebar />}
    </div>
  );
};

export default Top;
