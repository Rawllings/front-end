import React from "react";

import { NavLink } from "react-router-dom";


import "../Pages/Dashboard.css";

function Dashboard({ dashboardItems, children }) {


  return (
    <div className="container  ">
      {/* SIDEBAR/ NAVBAR  */}

      {/* logo upper side  */}
      <div className="sidebar">
        <div className="sidebar">
          <div className="top_section">
            <h1 className="logo">
              R
            </h1>

            {/* <div className="bars">
            <FaBars  />
          </div> */}
          </div>

          {/* details side  */}

          <aside id="default-sidebar"
            className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
            aria-label="Sidebar">
            <div
              className="h-full px-3 py-2 overflow-y-auto sidebar"
              style={{
                // backgroundColor: "blue",
                paddingTop: "30px",
                paddingLeft: "20px",
                paddingRight: "-20px",
              }}
            >
              <NavLink to="/admin">
                <h1
                  className="text-5xl text-white font-bold pb-5 pl-0 "
                  style={{ paddingLeft: "20px" }}
                >
                  V<span className="text-5xl text-yellow-400 ">S </span>
                </h1>
              </NavLink>
              {dashboardItems.map((item) => (
                <li>
                  <NavLink
                    to={item.path}
                    // key={index}
                    className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-black dark:hover:bg-gray-700"
                  >
                    <svg
                      aria-hidden="true"
                      className="flex-shrink-0 w-6 h-6 text-white  transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d={item.d}
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span className="flex-1 ml-3 text-2xl text-start">{item.name}</span>
                  </NavLink>
                </li>
              ))}
            </div>
          </aside>
        </div>
        <br />

        {/* CONTENT SIDE  */}

        <div>
          <main>{children}</main>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
