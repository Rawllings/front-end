<<<<<<< HEAD
import React from "react";
// import EducatorLoginSideBar from "./EducatorLoginSideBar";
=======
import React, { useCallback, useEffect, useState } from "react";
import EducatorLoginSideBar from "./EducatorLoginSideBar";
>>>>>>> a48944960e9aa7e3999378609e085cb359f9f4ec
import EducatorSideBar from "./EducatorSideBar";
import { useDropzone } from 'react-dropzone';

function AddResource() {
  const token = localStorage.getItem("jwt");
  const [educatorId, setEducatorId] = useState();
  const [courses, setCourses] = useState([]);
  
  const onDrop = useCallback(acceptedFiles => {
    // Handle dropped files
  }, []);

<<<<<<< HEAD
  // const isLoggedIn = sessionStorage.getItem("jwtToken") ? true : false;
  // const email = sessionStorage.getItem("email");
  // console.log(email);
=======
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
>>>>>>> a48944960e9aa7e3999378609e085cb359f9f4ec

   useEffect(() => {
    fetch("/loggedin", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setEducatorId(data.educator.id);
        fetch(`/educator_courses/${data.educator.id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
          .then((res) => res.json())
          .then((data) => setCourses(data));
      });
  }, []);
  // console.log(courses)
  return (
<<<<<<< HEAD
  
 
<>
<div
      className="text-center text-5xl text-bold max-h-screen max-sm"
      style={{
        marginTop: "100px",
        backgroundImage: "https://bit.ly/3GP68X0",
      }}
    >
      <div
        style={{
          paddingTop: "10px",
          marginLeft: "300px",
          marginRight: "300px",
          paddingLeft: "100px",
        }}
      >
        <form>
          <div class="mb-6">
            <label
              for="topic"
              class="block mb-2 text-sm font-medium text-black"
            >
              Topic
            </label>
            <input
              type="text"
              id="topic"
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required
            />
          </div>
          <div class="mb-6">
            <label
              for="resource-type"
              class="block mb-2 text-sm font-medium text-black"
            >
              Resource type
            </label>
            <select
              id="resource-type"
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required
            >
              <option value="">Select resource type</option>
              <option value="video">Video</option>
              <option value="pdf">PDF</option>
            </select>
          </div>
          <div class="mb-6">
            <label
              for="resource-link"
              class="block mb-2 text-sm font-medium text-black"
            >
              Resource link
            </label>
            <input
              type="url"
              id="resource-link"
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required
            />
          </div>
          <div class="mb-6">
            <label
              for="comments"
              class="block mb-2 text-sm font-medium text-black"
            >
              Comments
            </label>
            <textarea
              id="comments"
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 h-32 resize-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            ></textarea>
          </div>
          <button
            type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
      {/* FORM  */}
      <EducatorSideBar />
    </div>





   
=======
    <>
    
    <div
        className="text-3xl"
        style={{
          text: "center",
          paddingTop: "200px",
          paddingLeft: "100px",
        }}
      >
      <div className="container flex-col mx-auto ">
      <h1 className="text-3xl font-bold m-4 mx-auto ">Add Resources</h1>
      <div className="p-6 bg-gray rounded-lg shadow-lg mx-auto">
        <div {...getRootProps()} className="border-dashed border-2 border-gray-400 p-6 rounded-lg text-center mb-6">
          <input {...getInputProps()} />
          {isDragActive ? (
            <p className="text-gray-800">Drop files here...</p>) : (
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 17a.5.5 0 01-.5-.5V3a.5.5 0 01.853-.354l3.93 3.93a.5.5 0 01.147.354.5.5 0 01-.5.5h-3.5v10a.5.5 0 01-.5.5z" clipRule="evenodd" />
                <path fillRule="evenodd" d="M4.146 7.146a.5.5 0 01.708 0L10 11.293l5.146-5.147a.5.5 0 11.708.708l-5.5 5.5a.5.5 0 01-.708 0l-5.5-5.5a.5.5 0 010-.708z" clipRule="evenodd" />
              </svg>
              <p className="text-gray-500">Drag and drop files here or click to browse</p>
            </div>
          )}
        </div>
        <div className="flex flex-col sm:flex-row">
          <div className="w-full sm:w-1/3 mb-6 sm:mb-0">
            <label htmlFor="course" className="block font-bold mb-2">Course</label>
            <div className="relative">
              <select id="course" className="appearance-none p-2 pr-8 mb-8 bg-white border border-gray-400 rounded-lg shadow leading-tight focus:outline-none focus:shadow-outline">
               {" "} <option value="">Select a course</option>{" "}
               {courses && courses.map((course)=> (
                  <option key={course.id} value={course.course_name}>{course.course_name}</option>
               ))
              } 
               
              </select>
              <button className="bg-orange-600 hover:bg-blue-500 mt-6 p-2 px-4 rounded-lg transition-colors duration-300">Submit</button>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M10 12l-6-6h12z" />
                </svg>
              </div>
              </div>
              </div>
              </div>
              </div>
              </div>
              </div>
            <EducatorLoginSideBar/>
>>>>>>> a48944960e9aa7e3999378609e085cb359f9f4ec
    </>
    
  );
}

export default AddResource;
