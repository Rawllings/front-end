import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import aboutImg from "../images/hero-bcg-6.jpg";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FaChalkboardTeacher } from "react-icons/fa";
import { MdOutlineSchool } from "react-icons/md";
import { BsBook, BsTable } from "react-icons/bs";
import axios from "axios";
import Swal from "sweetalert2";

function CourseEntry() {
  const [courseName, setCourseName] = useState("");
  const [schoolId, setSchoolId] = useState("");
  const [educatorId, setEducatorId] = useState("");
  const [schools, setSchools] = useState([]);
  const [educators, setEducators] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSchools = async () => {
      const response = await axios.get("/schools");
      setSchools(response.data);
    };
    const fetchEducators = async () => {
      const response = await axios.get("/educators");
      setEducators(response.data);
    };
    fetchSchools();
    fetchEducators();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newCourse = {
      course_name: courseName,
      school_id: schoolId,
      educator_id: educatorId,
    };
    await axios.post("/courses", newCourse);
    navigate("/admin/allcourse");
    Swal.fire({
      icon: "success",
      title: "Course created successfully",
      showConfirmButton: false,
      timer: 1000,
    });
  };

  const dashboardItems = [
    // {
    //   path: "/admin/school",
    //   name: "Add School",
    //   icon: <FaSchool />,
    // },
    {
      path: "/admin/educator",
      name: "Add Educator",
      icon: <FaChalkboardTeacher />,
    },
    {
      path: "/admin/student",
      name: "Add Student",
      icon: <MdOutlineSchool />,
    },
    {
      path: "/admin/course",
      name: "Add Course",
      icon: <BsBook />,
    },
    {
      path: "/admin/allcourse",
      name: "View Courses",
      icon: <BsTable />,
    },
  ];

  const email = localStorage.getItem("email");

  return (
    <>
      <div>
        <NavLink to="/admin">
          <h1
            className="text-5xl text-white font-bold pb-5 pl-0 "
            style={{ paddingLeft: "20px" }}
          >
            V<span className="text-5xl text-black ">S </span>
          </h1>
        </NavLink>
        <Dashboard dashboardItems={dashboardItems} />
        <div
          className="bg-orange-400 absolute top-0 w- h-20"
          style={{ left: 200 }}
        >
          {/* <div className="container mx-auto flex items-center justify-between px-4 py-3"> */}
          <div className="bg-black text-white text-4xl xl:font-bold font-weight: 600 px-20 flex py-5">
            Administrator
            <div>
              <h1
                className="text-6xl"
                style={{ marginTop: "15px", marginLeft: "300px" }}
              >
                {" "}
                {email ? (
                  <h1 className="text-xs pb-3">Welcome {email}</h1>
                ) : null}
              </h1>
            </div>
          </div>

          <Wrapper className="page relative section section-center px-5 py-20">
            <img src={aboutImg} className="mx-10" alt="nice desk" />
            <article>
              <div className="mb-4">
                <h2
                  className="block text-black font-bold mb-2"
                  htmlFor="name"
                >
                  Add Course
                </h2>
                <div className="w-16 h-1 bg-green-500"></div>
              </div>

              <div className="flex justify-center items-center h-screen">
                <form
                  onSubmit={handleSubmit}
                  className="bg-white shadow-md rounded px-8 pt-0 pb-8 mb-60 w-1/2"
                >
                  <div className="mb-4">
                    <label
                      htmlFor="courseName"
                      className="block text-gray-700 font-bold mb-2"
                    >
                      Course Name:
                    </label>
                    <input
                      type="text"
                      id="courseName"
                      value={courseName}
                      onChange={(e) => setCourseName(e.target.value)}
                      required
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="schoolId"
                      className="block text-gray-700 font-bold mb-2"
                    >
                      School:
                    </label>
                    <select
                      id="schoolId"
                      value={schoolId}
                      onChange={(e) => setSchoolId(e.target.value)}
                      required
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    >
                      <option value="">Select a school</option>
                      {schools.map((school) => (
                        <option
                          key={school.id}
                          value={school.id}
                          style={{ display: "block" }}
                        >
                          {school.school_name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="educatorId"
                      className="block text-gray-700 font-bold mb-2"
                    >
                      Educator:
                    </label>
                    <select
                      id="educatorId"
                      value={educatorId}
                      onChange={(e) => setEducatorId(e.target.value)}
                      required
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    >
                      <option value="">Select an educator</option>
                      {educators.map((educator) => (
                        <option
                          key={educator.id}
                          value={educator.id}
                          style={{ display: "block" }}
                        >
                          {educator.educator_name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex items-center justify-center">
                    <button
                      type="submit"
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      style={{backgroundColor:"green"}}
                    >
                      Create Course
                    </button>
                  </div>
                </form>

                {/* <form
                  className="bg-white shadow-md rounded px-8 pt-0 pb-8 mb-60 w-1/2"
                  onSubmit={handleSubmit}
                >
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="name"
                    >
                      Course Name
                    </label>
                    <input
                      value={name}
                      onChange={handleNameChange}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="name"
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                    />
                  </div>


                  <div className="flex items-center justify-between">
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </form> */}
              </div>
            </article>
          </Wrapper>
        </div>
      </div>
    </>
  );
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export default CourseEntry;
