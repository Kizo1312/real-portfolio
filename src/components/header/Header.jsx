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
      <div id="sidebar-toggle">
        <Button onClick={handleOpenSidebar} children={"click"} />
      </div>
      <Sidebar className={open ? "open" : ""} />
    </div>
  );
};

export default Top;
