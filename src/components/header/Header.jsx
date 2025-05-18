import "./header.css";
import { useState } from "react";
import Button from "../Button";
import Sidebar from "../sidebar/sidebar";
import icon from "../../assets/icons8-sidebar-64.png";
const Top = () => {
  const [open, setOpen] = useState(false);
  const handleOpenSidebar = () => {
    setOpen(!open);
  };
  return (
    <div id="top">
      <div id="sidebar-toggle">
        <Button onClick={handleOpenSidebar}>
          <img src={icon} alt=""></img>
        </Button>
      </div>
      <Sidebar className={open ? "open" : ""} />
    </div>
  );
};

export default Top;
