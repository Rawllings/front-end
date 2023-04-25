import React, { useState } from "react";
import Dashboard from "./Dashboard";
import aboutImg from "../images/hero-bcg-6.jpg";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FaSchool, FaChalkboardTeacher } from "react-icons/fa";
import { MdOutlineSchool } from "react-icons/md";
import { BsBook, BsTable } from "react-icons/bs";

function CourseEntry({ educators, educatorId, setSelectedEducatorId, schoolId }) {
  const [name, setName] = useState();
  // const [school, setSchool] = useState();
  const [exam, setExam] = useState();
  // const [educator, setEducator] = useState();

  const handleEducatorSelect = (event) => {
    const schoolId = event.target.value;
    setSelectedEducatorId(schoolId);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();

    // const user = {
    //     name: name,
    //   email: email,
    //   schoolId: schoolId
    // };
    // console.log(user);

    fetch("/students", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        course_name: name,
        school_id: schoolId,
        exam_id: exam,
        educator_id: educatorId,
      }),
    })
      .then((res) => res.json())
      .then((response) => console.log(response));
  }

  const dashboardItems = [
    {
      path: "/admin/school",
      name: "Add School",
      icon: <FaSchool />,
    },
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
      path: "/admin/class",
      name: "View Courses",
      icon: <BsTable />,
    },
  ];
  return (
    <>
      <div>
        <NavLink to="/admin">
          <h1
            className="text-5xl text-white font-bold pb-5 pl-0 "
            style={{ paddingLeft: "20px" }}
          >
            V<span className="text-5xl text-yellow-400 ">S </span>
          </h1>
        </NavLink>
        <Dashboard dashboardItems={dashboardItems} />
        <div
          className="bg-orange-400 absolute top-0 w- h-20"
          style={{ left: 200 }}
        >
          {/* <div className="container mx-auto flex items-center justify-between px-4 py-3"> */}
          <div className=" text-4xl xl:font-bold font-weight: 600 px-20 py-5">
            Administrator
          </div>

          <Wrapper className="page relative section section-center px-5 py-20">
            <img src={aboutImg} className="mx-10" alt="nice desk" />
            <article>
              <div className="title">
                <h2 className="text-2xl font-bold">Add Course</h2>
                <div className="w-16 h-1 bg-gray-700"></div>
              </div>

              <div className="flex justify-center items-center h-screen">
                <form
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

                  <div>
                    <div className="text-black">
                      <select
                        value={educatorId}
                        onChange={handleEducatorSelect}
                      >
                        {" "}
                        <option value="">Select Educator</option>{" "}
                        {/* <div class="card">
        {Array.isArray(reviews)
          ? reviews.map((review, index) => {
              return (
                <div key={index} style={{ width: "18rem;" }}>
                  <h5 class="card-header">Comment</h5>
                  <div class="card-body">
                    <p class="card-text">{review.comment}</p>
                    <a href="/" class="btn btn-primary">
                      Update
                    </a>
                  </div>
                </div>
              );
            })
          : null}
      </div>
    </> */}
                        {educators &&
                          educators.map((edu) => (
                            <option key={edu.id} value={edu.id}>
                              {edu.school_name}
                            </option>
                          ))}
                      </select>
                      <p>Selected school ID: {educatorId}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </form>
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


