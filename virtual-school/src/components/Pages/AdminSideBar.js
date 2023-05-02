import React, { useContext } from "react";
import { FaSignOutAlt, FaRocketchat, FaBookOpen } from "react-icons/fa";
import { BsGraphUp } from "react-icons/bs";
import { SiTestcafe } from "react-icons/si";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Pages/AuthContext";
import { FaChalkboardTeacher } from "react-icons/fa";
import { MdOutlineSchool } from "react-icons/md";
import { BsBook, BsTable } from "react-icons/bs";

function AdminSideBar() {

    const { logout } = useContext(AuthContext);

    const email = localStorage.getItem("email");

    return (
        <>
            <div
                className="text-center text-5xl text-bold max-h-screen max-sm"
                style={{
                    marginTop: "100px",
                    backgroundImage: "https://bit.ly/3GP68X0",
                }}
            >
                <div
                    className="bg-black text-white absolute top-0  h-20"
                    style={{ left: 200, paddingRight: "587px" }}
                >
                    {/* <div className="container mx-auto flex items-center justify-between px-4 py-3"> */}
                    <div
                        className=" text-4xl xl:font-bold font-weight: 600 pt-5 pb-3 text-center pl-20"
                        style={{ paddingLeft: "220px", fontSize: "70px" }}
                    >
                        Admin
                    </div>
                    <aside
                        id="default-sidebar"
                        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
                        aria-label="Sidebar"
                    >
                        <div
                            className="h-full px-3 py-2 overflow-y-auto sidebar"
                            style={{
                                // backgroundColor: "blue",
                                paddingTop: "30px",
                                paddingLeft: "10px",
                                paddingRight: "-40px",
                                backgroundColor: "green"
                            }}
                        >
                            <NavLink to="/student">
                                <h1
                                    className="text-5xl text-white font-bold pb-5 pl-0"
                                    style={{ paddingLeft: "0px" }}
                                >
                                    V<span className="text-5xl text-white ">S </span>
                                </h1>
                            </NavLink>
                            <ul className="space-y-2 font-medium">
                                <li>{email ? <h1 className="text-xs pb-3">Welcome {email}</h1> : null}</li>

                                {/* <li>
                                    <NavLink
                                        to="/student/resources"
                                        className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-black dark:hover:bg-gray-700"
                                    >
                                        <div className="text-xl">
                                            <FaBookOpen />
                                        </div>
                                        <span className="ml-3 text-2xl text-start">Resource</span>
                                    </NavLink>
                                </li> */}

                                <li>
                                    <NavLink
                                        to="/admin/educator"
                                        className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-black dark:hover:bg-gray-700"
                                    >
                                        <div className="text-xl">
                                            <FaChalkboardTeacher />
                                        </div>
                                        <span className="flex-1 ml-3 text-2xl text-start">
                                            Add Educator
                                        </span>
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink
                                        className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-black dark:hover:bg-gray-700"
                                        to="/admin/student"
                                    >
                                        <div className="text-xl">
                                            <MdOutlineSchool />
                                        </div>
                                        <span className="flex-1 ml-3 text-2xl text-start">
                                            Add student
                                        </span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-black dark:hover:bg-gray-700"
                                        to="/admin/course"
                                    >
                                        <div className="text-xl">
                                            <BsBook />
                                        </div>
                                        <span className="flex-1 ml-3 text-2xl text-start">
                                            Add Course
                                        </span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-black dark:hover:bg-gray-700"
                                        to="/admin/allcourse"
                                    >
                                        <div className="text-xl">
                                            <BsTable />
                                        </div>
                                        <span className="flex-1 ml-3 text-2xl text-start">
                                            View Course
                                        </span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-black dark:hover:bg-gray-700"
                                        style={{ marginTop: "100px" }}
                                        to="/login"
                                    >
                                        <div className="text-xl">
                                            <FaSignOutAlt />
                                        </div>
                                        <span className="flex-1 ml-3 text-2xl text-start">
                                            <button
                                                onClick={() => {
                                                    logout();
                                                }}
                                            >
                                                Logout
                                            </button>
                                        </span>
                                    </NavLink>
                                </li>
                                <div style={{ paddingTop: "1px" }}>
                                    <hr className="border-4"></hr>
                                </div>
                            </ul>
                        </div>
                    </aside>
                </div>
            </div>
        </>
    );
}

export default AdminSideBar;
