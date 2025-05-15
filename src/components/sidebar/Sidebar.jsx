import "./sidebar.css";

const Sidebar = ({ className }) => {
  return (
    <div id="sidebar" className={className}>
      <a href="#top">Home</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
      <a href="#footer">Footer</a>
    </div>
  );
};

export default Sidebar;
