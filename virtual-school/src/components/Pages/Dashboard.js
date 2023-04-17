import React from "react";
// import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";


import "../Pages/Dashboard.css";
// import "../components/Dashboard.css"

function Dashboard({ dashboardItems, children }) {
  // const [isOpen, setIsOpen] = useState(false);
  // const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="container">
      {/* SIDEBAR/ NAVBAR  */}

      {/* logo upper side  */}
      <div  className="sidebar">
        <div className="top_section">
          <h1 className="logo">
            R
          </h1>

          {/* <div className="bars">
            <FaBars  />
          </div> */}
        </div>

        {/* details side  */}

        {dashboardItems.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassName="active"
          >
            <div className="icon">{item.icon}</div>
            <div
              
              className="link_text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <br />

      {/* CONTENT SIDE  */}

      <div>
        <main>{children}</main>
      </div>
    </div>
  );
}

export default Dashboard;