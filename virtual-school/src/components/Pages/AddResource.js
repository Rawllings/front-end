import React, { useCallback, useEffect, useState } from "react";
// import EducatorLoginSideBar from "./EducatorLoginSideBar";
import EducatorSideBar from "./EducatorSideBar";
import { useDropzone } from "react-dropzone";
import Swal from "sweetalert2";

function AddResource({ courseId }) {
  const token = localStorage.getItem("jwt");
  const [educatorId, setEducatorId] = useState();
  const [courses, setCourses] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    // Handle dropped files
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

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

  const [name, setName] = useState();
  const [file, setFile] = useState();
  const [subject, setSubject] = useState();

  const handleNameChange = (event) => {
    console.log(event.target.value);
  };

  const handleFileChange = (event) => {
    console.log(event.target.value);
  };

  const handleSsubjectChange = (event) => {
    console.log(event.target.value);
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
        resource_name: name,
        course_id: courseId,
        file: file,
        subject: subject,
      }),
    })
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        Swal.fire({
          title: "Success!",
          text: "Student created successfully",
          icon: "success",
          confirmButtonText: "OK",
        });
      });
  }

  // function handleSubmit(e) {
  //   e.preventDefault();

  //   fetch('/resources', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       resource_name:name,
  //       course_id:courseId,
  //       file: file,
  //       subject: subject
  //     })
  //   })
  // }
  // // console.log(courses)

  // const isLoggedIn = sessionStorage.getItem("jwtToken") ? true : false;
  return (
    <>
      <div
        className="text-3xl"
        style={{
          text: "center",
          paddingTop: "100px",
          paddingLeft: "100px",
        }}
      >
        <div className="container flex-col mx-auto ">
          <h1 className="text-3xl font-bold m-4 mx-auto ">Add Resources</h1>
          <div className="p-6 bg-gray rounded-lg shadow-lg mx-auto">
            <form className="text-center p-1">
              <label className="text-xl p-1">Select file</label>
              <input type="file" name="" className="text-lg" />
              <div className="flex flex-col sm:flex-row">
                <div className="w-full sm:w-1/3 mb-6 sm:mb-0 pt-5 ml-10">
                  <label htmlFor="course" className="block font-bold mb-2">
                    Course
                  </label>
                  <div className="relative ">
                    <select
                      id="course"
                      className="appearance-none p-2  pr-8 mb-8 bg-white border border-gray-400 rounded-lg shadow leading-tight focus:outline-none focus:shadow-outline"
                    >
                      {" "}
                      <option value="">Select a course</option>{" "}
                      {courses &&
                        courses.map((course) => (
                          <option key={course.id} value={course.course_name}>
                            {course.course_name}
                          </option>
                        ))}
                    </select>
                    <button className="bg-orange-600 hover:bg-blue-500 mt-6 p-2 px-4 rounded-lg transition-colors duration-300">
                      Submit
                    </button>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg
                        className="h-4 w-4 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 12l-6-6h12z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </form>
            {/* <div
                  {...getRootProps()}
                  className="border-dashed border-2 border-gray-400 p-6 rounded-lg text-center mb-6"
                >
                  <input {...getInputProps()} />
                  {isDragActive ? (
                    <p className="text-gray-800">Drop files here...</p>
                  ) : (
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-12 w-12 mx-auto mb-4 text-gray-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 17a.5.5 0 01-.5-.5V3a.5.5 0 01.853-.354l3.93 3.93a.5.5 0 01.147.354.5.5 0 01-.5.5h-3.5v10a.5.5 0 01-.5.5z"
                          clipRule="evenodd"
                        />
                        <path
                          fillRule="evenodd"
                          d="M4.146 7.146a.5.5 0 01.708 0L10 11.293l5.146-5.147a.5.5 0 11.708.708l-5.5 5.5a.5.5 0 01-.708 0l-5.5-5.5a.5.5 0 010-.708z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <p className="text-gray-500">
                        Drag and drop files here or click to browse
                      </p>
                    </div>
                  )}
                </div> */}
          </div>
        </div>
        <EducatorSideBar />
      </div>
    </>
  );
}

export default AddResource;
