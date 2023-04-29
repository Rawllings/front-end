import React, { useEffect, useState } from "react";
import CardCourse from "./CardCourse";
// import EducatorLoginSideBar from "./EducatorLoginSideBar";
import EducatorSideBar from "./EducatorSideBar";

function Attendance() {
  const token = localStorage.getItem("jwt");
  const [educatorId, setEducatorId] = useState();
  const [courses, setCourses] = useState([]);

  // console.log(courses)

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
  


  return (
    <>
      <div
        className="text-3xl"
        style={{
          text: "center",
          paddingTop: "120px",
          paddingLeft: "140px",
        }}
      >
        <div className="flex flex-wrap justify-center">
          {courses.map((course) => (
            <CardCourse key={course.course_name} courseId={course.id} name={course.course_name} />
          ))}
        </div>
      </div>
      <EducatorSideBar />
    </>
  );
}

export default Attendance;
